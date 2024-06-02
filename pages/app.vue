<template>
  <div class="prose max-w-none">
    <h2 class="text-rot">Festprogramm-App</h2>
    <div class="flex flex-col-reverse md:flex-row md:gap-8">
      <NuxtImg src="/app/screen1.png" quality="90" class="w-[240px] max-w-full float-left transition-all" densities="x1"></NuxtImg>
      <NuxtImg src="/app/screen3.png" quality="90" class="w-[240px] max-w-full float-left transition-all" densities="x1"></NuxtImg>
      <div>
        <h3 class="text-rot">Die ZKMF2024-App, dein hilfreicher Begleiter!</h3>
        <p>
          Die neusten Informationen, alle Spielzeiten auf einen Blick, eine interaktive Karte, Benachrichtigungen für deine Lieblingsvereine und vieles mehr!
        </p>
        <div class="flex flex-row gap-3 flex-wrap">
          <a href="https://play.google.com/store/apps/details?id=ch.mptechnology.zkmf2024" target="_blank">
            <NuxtImg src="/app/google-play.png" quality="90" class="m-0 w-[170px] max-w-full object-scale-down"></NuxtImg>
          </a>
          <a href="https://apps.apple.com/us/app/z%C3%BCrcher-kantonalmusikfest-2024/id6476229851" target="_blank">
            <NuxtImg src="/app/app-store.png" quality="90" class="m-0 w-[170px] max-w-full object-scale-down"></NuxtImg>
          </a>
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
