<template>
  <footer>
    <div>
      <div class="mt-32 bg-silber w-full">
        <div class="container mx-auto px-5 py-12 flex flex-col lg:flex-row">
          <div class="text-blau text-sm flex-none">
            <p class="font-bold">
              31. Zürcher<br />
              Kantonalmusikfest<br />
              Urdorf + Schlieren
            </p>
            <p class="pt-4 font-bold">info@zkmf2024.ch</p>
          </div>
          <div class="text-blau font-bold text-lg pt-6 lg:pt-0 flex-none lg:pl-36">
            <ul>
              <li v-for="link in navigationLinks" :key="link.pageId">
                <NuxtLink :to="`/${link.pageId}`">{{ link.title }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/impressum">Impressum</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="pt-6 lg:pt-0 lg:pl-36">
            <NuxtLink to="/anmeldung-helfer">
              <FilledButton text="Anmeldung HelferInnen" class="block mt-3 w-full lg:w-72"></FilledButton>
            </NuxtLink>
            <NuxtLink to="/newsletter">
              <FilledButton text="Newsletter abonnieren" class="block mt-3 w-full lg:w-72"></FilledButton>
            </NuxtLink>
            <a href="https://vereine.zkmf2024.ch/" target="_blank">
              <FilledButton text="Vereinsportal" class="block mt-3 w-full lg:w-72"></FilledButton>
            </a>
          </div>
        </div>
      </div>

      <div class="bg-blau w-full">
        <div class="container mx-auto flex flex-wrap md:flex-nowrap px-5 py-4 justify-between items-center">
          <div class="text-sm text-white">© {{ currentYear }} — 31. Zürcher Kantonalmusikfest, Urdorf + Schlieren. Alle Rechte vorbehalten.</div>
          <div class="flex justify-end gap-2">
            <a href="https://www.facebook.com/zkmf2024" target="_blank"><img src="/facebook.png" alt="Facebook" width="50" height="50" /></a>
            <a href="https://www.instagram.com/zkmf2024/" target="_blank"><img src="/instagram.png" alt="Instagram" /></a>
          </div>
        </div>

        <div class="md:hidden flex flex-col gap-8 px-5 pb-4">
          <a href="https://www.zkb.ch/sponsoring" target="_blank">
            <img src="/logos/zkb-footer.png" alt="ZKB" class="h-20 object-scale-down" />
          </a>

          <a href="https://www.zh.ch/de/direktion-der-justiz-und-des-innern/fachstelle-kultur.html" target="_blank">
            <img src="/logos/fachstellekultur-footer.png" alt="Kanton Zürich - Fachstelle Kultur" class="h-20 object-scale-down" />
          </a>

          <a href="https://www.zhbv.ch/" target="_blank">
            <img src="/logos/zbv-footer.png" alt="ZBV" class="h-20 object-scale-down" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { MENU_ITEMS } from '~/types/types'

const currentYear = new Date().getFullYear()
const navigationLinks = MENU_ITEMS
</script>
