<template>
  <button class="bg-white text-blau py-3 px-8 rounded-3xl">{{ text }}</button>
</template>
<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
