<template>
  <div class="flex flex-col items-center flex-wrap max-w-full sm:w-[300px] lg:w-[350px] p-3 md:p-6">
    <NuxtImg
      provider="cloudflare"
      :src="cloudflareUrl(src)"
      loading="lazy"
      :alt="name"
      :title="name"
      class="rounded-full shadow shadow-gray-500"
      densities="x1"
    />
    <div class="font-bold text-center">{{ name }}</div>
    <div class="text-sm text-center whitespace-pre">{{ modul }}</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  src: string
  name: string
  modul: string
}>()
</script>
