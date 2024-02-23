<template>
  <div class="prose prose-img:rounded-lg prose-a:text-blau">
    <h2 class="text-blau">Angemeldete Vereine</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <div v-for="verein in data" :key="verein.id">
        <NuxtLink :to="`/verein/${verein.identifier}`">{{ verein.name }}</NuxtLink>
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
