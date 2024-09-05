<script setup lang="ts">
import { type RankingListDTO, RankingStatus } from '~/types/rest'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Rangliste',
})

const route = useRoute()

const { data, pending, error } = await useFetch<RankingListDTO>(`/api/ranking/${route.params.id}`)

function formatScore(score: number): string {
  return score.toFixed(2)
}
</script>

<template>
  <div class="prose">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <div class="text-rot font-bold text-xl">{{ data.description }}</div>
      <div v-if="data.status === RankingStatus.INTERMEDIATE" class="font-bold text-blau">Zwischenrangliste</div>
      <table class="table-auto w-full text-sm">
        <thead>
          <tr>
            <th class="text-right">Rang</th>
            <th class="text-left">Verein</th>
            <th class="text-right pr-2">Punktezahl</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in data.entries" class="border-b" :class="{ 'bg-gray-100': index % 2 === 0 }">
            <td class="text-right">
              {{ entry.rank }}
            </td>
            <td class="text-left">
              {{ entry.vereinsName }}
              <span v-if="entry.additionalInfo" class="text-xs"><br />{{ entry.additionalInfo }}</span>
            </td>
            <td class="text-right pr-2">{{ formatScore(entry.score) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
