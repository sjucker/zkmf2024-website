<template>
  <div class="prose prose-a:text-blau max-w-none">
    <h2 class="text-rot">Das Festareal</h2>
    <NuxtLink to="/map" class="inline-flex gap-1">
      <MapPinIcon class="h-6 w-6 text-blau" />
      Interaktive Karte
    </NuxtLink>
    <div class="flex flex-col xl:flex-row gap-2">
      <nuxt-img src="/info/karte-schlieren.jpg" quality="95" class="max-w-full w-[600px] rounded" />
      <nuxt-img src="/info/karte-urdorf.jpg" quality="95" class="max-w-full w-[600px] rounded" />
    </div>
    Als PDF <a href="/info/karte.pdf" target="_blank">herunterladen</a>
  </div>
</template>
<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Karte Festareal',
})
</script>
