<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right">
    <h2 class="text-rot">31. Zürcher Kantonalmusikfest - Urdorf+Schlieren</h2>

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

    <p class="max-w-prose">Ein Feuerwerk der Blasmusik in all ihren Facetten – das ist das Zürcher Kantonalmusikfest 2024 in Urdorf und Schlieren!</p>
    <p class="max-w-prose">
      Vom 21. – 23. Juni treffen sich Musikbegeisterte im Rahmen eines attraktiven Programms zum gemeinsamen Festerlebnis mit einzigartigen Highlights,
      vielfältigen Begegnungen und gegenseitigem Austausch. Jugendmusikvereine messen sich mit den Erwachsenenvereinen; Unbeschwertheit und jugendliche Energie
      treffen auf gestandene, erfahrene Musizierende.
    </p>
    <p class="max-w-prose">
      Dank des modularen Aufbaus des Festreglements haben alle Vereine die Möglichkeit zur aktiven Teilnahme. Neu präsentieren die Teilnehmenden ein
      Pflichtstück in der Unterhaltungs- wie auch in der Konzertmusik, eingebettet in ein selbst gestaltetes Programm. Eine hochkarätige Jury verspricht eine
      Leistungsbeurteilung mit Mehrwert.
    </p>
    <p class="max-w-prose">Das Organisationskomitee freut sich auf eine grosse Teilnahme bei ausgelassener Feststimmung und heisst alle herzlich willkommen!</p>
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
