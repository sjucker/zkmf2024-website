<template>
  <div class="prose prose-img:rounded-lg prose-a:text-blau">
    <h2 class="text-rot">Tickets</h2>
    <p class="pb-8">
      <NuxtLink :external="true" target="_blank" :to="TICKET_PORTAL">
        <button class="bg-gruen text-white py-3 px-8 rounded-3xl">Zum Ticketportal</button>
      </NuxtLink>
    </p>

    <h4 class="text-blau">Informationen Eintritt / Tickets Freitagabend</h4>
    <p>
      Grundsätzlich ist der Eintritt zu allen Veranstaltungen kostenlos. Aufgrund des beschränkt verfügbaren Platzes ist am
      <b>Freitagabend, 21.06.2024 der Eintritt ins Festzelt Urdorf nur mit einem gültigen Ticket möglich</b>. Dieses kann für CHF 30 (ZKB-Kunden CHF 24) im
      Ticketportal oder an der Abendkasse beim Eingang zum Festzelt Urdorf erworben werden (nur so lange Vorrat).
    </p>
    <p>
      <b>
        Für Personen, die über eine gültige Festkarte (Teilnehmer oder Begleitperson) verfügen, ist der Eintritt frei. Mit der Festkarte muss jedoch im
        Vorverkauf mittels eines Codes ein Gratis-Ticket gelöst werden</b
      >. Nur so kann sichergestellt werden, dass die feuerpolizeilich erlaubte Anzahl Personen im Festzelt eingehalten wird.<br />Den Code bekommst Du von
      Deinem Vereinspräsidenten bzw. Deiner Vereinspräsidentin. Die Festkarte allein berechtigt nicht zum Eintritt.
    </p>
  </div>
</template>

<script setup lang="ts">
import { TICKET_PORTAL } from '~/types/constants'

useSeoMeta({
  title: 'Tickets',
})
</script>
