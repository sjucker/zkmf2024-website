<template>
  <Consent />
  <div class="absolute top-0 left-0 overflow-hidden w-[250px] h-[250px] z-10" :class="mobileMenuVisible ? 'hidden' : 'visible'">
    <div class="absolute transform -rotate-45 bg-rot text-center text-white text-2xl font-semibold py-2 -left-[180px] top-[30px] w-[500px]">
      <NuxtLink to="/anmeldung-helfer">HelferInnen<br />gesucht!</NuxtLink>
    </div>
  </div>

  <div class="min-h-dvh min-w-full font-body">
    <div class="w-full h-dvh bg-blau" :class="mobileMenuVisible ? 'visible' : 'hidden'">
      <div class="container mx-auto p-3 pt-0 relative h-full">
        <button class="absolute top-5 right-5" v-on:click="mobileMenuVisible = !mobileMenuVisible">
          <XMarkIcon class="h-10 w-10 top-2 right-2 text-white" />
        </button>
        <div class="text-white font-medium text-xl flex flex-col pt-16 pl-8">
          <NuxtLink v-for="link in navigationLinks" :to="`/${link.pageId}`" :key="link.pageId" @click.native="mobileMenuVisible = false" class="mt-6">
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="w-full h-dvh bg-blau lg:h-80 lg:mb-16" id="landingScreen">
      <div class="container mx-auto p-3 pt-0 relative h-full">
        <NuxtLink to="/">
          <img :src="`/logo-muster-1.png`" alt="31. Zürcher Kantonalmusikfest" class="absolute top-0 left-0 px-5 max-w-full max-h-96" />
        </NuxtLink>
        <div
          class="text-white font-bold text-6xl lg:text-7xl absolute left-1/2 lg:left-72 top-1/4 lg:top-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/3 -rotate-12"
        >
          Musik<br />bewegt
        </div>
        <img
          src="/datum.svg"
          alt="21. bis 23.6. 2024"
          class="absolute w-36 transform -translate-y-1/2 lg:-translate-y-0 top-1/2 md:top-1/2 left-1/2 sm:left-3/4 lg:left-32 xl:left-24"
        />

        <div
          class="absolute left-0 lg:left-1/2 top-2/3 lg:top-1/4 xl:top-1/2 w-fit md:w-full lg:w-1/2 h-1/4 px-5 xl:px-0 flex flex-row justify-between lg:justify-end"
        >
          <a href="https://www.zkb.ch/sponsoring" target="_blank">
            <img src="/logos/zkb.png" alt="ZKB" class="h-full object-contain" />
          </a>

          <a href="https://www.zh.ch/de/direktion-der-justiz-und-des-innern/fachstelle-kultur.html" target="_blank">
            <img src="/logos/fachstellekultur.png" alt="Kanton Zürich - Fachstelle Kultur" class="h-full object-contain" />
          </a>

          <a href="https://www.zhbv.ch/" target="_blank">
            <img src="/logos/zbv.png" alt="ZBV" class="h-full object-contain" />
          </a>
        </div>

        <Menu />

        <button class="xl:hidden absolute top-5 right-5" v-on:click="mobileMenuVisible = !mobileMenuVisible">
          <Bars3Icon class="block h-10 w-10 top-2 right-2 text-white" />
        </button>
      </div>

      <div class="lg:hidden absolute bottom-0 p-5 w-full cursor-pointer" @click="scrollToContent" :class="mobileMenuVisible ? 'hidden' : 'visible'">
        <ChevronDownIcon class="mx-auto w-10 h-10 text-white" />
      </div>
    </div>

    <div class="container mx-auto p-5">
      <slot />
    </div>

    <Footer />
  </div>
</template>
<script setup lang="ts">
import { MENU_ITEMS } from '~/types/types'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuVisible = ref(false)
const navigationLinks = MENU_ITEMS

function scrollToContent(): void {
  window.scrollTo(0, window.innerHeight)
}
</script>
