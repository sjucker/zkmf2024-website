<template>
  <div v-if="needsConsentDecision" class="min-w-full fixed bottom-0 left-0 bg-blau p-4 z-50 border-t-4 border-t-rot">
    <div class="container mx-auto flex flex-col md:flex-row gap-4 text-xs justify-between">
      <div class="text-white">
        Wenn Sie auf «Akzeptieren» klicken, stimmen Sie der Speicherung von (nicht-essentiellen) Cookies auf Ihrem Gerät zu, um die Nutzung der Website zu
        analysieren und die Benutzerfreundlichkeit unserer Website zu optimieren.<br />
        Weitere Informationen finden Sie in unserer
        <NuxtLink to="/datenschutz" class="underline">Datenschutzerklärung</NuxtLink>
      </div>
      <div class="flex flex-col-reverse md:flex-row gap-4 text-sm">
        <button class="bg-transparent border-2 border-white text-white py-3 px-8 rounded" @click="revoke()">Ablehnen</button>
        <button class="bg-white text-blau py-3 px-8 rounded" @click="accept()">Akzeptieren</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { grantConsent, revokeConsent } = useGtag()

const consentCookie = useCookie('zkmf2024-consent-status', {
  maxAge: 34560000,
})
consentCookie.value = consentCookie.value ?? ''
if (consentCookie.value === 'granted') {
  grantConsent()
}

const displayConsentBanner = ref(false)
// wait some time until the information from the cookie are available (otherwise there is a flicker)
setTimeout(() => {
  displayConsentBanner.value = true
}, 1000)

const needsConsentDecision = computed(() => {
  return displayConsentBanner.value && consentCookie.value === ''
})

function accept() {
  grantConsent()
  consentCookie.value = 'granted'
}

function revoke() {
  revokeConsent()
  consentCookie.value = 'revoked'
}
</script>
