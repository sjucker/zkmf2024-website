<script setup lang="ts">
const end = new Date(2024, 5, 21, 17, 30)

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const ended = ref(false)

tick()

function tick() {
  const now = new Date()
  if (now > end) {
    ended.value = true
  } else {
    const secondsLeft = Math.floor((end.getTime() - now.getTime()) / 1000)

    days.value = Math.floor(secondsLeft / 86400)
    hours.value = Math.floor((secondsLeft - 86400 * days.value) / 3600)
    minutes.value = Math.floor((secondsLeft - 86400 * days.value - 3600 * hours.value) / 60)
  }
}

useIntervalFn(() => {
  tick()
}, 10000)
</script>

<template>
  <div v-if="ended"></div>
  <div v-else class="flex flex-row gap-6 justify-center mb-6">
    <div>
      <NumberBlock :val="days" desc="Tage" />
    </div>
    <div>
      <NumberBlock :val="hours" desc="Std" />
    </div>
    <div>
      <NumberBlock :val="minutes" desc="Min" />
    </div>
  </div>
</template>

<style scoped></style>
