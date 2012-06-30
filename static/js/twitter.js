define(function(require, exports, module) {
    function Twitter(user) {
        this.user = user;
    }
    Twitter.prototype.show = function(options) {
        var self = this;
        options = options || {};
        var limit = options.limit || 10;

        var target = options.target || document.getElementById('tweets');
        if (target && target.length) target = target[0];

        var url = 'https://api.twitter.com/1/statuses/user_timeline/';
        url += self.user + '.json?trim_user=true&include_entities=1&count=';
        url += limit + '&callback=define';
        require.async(url, function(tweets) {
            if (options.callback) {
                options.callback(tweets);
            } else {
                showTwitterFeed(target, tweets, self.user);
            }
        });
    }

    var twitter = function(user) {
        return new Twitter(user);
    }

    // Helpers
    // ------------
    function prettyDate(time) {
        if (navigator.appName === 'Microsoft Internet Explorer') {
            // because IE date parsing isn't fun.
            return "<span>&infin;</span>";
        }
        var say = {
            just_now:    " now",
            minute_ago:  "1m",
            minutes_ago: "m",
            hour_ago:    "1h",
            hours_ago:   "h",
            yesterday:   "1d",
            days_ago:    "d",
            last_week:   "1w",
            weeks_ago:   "w"
        };

        var current_date = new Date(),
        current_date_time = current_date.getTime(),
        current_date_full = current_date_time + (1 * 60000),
        date = new Date(time),
        diff = ((current_date_full - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0) { return "<span>&infin;</span>"; }

        return day_diff === 0 && (
            diff < 60 && say.just_now ||
            diff < 120 && say.minute_ago ||
            diff < 3600 && Math.floor(diff / 60) + say.minutes_ago ||
            diff < 7200 && say.hour_ago ||
            diff < 86400 && Math.floor(diff / 3600) + say.hours_ago) ||
            day_diff === 1 && say.yesterday ||
            day_diff < 7 && day_diff + say.days_ago ||
            day_diff === 7 && say.last_week ||
            day_diff > 7 && Math.ceil(day_diff / 7) + say.weeks_ago;
    }

    function linkifyTweet(text, url) {
        text = text.replace(/\n/g, '<br>');
        text = text.replace(
            /(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi, '<a href="$1$2">$2</a>'
        ).replace(
            /(^|\W)@(\w+)/g, '$1<a href="https://twitter.com/$2">@$2</a>'
        ).replace(
            /(^|\W)#(\w+)/g,
            '$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>'
        );

        // Use twitter's api to replace t.co shortened urls with expanded ones.
        for (var u in url) {
            if(url[u].expanded_url != null){
                var shortUrl = new RegExp(url[u].url, 'g');
                text = text.replace(shortUrl, url[u].expanded_url);

                var shortUrl = new RegExp(">"+(url[u].url.replace(/https?:\/\//, '')), 'g');
                text = text.replace(shortUrl, ">"+url[u].display_url);
            }
        }
        return text
    }

    function showTwitterFeed(target, tweets, user) {
        var html = '';
        var base = 'https://twitter.com/' + user + '/status/';
        for (var i = 0; i < tweets.length; i++) {
            var t = tweets[i];
            html += '<li><p><a href="' + base + t.id_str+ '">';
            html += prettyDate(t.created_at);
            html += '</a>' + linkifyTweet(t.text, t.entities.urls) + '</p></li>';
        }
        target.innerHTML = html;
    }

    module.exports = twitter;
});
