---
layout: default
title: 九州大学ロボット技術研究会
---

<div
  class="relative w-screen h-40 p-4 text-white bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style="background-image: url('assets/images/haikei.jpg');"
>
  <!-- 黒半透明のオーバーレイ -->
  <div class="absolute inset-0 bg-black/75"></div>

  <!-- テキスト本体 -->
  <div class="relative z-10 text-[3rem] writing-horizontal" style="font-family: var(--font-lubri)">
    九州大学ロボット技術研究会
  </div>
</div>

{: .h1}
About Us

{: .main-text}
ようこそ, 九州大学ロボット技術研究会へ.
私たちは九大伊都キャンパスでものづくり活動を行っている団体です.
様々なコンテストでの優勝を目指して活動しています.

{: .h1}
What's New

<ul class="space-y-6">
    {% assign sorted_news = site.news | sort: "date" | reverse %}
    {% for post in sorted_news %}
    <li class="mx-8 sm:mx-24 max-w-800 border-l-4 border-pink-500 bg-gray-50 shadow p-4 rounded-md">
        <div class="text-sm text-gray-500 mb-1">{{ post.date | date: "%Y/%m/%d" }}</div>
        <div class="font-semibold text-gray-800">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </div>
    </li>
    {% endfor %}
</ul>

{: .h1}
Projects

<section class="container mx-auto px-4 py-4">
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% for project in sorted_projects %}
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
      <!-- 個別のサイトにリンクを貼ったバージョン<a href="{{ project.url | relative_url }}" class="block group h-full">
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
      </a> -->
    </div>
  {% endfor %}
</div>
</section>

{% include pink_button.html href="/projects/" label="プロジェクト一覧へ"%}

{: .h1}
Members

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

{% include pink_button.html href="/members/" label="メンバー一覧へ" %}

{: .h1}
Contact

<div class="flex flex-wrap justify-center">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium text-gray-700">

<div class="text-center sm:text-right sm:pr-4 font-bold">Email</div>

<div class="text-center sm:text-left sm:pl-4">
    <a href="mailto:quniv.robogi@gmail.com" class="hover:text-pink-600 transition">
        quniv.robogi@gmail.com
    </a>
</div>

<div class="text-center sm:text-right sm:pr-4 font-bold">X</div>

<div class="text-center sm:text-left sm:pl-4">
    <a href="https://x.com/quniv_rogiken" target="_blank" rel="noopener" class="hover:text-pink-600 transition">
    @quniv_rogiken
    </a>
</div>

</div>
</div>
