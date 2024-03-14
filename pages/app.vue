<template>
  <div class="prose">
    <h2 class="text-blau">Festprogramm-App</h2>
    <h3 class="text-rot">Die ZKMF2024-App kommt Ende Mai!</h3>
    <p>Die neusten Informationen, alle Spielzeiten auf einen Blick, eine interaktive Karte, Benachrichtigungen für deine Lieblingsvereine und vieles mehr!</p>
  </div>
  <div class="flex flex-col sm:flex-row gap-2 sm:gap-5 pt-5">
    <NuxtImg src="/app/google-play.png" quality="90" class="max-w-full opacity-20"></NuxtImg>
    <NuxtImg src="/app/app-store.png" quality="90" class="max-w-full opacity-20"></NuxtImg>
  </div>
  <div class="container flex flex-col sm:flex-row gap-10 pt-5">
    <NuxtImg src="/app/screen1.png" quality="90" class="w-full sm:w-1/3 lg:w-1/5 max-w-full"></NuxtImg>
    <NuxtImg src="/app/screen3.png" quality="90" class="w-full sm:w-1/3 lg:w-1/5 max-w-full"></NuxtImg>
    <NuxtImg src="/app/screen2.png" quality="90" class="w-full sm:w-1/3 lg:w-1/5 max-w-full"></NuxtImg>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'App',
  description: 'Die App für das ZKMF2024 für Android und iOS.',
})
</script>
