<template>
  <div class="bg-blau p-4 flex flex-col md:flex-row flex-wrap gap-4 rounded-lg mb-8 text-white">
    <NuxtLink to="/info/festprogramm" :class="{ 'text-rot font-bold': active('festprogramm') }">Festprogramm</NuxtLink>
    <NuxtLink to="/info/unterhaltung" :class="{ 'text-rot font-bold': active('unterhaltung') }">Unterhaltungsprogramm</NuxtLink>
    <NuxtLink to="/vereine">Teilnehmende Musikvereine</NuxtLink>
    <NuxtLink to="/zeitplan">Wettspiele und Spielplan</NuxtLink>
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
const route = useRoute()

function active(id: string) {
  return route.fullPath.includes(id)
}
</script>
