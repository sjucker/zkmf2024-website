<template>
  <div v-if="needsConsentDecision" class="min-w-full fixed bottom-0 left-0 bg-blau p-4 z-50 border-t-4 border-t-rot flex flex-col md:flex-row gap-4 text-xs">
    <div class="text-white">
      Wenn Sie auf «Akzeptieren» klicken, stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Navigation auf der Website zu verbessern, die
      Nutzung der Website zu analysieren und unsere Marketingaktivitäten zu unterstützen.<br />
      Weitere Informationen finden Sie in unserer
      <NuxtLink to="/datenschutzrichtlinie" class="underline">Datenschutzrichtlinie</NuxtLink>
    </div>
    <div class="flex flex-col-reverse md:flex-row gap-4 text-sm">
      <button class="bg-transparent border-2 border-white text-white py-3 px-8 rounded" @click="revoke()">Ablehnen</button>
      <button class="bg-white text-blau py-3 px-8 rounded" @click="accept()">Akzeptieren</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { gtag, grantConsent, revokeConsent } = useGtag()

const consent = useCookie('zkmf2024-consent-status')
consent.value = consent.value || ''

const needsConsentDecision = computed(() => {
  if (consent.value) {
    return consent.value === ''
  }
  return false
})

function accept() {
  grantConsent()
  consent.value = 'granted'
}

function revoke() {
  revokeConsent()
  consent.value = 'revoked'
}
</script>
