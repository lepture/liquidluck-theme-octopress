#!/usr/bin/env python

def snippet(content):
    import re
    pattern = re.compile(r'<p>(.*?)</p>')
    match = pattern.findall(content)
    return '<p>%s</p>' % match[0]


def clean_url(url):
    url = url.replace('http://', '').replace('https://', '')
    return url
