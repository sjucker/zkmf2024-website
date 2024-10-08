<template>
  <nav class="bg-white absolute top-2.5 left-2.5 z-10 rounded border-2 border-gray-300 p-2 text-sm">
    <div class="flex gap-2 items-center" v-for="layer in layers" :key="layer.type">
      <input type="checkbox" @click="toggleLayer(layer.type)" :checked="layer.checked" :id="layer.type" />
      <label :for="layer.type" class="text-white flex-1 p-1" :style="{ backgroundColor: layer.color }">{{ layer.name }}</label>
    </div>
  </nav>

  <div class="bg-white absolute bottom-2.5 left-2.5 z-10 rounded border-2 border-gray-300 p-2 text-sm">
    <div class="font-bold">Ebenen</div>
    <div class="flex gap-2 items-center" v-for="style in styles" :key="style.layerId">
      <input type="radio" :id="style.layerId" @click="changeStyle(style.layerId)" :checked="style.checked" name="style-selection" />
      <label :for="style.layerId">{{ style.name }}</label>
    </div>
  </div>
  <div id="map" ref="mapContainer" class="relative h-dvh w-dvw"></div>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { LocationType } from '~/types/rest'

interface LayerType {
  type: LocationType
  name: string
  checked: boolean
  color: string
}

interface StyleType {
  name: string
  layerId: string
  checked: boolean
}

const styles: StyleType[] = [
  {
    name: 'Gelände',
    layerId: 'outdoors-v12',
    checked: true,
  },
  {
    name: 'Satellit',
    layerId: 'satellite-streets-v12',
    checked: false,
  },
  {
    name: 'Strassen',
    layerId: 'streets-v12',
    checked: false,
  },
]

const layers: LayerType[] = [
  {
    type: LocationType.WETTSPIELLOKAL,
    checked: true,
    name: 'Wettspiellokal',
    color: '#26b080',
  },
  {
    type: LocationType.FESTZELT,
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
  {
    type: LocationType.EINSPIELLOKAL,
    checked: false,
    name: 'Einspiellokal',
    color: '#3e99d1',
  },
  {
    type: LocationType.INSTRUMENTENDEPOT,
    checked: false,
    name: 'Instr. Depot/Reparatur',
    color: '#fec800',
  },
  {
    type: LocationType.JURYFEEDBACK,
    checked: false,
    name: 'Jury Gespräch',
    color: '#9d66a6',
  },
  {
    type: LocationType.INFOSTAND,
    checked: false,
    name: 'Infostand, Helferbüro',
    color: '#ffb693',
  },
]
definePageMeta({
  layout: 'empty',
})

useSeoMeta({
  title: 'Karte Festareal',
})

const {
  public: { mapboxApiKey },
} = useRuntimeConfig()

const mapContainer = ref()
const mapRef = ref<mapboxgl.Map>()

mapboxgl.accessToken = mapboxApiKey

function getHtml(features: mapboxgl.MapboxGeoJSONFeature[]) {
  let html = `<strong>${features[0]?.properties?.name}</strong><br/>${features[0]?.properties?.info}`
  if (features[0]?.properties?.type === LocationType.WETTSPIELLOKAL) {
    html += `<br/><a href="/info/zeitplan/${features[0]?.properties?.identifier}" class="underline text-blau">Spielplan</a>`
  }
  if (features[0]?.properties?.coordinates) {
    html += `<br/><a href="${features[0]?.properties?.coordinates}" class="underline text-blau">Google Maps</a>`
  }
  return html
}

function addAdditionalSourceAndLayer(map: mapboxgl.Map) {
  map.addSource('locations', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.444605036975, 47.394625359976] },
          properties: {
            id: '1E',
            identifier: 'schulhaus-hofacker-singsaal',
            name: 'Schulhaus Hofacker Singsaal',
            info: 'Einspiellokal',
            address: 'https://www.google.ch/maps/place/Hofackerstrasse+2%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.394625359976,8.444605036975',
            type: 'EINSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.445715444734, 47.396504093984] },
          properties: {
            id: '2J',
            identifier: 'alte-ref-kirche',
            name: 'Alte ref. Kirche',
            info: 'Jurygespräch',
            address: 'https://www.google.ch/maps/place/Kirchgasse+5%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.396504093984,8.445715444734',
            type: 'JURYFEEDBACK',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.444151354002, 47.39453952852] },
          properties: {
            id: '1/2D',
            identifier: 'schulhaus-hofacker-turnhalle',
            name: 'Schulhaus Hofacker Turnhalle',
            info: 'Instrumentendepot',
            address: 'https://www.google.ch/maps/place/Hofackerstrasse+2%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.394539528520,8.444151354002',
            type: 'INSTRUMENTENDEPOT',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.427050647289, 47.390412605741] },
          properties: {
            id: '7W',
            identifier: 'marschmusikstrecke-urdorf',
            name: 'Parademusikstrecke Urdorf',
            info: 'Parademusik',
            address: 'https://www.google.ch/maps/place/Im+Moos+3%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.390412605741,8.427050647289',
            type: 'PARADEMUSIK',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.425614397929, 47.387068997702] },
          properties: {
            id: '3W',
            identifier: 'embrisaal-urdorf',
            name: 'Embrisaal Urdorf',
            info: 'Module: G (Tambouren) und H (Perkussionsensembles)',
            address: 'https://www.google.ch/maps/place/Im+Embri+8%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.387068997702,8.425614397929',
            type: 'WETTSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.422329961061, 47.385636902376] },
          properties: {
            id: '4W',
            identifier: 'zentrumshalle-urdorf',
            name: 'Zentrumshalle Urdorf',
            info: 'Module: A (Konzertmusik) Höchstklasse und 1. Klasse, Harmonie und Brass Band',
            address: 'https://www.google.ch/maps/place/Birmensdorferstrasse+77%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.385636902376,8.422329961061',
            type: 'WETTSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.426453046746, 47.380156341435] },
          properties: {
            id: '6J',
            identifier: 'schulzimmer-weihermatt',
            name: 'Schulzimmer Weihermatt',
            info: 'Jurygespräch',
            address: 'https://www.google.ch/maps/place/Weihermattstrasse+50%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.380156341435,8.426453046746',
            type: 'JURYFEEDBACK',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.426408538143, 47.380478623797] },
          properties: {
            id: '6E',
            identifier: 'singsaal-weihermatt',
            name: 'Singsaal Weihermatt',
            info: 'Einspiellokal',
            address: 'https://www.google.ch/maps/place/Weihermattstrasse+50%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.380478623797,8.426408538143',
            type: 'EINSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.424578083572, 47.381858657088] },
          properties: {
            id: '5E',
            identifier: 'jugendtreff-ref-kirche',
            name: 'Jugendtreff ref. Kirche',
            info: 'Jurygespräch',
            address: 'https://www.google.ch/maps/place/Weihermattstrasse+40%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.381858657088,8.424578083572',
            type: 'JURYFEEDBACK',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.425192408359, 47.388554561192] },
          properties: {
            id: '4E',
            identifier: 'singsaal-moosmatt',
            name: 'Singsaal Moosmatt',
            info: 'Einspiellokal',
            address: 'https://www.google.ch/maps/place/Im+Moos+24%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.388554561192,8.425192408359',
            type: 'EINSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.425189176428, 47.3865713534] },
          properties: {
            id: '5/6D',
            identifier: 'turnhalle-bahnhofstrasse',
            name: 'Turnhalle Bahnhofstrasse',
            info: 'Instrumentendepot',
            address: 'https://www.google.ch/maps/place/Bahnhofstrasse+50%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.386571353400,8.425189176428',
            type: 'INSTRUMENTENDEPOT',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.425649260081, 47.387036241257] },
          properties: {
            id: '3/4D',
            identifier: 'turnhalle-embri',
            name: 'Turnhalle Embri',
            info: 'Instrumentendepot',
            address: 'https://www.google.ch/maps/place/Im+Embri+8%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.387036241257,8.425649260081',
            type: 'INSTRUMENTENDEPOT',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.425065824943, 47.38663827695] },
          properties: {
            id: '3E',
            identifier: 'singkeller-bahnhofstrasse',
            name: 'Singkeller Bahnhofstrasse',
            info: 'Einspiellokal',
            address: 'https://www.google.ch/maps/place/Bahnhofstrasse+50%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.386638276950,8.425065824943',
            type: 'EINSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.424525947622, 47.387317009998] },
          properties: {
            id: '3J',
            identifier: 'foyer-schulhaus-embri',
            name: 'Foyer Schulhaus Embri',
            info: 'Jurygespräch',
            address: 'https://www.google.ch/maps/place/Im+Embri+49%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.387317009998,8.424525947622',
            type: 'JURYFEEDBACK',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.422369510897, 47.385708178028] },
          properties: {
            id: '4J',
            identifier: 'zivilschutzanlage',
            name: 'Zivilschutzanlage',
            info: 'Jurygespräch',
            address: 'https://www.google.ch/maps/place/Birmensdorferstrasse+77%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.385708178028,8.422369510897',
            type: 'JURYFEEDBACK',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.447143256345, 47.397306517421] },
          properties: {
            id: 'iS',
            identifier: 'infostand-schlieren',
            name: 'Infostand Schlieren',
            info: 'Empfang, Infostand',
            address: 'https://www.google.ch/maps/place/Badenerstrasse+3%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.397306517421,8.447143256345',
            type: 'INFOSTAND',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.425472326315, 47.386159594963] },
          properties: {
            id: '5E',
            identifier: 'schulhaus-bahnhofstrasse',
            name: 'Schulhaus Bahnhofstrasse',
            info: 'Einspiellokal',
            address: 'https://www.google.ch/maps/place/Bahnhofstrasse+52%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.386159594963,8.425472326315',
            type: 'EINSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.425413051695, 47.387263063197] },
          properties: {
            id: 'iU',
            identifier: 'infostand-urdorf',
            name: 'Infostand Urdorf',
            info: 'Empfang, Infostand',
            address: 'https://www.google.ch/maps/place/Im+Embri+49%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.387263063197,8.425413051695',
            type: 'INFOSTAND',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.446011061969, 47.397439543225] },
          properties: {
            id: 'FS',
            identifier: 'festzelt-schlieren',
            name: 'Festzelt Schlieren',
            info: 'Festzelt & Food Meile',
            address: 'https://www.google.ch/maps/place/Badenerstrasse+12%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.397439543225,8.446011061969',
            type: 'FESTZELT',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.424727317603, 47.386092494172] },
          properties: {
            id: 'FU',
            identifier: 'festzelt-urdorf',
            name: 'Festzelt Urdorf',
            info: 'Festzelt & Food Meile',
            address: 'https://www.google.ch/maps/place/Bahnhofstrasse+52%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.386092494172,8.424727317603',
            type: 'FESTZELT',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.445750366863, 47.395870169579] },
          properties: {
            id: '2E',
            identifier: 'stuermeierhuus',
            name: 'Stürmeierhuus',
            info: 'Einspiellokal',
            address: 'https://www.google.ch/maps/place/Freiestrasse+14%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.395870169579,8.445750366863',
            type: 'EINSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.427330468337, 47.379936044763] },
          properties: {
            id: '6W',
            identifier: 'turnhalle-weihermatt-urdorf',
            name: 'Turnhalle Weihermatt Urdorf',
            info: 'Module: B (Unterhaltungsmusik) Mittel- und Unterstufe, Harmonie und Brass Band',
            address: 'https://www.google.ch/maps/place/Weihermattstrasse+50%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.379936044763,8.427330468337',
            type: 'WETTSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.44573297815, 47.396801014533] },
          properties: {
            id: '2W',
            identifier: 'grosse-ref-kirche-schlieren',
            name: 'Grosse Ref. Kirche Schlieren',
            info: 'Module: A (Konzertmusik) 3. und 4. Klasse, Harmonie und Brass Band',
            address: 'https://www.google.ch/maps/place/Kirchgasse+7%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.396801014533,8.445732978150',
            type: 'WETTSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.448625196597, 47.396055051974] },
          properties: {
            id: '1W',
            identifier: 'salmensaal-schlieren',
            name: 'Salmensaal Schlieren',
            info: 'Module: A (Konzertmusik) 2. Klasse, Harmonie und Brass Band und B (Unterhaltungsmusik) Oberstufe, Harmonie',
            address: 'https://www.google.ch/maps/place/Uitikonerstrasse+17%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.396055051974,8.448625196597',
            type: 'WETTSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.424846238635, 47.381879850735] },
          properties: {
            id: '5W',
            identifier: 'reformierte-kirche-urdorf',
            name: 'Reformierte Kirche Urdorf',
            info: 'Module: A (Konzertmusik) 3. Klasse, Harmonie',
            address: 'https://www.google.ch/maps/place/Weihermattstrasse+40%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.381879850735,8.424846238635',
            type: 'WETTSPIELLOKAL',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.446509679028, 47.396742143376] },
          properties: {
            id: 'RS',
            identifier: 'reparatur-schlieren',
            name: 'Reparatur Schlieren',
            info: 'Instrumentendepot',
            address: 'https://www.google.ch/maps/place/Kirchgasse+6%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.396742143376,8.446509679028',
            type: 'INSTRUMENTENDEPOT',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.422249438041, 47.385516142106] },
          properties: {
            id: 'RU',
            identifier: 'reparatur-urdorf',
            name: 'Reparatur Urdorf',
            info: 'Instrumentendepot',
            address: 'https://www.google.ch/maps/place/Birmensdorferstrasse+77%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.385516142106,8.422249438041',
            type: 'INSTRUMENTENDEPOT',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.444935894465, 47.397277253301] },
          properties: {
            id: 'HS',
            identifier: 'helfer-schlieren',
            name: 'Helferbüro Schlieren',
            info: 'Empfang, Infostand',
            address: 'https://www.google.ch/maps/place/Badenerstrasse+17%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.397277253301,8.444935894465',
            type: 'INFOSTAND',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.424165280669, 47.386879371254] },
          properties: {
            id: 'HU',
            identifier: 'helfer-urdorf',
            name: 'Helferbüro Urdorf',
            info: 'Empfang, Infostand',
            address: 'https://www.google.ch/maps/place/Im+Embri+49%2C+8902+Urdorf',
            coordinates: 'https://www.google.com/maps?q=47.386879371254,8.424165280669',
            type: 'INFOSTAND',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [8.446502565075, 47.395782297746] },
          properties: {
            id: '1J',
            identifier: 'altes-schulhaus',
            name: 'Altes Schulhaus',
            info: 'Jurygespräch',
            address: 'https://www.google.ch/maps/place/Freiestrasse+10%2C+8952+Schlieren',
            coordinates: 'https://www.google.com/maps?q=47.395782297746,8.446502565075',
            type: 'JURYFEEDBACK',
          },
        },
      ],
    },
  })

  for (const layer of [...layers].reverse()) {
    const checked = (<HTMLInputElement>document.getElementById(layer.type))?.checked
    map.addLayer({
      id: layer.type,
      type: 'circle',
      source: 'locations',
      filter: ['==', ['get', 'type'], layer.type],
      layout: {
        visibility: checked ? 'visible' : 'none',
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
        visibility: checked ? 'visible' : 'none',
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
        .setHTML(getHtml(features))
        .addTo(map)
    })

    map.on('mouseenter', layer.type, e => {
      map.getCanvas().style.cursor = 'pointer'
    })

    map.on('mouseleave', layer.type, () => {
      map.getCanvas().style.cursor = 'default'
    })
  }
}

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [8.434727317603, 47.388092494172],
    zoom: 13,
  })

  map.on('style.load', () => {
    addAdditionalSourceAndLayer(map)
  })

  map.on('load', () => {
    map.fitBounds([
      [8.42018651050729, 47.37787047581315],
      [8.45040397121158, 47.400236075092586],
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
  if (visibility === 'visible') {
    mapRef.value?.setLayoutProperty(layer, 'visibility', 'none')
    mapRef.value?.setLayoutProperty(`${layer}-names`, 'visibility', 'none')
  } else {
    mapRef.value?.setLayoutProperty(layer, 'visibility', 'visible')
    mapRef.value?.setLayoutProperty(`${layer}-names`, 'visibility', 'visible')
  }
}

function changeStyle(layerId: string) {
  mapRef.value?.setStyle('mapbox://styles/mapbox/' + layerId)
}
</script>
