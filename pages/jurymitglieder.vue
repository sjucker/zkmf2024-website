<template>
  <div class="prose">
    <h2 class="text-rot">Jurymitglieder</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
  </div>
  <div v-if="!pending && data" class="flex flex-wrap flex-col md:flex-row container">
    <JudgeImage :src="judge.cloudflareId" :name="judge.name" :modul="judge.modul" v-for="judge in data" :key="judge.name"></JudgeImage>
  </div>
</template>

<script setup lang="ts">
import type { JudgePresentationDTO } from '~/types/rest'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Jurymitglieder',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<JudgePresentationDTO[]>(`${apiBase}/public/judge`, {
  lazy: true,
  server: false,
})
</script>
