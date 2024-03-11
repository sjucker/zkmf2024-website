<template>
  <div class="prose prose-a:text-blau prose-img:rounded-xl">
    <div class="flex gap-10">
      <span class="text-xl" :class="!showSaturday ? 'font-bold text-blau' : 'cursor-pointer underline'" @click="toggleDay()">Freitag, 21.06.</span>
      <span class="text-xl" :class="showSaturday ? 'font-bold text-blau' : 'cursor-pointer underline'" @click="toggleDay()">Samstag, 22.06.</span>
    </div>
    <template v-if="!showSaturday">
      <h2 class="text-blau">Stubete Gäng</h2>
      <p>
        Freitag, <b>21:00 bis 22:30</b> im Festzelt Urdorf
        <span class="flex gap-2">
          <GlobeAltIcon class="w-6 h-6 text-blau" />
          <a href="https://stubetegaeng.ch" target="_blank">Website</a>
        </span>
      </p>
      <NuxtImg src="/rahmenprogramm/stubete-gaeng.jpg" alt="Stubete Gäng" quality="90" class="w-full"></NuxtImg>

      <hr />
      <h2 class="text-blau">SWISS Band</h2>
      <p>
        Freitag, <b>19:30 bis 20:30</b> im Festzelt Urdorf
        <span class="flex gap-2">
          <GlobeAltIcon class="w-6 h-6 text-blau" />
          <a href="https://swiss-band.ch" target="_blank">Website</a>
        </span>
      </p>
      <NuxtImg src="/rahmenprogramm/swissband.jpg" alt="SWISS Band" quality="90" class="w-full"></NuxtImg>

      <hr />
      <h2 class="text-blau">Rosalia & Jürg Golden Hits</h2>
      <p>
        Freitag, <b>17:45 bis 18:45</b> im Festzelt Urdorf
        <span class="flex gap-2">
          <GlobeAltIcon class="w-6 h-6 text-blau" />
          <a href="https://www.nonstop-music.ch" target="_blank">Website</a>
        </span>
      </p>
      <NuxtImg src="/rahmenprogramm/golden-hits.jpg" alt="Rosalia & Jürg Golden Hits" quality="90" class="w-full"></NuxtImg>

      <hr />
      <h2 class="text-blau">DJ Outside</h2>
      <p>
        Freitag, <b>22:40 bis 02:00</b> im Festzelt Urdorf
        <span class="flex gap-2">
          <GlobeAltIcon class="w-6 h-6 text-blau" />
          <a href="https://weber-events.com/dj-outside/" target="_blank">Website</a>
        </span>
      </p>
      <NuxtImg src="/rahmenprogramm/dj-outside.jpg" alt="DJ Outside" quality="90" class="w-full"></NuxtImg>
    </template>

    <template v-if="showSaturday">
      <h2 class="text-blau">Saint City Orchestra</h2>
      <p>
        Samstag, <b>20:30 bis 22:00</b> im Festzelt Urdorf
        <span class="flex gap-2">
          <GlobeAltIcon class="w-6 h-6 text-blau" />
          <a href="https://www.saintcityorchestra.com" target="_blank">Website</a>
        </span>
      </p>
      <NuxtImg src="/rahmenprogramm/saint-city-orchestra.jpg" alt="Saint City Orchestra" quality="90" class="w-full"></NuxtImg>

      <hr />
      <h2 class="text-blau">COM|PA|SS</h2>
      <p>
        Samstag, <b>22:30 bis 01:00</b> im Festzelt Urdorf
        <span class="flex gap-2">
          <GlobeAltIcon class="w-6 h-6 text-blau" />
          <a href="https://compass-partyband.ch" target="_blank">Website</a>
        </span>
      </p>
      <NuxtImg src="/rahmenprogramm/compass.jpg" alt="COM|PA|SS" quality="90" class="w-full"></NuxtImg>

      <hr />
      <h2 class="text-blau">DJ Outside</h2>
      <p>
        Samstag, <b>22:40 bis 02:00</b> im Festzelt Urdorf
        <span class="flex gap-2">
          <GlobeAltIcon class="w-6 h-6 text-blau" />
          <a href="https://weber-events.com/dj-outside/" target="_blank">Website</a>
        </span>
      </p>
      <NuxtImg src="/rahmenprogramm/dj-outside.jpg" alt="DJ Outside" quality="90" class="w-full"></NuxtImg>
    </template>
  </div>
</template>
<script setup lang="ts">
import { GlobeAltIcon } from '@heroicons/vue/24/outline'

const showSaturday = ref(false)

function toggleDay(): void {
  showSaturday.value = !showSaturday.value
}

useSeoMeta({
  title: 'Rahmenprogramm',
})
</script>
