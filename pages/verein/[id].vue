<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="!pending && error">🚫Verein nicht gefunden📯</h2>
    <div v-if="!pending && data">
      <h2 class="text-blau">{{ data.name }}</h2>
      <NuxtImg v-if="data.bildImgId" provider="cloudflare" :src="getImgSrc(data.bildImgId)" loading="lazy" class="max-w-full lg:w-1/2 lg:ml-8"></NuxtImg>
      <div v-for="entry in data.timetableEntries" :key="entry">
        <h4>{{ entry.competition }}</h4>
        <div class="flex gap-1">
          <ClockIcon class="w-6 h-6 text-blau" />
          {{ entry.dateTime }}
        </div>
        <div class="flex gap-1">
          <MapPinIcon class="w-6 h-6 text-blau" />
          <a :href="entry.location.googleMapsAddress" target="_blank">{{ entry.location.name }}</a>
        </div>
      </div>
      <p class="max-w-prose whitespace-pre-line" v-if="data.websiteText">{{ data.websiteText }}</p>
      <div v-if="data.facebook" class="flex gap-1">
        <HandThumbUpIcon class="w-6 h-6 text-blau" />
        <a :href="data.facebook" target="_blank">Facebook</a>
      </div>
      <div v-if="data.instagram" class="flex gap-1">
        <CameraIcon class="w-6 h-6 text-blau" />
        <a :href="data.instagram" target="_blank">Instagram</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { VereinPresentationDTO } from '~/types/rest'
import { CameraIcon, ClockIcon, HandThumbUpIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<VereinPresentationDTO>(`${apiBase}/public/verein/${route.params.id}`, {
  server: false,
})

function getImgSrc(id: string): String {
  return `${id}/public`
}

useHead({
  title: data?.value?.name ?? 'Verein',
})
</script>
