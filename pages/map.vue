<template>
  <div ref="mapContainer" style="position: relative; width: 100vw; height: 100dvh"></div>
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
      id: 'locations',
      type: 'circle',
      source: 'locations',
      filter: ['==', ['get', 'type'], 'WETTSPIELLOKAL'],
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
        'circle-stroke-color': '#FFF',
      },
    })

    map.addLayer({
      id: 'location-names',
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
          ],
        },
      },
      paint: {
        'text-color': 'white',
      },
    })

    map.on('click', 'locations', e => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['locations'],
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

    map.on('mouseenter', 'locations', e => {
      map.getCanvas().style.cursor = 'pointer'
    })

    map.on('mouseleave', 'locations', () => {
      map.getCanvas().style.cursor = 'default'
    })
  })

  mapRef.value = map
})

onUnmounted(() => {
  mapRef.value?.remove()
  mapRef.value = undefined
})

// const source = ref({
//   type: 'geojson',
//   data: `${apiBase}/public/location/geojson`,
// })
//
// const ref1 = useMapboxRef('map')
//
// function init() {
//   ref1.value?.addSource('locations', {
//     type: 'geojson',
//     data: `${apiBase}/public/location/geojson`,
//   })
//
//   ref1.value?.addLayer({
//     id: 'locations-layer',
//     type: 'circle',
//     source: 'locations', // reference the data source
//     paint: {
//       'circle-color': [
//         'match',
//         ['get', 'type'],
//         'JURYFEEDBACK',
//         '#b471d0',
//         'WETTSPIELLOKAL',
//         '#33b71d',
//         'EINSPIELLOKAL',
//         '#e55e5e',
//         'INSTRUMENTENDEPOT',
//         '#3bb2d0',
//         /* other */ '#ccc',
//       ],
//       'circle-radius': {
//         stops: [
//           [14, 10],
//           [15, 20],
//           [16, 40],
//         ],
//       },
//       'circle-stroke-width': 2,
//       'circle-stroke-color': '#ffffff',
//     },
//   })
//
//   // Create a popup, but don't add it to the map yet.
//   const popup = new mapboxgl.Popup({
//     closeButton: false,
//     closeOnClick: false,
//   })
//
//   ref1.value?.on('mouseenter', 'locations-layer', e => {
//     // Change the cursor style as a UI indicator.
//     ref1.value.getCanvas().style.cursor = 'pointer'
//
//     // Copy coordinates array.
//     const coordinates = e.features[0].geometry.coordinates.slice()
//     const description = e.features[0].properties.name
//
//     // Ensure that if the map is zoomed out such that multiple
//     // copies of the feature are visible, the popup appears
//     // over the copy being pointed to.
//     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//       coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
//     }
//
//     // Populate the popup and set its coordinates
//     // based on the feature found.
//     popup.setLngLat(coordinates).setHTML(description).addTo(ref1.value)
//   })
//
//   ref1.value?.on('mouseleave', 'places', () => {
//     ref1.value.getCanvas().style.cursor = ''
//     popup.remove()
//   })
// }
</script>
