<template>
  <div class="prose max-w-none prose-a:text-blau prose-img:rounded-xl">
    <h2 class="text-rot text-center">Das Unterhaltungsprogramm am ZKMF 2024</h2>
    <div class="flex flex-row flex-wrap gap-5 gap-y-0 lg:gap-20 items-center justify-center pb-5">
      <NuxtLink v-for="d in days" :key="d.id" :to="`/unterhaltungsprogramm/${d.id}`" class="font-bold" @click="select(d.id)">{{ d.description }}</NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
interface DayType {
  id: string
  description: string
}

const days: DayType[] = [
  {
    id: 'freitag-abend',
    description: 'Freitagabend mit Stubete Gäng',
  },
  {
    id: 'samstag-tag',
    description: 'Samstag tagsüber',
  },
  {
    id: 'samstag-abend',
    description: 'Samstagabend',
  },
  {
    id: 'sonntag',
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
</script>
