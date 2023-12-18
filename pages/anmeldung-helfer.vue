<template>
  <div class="prose max-w-none">
    <h2 class="text-blau">Anmeldung Helfer</h2>
    <div v-if="!sent" ref="form">
      <p>
        Willst du am
        <strong>31. Zürcher Kantonalmusikfest Urdorf + Schlieren</strong>
        mithelfen, dann registriere hier dein Interesse:
      </p>

      <form class="mt-10">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Email"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validEmail ? '' : 'invalid border-red-700'"
          />
        </div>

        <div class="mb-4">
          <label for="firstName" class="block text-gray-700">Vorname</label>
          <input
            type="text"
            id="firstName"
            v-model="formData.vorname"
            placeholder="Vorname"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validVorname ? '' : 'invalid border-red-700'"
          />
        </div>

        <div class="mb-4">
          <label for="name" class="block text-gray-700">Nachname</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Nachname"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validName ? '' : 'invalid border-red-700'"
          />
        </div>

        <div class="mb-4">
          <label for="mobile" class="block text-gray-700">Adresse</label>
          <input
            type="text"
            id="adresse"
            v-model="formData.adresse"
            placeholder="Adresse"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validAdresse ? '' : 'invalid border-red-700'"
          />
        </div>

        <div class="mb-4">
          <label for="mobile" class="block text-gray-700">PLZ / Ort</label>
          <input
            type="text"
            id="plzOrt"
            v-model="formData.plzOrt"
            placeholder="PLZ / Ort"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validPlzOrt ? '' : 'invalid border-red-700'"
          />
        </div>

        <div class="mb-4">
          <label for="mobile" class="block text-gray-700">Geburtsdatum</label>
          <input
            type="date"
            id="geburtsdatum"
            v-model="formData.geburtsdatum"
            placeholder="Geburtsdatum"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validGeburtsdatum ? '' : 'invalid border-red-700'"
          />
        </div>

        <div class="mb-8">
          <label for="mobile" class="block text-gray-700">Telefon</label>
          <input
            type="tel"
            id="mobile"
            v-model="formData.telefon"
            placeholder="Telefon"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validTelefon ? '' : 'invalid border-red-700'"
          />
        </div>

        <div class="mb-8">
          <div>
            <span class="font-bold" :class="validVereinszugehoerigkeit ? '' : 'invalid text-red-700'">Vereinszugehörigkeit</span><br />
            <span class="text-sm">Der Einsatz wird im Namen dieses Vereins geleistet.</span>
          </div>
          <div class="flex flex-col">
            <label class="inline-flex items-center">
              <input type="radio" value="privat" v-model="vereinszugehoerigkeitSelection" v-on:change="resetVereinszugehoerigkeit()" />
              <span class="ml-2">privat, kein Verein</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="MVU" v-model="vereinszugehoerigkeitSelection" v-on:change="resetVereinszugehoerigkeit()" />
              <span class="ml-2">Musikverein Harmonie Urdorf</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="MHS" v-model="vereinszugehoerigkeitSelection" v-on:change="resetVereinszugehoerigkeit()" />
              <span class="ml-2">Musikverein Harmonie Schlieren</span>
            </label>
            <label class="inline-flex items-center gap-2">
              <input type="radio" value="OTHER" v-model="vereinszugehoerigkeitSelection" v-on:change="resetVereinszugehoerigkeit()" />
              <span class="shrink-0">Anderer Verein</span>
              <input
                v-if="otherVereinszugehoerigkeitSelected"
                type="text"
                v-model="formData.vereinszugehoerigkeit"
                placeholder="Vereinsname"
                class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
        </div>

        <div class="mb-8">
          <div>
            <span class="font-bold" :class="validAufgaben ? '' : 'invalid text-red-700'">Welche Aufgaben möchtest du übernehmen?</span><br />
            <span class="text-sm">Mehrere Antworten möglich.</span>
          </div>
          <div v-for="aufgabe in aufgaben">
            <label class="inline-flex items-center">
              <input type="checkbox" :value="aufgabe" v-model="formData.aufgaben" />
              <span class="ml-2 text-gray-700 text-sm">{{ getAufgabeDescription(aufgabe) }}</span>
            </label>
          </div>
        </div>

        <div class="mb-8">
          <label for="anzahlEinsaetze" class="block text-gray-700 font-bold">Anzahl möglicher Einsätze à ca. 5 Stunden</label>
          <input
            type="text"
            id="anzahlEinsaetze"
            v-model="formData.anzahlEinsaetze"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="mb-8">
          <div>
            <span class="font-bold" :class="validEinsatzzeiten ? '' : 'invalid text-red-700'">Bevorzugte Einsatztage und -zeiten</span><br />
            <span class="text-sm">Mehrere Antworten möglich.</span>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-sm">&nbsp;</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="text-sm font-bold flex-1 text-center">
              {{ getEinsatzzeitDescription(einsatzzeit) }}
            </div>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-xs">Mittwoch, 19.06.2024 (Aufbau Morgen + Nachmittag)</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="flex-1 text-center">
              <label class="p-4">
                <input type="checkbox" :value="einsatzzeit" v-model="formData.einsatzMittwoch" />
              </label>
            </div>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-xs">Donnerstag, 20.06.2024 (Aufbau Morgen, Nachmittag, Abend)</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="flex-1 text-center">
              <label class="p-4">
                <input type="checkbox" :value="einsatzzeit" v-model="formData.einsatzDonnerstag" />
              </label>
            </div>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-xs">Freitag, 21.06.2024 (Aufbau Morgen + Nachmittag, Festbetrieb Abend + Nacht)</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="flex-1 text-center">
              <label class="p-4">
                <input type="checkbox" :value="einsatzzeit" v-model="formData.einsatzFreitag" />
              </label>
            </div>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-xs">Samstag, 22.06.2024 (Festbetrieb Morgen bis Abend + Nacht)</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="flex-1 text-center">
              <label class="p-4">
                <input type="checkbox" :value="einsatzzeit" v-model="formData.einsatzSamstag" />
              </label>
            </div>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-xs">Sonntag, 23.06.2024 (Festbetrieb Morgen bis Abend, Beginn Rückbau)</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="flex-1 text-center">
              <label class="p-4">
                <input type="checkbox" :value="einsatzzeit" v-model="formData.einsatzSonntag" />
              </label>
            </div>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-xs">Montag, 24.06.2024 (Rückbau)</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="flex-1 text-center">
              <label class="p-4">
                <input type="checkbox" :value="einsatzzeit" v-model="formData.einsatzMontag" />
              </label>
            </div>
          </div>
          <div class="max-w-4xl flex flex-row justify-between mb-4">
            <div class="flex-1 text-xs">Dienstag, 25.06.2024 (Rückbau)</div>
            <div v-for="einsatzzeit in einsatzzeiten" class="flex-1 text-center">
              <label class="p-4">
                <input type="checkbox" :value="einsatzzeit" v-model="formData.einsatzDienstag" />
              </label>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <div><span class="font-bold" :class="validGroesseShirt ? '' : 'invalid text-red-700'">Grösse Helfer-T-Shirt</span><br /></div>
          <div class="flex flex-col">
            <label class="inline-flex items-center">
              <input type="radio" value="XS" v-model="formData.groesseShirt" />
              <span class="ml-2">XS</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="S" v-model="formData.groesseShirt" />
              <span class="ml-2">S</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="M" v-model="formData.groesseShirt" />
              <span class="ml-2">M</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="L" v-model="formData.groesseShirt" />
              <span class="ml-2">L</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="XL" v-model="formData.groesseShirt" />
              <span class="ml-2">XL</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="XXL" v-model="formData.groesseShirt" />
              <span class="ml-2">XXL</span>
            </label>
          </div>
        </div>

        <label class="block text-left w-full lg:w-1/2 mb-4">
          <span class="block text-gray-700 font-bold">Bemerkungen, Wünsche, Spezialkenntnisse</span>
          <textarea
            v-model="formData.comment"
            maxlength="1024"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </label>
        <div class="inline-flex items-center">
          <button
            class="inline-flex items-center gap-2 bg-blau text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-opacity-50"
            type="button"
            :disabled="loading"
            @click="submitForm"
          >
            <svg v-if="loading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Abschicken
          </button>
          <span v-if="errorMessage" class="ml-10 text-red-700">
            {{ errorMessage }}
          </span>
        </div>
      </form>
    </div>

    <div v-if="sent">
      <h4>🎉 Vielen Dank für deine Anmeldung!</h4>
      <p>Du wirst frühzeitig wieder von uns hören und mit weiteren Informationen versorgt werden.</p>
      <button @click="reload()" class="bg-blau text-white py-3 px-8 rounded">eine weitere Anmeldung vornehmen</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { RegisterHelperRequestDTO } from '~/types/rest'
import { Aufgaben, Einsatzzeit } from '~/types/rest'

const {
  public: { apiBase },
} = useRuntimeConfig()

const aufgaben: Aufgaben[] = Object.values(Aufgaben)
const einsatzzeiten: Einsatzzeit[] = Object.values(Einsatzzeit)
const vereinszugehoerigkeitSelection = ref('')
const formData: RegisterHelperRequestDTO = reactive({
  email: '',
  name: '',
  vorname: '',
  adresse: '',
  plzOrt: '',
  geburtsdatum: '',
  telefon: '',
  vereinszugehoerigkeit: '',
  aufgaben: [],
  anzahlEinsaetze: '',
  einsatzMittwoch: [],
  einsatzDonnerstag: [],
  einsatzFreitag: [],
  einsatzSamstag: [],
  einsatzSonntag: [],
  einsatzMontag: [],
  einsatzDienstag: [],
  groesseShirt: '',
  comment: '',
})
const submitted = ref(false)
const loading = ref(false)
const sent = ref(false)
const errorMessage = ref('')

const validVorname = computed(() => {
  return !submitted.value || formData.vorname.length > 0
})
const validName = computed(() => {
  return !submitted.value || formData.name.length > 0
})
const validEmail = computed(() => {
  return !submitted.value || formData.email.length > 0
})
const validTelefon = computed(() => {
  return !submitted.value || formData.telefon.length > 0
})
const validAdresse = computed(() => {
  return !submitted.value || formData.adresse.length > 0
})
const validPlzOrt = computed(() => {
  return !submitted.value || formData.plzOrt.length > 0
})
const validGeburtsdatum = computed(() => {
  return !submitted.value || formData.geburtsdatum.length > 0
})
const validVereinszugehoerigkeit = computed(() => {
  return !submitted.value || vereinszugehoerigkeitSelection.value.length > 0
})
const validAufgaben = computed(() => {
  return !submitted.value || formData.aufgaben.length > 0
})
const validEinsatzzeiten = computed(() => {
  return (
    !submitted.value ||
    formData.einsatzMontag.length > 0 ||
    formData.einsatzDienstag.length > 0 ||
    formData.einsatzMittwoch.length > 0 ||
    formData.einsatzDonnerstag.length > 0 ||
    formData.einsatzFreitag.length > 0 ||
    formData.einsatzSamstag.length > 0 ||
    formData.einsatzSonntag.length > 0
  )
})
const validGroesseShirt = computed(() => {
  return !submitted.value || formData.groesseShirt.length > 0
})
const otherVereinszugehoerigkeitSelected = computed(() => {
  return vereinszugehoerigkeitSelection.value === 'OTHER'
})

function resetVereinszugehoerigkeit(): void {
  formData.vereinszugehoerigkeit = ''
}

function getAufgabeDescription(aufgabe: Aufgaben): string {
  switch (aufgabe) {
    case Aufgaben.EGAL:
      return 'egal, überall einsetzbar'
    case Aufgaben.KOERPERLICH:
      return 'körperliche Arbeit möglich'
    case Aufgaben.MUSIKALISCH:
      return 'Mithilfe beim musikalischen Wettbewerb (z.B. Betreuer, Roadie)'
    case Aufgaben.MODERATION:
      return 'Moderation der Wettspiele (für sprachgewandte Personen)'
    case Aufgaben.JURYSEKRETARIAT:
      return 'Jurysekretariat (für musikaffine Personen, obligatorisches Briefing am Freitag, 21.06.2024 16:00 Uhr in Urdorf)'
    case Aufgaben.SERVICE:
      return 'Festwirtschaft (Aufnahme Bestellung, Service)'
    case Aufgaben.BUFFET:
      return 'Festwirtschaft (Buffet, Ausgabe)'
    case Aufgaben.KUECHE:
      return 'Festwirtschaft (Küche, Grill)'
    case Aufgaben.NACHSCHUB:
      return 'Festwirtschaft (Nachschub, Rückschub, Entsorgung)'
    case Aufgaben.AUSSENSTAND:
      return 'Festwirtschaft Aussenstand (Getränke, Food, Grill)'
    case Aufgaben.RAHMENPROGRAMM:
      return 'Rahmenprogramm (Auf-/Abbau für Bands)'
    case Aufgaben.AUFBAU:
      return 'Aufbau bzw. Rückbau Zelte und Infrastruktur'
    case Aufgaben.AUFSICHT:
      return 'Aufsicht, Schicht-Chef'
  }
}

function getEinsatzzeitDescription(einsatzzeit: Einsatzzeit): string {
  switch (einsatzzeit) {
    case Einsatzzeit.MORGEN:
      return 'Morgen'
    case Einsatzzeit.MITTAG:
      return 'Mittag'
    case Einsatzzeit.NACHMITTAG:
      return 'Nachmittag'
    case Einsatzzeit.ABEND:
      return 'Abend'
    case Einsatzzeit.NACHT:
      return 'Nacht'
  }
}

async function submitForm(): Promise<void> {
  submitted.value = true
  if (vereinszugehoerigkeitSelection.value !== 'OTHER') {
    formData.vereinszugehoerigkeit = vereinszugehoerigkeitSelection.value
  }
  if (
    validVorname.value &&
    validName.value &&
    validEmail.value &&
    validAdresse.value &&
    validPlzOrt.value &&
    validGeburtsdatum.value &&
    validTelefon.value &&
    validVereinszugehoerigkeit.value &&
    validAufgaben.value &&
    validEinsatzzeiten.value &&
    validGroesseShirt.value
  ) {
    errorMessage.value = ''
    loading.value = true
    await $fetch(`${apiBase}/public/auth/register/helper`, {
      method: 'post',
      body: formData,
    })
      .then(() => {
        sent.value = true
        window.scrollTo(0, 0)
      })
      .catch((error: any) => {
        errorMessage.value = 'Es ist ein Fehler aufgetreten'
        if (error.response) {
          if (error.response.status === 400) {
            errorMessage.value = 'Bitte eine gültige Email eingeben'
          } else if (error.response.status === 409) {
            errorMessage.value = 'Die angegebene Email wurde schon registriert'
          }
        }
      })
      .finally(() => {
        loading.value = false
      })
  } else {
    // wait until classes are set
    setTimeout(() => {
      const elements = document.getElementsByClassName('invalid')
      if (elements.length > 0) {
        elements[0].scrollIntoView()
      }
    }, 100)
  }
}

function reload(): void {
  reloadNuxtApp({
    force: true,
  })
}
</script>
