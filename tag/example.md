---
title: Pages marked with a Example tag
layout: "page.njk"
description: All pages for Examples using HomeDing Elements.
---

{%- for post in collections.Example | sort(false, true, 'data.title')  -%}
<p><a href="{{ post.url | url }}">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}

## See also

* [All Tags](/tag/index.md)
