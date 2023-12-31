<template>
  <div class="grid h-dvh px-4 bg-blau place-content-center">
    <div class="text-center">
      <p class="text-3xl font-bold tracking-tight text-gelb sm:text-4xl">😵 da ist was schiefgelaufen...</p>

      <a @click="handleError" class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-rot rounded focus:outline-none focus:ring cursor-pointer">
        zur Homepage
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: Object
}>()

const handleError = () => clearError({ redirect: '/' })
</script>
