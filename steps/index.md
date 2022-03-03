---
title: Step-by-Step Guides
date: 2021-12-30
---

# {{title}}

These articles provide you some step-by-step instructions on some tasks on the device setup
and extending functionality.

<ul>
{%- for post in collections.steps -%}
<li><a href="{{ post.url | url }}">{{ post.data.title }}</a><br />
{{ post.data.excerpt }}
</li>
{%- endfor -%}
</ul>


