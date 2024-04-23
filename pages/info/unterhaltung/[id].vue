<template>
  <div>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data" class="prose max-w-none text-center prose-img:mx-auto">
      <h3 class="text-left md:text-center">{{ title }}</h3>
      <div v-if="data.type === UnterhaltungEntryType.FREITAG_ABEND" class="max-w-full w-[600px] lg:w-[800px] mx-auto">
        <div class="bg-gruen bg-opacity-35 border-gruen border-2 p-4 text-left md:text-center rounded-xl">
          Tickets für den Freitagabend können
          <NuxtLink :to="TICKET_PORTAL" :external="true" target="_blank">hier gekauft</NuxtLink>
          werden.
        </div>
      </div>
      <div v-for="entry in data.entries" :key="entry.title">
        <hr class="my-2" />
        <div class="flex flex-col md:flex-row md:gap-4 justify-start md:justify-center">
          <div class="flex gap-4 justify-start md:justify-center">
            <div class="whitespace-nowrap">{{ entry.start.substring(0, 5) }} Uhr</div>
            <div class="font-bold">{{ entry.title }}</div>
          </div>
          <div class="text-left md:text-center">
            <a :href="entry.location.googleMapsAddress" target="_blank">{{ entry.location.name }}</a>
          </div>
        </div>
        <div class="flex flex-row gap-4 justify-start md:justify-center">
          <div v-if="entry.subtitle">{{ entry.subtitle }}</div>
          <div v-if="entry.vereinIdentifier">
            <NuxtLink :to="vereinUrl(entry.vereinIdentifier)">mehr Infos</NuxtLink>
          </div>
          <div v-if="!entry.cloudflareId && entry.unterhaltungIdentifier">
            <NuxtLink :to="unterhaltungBandUrl(entry.unterhaltungIdentifier)">mehr Infos</NuxtLink>
          </div>
        </div>

        <div class="relative inline-block" v-if="entry.cloudflareId && entry.unterhaltungIdentifier">
          <NuxtLink :to="unterhaltungBandUrl(entry.unterhaltungIdentifier)" class="no-underline">
            <NuxtImg
              provider="cloudflare"
              :src="cloudflareUrl(entry.cloudflareId)"
              loading="lazy"
              class="max-w-full w-[600px] lg:w-[800px] object-scale-down mt-4 mb-0"
              densities="x1"
            />
          </NuxtLink>
          <div class="absolute bottom-0 left-0 bg-gelb p-1 md:p-4 rounded-bl-lg rounded-tr-lg text-sm md:text-lg">
            <NuxtLink :to="unterhaltungBandUrl(entry.unterhaltungIdentifier)" class="no-underline">mehr Infos</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UnterhaltungEntryType, type UnterhaltungTypeDTO } from '~/types/rest'
import type { RouteParamValue } from 'vue-router'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { TICKET_PORTAL } from '~/types/constants'

const route = useRoute()
const type = getType(route.params.id)
const title = getFullTitle(type)

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch(`${apiBase}/public/unterhaltung`, {
  server: false,
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
      return 'Sonntag, 23. Juni 2024 (freier Eintritt)'
  }
}
</script>
