<template>
  <div class="prose max-w-none container">
    <h2 class="text-rot text-center">Das Festwochenende im Überblick</h2>
    <div class="relative overflow-x-auto" v-for="day in programm">
      <table class="table-auto w-full text-sm">
        <thead>
          <tr>
            <th colspan="3" class="text-center text-lg">{{ day.day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in day.events" class="border-b" :class="{ 'bg-gray-100': index % 2 === 0 }">
            <td class="align-top w-2/12 md:px-6 md:y-3 whitespace-nowrap" :class="{ 'font-bold': data.important }">
              {{ data.time }}<span v-if="data.time2"><br />{{ data.time2 }}</span>
            </td>
            <td class="align-top w-6/12 md:px-6 md:y-3 whitespace-break-spaces" :class="{ 'font-bold': data.important }">{{ data.event }}</td>
            <td class="align-top w-4/12 md:px-6 md:y-3" :class="{ 'font-bold': data.important }">{{ data.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
export interface EventData {
  time: string
  time2?: string
  event: string
  location: string
  important: boolean
}

export interface ProgrammData {
  day: string
  events: EventData[]
}

const programmFriday: EventData[] = [
  {
    time: '17.30 Uhr',
    event: 'Öffnung Festzelt, Festwirtschaft und Food Meile',
    location: 'Festgelände und Festzelt Urdorf',
    important: false,
  },
  {
    time: '17.45 Uhr',
    event: 'Warm-up mit Rosalia Golden Hits',
    location: 'Festzelt Urdorf',
    important: true,
  },
  {
    time: '19.00 Uhr',
    event: 'Festeröffnung ZKMF 2024',
    location: 'Festzelt Urdorf',
    important: false,
  },
  {
    time: '19.30 Uhr',
    event: 'Galakonzert mit der SWISS Band',
    location: 'Festzelt Urdorf',
    important: true,
  },
  {
    time: '21.00 Uhr',
    event: 'Feiern mit der Stubete Gäng',
    location: 'Festzelt Urdorf',
    important: true,
  },
  {
    time: '22.40 Uhr',
    event: 'Ausklang  mit DJ Outside',
    location: 'Festzelt Urdorf',
    important: false,
  },
  {
    time: 'bis 02.00 Uhr',
    event: 'Barbetrieb',
    location: 'Festzelt Urdorf',
    important: false,
  },
]

const programmSaturday: EventData[] = [
  {
    time: '08.00 Uhr',
    event: 'Öffnung Festgelände',
    location: 'Urdorf und Schlieren',
    important: false,
  },
  {
    time: '09.00 Uhr',
    event: 'Jugend und Blasmusik\nmit Instrumenten­vorführung und Konzert',
    location: 'Singsaal Moosmatt Urdorf',
    important: false,
  },
  {
    time: '09.00 Uhr',
    event: 'Start Wettspiele ZKMF 2024',
    location: 'Urdorf und Schlieren',
    important: true,
  },
  {
    time: '10.50 –',
    time2: '16.00 Uhr',
    event: 'Unterhaltungskonzerte\nmit Holz, Blech und Schwyzerörgeli',
    location: 'Festzelt Schlieren',
    important: false,
  },
  {
    time: '12.00 Uhr',
    event: 'Zmittag und Musig mit Brässkalation',
    location: 'Festzelt Urdorf',
    important: false,
  },
  {
    time: '13.30 Uhr',
    event: 'Start Parademusik',
    location: 'Im Moos Urdorf',
    important: true,
  },
  {
    time: '17.30 Uhr',
    event: 'Rangverkündigung\nmit Musik des Ad-hoc-Orchesters ZKMF 2024',
    location: 'Zentrumshalle Urdorf',
    important: false,
  },
  {
    time: '19.30 Uhr',
    event: 'Wettspiel Höchstklasse',
    location: 'Zentrumshalle Urdorf',
    important: true,
  },
  {
    time: '20.30 Uhr',
    event: 'Rocken mit dem Saint City Orchestra',
    location: 'Festzelt Urdorf',
    important: true,
  },
  {
    time: '22.30 Uhr',
    event: 'Feiern mit der Compass Party Band',
    location: 'Festzelt Urdorf',
    important: true,
  },
  {
    time: '01.00 Uhr',
    event: 'Ausklang  mit DJ Outside',
    location: 'Festzelt Urdorf',
    important: false,
  },
  {
    time: 'bis 04.00 Uhr',
    event: 'Barbetrieb',
    location: 'Festzelt Urdorf',
    important: false,
  },
]

const programmSunday: EventData[] = [
  {
    time: '08.00 Uhr',
    event: 'Öffnung Festgelände',
    location: 'Urdorf und Schlieren',
    important: false,
  },
  {
    time: '09.00 Uhr',
    event: 'Start Wettspiele ZKMF 2024',
    location: 'Urdorf und Schlieren',
    important: true,
  },
  {
    time: '09.00 –',
    time2: '16.00 Uhr',
    event: 'Unterhaltungskonzerte',
    location: 'Festzelt Schlieren',
    important: false,
  },
  {
    time: '10.00 Uhr',
    event: 'Ökumenischer Gottesdienst',
    location: 'Festzelt Schlieren',
    important: false,
  },
  {
    time: '12.00 Uhr',
    event: 'Zmittag und Musig mit Schäbyschigg\nIm Anschluss Blaskapelle aus Altheim und Sigmaringen',
    location: 'Festzelt Urdorf',
    important: false,
  },
  {
    time: '13.30 Uhr',
    event: 'Start Parademusik',
    location: 'Im Moos Urdorf',
    important: true,
  },
  {
    time: '17.00 Uhr',
    event: 'Gesamtchor ZKMF 2024',
    location: 'Kiesplatz beim Festzelt Urdorf',
    important: false,
  },
  {
    time: '18.00 Uhr',
    event: 'Rangverkündigung, Fahnenübergabe',
    location: 'Festzelt Urdorf',
    important: true,
  },
  {
    time: 'bis 20.00 Uhr',
    event: 'Ausklang Zürcher Kantonalmusikfest 2024',
    location: 'Festzelt Urdorf',
    important: false,
  },
]

const programm: ProgrammData[] = [
  {
    day: 'Freitag, 21. Juni 2024',
    events: programmFriday,
  },
  {
    day: 'Samstag, 22. Juni 2024',
    events: programmSaturday,
  },
  {
    day: 'Sonntag, 23. Juni 2024',
    events: programmSunday,
  },
]

useSeoMeta({
  title: 'Festprogramm',
})
</script>

<style scoped></style>
