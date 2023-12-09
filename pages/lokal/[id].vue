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
          :src="cloudflareUrl(data.cloudflareId)"
          loading="lazy"
          class="max-w-full lg:w-1/2 lg:ml-8"
        ></NuxtImg>
        <ul>
          <li>
            <a :href="data.googleMapsAddress" target="_blank" class="inline-flex gap-0.5">
              {{ data.address }}
              <MapPinIcon class="h-6 w-6 text-blau" />
            </a>
          </li>
          <li>Kapazität Bühne: {{ data.capacity }}</li>
          <li>Module: {{ data.modules }}</li>
          <li v-if="data.einspiellokal">
            <div class="flex-col sm:flex-row inline-flex sm:gap-1">
              <span>Einspiellokal:</span>
              <a :href="data.einspiellokal.googleMapsAddress" target="_blank" class="inline-flex gap-0.5">
                {{ data.einspiellokal.name }}
                <MapPinIcon class="h-6 w-6 text-blau" />
              </a>
            </div>
          </li>
          <li v-if="data.instrumentendepot">
            <div class="flex-col sm:flex-row inline-flex sm:gap-1">
              <span>Instrumentendepot:</span>
              <a :href="data.instrumentendepot.googleMapsAddress" target="_blank" class="inline-flex gap-0.5">
                {{ data.instrumentendepot.name }}
                <MapPinIcon class="h-6 w-6 text-blau" />
              </a>
            </div>
          </li>
          <li v-if="data.juryfeedback">
            <div class="flex-col sm:flex-row inline-flex sm:gap-1">
              <span>Jury-Besprechnung:</span>
              <a :href="data.juryfeedback.googleMapsAddress" target="_blank" class="flex gap-0.5">
                {{ data.juryfeedback.name }}
                <MapPinIcon class="h-6 w-6 text-blau" />
              </a>
            </div>
          </li>
        </ul>

        <div v-if="data.kuulaId" class="clear-both">
          <h2>360°-Ansicht</h2>
          <iframe
            width="100%"
            height="640"
            frameborder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowfullscreen
            scrolling="no"
            :src="kuulaUrl(data.kuulaId)"
          ></iframe>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LocationDTO } from '~/types/rest'
import { MapPinIcon } from '@heroicons/vue/24/outline'

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
</script>
