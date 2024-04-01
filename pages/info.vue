<template>
  <div class="bg-blau p-4 flex flex-col md:flex-row flex-wrap gap-4 rounded-lg mb-8 text-white">
    <NuxtLink v-for="link in links" :key="link.pageId" :to="link.pageId" :class="{ 'text-rot font-bold': active(link.pageId) }">{{ link.title }}</NuxtLink>
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
import { INFO_ITEMS } from '~/types/types'

const route = useRoute()

function active(id: string) {
  return route.fullPath.includes(id)
}

const links = INFO_ITEMS
</script>
