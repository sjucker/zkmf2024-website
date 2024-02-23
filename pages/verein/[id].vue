<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="!pending && error">🚫Verein nicht gefunden📯</h2>
    <div v-if="!pending && data">
      <h2 class="text-blau">{{ data.name }}</h2>
      <NuxtImg v-if="data.bildImgId" provider="cloudflare" :src="cloudflareUrl(data.bildImgId)" loading="lazy" class="max-w-full lg:w-1/2 lg:ml-8"></NuxtImg>
      <div v-for="entry in data.timetableEntries" :key="entry">
        <h4>{{ entry.competition }}</h4>
        <div class="flex gap-2">
          <ClockIcon class="w-6 h-6 text-blau" />
          {{ entry.dateTime }}
        </div>
        <div class="flex gap-2">
          <MapPinIcon class="w-6 h-6 text-blau" />
          <a :href="entry.location.googleMapsAddress" target="_blank">{{ entry.location.name }}</a>
        </div>
        <div v-if="entry.programm.length > 0" class="flex gap-2">
          <MusicalNoteIcon class="w-6 h-6 text-blau shrink-0" />
          <div v-if="isMarschmusik(entry.modul)">
            Komposition<br />
            <div v-for="(titel, index) in entry.programm">
              {{ titel.titelName }} ({{ titel.composer }}) <span v-if="index < entry.programm.length - 1">oder</span>
            </div>
          </div>
          <div v-else>
            <span v-if="entry.titel">"{{ entry.titel }}"</span>
            <span v-else>Programm</span>
            <ol class="my-0">
              <li v-for="titel in entry.programm" :key="titel.id">{{ titel.titelName }} ({{ titel.composer }})</li>
            </ol>
            <div v-if="entry.description" class="prose">
              <div :class="isExpanded(entry.modul) ? 'line-clamp-none' : 'line-clamp-4 lg:line-clamp-3 xl:line-clamp-2'">
                {{ entry.description }}
              </div>
              <div v-if="!isExpanded(entry.modul)" @click="expand(entry.modul)">
                <PlusCircleIcon class="w-6 h-6 text-blau cursor-pointer" />
              </div>
              <div v-else @click="collapse(entry.modul)">
                <MinusCircleIcon class="w-6 h-6 text-blau cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p class="max-w-prose whitespace-pre-line" v-if="data.websiteText">{{ data.websiteText }}</p>
      <div v-if="data.homepage" class="flex gap-2">
        <GlobeAltIcon class="w-6 h-6 text-blau" />
        <a :href="data.homepage" target="_blank">Website</a>
      </div>
      <div v-if="data.facebook" class="flex gap-2">
        <HandThumbUpIcon class="w-6 h-6 text-blau" />
        <a :href="data.facebook" target="_blank">Facebook</a>
      </div>
      <div v-if="data.instagram" class="flex gap-2">
        <CameraIcon class="w-6 h-6 text-blau" />
        <a :href="data.instagram" target="_blank">Instagram</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Modul, type VereinPresentationDTO } from '~/types/rest'
import { CameraIcon, ClockIcon, GlobeAltIcon, HandThumbUpIcon, MapPinIcon, MinusCircleIcon, MusicalNoteIcon, PlusCircleIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<VereinPresentationDTO>(`${apiBase}/public/verein/${route.params.id}`, {
  server: false,
})

useSeoMeta({
  title: () => data?.value?.name ?? 'Verein',
  description: () => `Wir freuen uns den Verein ${data?.value?.name} am ZKMF2024 begrüssen zu dürfen!`,
})

function isMarschmusik(modul: Modul): boolean {
  return modul === Modul.D
}

const expanded = ref<Modul[]>([])

function expand(modul: Modul) {
  expanded.value.push(modul)
}

function collapse(modul: Modul) {
  expanded.value.splice(expanded.value.indexOf(modul), 1)
}

function isExpanded(modul: Modul): boolean {
  return expanded.value.includes(modul)
}
</script>
