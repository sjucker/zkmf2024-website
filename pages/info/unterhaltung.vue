<template>
  <div class="prose max-w-none prose-a:text-blau prose-img:rounded-xl">
    <h2 class="text-rot text-center">Das Unterhaltungsprogramm am ZKMF 2024</h2>
    <div class="flex flex-row flex-wrap gap-5 gap-y-0 lg:gap-20 items-center justify-center pb-8">
      <div v-for="d in days" :key="d.id">
        <NuxtLink v-if="!active(d.id)" :to="`/info/unterhaltung/${d.id}`" @click="select(d.id)">{{ d.description }}</NuxtLink>
        <div v-else class="font-bold text-rot">{{ d.description }}</div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { UnterhaltungEntryType } from '~/types/rest'

interface DayType {
  id: string
  type: UnterhaltungEntryType
  description: string
}

const days: DayType[] = [
  {
    id: 'freitag-abend',
    type: UnterhaltungEntryType.FREITAG_ABEND,
    description: 'Freitagabend mit Stubete Gäng',
  },
  {
    id: 'samstag-tag',
    type: UnterhaltungEntryType.SAMSTAG_TAG,
    description: 'Samstag tagsüber',
  },
  {
    id: 'samstag-abend',
    type: UnterhaltungEntryType.SAMSTAG_ABEND,
    description: 'Samstagabend',
  },
  {
    id: 'sonntag',
    type: UnterhaltungEntryType.SONNTAG,
    description: 'Sonntag',
  },
]

const selectedDay = ref(days[0].id)

function select(id: string): void {
  selectedDay.value = id
}

useSeoMeta({
  title: 'Unterhaltungsprogramm',
})
const route = useRoute()

function active(id: string) {
  return route.fullPath.includes(id)
}
</script>
