# Octopress Theme for Felix Felicis

This is the latest version of the default theme for Felix Felicis.


## Installation

Require Felix Felicis 3.0+


### Install with liquidluck

```
$ liquidluck install octopress
$ liquidluck install lepture/octopress
$ liquidluck install lepture/octopress -g
```

### Install by yourself

Git clone this repo, and place it in your blog:

```
your_blog/
    settings.py
    content/
    _themes/
        octopress/
```

### Install with git submodule

You can use git submodule for convience:

```
$ git submodule add git://github.com/lepture/liquidluck-theme-octopress.git _themes/octopress
```

## Configuration

Edit your settings.py, change your theme to ``octopress``.


## Customize

You can customize your theme with ``theme.vars``.

+ Change Navigation (example)

```python
theme = {
    'vars': {
        'navigation': [
            {'name': 'Home', 'link': '/'},
            {'name': 'Life', 'link': '/life/'},
            {'name': 'Work', 'link': '/work/'},
        ],
    }
}
```

+ Google Analytics

```python
theme = {
    'vars': {
        'analytics': 'UA-xxxx',
    }
}
```

+ Disqus Comment Support

```python
theme = {
    'vars': {
        'disqus': 'your-disqus-shortname',
    }
}
```
