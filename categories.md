---
layout: page
title:  Categories
permalink: /categories/
---

<div class="tag-list">
{% assign sorted_catetories = site.categories | sort %}
{% for cat in sorted_catetories %}
  <div class="tag-group">
    <!-- {% capture cat_name %}{{ cat | first }}{% endcapture %} -->
    <h2 class="tag-group-title" id="{{ cat_name | slugize }}">{{ cat_name }}</h2>
    {% for post in site.categories[cat_name] %}
    <article class="tag-item">
      <span class="tag-item-date">{{ post.date | date: "%Y/%m/%d" }}</span><a class="tag-item-title" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
