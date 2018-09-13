<template>
  <q-page padding>
    {{aulas[$route.params.id-1].tituloAula}}
    <q-video  :src='aula.video' style="width: 100%; height: 300px"></q-video>
  </q-page>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      aula: {
        idAula: 1,
        tituloAula: "Verbo To Be",
        descricao: "Aprenda o verbo To Be",
        video: "https://www.youtube.com/embed/VaJ1MUI-Ovw",
        conteudo: "",
        status: 0,
        blocked: false
      },
      aulas: [
        {
          idAula: 1,
          tituloAula: "Verbo To Be",
          descricao: "Aprenda o verbo To Be",
          video: "https://www.youtube.com/embed/VaJ1MUI-Ovw",
          conteudo: "",
          status: 0,
          blocked: false
        },
        {
          idAula: 2,
          tituloAula: "Verbo To Be 2",
          descricao: "Aprenda o verbo To Be 2",
          video: "https://www.youtube.com/embed/VaJ1MUI-Ovw",
          conteudo: "",
          status: 0,
          blocked: false
        }
      ]
    };
  },
  mounted() {
    // SELECT * FROM aula WHERE id_aula = :id
    // obj this.aula = objeto do bd com o id
  }
};
</script>

<style>
</style>
