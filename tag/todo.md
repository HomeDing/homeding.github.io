---
title: Pages marked with a TODO tag
layout: "page.njk"
description: All pages that have open TODOs"
excerpt: >
  These pages contain information that is incomplete or point to further development topics.
---

{%- for post in collections.TODO | sort(false, true, 'data.title')  -%}
<p><a href="{{ post.url | url }}">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}


<h2> See also</h2>

<ul>
  <li><a href="/tag/index.htm">All Tags</a></li>
</ul>
