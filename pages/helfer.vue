<template>
  <div
      class='prose prose-img:rounded-lg lg:max-w-none lg:prose-img:float-right prose-a:text-blau'
  >
    <h2 class='text-blau'>Helferinnen und Helfer</h2>
    <NuxtImg
        src='/helfer.jpg'
        quality='93'
        class='max-w-full lg:w-1/2 lg:ml-8 hidden lg:block'
        alt='Wir suchen Helfer'
    />
    <NuxtLink to='/anmeldung-helfer'>
      <button class='bg-blau text-white py-3 px-8 rounded-2xl'>Jetzt anmelden!</button>
    </NuxtLink>
    <p>
      Das Zürcher Kantonalmusikfest 2024 lebt dank dem Einsatz von rund 500
      freiwilligen Helferinnen und Helfern. Werde Teil dieses tollen
      Grossanlasses und unterstütze das Organisationskomitee tatkräftig bei der
      Vorbereitung und Durchführung eines erinnerungsträchtigen Musikevents!
    </p>
    <p>
      Für die Tage vor und nach dem Festwochenende und am Festwochenende vom <b>21. Juni bis 23. Juni
      2024</b> suchen wir Einzelhelfer und Vereine, die uns beim Auf- und Abbau, in der Festwirtschaft, beim
      musikalischen Wettbewerb und mit weiteren Tätigkeiten unterstützen. Jeder Beitrag ist willkommen!
    </p>
    <p>
      Natürlich gibt es einen finanziellen Zustupf für Dich oder Deine Vereinskasse und für Dein Wohl mit
      Speis und Trank ist gesorgt.
    </p>
    <p>
      <NuxtLink to='/anmeldung-helfer'>Melde Dich noch heute hier an</NuxtLink>, stelle Deine Fähigkeiten und Kenntnisse in
      den Dienst eines grossen verbindenden Fests für Jung und Alt und hilf uns
      dabei, die Blasmusik von ihrer besten Seite zu präsentieren. Das
      Organisationskomitee freut sich auf die Zusammenarbeit mit Dir!
    </p>
    <p>Für Fragen kontaktiere uns bitte unter <a href='mailto:personal@zkmf2024.ch'>personal@zkmf2024.ch</a>.</p>

    <h3 class='text-blau'>Flyer</h3>
    Laden Sie hier unseren <a href='/helfer/helfersuche-flyer.pdf' target='_blank'>Flyer Helfersuche</a> herunter.
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Helfer',
  meta: [{
    name: 'description',
    content: 'Das Zürcher Kantonalmusikfest 2024 lebt dank dem Einsatz von rund 500 freiwilligen Helferinnen und Helfern.'
  }],
})
</script>
