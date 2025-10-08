---
layout: page
title: Members
permalink: /members/
---

{: .h1}
Members

<section class="container mx-auto px-4 py-12">
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {% for member in site.data.members %}
    <div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg flex flex-col items-center text-center p-6">
      <div class="flex justify-center">
        <img src="{{ member.image | relative_url }}"
             alt="{{ member.position }}"
             class="w-46 h-46 object-cover rounded-full border-2 border-gray-200 shadow mb-4 group-hover:scale-105 transition duration-300" />
      </div>
      <h2 class="text-xl font-semibold text-gray-800">
        {{ member.position }}
      </h2>
      <h3 class="text-lg font-semibold text-gray-800">
        {{ member.name }}
      </h3>
      <p class="mt-2 text-gray-600 text-sm">
        {{ member.bio }}
      </p>
    </div>
    {% endfor %}
  </div>
</section>
