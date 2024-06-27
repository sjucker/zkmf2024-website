<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right">
    <h2 class="text-rot">31. Zürcher Kantonalmusikfest - Urdorf+Schlieren</h2>

    <div class="max-w-none grid grid-cols-1 pb-4">
      <NuxtLink class="rounded-xl px-10 py-3 w-full no-underline font-bold prose-lg bg-violett text-center text-white" to="/ranglisten">Ranglisten</NuxtLink>
    </div>

    <div class="max-w-none grid grid-cols-1 pb-4">
      <NuxtLink class="rounded-xl px-10 py-3 w-full no-underline font-bold prose-lg bg-silber text-center text-blau" to="/app">
        ZKMF2024-App für iOS oder Android herunterladen
      </NuxtLink>
    </div>

    <div class="max-w-none gap-4 grid md:grid-cols-2">
      <NuxtLink
        v-for="(link, index) in links"
        :key="link.pageId"
        class="tile rounded-xl px-10 py-3 w-full text-white no-underline font-bold prose-lg"
        :class="bg(index)"
        :to="link.pageId"
      >
        <span>{{ link.title }}</span>
      </NuxtLink>
    </div>

    <h3 class="text-blau">Herzlich willkommen</h3>
    <NuxtImg src="/homepage.jpg" quality="90" class="max-w-full lg:w-1/2 lg:ml-8 hidden lg:block" />
    <p class="max-w-prose">
      Das 31. Kantonalmusikfest schreibt Geschichte: Vom 21.-23 Juni 2024 durften wir in Urdorf und Schlieren einen denkwürdigen Event organisieren. Rund 80
      Formationen mit über 3‘000 Musizierenden haben mitgemacht. Tausende Besucherinnen und Besucher freuten sich an den gehaltvollen und qualitativ
      hochstehenden Wettbewerbsbeiträgen.
    </p>
    <p class="max-w-prose">
      Das meist regnerische Wetter konnte der guten Stimmung nichts anhaben; überall waren fröhliche Gesichter zu sehen und die Begeisterung im Festzelt kannte
      angesichts des fetzigen Unterhaltungsprogramms fast keine Grenzen. Das freundschaftliche Zusammensein unter Musikbegeisterten und die starke Gemeinschaft
      waren stets zu spüren.
    </p>
    <p class="max-w-prose">
      Das OK ist glücklich über den friedlichen und gelungenen Verlauf des Fests. Kleinere Herausforderungen konnten Dank des enormen Einsatzes aller Helfenden
      und OK-Mitglieder rasch bewältigt werden. Es hat uns Freude gemacht, das ZKMF2024 für Euch zu organisieren! Herzlichen Dank an alle, die zum Gelingen
      beigetragen haben!
    </p>
    <span class="clear-both"></span>
  </div>
</template>
<script setup lang="ts">
import { HOME_ITEMS } from '~/types/types'

definePageMeta({
  layout: 'homepage',
})

useSeoMeta({
  title: 'Homepage',
  description: 'Ein Feuerwerk der Blasmusik in all ihren Facetten – das ist das Züricher Kantonalmusikfest 2024 in Urdorf und Schlieren!',
})

const links = HOME_ITEMS

function bg(index: number): string {
  switch (index % 4) {
    case 0:
      return 'bg-rot'
    case 1:
      return 'bg-gruen'
    case 2:
      return 'bg-gelb'
    case 3:
      return 'bg-blau'
    default:
      return ''
  }
}
</script>
<style>
.tile {
  &:nth-child(1) {
    background-image: url('/bg-1.png');
  }

  &:nth-child(2) {
    background-image: url('/bg-2.png');
  }

  &:nth-child(3) {
    background-image: url('/bg-3.png');
  }

  &:nth-child(4) {
    background-image: url('/bg-4.png');
  }

  background-repeat: no-repeat;
}
</style>
