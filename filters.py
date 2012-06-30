#!/usr/bin/env python


def tag_url(tag):
    from liquidluck.writers.base import content_url
    from liquidluck.options import settings
    prefix = settings.site.get('prefix', '')
    return content_url(prefix, 'tag', tag, 'index.html')


def year_url(post):
    from liquidluck.writers.base import content_url
    from liquidluck.options import settings
    prefix = settings.site.get('prefix', '')
    return content_url(prefix, post.date.year, 'index.html')


def tagcloud_url(tag):
    from liquidluck.writers.base import content_url
    from liquidluck.options import settings
    prefix = settings.site.get('prefix', '')
    return '%s#%s' % (content_url(prefix, 'tag', 'index.html'), tag)


def snippet(content):
    import re
    pattern = re.compile(r'<p>(.*?)</p>')
    match = pattern.findall(content)
    return '<p>%s</p>' % match[0]


def clean_url(url):
    url = url.replace('http://', '').replace('https://', '')
    return url
