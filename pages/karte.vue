<template>
  <div class="prose prose-a:text-blau">
    <h2 class="text-blau">Karte Festareal</h2>

    <MapboxMap
      map-id="1"
      style="position: relative; width: 500px; height: 500px; max-width: 100%"
      :options="{
        style: 'mapbox://styles/mapbox/standard',
        center: [8.424727317603, 47.386092494172],
        zoom: 12,
      }"
    >
      <MapboxSource source-id="test" :source="source" />
      <MapboxGeolocateControl position="top-left" />
    </MapboxMap>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Karte Festareal',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const source = ref({
  type: 'geojson',
  data: `${apiBase}/public/location/geojson`,
})
</script>
