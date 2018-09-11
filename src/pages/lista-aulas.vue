<template>
  <q-page padding>
  <p class='q-title text-center'>CLASS LIST</p>
            <q-list no-border>
          <aula-item v-for='aula in aulas' :key='aula.idAula' :aulaSelecionada='aula' class='q-pa-md'>
          </aula-item>
          <aula-item :aulaSelecionada='emBreve' class='q-pa-md' disabled=true>
          </aula-item>
          </q-list>
  </q-page>
</template>

<script>
import AulaItem from "../components/aula-item.vue";
export default {
  data() {
    return {
      aulas: [
        {
          idAula: 1,
          tituloAula: "To Be",
          descricao: "Learn verb To Be",
          status: 0
        }
      ],
      emBreve: {
          idAula: -1,
          tituloAula: 'Coming Soon',
          descricao: 'Coming Soon',
        },
    };
  },
  components: {
    aulaItem: AulaItem
  }
};
</script>
  
<style>
</style>
