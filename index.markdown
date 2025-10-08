---
layout: default
title: 九州大学ロボット技術研究会
---

{% include large_title.html
    src="/assets/images/Makaizo.jpeg"
    label="九州大学ロボット技術研究会"
    copyright="「魔改造の夜」― NHK"
%}

{: .h1}
About Us

{: .main-text}
ようこそ、九州大学ロボット技術研究会へ。
私たちは、九州大学伊都キャンパスを拠点にものづくり活動を行っている団体です。
自らのアイデアを形にしたい方や、ものづくりコンテストでの優勝を目指したい方の参加を歓迎しています。

{: .h1}
[News](/news)

{% include news_list.html limit=3 %}
{% include pink_button.html href="/news/" label="More News" %}

{: .h1}
[Projects](/projects)

<section class="container mx-auto px-4 py-4">
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% for project in sorted_projects limit:2 %}
    {% assign index = forloop.index0 %}
    <div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg 
      {% if index > 2 %} block sm:block hidden {% endif %}">
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
  {% endfor %}
</div>
</section>

{% include pink_button.html href="/projects/" label="More Projects"%}

{: .h1}
[Members](/members)

<section class="container mx-auto px-4 py-4">
  <div class="flex flex-wrap justify-around gap-6">

<div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg flex flex-col flex-1 items-center text-center p-6">
    <div class="flex justify-center">
        <img src="{{ '/assets/images/tanizawa.jpg' | relative_url }}"
            alt="代表"
            class="w-32 h-32 object-cover rounded-full border-2 border-gray-200 shadow mb-4 group-hover:scale-105 transition duration-300" />
    </div>
    <h3 class="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition">
        代表
    </h3>
</div>

<div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg flex flex-col flex-1 items-center text-center p-6">
    <div class="flex justify-center">
    <img src="{{ '/assets/images/morita.jpg' | relative_url }}"
            alt="副代表"
            class="w-32 h-32 object-cover rounded-full border-2 border-gray-200 shadow mb-4 group-hover:scale-105 transition duration-300" />
    </div>
    <h3 class="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition">
    副代表
    </h3>
</div>

  </div>
</section>

{% include pink_button.html href="/members/" label="More Members" %}

{: .h1}
[Contact](/contact)

<div class="flex flex-wrap justify-center">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium text-gray-700">

<div class="text-center sm:text-right sm:pr-4 font-bold">Email</div>

<div class="text-center sm:text-left sm:pl-4">
    <div class="hover:text-pink-600 transition">
        quniv.robogi[at]gmail.com
    </div>
</div>

<div class="text-center sm:text-right sm:pr-4 font-bold">X</div>

<div class="text-center sm:text-left sm:pl-4">
    <a href="https://x.com/quniv_rogiken" target="_blank" rel="noopener" class="hover:text-pink-600 transition">
    @quniv_rogiken
    </a>
</div>

</div>
</div>
