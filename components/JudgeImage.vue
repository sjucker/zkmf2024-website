<template>
  <div class="flex flex-col items-center flex-wrap max-w-full md:w-[300px] p-3 md:p-6">
    <NuxtImg provider="cloudflare" :src="cloudflareUrl(src)" loading="lazy" :alt="name" :title="name" class="rounded-full shadow shadow-gray-500" />
    <div>{{ name }}</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  src: string
  name: string
}>()
</script>
