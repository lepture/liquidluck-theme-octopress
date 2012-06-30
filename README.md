# Octopress Theme for Felix Felicis

This is the latest version of the default theme for Felix Felicis.


## Installation

### Install with liquidluck

```
$ liquidluck install octopress
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

Edit your settings.py, change your theme to:

```python
theme = 'octopress'
```


## Customize

You can customize your theme with ``theme_variables``.

+ Change Navigation (example)

```python
theme_variables = {
    'navigation': [
        ('Home', '/'),
        ('Life', '/life/'),
        ('Work', '/work/'),
    ],
}
```

+ Google Analytics

```python
theme_variables = {
    'analytics': 'UA-xxxx',
}
```

+ Disqus Comment Support

```python
theme_variables = {
    'disqus': 'your-disqus-shortname',
}
```
