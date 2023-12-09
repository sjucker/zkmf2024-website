<template>
  <div class="prose max-w-none">
    <h2 class="text-blau">Wettspiellokale</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <div v-for="location in data" :key="location.id">
        <h4>
          <NuxtLink :to="`/lokal/${location.identifier}`" class="inline-flex gap-1">
            {{ location.name }}
            <PhotoIcon class="w-6 h-6 text-blau" v-if="location.cloudflareId" />
          </NuxtLink>
        </h4>
        <ul>
          <li>
            <a :href="location.googleMapsAddress" target="_blank" class="inline-flex gap-0.5">
              {{ location.address }}
              <MapPinIcon class="h-6 w-6 text-blau" />
            </a>
          </li>
          <li>Module: {{ location.modules }}</li>
        </ul>
      </div>
      <p class="mt-10">
        <NuxtLink to="/karte" class="inline-flex gap-1">
          Karte Festareal
          <MapIcon class="w-6 h-6 text-blau" />
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LocationDTO } from '~/types/rest'
import { ExclamationTriangleIcon, MapIcon, MapPinIcon, PhotoIcon } from '@heroicons/vue/24/outline'

useHead({
  title: 'Wettspiellokale',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<LocationDTO[]>(`${apiBase}/public/location/wettspiel`, {
  lazy: true,
  server: false,
})
</script>
