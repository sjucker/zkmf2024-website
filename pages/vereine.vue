<template>
  <div class="prose prose-img:rounded-lg prose-a:text-blau">
    <h2 class="text-blau">Angemeldete Vereine</h2>
    <p class="prose-sm">Auf den Vereinsnamen klicken, um mehr Informationen über den Verein zu erhalten.</p>
    <LoadingSpinner v-bind:loading="pending"></LoadingSpinner>
    <div v-if="!pending && data">
      <div v-for="verein in data">
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
          <img v-if="verein.bildImgId" :src="getImgSrc(verein.bildImgId)" alt="Bild" />
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

const expanded = ref([] as VereinTeilnahmeDTO[])

const { data, pending } = await useFetch<VereinTeilnahmeDTO[]>(`${apiBase}/public/verein/overview`, {
  lazy: true,
})

function getImgSrc(id: number): String {
  return `${apiBase}/public/image/${id}`
}

function expand(verein: VereinTeilnahmeDTO): void {
  expanded.value = [...expanded.value, verein]
}

function isExpanded(verein: VereinTeilnahmeDTO): boolean {
  return expanded.value.includes(verein)
}
</script>
