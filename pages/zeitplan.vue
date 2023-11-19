<template>
  <div class="prose max-w-none">
    <h2 class="text-blau">Zeitplan</h2>
    <LoadingSpinner v-bind:loading="pending"></LoadingSpinner>
    <div v-if="!pending && data">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src="/search.svg" alt="Suchen=" class="w-4 h-4 text-gray-500" />
        </div>
        <input
          type="text"
          v-model="search"
          placeholder="Suchen"
          class="block w-full md:w-1/2 lg:w-1/3 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blau focus:border-blau"
        />
      </div>
      <div v-for="day in data.days">
        <h3>{{ day }}</h3>
        <div class="relative overflow-x-auto" v-for="location in locations(day)" v-if="filterRows(entries(day, location.id)).length > 0">
          <h4>
            📌
            <a :href="location.googleMapsAddress" target="_blank">{{ location.name }}</a>
          </h4>
          <table class="table-auto w-full text-sm text-left">
            <thead>
              <tr>
                <th class="w-4/12 md:w-2/12">Zeit</th>
                <th class="w-8/12 md:w-5/12">Verein</th>
                <th class="hidden md:table-cell md:w-5/12">Modul</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in filterRows(entries(day, location.id))" class="border-b" :class="{ 'bg-gray-50': index % 2 === 0 }">
                <td>{{ entry.time }}</td>
                <td>
                  <NuxtLink :to="`/verein/${entry.vereinId}`">{{ entry.vereinsname }}</NuxtLink>
                </td>
                <td class="hidden md:table-cell">{{ entry.competition }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LocationDTO, TimetableDayOverviewDTO, TimetableOverviewEntryDTO } from '~/types/rest'

export interface TimetableDayOverviewData {
  days: string[]
  entriesPerDayAndLocation: Map<string, Map<number, TimetableOverviewEntryDTO[]>>
  availableLocations: Map<number, LocationDTO>
}

useHead({
  title: 'Zeitplan',
  meta: [
    {
      name: 'description',
      content: 'Der Zeitplan für das 31. Zürcher Kantonalmusikfest - Urdorf+Schlieren.',
    },
  ],
})

const {
  public: { apiBase },
} = useRuntimeConfig()
const search = ref('')

const { data, pending } = await useFetch(`${apiBase}/public/timetable`, {
  lazy: true,
  transform: (values: TimetableDayOverviewDTO[]) => {
    const days = values.map(v => v.day)

    const entriesPerDayAndLocation = new Map<string, Map<number, TimetableOverviewEntryDTO[]>>()
    const availableLocations = new Map<number, LocationDTO>()
    for (let v of values) {
      entriesPerDayAndLocation.set(v.day, new Map<number, TimetableOverviewEntryDTO[]>())
      const perDay = entriesPerDayAndLocation.get(v.day)!
      for (let entry of v.entries) {
        const perLocation = perDay.get(entry.location.id)
        if (perLocation) {
          perLocation.push(entry)
        } else {
          perDay.set(entry.location.id, [entry])
        }
        availableLocations.set(entry.location.id, entry.location)
      }
    }

    const result: TimetableDayOverviewData = {
      days: days,
      entriesPerDayAndLocation: entriesPerDayAndLocation,
      availableLocations: availableLocations,
    }

    return result
  },
})

function locations(day: string): LocationDTO[] {
  return [...(data.value?.entriesPerDayAndLocation.get(day)?.keys() ?? [])]
    .map(id => data.value?.availableLocations.get(id)!)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}

function entries(day: string, locationId: number): TimetableOverviewEntryDTO[] {
  return data.value?.entriesPerDayAndLocation.get(day)?.get(locationId) ?? []
}

function filterRows(entries: TimetableOverviewEntryDTO[]): TimetableOverviewEntryDTO[] {
  if (search.value && search.value.length > 0) {
    return entries.filter(value => {
      const searchString = search.value.toLowerCase()
      return (
        value.vereinsname.toLowerCase().includes(searchString) ||
        value.modul.toLowerCase().includes(searchString) ||
        value.location.name.toLowerCase().includes(searchString)
      )
    })
  } else {
    return entries
  }
}
</script>
