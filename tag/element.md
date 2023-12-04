---
title: Pages marked with a Element tag
layout: "page.njk"
description: All pages related to HomeDing Elements.
---

{%- for post in collections.Element | sort(false, true, 'data.title')  -%}
<p><a href="{{ post.url | url }}">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}

<h2> See also</h2>

<ul>
  <li><a href="/tag/index.htm">All Tags</a></li>
</ul>
