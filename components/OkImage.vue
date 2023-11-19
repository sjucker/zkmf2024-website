<template>
  <div class="flex flex-col items-center flex-wrap w-full md:w-1/4 p-6 md:p-12">
    <NuxtImg v-bind:src="src" quality="90" class="w-5/6 md:w-full" v-bind:alt="name" />
    <p class="text-center">{{ name }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  src: String
  name: String
}>()
</script>
