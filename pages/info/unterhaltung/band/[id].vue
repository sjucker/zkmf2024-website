<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="!pending && error">🚫Band nicht gefunden</h2>
    <div v-if="!pending && data">
      <div v-if="data.type === UnterhaltungEntryType.FREITAG_ABEND">
        <div class="bg-gruen bg-opacity-35 border-gruen border-2 p-4 text-left md:text-center rounded-xl">
          Tickets für den Freitagabend können ab <b>Samstag, 06.04.2024</b> gekauft werden.
        </div>
      </div>
      <h3 class="text-rot">{{ data.title }}</h3>
      <NuxtImg v-if="data.cloudflareId" provider="cloudflare" :src="cloudflareUrl(data.cloudflareId)" loading="lazy" class="max-w-full lg:w-1/2 lg:ml-8" />
      <div class="flex flex-col md:flex-row md:gap-8">
        <div>{{ getDay(data.type) }}</div>
        <div class="whitespace-nowrap">{{ data.start.substring(0, 5) }} Uhr</div>
        <div>
          <a :href="data.location.googleMapsAddress" target="_blank">{{ data.location.name }}</a>
        </div>
      </div>
      <p>{{ data.text }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UnterhaltungEntryType, type UnterhaltungsEntryDTO } from '~/types/rest'

const route = useRoute()
const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<UnterhaltungsEntryDTO>(`${apiBase}/public/unterhaltung/band/${route.params.id}`, {
  server: false,
})

function getDay(type: UnterhaltungEntryType): string {
  switch (type) {
    case UnterhaltungEntryType.FREITAG_ABEND:
      return 'Freitag Abend'
    case UnterhaltungEntryType.SAMSTAG_TAG:
      return 'Samstag tagsüber'
    case UnterhaltungEntryType.SAMSTAG_ABEND:
      return 'Samstagabend'
    case UnterhaltungEntryType.SONNTAG:
      return 'Sonntag'
  }
}
</script>
