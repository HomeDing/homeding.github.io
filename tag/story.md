---
title: Pages marked with a Story tag
layout: "page.njk"
description: All Story pages related to the HomeDing System.
---

{%- for post in collections.Story | sort(false, true, 'data.title')  -%}
<p><a href="<{{ post.url | url }}>">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}


<h2> See also</h2>

<ul>
  <li><a href="/tag/index.md">All Tags</a></li>
</ul>
