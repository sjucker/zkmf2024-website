<template>
  <div class="prose prose-img:rounded-lg prose-a:text-blau max-w-none">
    <h2 class="text-rot">Die teilnehmenden Vereine am ZKMF 2024</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <div class="relative w-full md:w-1/2 lg:w-1/3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon class="w-5 h-5 text-blau" />
        </div>
        <input
          type="text"
          v-model="search"
          placeholder="Suchen"
          class="block w-full py-4 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blau focus:border-blau"
        />
        <div @click="search = ''" class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <XMarkIcon class="w-5 h-5 text-blau" />
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-4">
        <div v-for="verein in filteredEntries" :key="verein.id">
          <NuxtLink :to="vereinUrl(verein.identifier)">{{ verein.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { VereinTeilnahmeDTO } from '~/types/rest'
import { ExclamationTriangleIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Angemeldete Vereine',
  description: 'Diese Vereine nehmen am 31. Zürcher Kantonalmusikfest - Urdorf+Schlieren teil.',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const { data, pending, error } = await useFetch<VereinTeilnahmeDTO[]>(`${apiBase}/public/verein/overview`, {
  lazy: true,
  server: false,
})

const search = ref('')

const filteredEntries = ref<VereinTeilnahmeDTO[]>()
watch([data, search], () => {
  if (data) {
    if (search.value && search.value.length > 0) {
      filteredEntries.value = data.value!.filter(value => {
        return value.name.toLowerCase().includes(search.value.toLowerCase())
      })
    } else {
      filteredEntries.value = data.value!
    }
  }
})
</script>
