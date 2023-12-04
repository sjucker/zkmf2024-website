<template>
  <div class="prose prose-img:rounded-lg prose-a:text-blau">
    <h2 class="text-blau">Angemeldete Vereine</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error">😵 Es ist ein Fehler aufgetreten...</div>
    <div v-if="!pending && data">
      <p class="prose-sm">Auf den Vereinsnamen klicken, um mehr Informationen über den Verein zu erhalten.</p>
      <div v-for="verein in data" :key="verein.id">
        <h4
          @click="expand(verein)"
          :class="{
            underline: !isExpanded(verein),
            'cursor-pointer': !isExpanded(verein),
          }"
        >
          {{ verein.name }}
        </h4>
        <div v-if="isExpanded(verein)">
          <p v-if="verein.homepage">
            <a :href="verein.homepage" target="_blank">Website</a>
          </p>
          <p class="whitespace-pre-line" v-if="verein.websiteText">
            {{ verein.websiteText }}
          </p>
          <NuxtImg v-if="verein.bildImgId" provider="cloudflare" :src="getImgSrc(verein.bildImgId)" loading="lazy"></NuxtImg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { VereinTeilnahmeDTO } from '~/types/rest'

useHead({
  title: 'Angemeldete Vereine',
  meta: [
    {
      name: 'description',
      content: 'Diese Vereine nehmen am 31. Zürcher Kantonalmusikfest - Urdorf+Schlieren teil.',
    },
  ],
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const expanded: VereinTeilnahmeDTO[] = reactive([])

const { data, pending, error } = await useFetch<VereinTeilnahmeDTO[]>(`${apiBase}/public/verein/overview`, {
  lazy: true,
  server: false,
})

function getImgSrc(id: string): String {
  return `${id}/public`
}

function expand(verein: VereinTeilnahmeDTO): void {
  expanded.push(verein)
}

function isExpanded(verein: VereinTeilnahmeDTO): boolean {
  return expanded.includes(verein)
}
</script>
