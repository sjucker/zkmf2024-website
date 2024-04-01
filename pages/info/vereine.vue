<template>
  <div class="prose prose-img:rounded-lg prose-a:text-blau max-w-none">
    <h2 class="text-rot">Die teilnehmenden Vereine am ZKMF 2024</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div v-for="verein in data" :key="verein.id">
        <NuxtLink :to="vereinUrl(verein.identifier)">{{ verein.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { VereinTeilnahmeDTO } from '~/types/rest'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Angemeldete Vereine',
  description: 'Diese Vereine nehmen am 31. Zürcher Kantonalmusikfest - Urdorf+Schlieren teil.',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<VereinTeilnahmeDTO[]>(`${apiBase}/public/verein/overview`, {
  lazy: true,
  server: false,
})
</script>
