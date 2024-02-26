<template>
  <nav id="menu" class="bg-white absolute top-2.5 left-2.5 z-10 rounded border-2 border-gray-300 p-2 text-sm">
    <div class="flex gap-2" v-for="layer in layers" :key="layer.type">
      <input type="checkbox" @click="toggleLayer(layer.type)" :checked="layer.checked" :id="layer.type" />
      <label :for="layer.type" class="text-white flex-1 p-1" :style="{ backgroundColor: layer.color }">{{ layer.name }}</label>
    </div>
  </nav>
  <div id="map" ref="mapContainer" class="relative h-dvh w-dvw"></div>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { LocationType } from '~/types/rest'

export interface LayerType {
  type: LocationType
  name: string
  checked: boolean
  color: string
}

const layers: LayerType[] = [
  {
    type: LocationType.WETTSPIELLOKAL,
    checked: true,
    name: 'Wettspiellokal',
    color: '#26b080',
  },
  {
    type: LocationType.EINSPIELLOKAL,
    checked: false,
    name: 'Einspiellokal',
    color: '#3e99d1',
  },
  {
    type: LocationType.JURYFEEDBACK,
    checked: false,
    name: 'Jury Gespräch',
    color: '#9d66a6',
  },
  {
    type: LocationType.INSTRUMENTENDEPOT,
    checked: false,
    name: 'Instrumentendepot',
    color: '#fec800',
  },
  {
    type: LocationType.PLATZKONZERT,
    checked: true,
    name: 'Festzelt & Food Meile',
    color: '#ec4f02',
  },
  {
    type: LocationType.PARADEMUSIK,
    checked: false,
    name: 'Parademusik',
    color: '#004e93',
  },
]
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
    zoom: 13,
  })

  map.on('load', () => {
    map.addSource('locations', {
      type: 'geojson',
      data: `${apiBase}/public/location/geojson`,
    })

    for (const layer of layers.toReversed()) {
      map.addLayer({
        id: layer.type,
        type: 'circle',
        source: 'locations',
        filter: ['==', ['get', 'type'], layer.type],
        layout: {
          visibility: layer.checked ? 'visible' : 'none',
        },
        paint: {
          'circle-color': layer.color,
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
        id: `${layer.type}-names`,
        type: 'symbol',
        source: 'locations',
        filter: ['==', ['get', 'type'], layer.type],
        layout: {
          visibility: layer.checked ? 'visible' : 'none',
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

      map.on('click', layer.type, e => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: [layer.type],
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
          .setHTML(`<strong>${features[0]?.properties?.name}</strong><br/>${features[0]?.properties?.info}`)
          .addTo(map)
      })

      map.on('mouseenter', layer.type, e => {
        map.getCanvas().style.cursor = 'pointer'
      })

      map.on('mouseleave', layer.type, () => {
        map.getCanvas().style.cursor = 'default'
      })
    }

    map.fitBounds([
      [8.42018651050729, 47.37787047581315], // southwestern corner of the bounds
      [8.45040397121158, 47.400236075092586], // northeastern corner of the bounds
    ])
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
