<template>
  <div>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data" class="prose max-w-none text-center prose-img:mx-auto">
      <h3>{{ title }}</h3>
      <div v-for="entry in data.entries" :key="entry.title">
        <div class="prose-lg">
          {{ entry.start.substring(0, 5) }} Uhr, {{ entry.title }} | <a :href="entry.location.googleMapsAddress" target="_blank">{{ entry.location.name }}</a>
        </div>
        <div v-if="entry.subtitle">{{ entry.subtitle }}</div>

        <div class="relative inline-block" v-if="entry.cloudflareId">
          <NuxtImg provider="cloudflare" :src="cloudflareUrl(entry.cloudflareId)" loading="lazy" class="max-w-full w-[600px] lg:w-[800px] object-scale-down" />
          <div v-if="entry.unterhaltungIdentifier" class="absolute bottom-12 right-4 bg-gelb p-2">mehr Infos</div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UnterhaltungEntryType, type UnterhaltungTypeDTO } from '~/types/rest'
import type { RouteParamValue } from 'vue-router'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const type = getType(route.params.id)
const title = getFullTitle(type)

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch(`${apiBase}/public/unterhaltung`, {
  // server: false,
  transform: (values: UnterhaltungTypeDTO[]) => {
    return values.find(dto => dto.type === type)
  },
})

useSeoMeta({
  title: () => getTitle(type),
})

function getType(id: string | RouteParamValue[]): UnterhaltungEntryType {
  switch (id) {
    case 'freitag-abend':
      return UnterhaltungEntryType.FREITAG_ABEND
    case 'samstag-tag':
      return UnterhaltungEntryType.SAMSTAG_TAG
    case 'samstag-abend':
      return UnterhaltungEntryType.SAMSTAG_ABEND
    case 'sonntag':
      return UnterhaltungEntryType.SONNTAG
    default:
      throw new Error('unknown type')
  }
}

function getTitle(type: UnterhaltungEntryType): string {
  switch (type) {
    case UnterhaltungEntryType.FREITAG_ABEND:
      return 'Freitagabend mit Stubete Gäng'
    case UnterhaltungEntryType.SAMSTAG_TAG:
      return 'Samstag tagsüber'
    case UnterhaltungEntryType.SAMSTAG_ABEND:
      return 'Samstagabend'
    case UnterhaltungEntryType.SONNTAG:
      return 'Sonntag'
  }
}

function getFullTitle(type: UnterhaltungEntryType): string {
  switch (type) {
    case UnterhaltungEntryType.FREITAG_ABEND:
      return 'Freitag, 21. Juni 2024'
    case UnterhaltungEntryType.SAMSTAG_TAG:
      return 'Samstag, 22. Juni 2024 – tagsüber (freier Eintritt)'
    case UnterhaltungEntryType.SAMSTAG_ABEND:
      return 'Samstag, 22. Juni 2024 – Abendprogramm (freier Eintritt)'
    case UnterhaltungEntryType.SONNTAG:
      return 'Sonntag, 22. Juni 2024 (freier Eintritt)'
  }
}
</script>
