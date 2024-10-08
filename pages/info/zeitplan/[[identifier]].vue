<template>
  <div class="prose max-w-none">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <div class="flex justify-between">
        <div class="relative w-full md:w-1/2 lg:w-1/3">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon class="w-5 h-5 text-blau" />
          </div>
          <input
            type="text"
            v-model="search"
            placeholder="Suchen"
            class="block w-full py-4 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blau focus:border-blau"
          />
          <div @click="search = ''" class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            <XMarkIcon class="w-5 h-5 text-blau" />
          </div>
        </div>
        <div class="flex items-center" v-if="hasPastEntries">
          <input id="show-in-past" type="checkbox" v-model="showInPast" class="w-4 h-4" />
          <label for="show-in-past" class="ms-2 text-sm font-medium">Vergangene Einträge anzeigen</label>
        </div>
      </div>
      <div v-for="day in data.days" :key="day">
        <h3 v-if="show(day)">{{ day }}</h3>
        <template v-for="location in locations(day)" :key="location.id">
          <div class="relative overflow-x-auto" v-if="filterRows(entries(day, location.id)).length > 0">
            <h4>
              <a :href="location.googleMapsAddress" target="_blank" class="flex gap-0.5">
                {{ location.name }}
                <MapPinIcon class="h-6 w-6 text-blau" />
              </a>
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
                    <NuxtLink :to="vereinUrl(entry.vereinIdentifier)">{{ entry.vereinsname }}</NuxtLink>
                  </td>
                  <td class="hidden md:table-cell">{{ entry.competition }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LocationDTO, TimetableDayOverviewDTO, TimetableOverviewEntryDTO } from '~/types/rest'
import { ExclamationTriangleIcon, MagnifyingGlassIcon, MapPinIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export interface TimetableDayOverviewData {
  days: string[]
  dayInPast: Map<string, boolean>
  entriesPerDayAndLocation: Map<string, Map<number, TimetableOverviewEntryDTO[]>>
  availableLocations: Map<number, LocationDTO>
}

useSeoMeta({
  title: 'Zeitplan',
  description: 'Der Zeitplan für das 31. Zürcher Kantonalmusikfest - Urdorf+Schlieren.',
})

definePageMeta({
  alias: '/zeitplan',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const route = useRoute()

const storedSearchTerm = useSessionStorage('search-term', '')

const search = ref(storedSearchTerm.value)
watchEffect(() => {
  storedSearchTerm.value = search.value
})

const showInPast = ref(false)
const hasPastEntries = ref(false)

let request = `/api/timetable`
if (route.params.identifier) {
  request += `/${route.params.identifier}`
}

const { data, pending, error } = await useFetch(request, {
  transform: (values: TimetableDayOverviewDTO[]) => {
    const days = values.map(v => v.day)

    const entriesPerDayAndLocation = new Map<string, Map<number, TimetableOverviewEntryDTO[]>>()
    const availableLocations = new Map<number, LocationDTO>()
    const dayInPast = new Map<string, boolean>()
    let allInPast = true
    let anyInPast = false
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
        allInPast = allInPast && entry.inPast
        anyInPast = anyInPast || entry.inPast
      }
      dayInPast.set(v.day, v.inPast)
    }

    const result: TimetableDayOverviewData = {
      days: days,
      dayInPast: dayInPast,
      entriesPerDayAndLocation: entriesPerDayAndLocation,
      availableLocations: availableLocations,
    }

    if (allInPast) {
      showInPast.value = true
    }
    hasPastEntries.value = anyInPast

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

function show(day: string): boolean {
  return showInPast.value || (!data.value?.dayInPast.get(day) ?? false)
}

function filterRows(entries: TimetableOverviewEntryDTO[]): TimetableOverviewEntryDTO[] {
  if (search.value && search.value.length > 0) {
    return entries.filter(value => {
      const searchString = search.value.toLowerCase()
      return (
        (value.vereinsname.toLowerCase().includes(searchString) ||
          value.modul.toLowerCase().includes(searchString) ||
          value.location.name.toLowerCase().includes(searchString)) &&
        (showInPast.value || !value.inPast)
      )
    })
  } else {
    return entries.filter(value => showInPast.value || !value.inPast)
  }
}
</script>
