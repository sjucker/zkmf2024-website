<template>
  <div class="prose prose-a:text-blau max-w-none">
    <h2 class="text-rot">Das Festareal</h2>
    <NuxtLink to="/map" class="inline-flex gap-1">
      <MapPinIcon class="h-6 w-6 text-blau" />
      Interaktive Karte
    </NuxtLink>
    <div class="flex flex-col xl:flex-row gap-2">
      <NuxtImg provider="cloudflare" :src="cloudflareUrl('4e560ebf-56f7-4617-4974-b5a0defe6d00')" loading="lazy" class="max-w-full w-[600px] rounded" />
      <NuxtImg provider="cloudflare" :src="cloudflareUrl('7eb27f61-5b6c-4f11-2c77-8dd0e4e7c400')" loading="lazy" class="max-w-full w-[600px] rounded" />
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
