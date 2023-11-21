<template>
  <div class="prose max-w-none">
    <h2 class="text-blau">Newsletter</h2>
    <div v-if="!sent">
      <p class="max-w-prose">
        Willst du die aktuellsten News zum
        <strong>31. Zürcher Kantonalmusikfest Urdorf + Schlieren</strong>
        bekommen, dann registriere hier unseren Newsletter.
      </p>

      <form class="mt-10">
        <div class="mb-4">
          <label for="firstName" class="block text-gray-700">Vorname</label>
          <input
            type="text"
            id="firstName"
            v-model="formData.vorname"
            placeholder="Vorname"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validVorname ? '' : 'border-red-700'"
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
            :class="validName ? '' : 'border-red-700'"
          />
        </div>

        <div class="mb-8">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Email"
            class="shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validEmail ? '' : 'border-red-700'"
          />
        </div>

        <div class="inline-flex items-center">
          <button
            class="bg-blau text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-opacity-80"
            type="button"
            :disabled="loading"
            @click="submitForm"
          >
            Abschicken
          </button>
          <span v-if="errorMessage" class="ml-10 text-red-700">
            {{ errorMessage }}
          </span>
        </div>
      </form>
    </div>

    <div v-if="sent">
      <div>📬 Vielen Dank für deine Anmeldung für unseren Newsletter!</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { RegisterNewsletterRequestDTO } from '~/types/rest'

useHead({
  title: 'Newsletter',
  meta: [
    {
      name: 'description',
      content: 'Abonniere den Newsletter um die aktuellsten News zum 31. Zürcher Kantonalmusikfest Urdorf+Schlieren zu bekommen.',
    },
  ],
})

const formData = reactive({
  vorname: '',
  name: '',
  email: '',
} as RegisterNewsletterRequestDTO)

const submitted = ref(false)
const loading = ref(false)
const sent = ref(false)
const errorMessage = ref('')

const validVorname = computed(() => !submitted.value || formData.vorname.length > 0)
const validName = computed(() => !submitted.value || formData.name.length > 0)
const validEmail = computed(() => !submitted.value || formData.email.length > 0)

const {
  public: { apiBase },
} = useRuntimeConfig()

async function submitForm(): Promise<void> {
  submitted.value = true

  if (validVorname.value && validName.value && validEmail.value) {
    errorMessage.value = ''
    loading.value = true

    await $fetch(`${apiBase}/public/auth/register/newsletter`, {
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
  }
}
</script>
