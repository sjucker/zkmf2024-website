<template>
  <div class="prose max-w-none container">
    <h2 class="text-rot text-center">Das Festwochenende im Überblick</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <div class="relative overflow-x-auto" v-for="day in data">
        <table class="table-auto w-full text-sm">
          <thead>
            <tr>
              <th colspan="3" class="text-center text-lg">{{ day.day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in day.entries" class="border-b" :class="{ 'bg-gray-100': index % 2 === 0 }">
              <td class="align-top w-2/12 md:px-6 md:y-3 whitespace-nowrap" :class="{ 'font-bold': d.important }">
                {{ d.timeFrom }}<span v-if="d.timeTo"><br />{{ d.timeTo }}</span>
              </td>
              <td class="align-top w-6/12 md:px-6 md:y-3 whitespace-break-spaces" :class="{ 'font-bold': d.important }">{{ d.description }}</td>
              <td class="align-top w-4/12 md:px-6 md:y-3" :class="{ 'font-bold': d.important }">{{ d.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FestprogrammDayDTO } from '~/types/rest'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<FestprogrammDayDTO[]>(`${apiBase}/public/festprogramm`, {
  lazy: true,
  server: false,
})

useSeoMeta({
  title: 'Festprogramm',
})
</script>
