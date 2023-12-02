<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="error">🚫Wettspiellokal nicht gefunden📯</h2>
    <div v-if="!pending && !error">
      <template v-if="data">
        <h2 class="text-blau">{{ data.name }}</h2>
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
</script>
