<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <h2 v-if="!pending && error">🚫Verein nicht gefunden📯</h2>
    <div v-if="!pending && data">
      <h2 class="text-rot">{{ data.name }}</h2>
      <NuxtImg v-if="data.bildImgId" provider="cloudflare" :src="cloudflareUrl(data.bildImgId)" loading="lazy" class="max-w-full lg:w-1/2 lg:ml-8"></NuxtImg>
      <div class="text-blau font-bold" v-if="data.direktionName">Dirigent/in: {{ data.direktionName }}</div>
      <div v-if="data.rankings.length > 0">
        <h4>Ranglisten</h4>
        <ul>
          <li v-for="ranking in data.rankings" :key="ranking.id">
            <NuxtLink :to="`/rangliste/${ranking.id}`">{{ ranking.modulDescription }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div v-for="entry in data.timetableEntries" :key="entry.modul">
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
          <div v-else-if="isTambouren(entry.modul)">
            <span v-if="entry.programm.length > 1">Kompositionen</span>
            <span v-else>Komposition</span>
            <br />
            <div v-for="titel in entry.programm">
              <div>{{ titel.titelName }} ({{ titel.composer }})</div>
            </div>
          </div>
          <div v-else>
            <span v-if="entry.titel">"{{ entry.titel }}"</span>
            <span v-else>Programm</span>
            <ol class="my-0">
              <li v-for="titel in entry.programm" :key="titel.id">
                <div class="flex flex-row gap-2">
                  <div>{{ titel.titelName }}<span v-if="titel.pflichtStueck">*</span> ({{ titel.composer }})</div>
                  <div v-if="titel.infoModeration">
                    <div v-if="!isExpandedTitel(titel.id!)" @click="expandTitel(titel.id!)">
                      <PlusCircleIcon class="w-6 h-6 text-blau cursor-pointer" />
                    </div>
                    <div v-else @click="collapseTitel(titel.id!)">
                      <MinusCircleIcon class="w-6 h-6 text-blau cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div class="text-sm whitespace-pre-line mb-6" v-if="isExpandedTitel(titel.id!)">{{ titel.infoModeration }}</div>
              </li>
            </ol>
            <p class="text-xs" v-if="hasPflichtstueck(entry.modul)">* Pflichtstück</p>
            <div v-if="entry.description" class="prose">
              <div class="float-left pr-2">
                <div v-if="!isExpanded(entry.modul)" @click="expand(entry.modul)">
                  <PlusCircleIcon class="w-6 h-6 text-blau cursor-pointer" />
                </div>
                <div v-else @click="collapse(entry.modul)">
                  <MinusCircleIcon class="w-6 h-6 text-blau cursor-pointer" />
                </div>
              </div>
              <div :class="isExpanded(entry.modul) ? 'line-clamp-none' : 'line-clamp-4 lg:line-clamp-3 xl:line-clamp-2'" class="whitespace-pre-line">
                {{ entry.description }}
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

const { data, pending, error } = await useFetch<VereinPresentationDTO>(`/api/verein/${route.params.id}`)

useSeoMeta({
  title: () => data?.value?.name ?? 'Verein',
  description: () => `Wir freuen uns den Verein ${data?.value?.name} am ZKMF2024 begrüssen zu dürfen!`,
})

function isMarschmusik(modul: Modul): boolean {
  return modul === Modul.D
}

function isTambouren(modul: Modul): boolean {
  return modul === Modul.G
}

function hasPflichtstueck(modul: Modul): boolean {
  return modul === Modul.A || modul === Modul.B
}

const expanded = ref<Modul[]>([])
const expandedTitel = ref<number[]>([])

function expand(modul: Modul) {
  expanded.value.push(modul)
}

function collapse(modul: Modul) {
  expanded.value.splice(expanded.value.indexOf(modul), 1)
}

function isExpanded(modul: Modul): boolean {
  return expanded.value.includes(modul)
}

function expandTitel(titelId: number) {
  expandedTitel.value.push(titelId)
}

function collapseTitel(titelId: number) {
  expandedTitel.value.splice(expandedTitel.value.indexOf(titelId), 1)
}

function isExpandedTitel(titelId: number): boolean {
  return expandedTitel.value.includes(titelId)
}
</script>
