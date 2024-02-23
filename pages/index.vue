<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <h2 class="text-blau">31. Zürcher Kantonalmusikfest - Urdorf+Schlieren</h2>

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
    <p>
      <NuxtLink to="/vereine" class="inline-flex items-center gap-2">
        <MusicalNoteIcon class="w-6 h-6 text-blau" />
        Angemeldete Vereine
      </NuxtLink>
      <br />
      <NuxtLink to="/zeitplan" class="inline-flex items-center gap-2">
        <ClockIcon class="w-6 h-6 text-blau" />
        Zeitplan
      </NuxtLink>
      <br />
      <NuxtLink to="/karte" class="inline-flex items-center gap-2">
        <MapIcon class="w-6 h-6 text-blau" />
        Karte Festareal
      </NuxtLink>
    </p>
    <span class="clear-both"></span>
  </div>
</template>
<script setup lang="ts">
import { ClockIcon, MapIcon, MusicalNoteIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'homepage',
})

useSeoMeta({
  title: 'Homepage',
  description: 'Ein Feuerwerk der Blasmusik in all ihren Facetten – das ist das Züricher Kantonalmusikfest 2024 in Urdorf und Schlieren!',
})
</script>
