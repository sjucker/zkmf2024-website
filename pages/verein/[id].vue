<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="!pending && error">🚫Verein nicht gefunden📯</h2>
    <div v-if="!pending && data">
      <h2 class="text-blau">{{ data.name }}</h2>
      <img v-if="data.bildImgId" :src="getImgSrc(data.bildImgId)" class="max-w-full lg:w-1/2 lg:ml-8" alt="Bild" />
      <div v-for="entry in data.timetableEntries" :key="entry">
        <h4>{{ entry.competition }}</h4>
        <div>🕒 {{ entry.dateTime }}</div>
        <div>
          📌 <a :href="entry.location.googleMapsAddress" target="_blank">{{ entry.location.name }}</a>
        </div>
      </div>
      <p class="max-w-prose whitespace-pre-line" v-if="data.websiteText">{{ data.websiteText }}</p>
      <div v-if="data.facebook">👍 <a :href="data.facebook" target="_blank">Facebook</a></div>
      <div v-if="data.instagram">📷 <a :href="data.instagram" target="_blank">Instagram</a></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { VereinPresentationDTO } from '~/types/rest'

const route = useRoute()
const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<VereinPresentationDTO>(`${apiBase}/public/verein/${route.params.id}`, {
  server: false,
})

function getImgSrc(id: number): String {
  return `${apiBase}/public/image/${id}`
}

useHead({
  title: data?.value?.name ?? 'Verein',
})
</script>
