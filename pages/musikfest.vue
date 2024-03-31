<template>
  <div class="prose xl:max-w-none prose-a:text-blau">
    <h2 class="text-blau">Musikfest</h2>

    <div class="2xl:w-1/2 2xl:float-right">
      <div class="aspect-w-16 aspect-h-9">
        <iframe src="https://www.youtube.com/embed/Zd1MOPE4M8Q"></iframe>
      </div>
    </div>

    <div class="max-w-prose">
      <p>
        Die beiden Zürcher Nachbargemeinden Urdorf und Schlieren freuen sich darauf, der Bevölkerung während 3 Tagen ein musikalisches Fest der Extraklasse zu
        bieten. Am Wochenende vom
        <span class="font-bold">21. – 23. Juni 2024</span> werden sich im Zürcher Limmattal rund 100 Musikvereine zum gemeinsamen Musizieren treffen. Am Fest
        dürfen sich 25'000 Zuschauerinnen und Zuschauer auf ein attraktives Musik- und Rahmenprogramm freuen. Betreut werden Musizierende und Festbesuchende von
        500 freiwilligen Helfern, die dafür sorgen, dass es an nichts fehlt.
      </p>
      <p>
        In den verschiedenen Spielstätten beider Gemeinden wird an 2 Wettspieltagen in einzelnen Modulen Konzert- und Unterhaltungsmusik gespielt, bewertet von
        namhaften Juroren. Für das leibliche Wohl sorgen vielfältige Verpflegungsmöglichkeiten. Der Anlass wird durch zahlreiche grössere und kleinere Sponsoren
        ermöglicht, die mit ihrem grosszügigen Beitrag ihre Wertschätzung für die Blasmusik in der Schweiz ausdrücken.
      </p>
    </div>
    <div>
      <h3 class="text-blau">Informationen</h3>
      <ul>
        <li>
          <NuxtLink to="/wettspiellokale">Wettspiellokale</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/parademusikstrecke">Parademusikstrecke</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/karte">Übersicht Festareal</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pflichtstuecke">Pflichtstücke</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/vereine">Angemeldete Vereine</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/jurymitglieder">Jurymitglieder</NuxtLink>
        </li>
        <li>
          <a href="/info/werbeflyer.pdf">Werbeflyer (PDF)</a>
        </li>
      </ul>
      <h4>Festreglemente</h4>
      <ul>
        <li>
          <a href="/reglement/festreglement.pdf">Festreglement für Kantonalmusikfeste (PDF)</a>
        </li>
        <li>
          <a href="/reglement/festreglement-parademusik.pdf">Festreglement für Parademusik (PDF)</a>
        </li>
        <li>
          <a href="/reglement/festreglement-perkussionsensembles.pdf">Festreglement für Perkussions-Ensembles (PDF)</a>
        </li>
        <li>
          <a href="/reglement/festreglement-tambouren.pdf">Festreglement für Tambouren (PDF)</a>
        </li>
      </ul>
      <h4>Anmeldung</h4>
      <p>
        Alle nötigen Angaben werden phasenweise über die
        <a href="https://vereine.zkmf2024.ch/" target="_blank">Vereins-Plattform</a>
        durch den Verein eingegeben.
      </p>

      <div class="relative overflow-x-auto">
        <table class="table-auto w-full text-sm text-left">
          <thead>
            <tr>
              <th class="w-2/12 px-6 py-3">Phase</th>
              <th class="w-8/12 px-6 py-3">Aufgaben, Angaben</th>
              <th class="w-2/12 px-6 py-3">Termin bis</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class="align-top px-6 py-3">Phase 1</td>
              <td class="align-top px-6 py-3">Anmeldung, Stammdaten und Module / Stärkeklasse / Besetzung</td>
              <td class="align-top px-6 py-3">30.06.2023</td>
            </tr>
            <tr class="bg-gray-50 border-b">
              <td class="align-top px-6 py-3">Phase 2</td>
              <td class="align-top px-6 py-3">Anmeldung Wettspielprogramme / Stückauswahl / Ablauf Programm im Detail</td>
              <td class="align-top px-6 py-3">16.09.2023</td>
            </tr>
            <tr class="bg-white border-b">
              <td class="align-top px-6 py-3">Phase 3</td>
              <td class="align-top px-6 py-3">Anzahlung 30%</td>
              <td class="align-top px-6 py-3">30.09.2023</td>
            </tr>
            <tr class="bg-gray-50 border-b">
              <td class="align-top px-6 py-3">Phase 4</td>
              <td class="align-top px-6 py-3">
                konkrete Besetzung / Anzahl Personen / Essen / Anreise / Infrastruktur<br />
                Einsenden der Partituren
              </td>
              <td class="align-top px-6 py-3">01.04.2024</td>
            </tr>
            <tr class="bg-gray-50 border-b">
              <td class="align-top px-6 py-3">Phase 4.1</td>
              <td class="align-top px-6 py-3">Aufstellung und benötigtes Material auf der Bühne</td>
              <td class="align-top px-6 py-3">30.04.2024</td>
            </tr>
            <tr class="bg-white border-b">
              <td class="align-top px-6 py-3">Phase 5</td>
              <td class="align-top px-6 py-3">Restzahlung Festkarten</td>
              <td class="align-top px-6 py-3">30.04.2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Musikfest',
  description: 'Am Wochenende vom 21.-23. Juni 2024 werden sich im Zürcher Limmattal rund 100 Musikvereine zum gemeinsamen Musizieren treffen.',
})
</script>
