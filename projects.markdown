---
layout: page
title: Projects
permalink: /projects/
---

{: .h1}
Current Projects

<!-- Current Projects Section -->
<section class="container mx-auto px-4 py-4">
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {% assign sorted_projects = site.projects | sort: "date" | reverse %}
    {% for project in sorted_projects %}
      {% if project.status == "current" %}
        <div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
          <a href="{{ project.url | relative_url }}" class="block group h-full">
            <div class="h-48 w-full">
              <img src="{{ project.image | relative_url }}"
                  alt="{{ project.title }}"
                  class="w-full h-full object-cover" />
            </div>
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition">
                {{ project.title }}
              </h3>
            </div>
          </a> 
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>

{: .h1}
Past Projects

<!-- Past Projects Section -->
<section class="container mx-auto px-4 py-4">
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {% for project in sorted_projects %}
      {% if project.status == "past" %}
        <div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
          <a href="{{ project.url | relative_url }}" class="block group h-full">
            <div class="h-48 w-full">
              <img src="{{ project.image | relative_url }}"
                  alt="{{ project.title }}"
                  class="w-full h-full object-cover" />
            </div>
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition">
                {{ project.title }}
              </h3>
            </div>
          </a> 
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>
