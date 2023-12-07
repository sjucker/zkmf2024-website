<template>
  <Consent />
  <div class="min-h-screen min-w-full font-body flex flex-col">
    <div class="w-full h-screen bg-blau" :class="mobileMenuVisible ? 'visible' : 'hidden'">
      <div class="container mx-auto p-3 pt-0 relative h-full">
        <button class="absolute top-7 right-5" v-on:click="mobileMenuVisible = !mobileMenuVisible">
          <XMarkIcon class="h-10 w-10 top-2 right-2 text-white" />
        </button>
        <div class="text-white font-medium text-xl flex flex-col pt-16 pl-8">
          <NuxtLink v-for="link in navigationLinks" :to="`/${link.pageId}`" :key="link.pageId" @click.native="mobileMenuVisible = false" class="mt-6">
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="w-full bg-blau h-24 lg:h-36 mb-1">
      <div class="container mx-auto p-3 pt-0 relative h-full">
        <NuxtLink to="/">
          <img src="/logo.png" alt="31. Zürcher Kantonalmusikfest" class="absolute top-0 left-0 px-5 py-2 lg:py-5 max-h-24 lg:max-h-36 z-50" />
        </NuxtLink>

        <div
          class="absolute left-0 md:left-1/3 lg:left-1/3 xl:left-2/3 md:bottom-1/4 lg:bottom-1/3 xl:bottom-0 md:w-1/2 lg:w-1/2 xl:w-1/3 md:h-2/3 lg:h-1/2 py-2 hidden md:flex flex-row justify-end"
        >
          <a href="https://www.zkb.ch/sponsoring" target="_blank">
            <img src="/logos/zkb.png" alt="ZKB" class="h-full object-scale-down" />
          </a>
          <a href="https://www.zh.ch/de/direktion-der-justiz-und-des-innern/fachstelle-kultur.html" target="_blank">
            <img src="/logos/fachstellekultur.png" alt="Kanton Zürich - Fachstelle Kultur" class="h-full object-scale-down" />
          </a>
          <a href="https://www.zhbv.ch/" target="_blank">
            <img src="/logos/zbv.png" alt="ZBV" class="h-full object-scale-down" />
          </a>
        </div>

        <Menu />

        <button class="xl:hidden absolute top-7 right-5" v-on:click="mobileMenuVisible = !mobileMenuVisible">
          <Bars3Icon class="block h-10 w-10 top-2 right-2 text-white" />
        </button>
      </div>
    </div>

    <div class="container mx-auto p-5 flex-grow">
      <slot />
    </div>

    <Footer />
  </div>
</template>
<script setup lang="ts">
import { MENU_ITEMS } from '~/types/types'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuVisible = ref(false)
const navigationLinks = MENU_ITEMS
</script>
