---
layout: default
title: Home
---

# Free sports-betting picks

Yesterday’s play is below.  
[Upgrade](https://github.com/sponsors/Lenninator4437) for today’s pick.

{% for post in site.posts limit:2 %}
## Latest Free Pick
**{{ post.title }}** – {{ post.date | date: "%b %d" }}  
{{ post.content }}
{% endfor %}
