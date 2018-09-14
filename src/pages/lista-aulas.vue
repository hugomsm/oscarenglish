<template>
  <q-page padding>
  <p class='q-title text-center'>CLASS LIST</p>
            <q-list no-border>
          <aula-item v-for='aula in aulas' :key='aula.idAula' :disabled='aula.block' :aulaSelecionada='aula' class='q-pa-md'>
          </aula-item>
          <aula-item :aulaSelecionada='emBreve' class='q-pa-md disabled'>
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
          status: 0,
          block: false
        },
        {
          idAula: 2,
          tituloAula: "Verbo To Be 2",
          descricao: "Aprenda o verbo To Be 2",
          status: 0,
          block: false
        }
      ],
      emBreve: {
        idAula: -1,
        tituloAula: "Coming Soon",
        descricao: "Coming Soon",
        status: 0,
        block: true
      }
    };
  },

  created() {
    // chamar os dados do Back e jogar no localstorage
    // this.aulas = $q.get()
  },
  mounted() {
    for (let i = 1; i < this.aulas.length; i++) {
      if (this.aulas[i - 1].status != "1") {
        this.aulas[i].block = true;
      }
    }
  },
  components: {
    aulaItem: AulaItem
  }
};
</script>
  
<style>
.q-icon {
  color: #2c2f91;
}
p {
  color: #2c2f91;
}
</style>
