<template>
  <div
      class='prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau'
  >
    <h2 class='text-blau'>Sponsoring</h2>
    <nuxt-img
        src='/frontpage-3.jpg'
        quality='95'
        class='max-w-full lg:w-1/2 lg:ml-8 hidden lg:block'
    />

    <p>
      Unseren Sponsoren bieten wir eine ideale Plattform, ihre Produkte und
      Dienstleistungen einem breiten Publikum in einer pulsierenden und
      aufstrebenden Region zu präsentieren. Ihr Beitrag wird sich auszahlen,
      allen Besucherinnen und Besuchern in Erinnerung bleiben und dem Fest einen
      unverwechselbaren Charakter verleihen. Gemeinsam profitieren alle!
    </p>

    <h3 class='text-blau'>Flyer</h3>
    <p>Laden Sie hier unseren <a href='/sponsoring/sponsoring-flyer.pdf' target='_blank'>Sponsoring Flyer</a> herunter.</p>

    <h3 class='text-blau'>Kontakt</h3>
    <p>
      Bei Interesse melden Sie sich bitte
      <a href='mailto:sponsoring@zkmf2024.ch'>hier</a>.
    </p>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Sponsoring',
  meta: [{
    name: 'description',
    content: 'Unseren Sponsoren bieten wir eine ideale Plattform, ihre Produkte und Dienstleistungen einem breiten Publikum in einer pulsierenden und aufstrebenden Region zu präsentieren.'
  }],
})
</script>
