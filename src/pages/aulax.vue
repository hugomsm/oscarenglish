<template>
  <q-page padding>
    <q-video  :src='aulas[0].video'></q-video>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      aulas: [
        {
          idAula: 1,
          tituloAula: "Verbo To Be",
          descricao: "Aprenda o verbo To Be",
          video: "https://www.youtube.com/embed/VaJ1MUI-Ovw",
          conteudo: "",
          status: 0
        }
      ]
    };
  }
};
</script>

<style>
</style>
