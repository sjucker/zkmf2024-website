<template>
  <div class="prose max-w-none">
    <h2 class="text-blau">Sponsoren</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data">
      <div v-if="data.premium">
        <h3>Premium-Partner</h3>
        <div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          <a v-for="sponsor in data.premium" :key="sponsor.name" :href="sponsor.url" target="_blank" class="rounded-2xl border border-silber p-2">
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>

      <div v-if="data.delux">
        <h3>Deluxe-Partner</h3>
        <div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          <a v-for="sponsor in data.delux" :key="sponsor.name" :href="sponsor.url" target="_blank" class="rounded-2xl border border-silber p-2">
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>

      <div v-if="data.sponsor">
        <h3>Sponsor</h3>
        <div class="not-prose grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          <a v-for="sponsor in data.sponsor" :key="sponsor.name" :href="sponsor.url" target="_blank" class="rounded-2xl border border-silber p-2">
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SponsoringDTO } from '~/types/rest'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

useHead({
  title: 'Sponsoren',
  meta: [
    {
      name: 'description',
      content: 'Vielen Dank an alle unsere Sponsoren!',
    },
  ],
})

const {
  public: { apiBase },
} = useRuntimeConfig()
const search = ref('')

const { data, pending, error } = await useFetch<SponsoringDTO>(`${apiBase}/public/sponsoring`, {
  lazy: true,
  server: false,
})
</script>