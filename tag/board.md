---
title: Pages marked with a Board tag
layout: "page.njk"
description: All pages related to the HomeDing System.
excerpt: >
  These pages contain information that relates to the boards with the ESP8266 or ESP32 processor.
---

{%- for post in collections.Board | sort(false, true, 'data.title')  -%}
<p><a href="{{ post.url | url }}">{{ post.data.title }}</a> -- {{ post.data.excerpt }}
{%- endfor -%}

<h2> See also</h2>

<ul>
  <li><a href="/tag/index.htm">All Tags</a></li>
</ul>
