---
title: Pages marked with a Recipe tag
layout: "page.njk"
description: All pages explaining recipes using HomeDing Elements.
---

{% for post in collections.Recipe | sort(false, true, 'data.title')  %}

### [{{ post.data.title }}]({{ post.url | url }})

> {{ post.data.excerpt }}

{% endfor %}


## See also

* [All Tags](/tag/index.md)
