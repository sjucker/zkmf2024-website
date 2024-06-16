<template>
  <div class="prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau">
    <h2 class="text-rot">Helferinnen und Helfer</h2>
    <NuxtImg src="/helfer.jpg" quality="93" class="max-w-full lg:w-1/2 lg:ml-8 hidden lg:block" alt="Wir suchen Helfer" />
    <div class="flex flex-col gap-2">
      <div class="flex-1">
        <NuxtLink to="https://portal.helfereinsatz.ch/zkmf2024" class="w-full sm:w-fit">
          <button class="bg-blau text-white py-3 px-8 rounded-2xl w-full">Jetzt anmelden!</button>
        </NuxtLink>
      </div>

      <div class="flex flex-col sm:flex-row gap-2">
        <a href="/info/leitfaden-helferportal.pdf" target="_blank" class="flex-1">
          <button class="bg-gruen text-white py-3 px-8 rounded-2xl w-full">Leitfaden Helfer-Portal</button>
        </a>
        <NuxtLink to="/taetigkeitsbeschriebe" class="flex-1">
          <button class="bg-violett text-white py-3 px-8 rounded-2xl w-full">Tätigkeitsbeschriebe</button>
        </NuxtLink>
      </div>

      <div class="text-center border-2 border-blau rounded-2xl py-3 px-8">
        <span class="font-bold text-blau">Kontaktiere das Helferbüro für die letzten Einsätze.</span><br />
        <a href="tel:0794849845">079 484 98 45</a> / <a href="tel:0794816252">079 481 62 52</a>, <a href="mailto:personal@zkmf2024.ch">personal@zkmf2024.ch</a>
      </div>
    </div>
    <p>
      Am Festwochenende vom 21. Juni bis 23. Juni 2024 stehen rund <b>550 Helferinnen und Helfer</b> im Einsatz. Nur dank dieses grossen Engagements in
      insgesamt 830 Schichten in der Festwirtschaft, beim musikalischen Wettbewerb in den diversen Lokalen, beim Unterhaltungsprogramm und bei vielen weiteren
      Tätigkeiten kann das Fest überhaupt durchgeführt werden.
    </p>
    <p class="text-lg">
      <b>Vielen herzlichen Dank allen Helferinnen und Helfern</b>, die als Privatperson oder im Namen von über 80 Vereinen aus Urdorf, Schlieren und dem ganzen
      Kanton Zürich, ihren Beitrag zugunsten dieses Grossanlasses leisten. <b>Ihr seid super!</b>
    </p>
    <p>
      Nach wie vor sind wir auf der Suche nach Freiwilligen für die letzten freien Einsätze. Melde Dich direkt bei uns (079 484 98 45 / 079 481 62 52,
      <a href="mailto:personal@zkmf2024.ch">personal@zkmf2024.ch</a>) oder trage dich im
      <a href="https://portal.helfereinsatz.ch/zkmf2024/" target="_blank">Helferportal</a> ein. Pro geleistete Stunde überweisen wir 5 Franken an Dich oder in
      Eure Vereinskasse. Jede Helferin und jeder Helfer erhält pro Schicht einen Verpflegungsgutschein. Für Fragen kontaktiere uns bitte unter
      <a href="mailto:personal@zkmf2024.ch">personal@zkmf2024.ch</a>.
    </p>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Helfen',
  description: 'Das Zürcher Kantonalmusikfest 2024 lebt dank dem Einsatz von rund 500 freiwilligen Helferinnen und Helfern.',
})

definePageMeta({
  alias: '/helfen',
})
</script>
