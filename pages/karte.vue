<template>
  <div class="prose prose-a:text-blau">
    <h2 class="text-blau">Karte Festareal</h2>

    <MapboxMap
      map-id="1"
      style="position: relative; width: 500px; height: 500px"
      :options="{
        style: 'mapbox://styles/mapbox/standard',
        center: [8.424727317603, 47.386092494172],
        zoom: 12,
      }"
    >
      <MapboxGeolocateControl position="top-left" />
    </MapboxMap>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Karte Festareal',
})
</script>
