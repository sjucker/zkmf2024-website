<script setup lang="ts">
const today = new Date()
if (today > new Date(2024, 6, 22, 23, 59, 59)) {
  await navigateTo('/info/unterhaltung/sonntag')
} else if (today > new Date(2024, 6, 22, 17, 30)) {
  await navigateTo('/info/unterhaltung/samstag-abend')
} else if (today > new Date(2024, 6, 21, 59, 59)) {
  await navigateTo('/info/unterhaltung/samstag-tag')
} else {
  await navigateTo('/info/unterhaltung/freitag-abend')
}
</script>
