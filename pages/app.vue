<template>
  <div class="prose">
    <h2 class="text-blau">Festprogramm-App</h2>
    <div class="flex flex-col-reverse md:flex-row md:gap-8">
      <NuxtImg src="/app/screen1.png" quality="90" class="w-[240px] max-w-full float-left transition-all"></NuxtImg>
      <div>
        <h3 class="text-rot">Die ZKMF2024-App kommt Ende Mai!</h3>
        <p>
          Die neusten Informationen, alle Spielzeiten auf einen Blick, eine interaktive Karte, Benachrichtigungen für deine Lieblingsvereine und vieles mehr!
        </p>
        <div class="flex flex-row gap-3 flex-wrap">
          <NuxtImg src="/app/google-play.png" quality="90" class="m-0 w-[170px] max-w-full opacity-20 cursor-not-allowed object-scale-down"></NuxtImg>
          <NuxtImg src="/app/app-store.png" quality="90" class="m-0 w-[170px] max-w-full opacity-20 cursor-not-allowed object-scale-down"></NuxtImg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'App',
  description: 'Die App für das ZKMF2024 für Android und iOS.',
})
</script>
