---
title: Pages marked with a Sensor tag
layout: "page.njk"
description: All pages related to using sensors with HomeDing Elements.
---

{%- for post in collections.Sensor | sort(false, true, 'data.title')  -%}
<p><a href="{{ post.url | url }}">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}
