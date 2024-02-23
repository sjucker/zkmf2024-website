<template>
  <nav id="menu" class="bg-white absolute top-4 left-4 z-10 rounded border-2 border-gray-300 p-2 text-sm">
    <div class="flex gap-2">
      <input type="checkbox" @click="toggleLayer('locations-wettspiel')" checked id="wettspiel" />
      <label for="wettspiel" class="bg-green-500 text-white flex-1 p-1">Wettspiel</label>
    </div>
    <div class="flex gap-2">
      <input type="checkbox" @click="toggleLayer('locations-einspiel')" id="einspiel" />
      <label for="einspiel" class="bg-red-400 text-white flex-1 p-1">Einspielen</label>
    </div>
  </nav>
  <div id="map" ref="mapContainer" class="relative h-dvh w-dvw"></div>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

definePageMeta({
  layout: 'empty',
})

useSeoMeta({
  title: 'Karte Festareal',
})

const {
  public: { apiBase, mapboxApiKey },
} = useRuntimeConfig()

const mapContainer = ref()
const mapRef = ref<mapboxgl.Map>()

mapboxgl.accessToken = mapboxApiKey

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/light-v11',
    center: [8.434727317603, 47.388092494172],
    zoom: 14,
  })

  map.on('load', () => {
    map.addSource('locations', {
      type: 'geojson',
      data: `${apiBase}/public/location/geojson`,
    })

    map.addLayer({
      id: 'locations-wettspiel',
      type: 'circle',
      source: 'locations',
      filter: ['==', ['get', 'type'], 'WETTSPIELLOKAL'],
      layout: {
        visibility: 'visible',
      },
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
            [17, 60],
            [18, 80],
          ],
        },
        'circle-stroke-width': 2,
        'circle-stroke-color': '#FFF',
      },
    })

    map.addLayer({
      id: 'locations-wettspiel-names',
      type: 'symbol',
      source: 'locations',
      filter: ['==', ['get', 'type'], 'WETTSPIELLOKAL'],
      layout: {
        'text-anchor': 'center',
        'text-field': ['get', 'id'],
        'text-size': {
          stops: [
            [14, 12],
            [15, 20],
            [16, 30],
            [17, 40],
            [18, 50],
          ],
        },
      },
      paint: {
        'text-color': 'white',
      },
    })

    map.addLayer({
      id: 'locations-einspiel',
      type: 'circle',
      source: 'locations',
      filter: ['==', ['get', 'type'], 'EINSPIELLOKAL'],
      layout: {
        visibility: 'none',
      },
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
            [17, 60],
            [18, 80],
          ],
        },
        'circle-stroke-width': 2,
        'circle-stroke-color': '#FFF',
      },
    })

    map.addLayer({
      id: 'locations-einspiel-names',
      type: 'symbol',
      source: 'locations',
      filter: ['==', ['get', 'type'], 'EINSPIELLOKAL'],
      layout: {
        visibility: 'none',
        'text-anchor': 'center',
        'text-field': ['get', 'id'],
        'text-size': {
          stops: [
            [14, 12],
            [15, 20],
            [16, 30],
            [17, 40],
            [18, 50],
          ],
        },
      },
      paint: {
        'text-color': 'white',
      },
    })

    map.on('click', 'locations-wettspiel', e => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['locations-wettspiel'],
      })

      const coordinates = features[0].geometry.coordinates.slice()

      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }

      new mapboxgl.Popup({
        closeButton: false,
        closeOnMove: true,
      })
        .setLngLat(coordinates)
        .setHTML(`<strong>${features[0]?.properties?.name}</strong><br/>Module: ${features[0]?.properties?.info}`)
        .addTo(map)
    })

    map.on('mouseenter', 'locations-wettspiel', e => {
      map.getCanvas().style.cursor = 'pointer'
    })

    map.on('mouseleave', 'locations-wettspiel', () => {
      map.getCanvas().style.cursor = 'default'
    })
  })

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true,
    })
  )

  mapRef.value = map
})

onUnmounted(() => {
  mapRef.value?.remove()
  mapRef.value = undefined
})

function toggleLayer(layer: string) {
  const visibility = mapRef.value?.getLayoutProperty(layer, 'visibility')
  console.log(visibility)
  if (visibility === 'visible') {
    mapRef.value?.setLayoutProperty(layer, 'visibility', 'none')
    mapRef.value?.setLayoutProperty(`${layer}-names`, 'visibility', 'none')
  } else {
    mapRef.value?.setLayoutProperty(layer, 'visibility', 'visible')
    mapRef.value?.setLayoutProperty(`${layer}-names`, 'visibility', 'visible')
  }
}
</script>
