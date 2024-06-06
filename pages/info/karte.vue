<template>
  <div class="prose prose-a:text-blau max-w-none">
    <h2 class="text-rot">Das Festareal</h2>
    <NuxtLink to="/map" class="inline-flex gap-1">
      <MapPinIcon class="h-6 w-6 text-blau" />
      Interaktive Karte
    </NuxtLink>
    <div class="flex flex-col xl:flex-row gap-2">
      <NuxtImg provider="cloudflare" :src="cloudflareUrl('659e6ace-c619-4d59-4efd-f5b52a4dc200')" loading="lazy" class="max-w-full w-[600px] rounded" />
      <NuxtImg provider="cloudflare" :src="cloudflareUrl('e9b37972-3cb2-46f7-118b-cd6c780eda00')" loading="lazy" class="max-w-full w-[600px] rounded" />
    </div>
    Als PDF <a href="/info/karte.pdf" target="_blank">herunterladen</a>
  </div>
</template>
<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Karte Festareal',
})

definePageMeta({
  alias: '/karte',
})
</script>
