---
layout: page
title: Projects (not publicly on github)
---

<div class="projects">
  {% for project in site.projects %}
    <div class="project post">
      <h2 class="project-title post-title">

        {% if project.website %}
          <a href="{{ project.website }}">
            {{ project.title }}
          </a>
        {% else %}
          {{ project.title }}
        {% endif %}

      </h2>

      {{ project.content }}
    </div>
  {% endfor %}
</div>
