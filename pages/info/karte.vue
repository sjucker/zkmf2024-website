<template>
  <div class="prose prose-a:text-blau max-w-none">
    <h2 class="text-rot">Das Festareal</h2>
    <NuxtLink to="/map" class="inline-flex gap-1">
      <MapPinIcon class="h-6 w-6 text-blau" />
      Interaktive Karte
    </NuxtLink>
    <div class="flex flex-col xl:flex-row gap-2">
      <NuxtImg provider="cloudflare" :src="cloudflareUrl('68b2d0d5-20a5-4148-fa7c-2f04feced200')" loading="lazy" class="max-w-full w-[600px] rounded" />
      <NuxtImg provider="cloudflare" :src="cloudflareUrl('b3a8bf80-1479-4847-6c93-e06e3430d700')" loading="lazy" class="max-w-full w-[600px] rounded" />
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
