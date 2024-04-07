<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="error">🚫Wettspiellokal nicht gefunden📯</h2>
    <div v-if="!pending && !error">
      <template v-if="data">
        <h2 class="text-rot">{{ data.name }}</h2>
        <NuxtImg
          v-if="data.cloudflareId"
          provider="cloudflare"
          :src="cloudflareUrl(data.cloudflareId)"
          loading="lazy"
          class="max-w-full lg:w-1/2 lg:ml-8"
        ></NuxtImg>
        <ul>
          <li v-if="distanceToLocation">
            {{ distanceToLocation }}
          </li>
          <li>
            <a :href="data.googleMapsAddress" target="_blank" class="inline-flex gap-0.5">
              {{ data.address }}
              <MapPinIcon class="h-6 w-6 text-blau" />
            </a>
          </li>
          <li>Kapazität Bühne: {{ data.capacity }}</li>
          <li v-if="data.identifier === 'embrisaal-urdorf'">Masse Bühne: 10.8m x 4.6m</li>
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

        <div v-if="data.percussionEquipmentType">
          <h3>Perkussionsmaterial</h3>
          <ul>
            <li>
              <a :href="`/info/perkussion/${data.identifier}.pdf`" target="_blank" class="inline-flex gap-0.5"
                >Instrumentenliste
                <DocumentIcon class="h-6 w-6 text-blau" />
              </a>
            </li>
            <li>
              Kleinpercussionsinstrumente wie Sleight Bells, Tambourin ohne Fell, Finger Cymbals, Tambourin oder Triangel, die nicht auf der Liste aufgeführt
              sind, sowie sämtliches Schlägelmaterial, müssen von den teilnehmenden Vereinen selbst mitgebracht werden.
            </li>
            <li>Fragen zu den Instrumenten beantwortet Ihnen <a href="mailto:emil.bolli@murbach-musik.ch">Emil Bolli</a> gerne persönlich.</li>
          </ul>
        </div>

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
import { type LocationDTO, PercussionEquipmentType } from '~/types/rest'
import { DocumentIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<LocationDTO>(`${apiBase}/public/location/${route.params.id}`, {
  server: false,
})

useSeoMeta({
  title: () => data?.value?.name ?? 'Lokal',
  description: () => `${data?.value?.name}, ${data?.value?.address}`,
})

const distanceToLocationInMeters = ref<number>(0)

const { coords } = useGeolocation()
watch(coords, value => {
  if (data.value) {
    distanceToLocationInMeters.value = calculateDistanceInMeters(
      {
        longitude: value.longitude,
        latitude: value.latitude,
      },
      {
        longitude: data.value.longitude,
        latitude: data.value.latitude,
      }
    )
  }
})

const distanceToLocation = computed(() => {
  const distance = distanceToLocationInMeters.value
  if (distance > 0) {
    if (distance < 100) {
      return `weniger als 100 Meter entfernt`
    } else if (distance < 1000) {
      return `ca. ${Math.round(distance / 100) * 100} Meter entfernt`
    } else if (distance < 10000) {
      return `ca. ${Math.round(distance / 1000)} Kilometer entfernt`
    } else {
      return 'mehr als 10 Kilometer entfernt'
    }
  } else {
    return undefined
  }
})

const fullPercussionEquipment = computed(() => {
  return data.value?.percussionEquipmentType === PercussionEquipmentType.FULL
})
</script>
