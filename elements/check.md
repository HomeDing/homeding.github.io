
# CHECKS


## collections

{{ collections | keys }}

## Test excerptOf

{% excerptOf collections.Element, "map" %}


## Steps files with excerpts 

<ul>
{%- for post in collections.Steps -%}
<li><a href="{{ post.url | url }}">{{ post.data.title }}</a><br />
{{ post.data.excerpt }}
</li>
{%- endfor -%}
</ul>
