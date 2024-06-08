<script setup lang="ts">
import { type RankingListDTO, RankingStatus } from '~/types/rest'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Ranglisten',
  description: 'Alle Ranglisten des 31. Zürcher Kantonalmusikfest - Urdorf+Schlieren.',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<RankingListDTO[]>(`${apiBase}/public/ranking`, {
  lazy: true,
  server: false,
})
</script>

<template>
  <div class="prose">
    <h2 class="text-rot">Ranglisten</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <ul>
        <li v-for="ranking in data" :key="ranking.id">
          <NuxtLink :to="`/rangliste/${ranking.id}`">{{ ranking.description }}</NuxtLink>
          <div v-if="ranking.status === RankingStatus.INTERMEDIATE" class="text-sm">Zwischenrangliste</div>
        </li>
      </ul>
    </div>
  </div>
</template>
