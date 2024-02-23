<template>
  <MapboxMap
    map-id="map"
    style="position: relative; width: 100vw; height: 100dvh"
    :options="{
      style: 'mapbox://styles/mapbox/light-v11',
      center: [8.424727317603, 47.386092494172],
      zoom: 14,
    }"
    @load="init"
  >
  </MapboxMap>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'

definePageMeta({
  layout: 'empty',
})

useSeoMeta({
  title: 'Karte Festareal',
})

const {
  public: { apiBase },
} = useRuntimeConfig()

const source = ref({
  type: 'geojson',
  data: `${apiBase}/public/location/geojson`,
})

const ref1 = useMapboxRef('map')

function init() {
  ref1.value?.addSource('locations', {
    type: 'geojson',
    data: `${apiBase}/public/location/geojson`,
  })

  ref1.value?.addLayer({
    id: 'locations-layer',
    type: 'circle',
    source: 'locations', // reference the data source
    paint: {
      'circle-color': [
        'match',
        ['get', 'type'],
        'JURYFEEDBACK',
        '#b471d0',
        'WETTSPIELLOKAL',
        '#33b71d',
        'EINSPIELLOKAL',
        '#e55e5e',
        'INSTRUMENTENDEPOT',
        '#3bb2d0',
        /* other */ '#ccc',
      ],
      'circle-radius': {
        stops: [
          [14, 10],
          [15, 20],
          [16, 40],
        ],
      },
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff',
    },
  })

  // Create a popup, but don't add it to the map yet.
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  })

  ref1.value?.on('mouseenter', 'locations-layer', e => {
    // Change the cursor style as a UI indicator.
    ref1.value.getCanvas().style.cursor = 'pointer'

    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice()
    const description = e.features[0].properties.name

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(ref1.value)
  })

  ref1.value?.on('mouseleave', 'places', () => {
    ref1.value.getCanvas().style.cursor = ''
    popup.remove()
  })
}
</script>
