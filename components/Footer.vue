<template>
  <footer>
    <div class='w-full mt-32'>
      <div v-if='false' class='container mx-auto px-5'>
        <div class='text-blau font-medium'>Unsere Partner</div>
        <div class='flex flex-col lg:flex-row justify-start'>
          <img
              src='/partner1.png'
              alt='Partner 1'
              class='w-1/2 md:w-1/4 lg:w-1/6'
          />
          <img
              src='/partner2.png'
              alt='Partner 2'
              class='w-1/2 md:w-1/4 lg:w-1/6 lg:ml-8'
          />
          <img
              src='/partner3.png'
              alt='Partner 3'
              class='w-1/2 md:w-1/4 lg:w-1/6 lg:ml-8'
          />
          <img
              src='/partner4.png'
              alt='Partner 4'
              class='w-1/2 md:w-1/4 lg:w-1/6 lg:ml-8'
          />
          <img
              src='/partner5.png'
              alt='Partner 5'
              class='w-1/2 md:w-1/4 lg:w-1/6 lg:ml-8'
          />
        </div>
      </div>
    </div>

    <div>
      <div class='bg-silber w-full'>
        <div
            class='container mx-auto px-5 py-12 flex flex-col lg:flex-row'
        >
          <div class='text-blau text-sm flex-none'>
            <p class='font-bold'>
              31. Zürcher<br/>
              Kantonalmusikfest<br/>
              Urdorf + Schlieren
            </p>
            <p class='pt-4 font-bold'>
              info@zkmf2024.ch
            </p>
          </div>
          <div
              class='text-blau font-bold text-lg pt-6 lg:pt-0 flex-none lg:pl-36'
          >
            <ul>
              <li v-for='link in navigationLinks' :key='link.pageId'>
                <NuxtLink :to='`/${link.pageId}`'>{{ link.title }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class='pt-6 lg:pt-0 lg:pl-36'>
            <NuxtLink to='/anmeldung-helfer'>
              <FilledButton
                  text='Anmeldung Helfer'
                  class='block mt-3 w-full lg:w-72'
              ></FilledButton>
            </NuxtLink>
            <NuxtLink to='/newsletter'>
              <FilledButton
                  text='Newsletter abonnieren'
                  class='block mt-3 w-full lg:w-72'
              ></FilledButton>
            </NuxtLink>
            <a href='https://vereine.zkmf2024.ch/' target='_blank'>
              <FilledButton
                  text='Vereinsportal'
                  class='block mt-3 w-full lg:w-72'
              ></FilledButton>
            </a>
          </div>
        </div>
      </div>

      <div class='bg-blau w-full'>
        <div
            class='container mx-auto flex flex-wrap md:flex-nowrap px-5 py-4 justify-between items-center'
        >
          <div class='text-sm text-white'>
            © {{ currentYear }} — 31. Zürcher Kantonalmusikfest, Urdorf + Schlieren. Alle
            Rechte vorbehalten.
          </div>
          <div class='flex justify-end'>
            <a href="https://www.facebook.com/zkmf2024"><img src="/facebook.png" alt="Facebook"/></a>
            <a href="https://www.instagram.com/zkmf2024/"><img src="/instagram.png" alt="Instagram"/></a>
          </div>
        </div>

        <div class="md:hidden flex flex-col gap-8 px-5 pb-4">
          <a href="https://www.zkb.ch/sponsoring" target="_blank">
            <img
                src="/logos/zkb-footer.png"
                alt="ZKB"
                class="h-20 object-scale-down"
            />
          </a>

          <a href="https://www.zh.ch/de/direktion-der-justiz-und-des-innern/fachstelle-kultur.html" target="_blank">
            <img
                src="/logos/fachstellekultur-footer.png"
                alt="Kanton Zürich - Fachstelle Kultur"
                class="h-20 object-scale-down"
            />
          </a>

          <a href="https://www.zhbv.ch/" target="_blank">
            <img
                src="/logos/zbv-footer.png"
                alt="ZBV"
                class="h-20 object-scale-down"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">

import {MENU_ITEMS} from "~/types/types";

const currentYear = new Date().getFullYear()
const navigationLinks = MENU_ITEMS
</script>
