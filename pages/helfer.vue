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
    </div>
    <p>
      Das Zürcher Kantonalmusikfest 2024 lebt dank dem Einsatz von rund 500 freiwilligen Helferinnen und Helfern. Werde Teil dieses tollen Grossanlasses und
      unterstütze das Organisationskomitee tatkräftig bei der Vorbereitung und Durchführung eines erinnerungsträchtigen Musikevents!
    </p>
    <p>
      Für das Festwochenende vom <b>21. Juni bis 23. Juni 2024</b> suchen wir Einzelhelfer und Vereine, die uns in der Festwirtschaft (Küche, Service, Buffet,
      Bar, etc.), beim musikalischen Wettbewerb in den Wettspiellokalen, an der Parademusikstrecke und auch bei der Einlasskontrolle zu den Instrumentendepots
      sowie mit weiteren Tätigkeiten unterstützen. Jeder Beitrag ist willkommen!
    </p>
    <p>
      Pro geleistete Stunde überweisen wir 5 Franken an Dich oder in Eure Vereinskasse. Jede Helferin und jeder Helfer erhält pro Schicht einen
      Verpflegungsgutschein.
    </p>
    <p>
      <NuxtLink to="https://portal.helfereinsatz.ch/zkmf2024">Melde Dich noch heute hier an</NuxtLink>
      <br />
      Stelle Deine Fähigkeiten und Kenntnisse in den Dienst eines grossen verbindenden Fests für Jung und Alt und hilf uns dabei, die Blasmusik von ihrer besten
      Seite zu präsentieren. Das Organisationskomitee freut sich auf die Zusammenarbeit mit Dir!
    </p>
    <p>
      Für Fragen kontaktiere uns bitte unter
      <a href="mailto:personal@zkmf2024.ch">personal@zkmf2024.ch</a>.
    </p>

    <h3 class="text-blau">Flyer</h3>
    Lade hier unseren
    <a href="/helfer/helfersuche-flyer.pdf" target="_blank">Flyer Helfersuche</a>
    herunter.
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
