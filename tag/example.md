---
title: Pages marked with a Example tag
layout: "page.njk"
description: All pages for Examples using HomeDing Elements.
---

{%- for post in collections.Example | sort(false, true, 'data.title')  -%}
<p><a href="{{ post.url | url }}">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}

<h2> See also</h2>

<ul>
  <li><a href="/tag/index.htm">All Tags</a></li>
</ul>
