<template>
  <div class="prose max-w-none">
    <h2 class="text-blau">Wettspiellokale</h2>
    <LoadingSpinner v-bind:loading="pending"></LoadingSpinner>
    <div v-if="!pending && data">
      <div v-for="location in data">
        <h4>{{ location.name }}</h4>
        <ul>
          <li>
            <a :href="location.googleMapsAddress" target="_blank">{{ location.address }}</a>
          </li>
          <li>Kapazität Bühne: {{ location.capacity }}</li>
          <li>Module: {{ location.modules }}</li>
          <li v-if="location.einspiellokal">
            Einspiellokal:
            <a :href="location.einspiellokal.googleMapsAddress" target="_blank">{{ location.einspiellokal.name }}</a>
          </li>
          <li v-if="location.instrumentendepot">
            Instrumentendepot:
            <a :href="location.instrumentendepot.googleMapsAddress" target="_blank">{{ location.instrumentendepot.name }}</a>
          </li>
          <li v-if="location.juryfeedback">
            Jury-Besprechnung:
            <a :href="location.juryfeedback.googleMapsAddress" target="_blank">{{ location.juryfeedback.name }}</a>
          </li>
        </ul>
      </div>
      <p>
        <NuxtLink to="/karte">Karte Festareal</NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LocationDTO } from '~/types/rest'

useHead({
  title: 'Wettspiellokale',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending } = await useFetch<LocationDTO[]>(`${apiBase}/public/location/wettspiel`, {
  lazy: true,
})
</script>
