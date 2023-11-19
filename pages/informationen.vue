<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <h2 class="text-blau">Informationen</h2>
    <NuxtImg src="/informationen.jpg" quality="92" class="max-w-full lg:w-1/2 lg:ml-8 hidden lg:block" alt="Seite Informationen" />
    <ul>
      <li>
        <NuxtLink to="/karte">Karte Festareal</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/wettspiellokale">Wettspiellokalen</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Informationen',
  meta: [
    {
      name: 'description',
      content: 'Hier finden Sie praktische Informationen zum Musikfest - Festführer, Festareal, Anreise, Verpflegung etc.',
    },
  ],
})
</script>
