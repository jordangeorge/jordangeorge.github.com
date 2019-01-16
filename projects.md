---
layout: page
title: Projects
---

<div class="projects">
  {% for project in site.projects %}
  <div class="project post">
    <h2 class="project-title post-title">
      <a href="{{ project.website }}">
        {{ project.title }}
      </a>
    </h2>

    {{ project.content }}

  </div>
  {% endfor %}
</div>
