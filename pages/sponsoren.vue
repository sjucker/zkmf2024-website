<template>
  <div class="prose max-w-none">
    <h2 class="text-blau">Sponsoren</h2>
    <LoadingSpinner :loading="pending"></LoadingSpinner>
    <div v-if="!pending && error" class="inline-flex gap-2 items-center">
      <ExclamationTriangleIcon class="h-10 w-10 text-rot" />
      Es ist ein Fehler aufgetreten...
    </div>
    <div v-if="!pending && data" class="relative">
      <a href="/sponsoring/sponsoring-flyer.pdf" target="_blank">
        <button class="hidden md:inline-block absolute top-0 right-0 bg-blau text-white py-3 px-8 rounded-2xl">Sponsoring Flyer</button>
      </a>
      <div v-if="data.hauptsponsor">
        <h3>Hauptsponsorin</h3>
        <div class="not-prose grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          <a
            v-for="sponsor in data.hauptsponsor"
            :key="sponsor.name"
            :href="sponsor.url"
            target="_blank"
            class="rounded-2xl border border-silber p-2 flex justify-center"
          >
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>

      <div v-if="data.premium">
        <h3>Premium-Partner</h3>
        <div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          <a
            v-for="sponsor in data.premium"
            :key="sponsor.name"
            :href="sponsor.url"
            target="_blank"
            class="rounded-2xl border border-silber p-2 flex justify-center"
          >
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>

      <div v-if="data.deluxe">
        <h3>Deluxe-Partner</h3>
        <div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          <a
            v-for="sponsor in data.deluxe"
            :key="sponsor.name"
            :href="sponsor.url"
            target="_blank"
            class="rounded-2xl border border-silber p-2 flex justify-center"
          >
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>

      <div v-if="data.sponsor">
        <h3>Sponsor</h3>
        <div class="not-prose grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          <a
            v-for="sponsor in data.sponsor"
            :key="sponsor.name"
            :href="sponsor.url"
            target="_blank"
            class="rounded-2xl border border-silber p-2 flex justify-center"
          >
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>

      <div v-if="data.musikfan">
        <h3>Musikfan</h3>
        <div class="not-prose grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
          <a
            v-for="sponsor in data.musikfan"
            :key="sponsor.name"
            :href="sponsor.url"
            target="_blank"
            class="rounded-2xl border border-silber p-2 flex justify-center"
          >
            <NuxtImg provider="cloudflare" :src="cloudflareUrl(sponsor.cloudflareId)" loading="lazy" :alt="sponsor.name" :title="sponsor.name" />
          </a>
        </div>
      </div>

      <div v-if="data.goenner">
        <h3>Gönner</h3>
        <div class="columns-1 md:columns-2 lg:columns-3">
          <div v-for="goenner in data.goenner">{{ goenner.name }}</div>
        </div>
      </div>
    </div>

    <hr />

    <div class="prose">
      <h2 class="text-blau">Sponsoring</h2>
      <p>
        Unseren Sponsoren bieten wir eine ideale Plattform, ihre Produkte und Dienstleistungen einem breiten Publikum in einer pulsierenden und aufstrebenden
        Region zu präsentieren. Ihr Beitrag wird sich auszahlen, allen Besucherinnen und Besuchern in Erinnerung bleiben und dem Fest einen unverwechselbaren
        Charakter verleihen. Gemeinsam profitieren alle!
      </p>

      <h3 class="text-blau">Flyer</h3>
      <p>
        Laden Sie hier unseren
        <a href="/sponsoring/sponsoring-flyer.pdf" target="_blank">Sponsoring Flyer</a>
        herunter.
      </p>

      <h3 class="text-blau">Kontakt</h3>
      <p>
        Bei Interesse melden Sie sich bitte
        <a href="mailto:sponsoring@zkmf2024.ch">hier</a>.
      </p>
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
