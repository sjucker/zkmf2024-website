<template>
  <div class="invisible xl:visible absolute top-0 right-0 bg-silber py-6 px-6 rounded-b-2xl">
    <div class="text-blau font-medium text-lg">
      <NuxtLink v-for="link in navigationLinks" :to="`/${link.pageId}`" :key="link.pageId" class="mx-4 hover:text-white">
        {{ link.title }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MENU_ITEMS } from '~/types/types'

const navigationLinks = MENU_ITEMS
</script>
