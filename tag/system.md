---
title: Pages marked with a System tag
layout: "page.njk"
description: All pages related to the HomeDing System.
---

{%- for post in collections.System | sort(false, true, 'data.title')  -%}
<p><a href="{{ post.url | url }}">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}

## See also

* [All Tags](/tag/index.md)
