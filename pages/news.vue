<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <h2 class="text-blau">News</h2>
    <nuxt-img src="/frontpage-2.jpg" quality="94" class="max-w-full lg:w-1/2 lg:ml-8 hidden lg:block" alt="News" />
    <p>Bleib am Ball und informiere Dich über die Fortschritte in der Organisation des ZKMF2024.</p>
    <div>
      <NuxtLink to="/newsletter">
        <button class="bg-blau text-white py-3 px-8 rounded-2xl">Newsletter abonnieren</button>
      </NuxtLink>
    </div>
    <h3 class="text-blau">Newsletter</h3>
    <ul>
      <li>
        <a href="/newsletter/14-dezember2023.pdf" target="_blank">Nr. 14 – Dezember 2023</a>
      </li>
      <li>
        <a href="/newsletter/13-oktober2023.pdf" target="_blank">Nr. 13 – Oktober 2023</a>
      </li>
      <li>
        <a href="/newsletter/12-august2023.pdf" target="_blank">Nr. 12 – August 2023</a>
      </li>
      <li>
        <a href="/newsletter/11-juni2023-cvb.pdf" target="_blank">Nr. 11 – Juni 2023</a>
      </li>
      <li>
        <a href="/newsletter/10-juni2023.pdf" target="_blank">Nr. 10 – Juni 2023</a>
      </li>
      <li>
        <a href="/newsletter/9-april2023.pdf" target="_blank">Nr. 9 – April 2023</a>
      </li>
      <li>
        <a href="/newsletter/8-november2022.pdf" target="_blank">Nr. 8 – November 2022</a>
      </li>
      <li>
        <a href="/newsletter/7-september2022.pdf" target="_blank">Nr. 7 – September 2022</a>
      </li>
      <li>
        <a href="/newsletter/6-juli2022.pdf" target="_blank">Nr. 6 – Juli 2022</a>
      </li>
      <li>
        <a href="/newsletter/5-mai2022.pdf" target="_blank">Nr. 5 – Mai 2022</a>
      </li>
      <li>
        <a href="/newsletter/4-maerz2022.pdf" target="_blank">Nr. 4 – März 2022</a>
      </li>
      <li>
        <a href="/newsletter/3-dezember2021.pdf" target="_blank">Nr. 3 – Dezember 2021</a>
      </li>
      <li>
        <a href="/newsletter/2-november2021.pdf" target="_blank">Nr. 2 – November 2021</a>
      </li>
      <li>
        <a href="/newsletter/1-juli2021.pdf" target="_blank">Nr. 1 – Juli 2021</a>
      </li>
    </ul>
    <h3 class="text-blau">Presse</h3>
    <ul>
      <li><a href="/presse/urdorf-aktuell-november-2023.pdf" target="_blank">Urdorf Aktuell (November 2023)</a></li>
      <li><a href="/presse/das-limmattal-ausgabe-2024.pdf" target="_blank">Das Limmattal (Ausgabe 2024)</a></li>
      <li><a href="/presse/urdorf-aktuell-februar-2024.pdf" target="_blank">Urdorf Aktuell (Februar 2024)</a></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'News',
  description: 'Bleib am Ball und informiere Dich über die Fortschritte in der Organisation des 31. Zürcher Kantonalmusikfest Urdorf+Schlieren.',
})
</script>
