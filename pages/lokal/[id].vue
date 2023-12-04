<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="error">🚫Wettspiellokal nicht gefunden📯</h2>
    <div v-if="!pending && !error">
      <template v-if="data">
        <h2 class="text-blau">{{ data.name }}</h2>
        <NuxtImg
          v-if="data.cloudflareId"
          provider="cloudflare"
          :src="getImgSrc(data.cloudflareId)"
          loading="lazy"
          class="max-w-full lg:w-1/2 lg:ml-8"
        ></NuxtImg>
        <ul>
          <li>
            <a :href="data.googleMapsAddress" target="_blank">{{ data.address }}</a>
          </li>
          <li>Kapazität Bühne: {{ data.capacity }}</li>
          <li>Module: {{ data.modules }}</li>
          <li v-if="data.einspiellokal">
            Einspiellokal:
            <a :href="data.einspiellokal.googleMapsAddress" target="_blank">{{ data.einspiellokal.name }}</a>
          </li>
          <li v-if="data.instrumentendepot">
            Instrumentendepot:
            <a :href="data.instrumentendepot.googleMapsAddress" target="_blank">{{ data.instrumentendepot.name }}</a>
          </li>
          <li v-if="data.juryfeedback">
            Jury-Besprechnung:
            <a :href="data.juryfeedback.googleMapsAddress" target="_blank">{{ data.juryfeedback.name }}</a>
          </li>
        </ul>

        <div v-if="data.kuulaId" class="clear-both">
          <h2>360-Grad-Ansicht</h2>
          <iframe
            width="100%"
            height="640"
            frameborder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowfullscreen
            scrolling="no"
            :src="getKuulaSrc(data.kuulaId)"
          ></iframe>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LocationDTO } from '~/types/rest'

const route = useRoute()
const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<LocationDTO>(`${apiBase}/public/location/${route.params.id}`, {
  server: false,
})

useHead({
  title: data?.value?.name ?? 'Lokal',
})

function getImgSrc(id: string): string {
  return `${id}/public`
}

function getKuulaSrc(id: string): string {
  return `https://kuula.co/share/${id}?logo=1&info=1&fs=0&vr=0&zoom=1&sd=1&thumbs=1&inst=de&gyro=0`
}
</script>
