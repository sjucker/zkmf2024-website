<script setup lang="ts">
const props = defineProps<{
  val: number
  desc: string
}>()

const first = props.val < 10 ? 0 : Math.floor(props.val / 10)
const second = props.val % 10
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-0.5">
      <div class="bg-rot w-8 py-1 text-white font-bold rounded text-center">{{ first }}</div>
      <div class="bg-rot w-8 py-1 text-white font-bold rounded text-center">{{ second }}</div>
    </div>
    <div class="text-xs">{{ desc }}</div>
  </div>
</template>

<style scoped></style>
