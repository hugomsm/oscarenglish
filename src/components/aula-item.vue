<template>
  <div>
  <q-collapsible group='aulas' class='bg-grey-2 q-title text-center shadow-6' header-class='q-title' image='assets/icone-aula-oscar.png' :label='aulaSelecionada.tituloAula' :sublabel='aulaSelecionada.descricao'>
      <q-card class='bg-white q-pa-md shadow-6'>
        <q-btn class='cor-oscarenglish text-white shadow-6 q-mb-xs' size=lg @click='navigateToAula'>
          COMEÇAR AULA
        </q-btn>
        <hr>
        <p class=''> Bons estudos! </p>
      </q-card>
    </q-collapsible>
  </div>
</template>

<script>
export default {
  props: ["aulaSelecionada"],
  data() {
    return {
      // icone: function() {
      //   if (this.aulaSelecionada.status === 1) {
      //     return "done_outline";
      //   } else if (this.aulaSelecionada.status === 0) {
      //     return "change_history";
      //   }
      // },

      /* eslint-disable global-require */
      imagem: require("../assets/aula.png")
    };
  },
  methods: {
    navigateToAula() {
      const id = this.aulaSelecionada.idAula.toString();
      const url = `class/${id}`;
      this.$router.push(`${url}`);
    }
  }
};
</script>

<style>
.cor-oscarenglish {
  background: #2c2f91;
}
.q-item-sublabel scoped {
  color: black;
  text-align: center;
}

.q-item-label scoped {
  color: black;
  text-align: center;
}
</style>
