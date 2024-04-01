<template>
  <div class="prose prose-img:rounded-lg prose-a:text-blau">
    <h2 class="text-rot">Parademusikstrecke</h2>
    <ul>
      <li>
        <a href="https://maps.app.goo.gl/bBCjcvBVZFh8zucQ6" target="_blank">Google Streetview</a>
      </li>
      <li>Streckenlänge: 350 Meter</li>
      <li>Streckenbreite (engste Passage): 5,3 Meter</li>
      <li>
        Zugang: Der Zugang erfolgt über die Schulstrasse/Bergstrasse. Dort wird auch der Bereitschaftsraum (Beschilderung folgen) sein. Hinweis: Plant genügend
        Zeit ein, um pünktlich im Bereitschaftsraum einstehen zu können. Es wird vor Ort auch ein ToiToi und Wasser haben.
      </li>
      <li>
        <a href="/info/berechnungsbeispiel.pdf" target="_blank">Berechnungsbeispiel</a>
      </li>
    </ul>
  </div>
  <NuxtImg provider="cloudflare" :src="cloudflareUrl('2a90a5a8-10d8-48a0-d574-203ea32adb00')" loading="lazy" class="mt-8 w-[600px] max-w-full rounded-lg" />
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Parademusikstrecke',
})
</script>
