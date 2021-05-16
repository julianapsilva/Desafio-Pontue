<template>
<div>
    <p>Redação criada em {{data}} por {{aluno}}</p>
  <img :src="image" alt="">
</div>

</template>

<script>
import axios from "axios";
export default {
  name: "Redacao",
  props: ["id"],

  data: function() {
    return {
      data: "",
      image: "",
      aluno: ""
    };
  },

  methods: {
    async getImage() {
      console.log("entrou");
      let res = await axios.get(
        `https://desafio.pontue.com.br/redacao/${this.id}`
      );
      this.data = res.data.data.created_at
      this.image = res.data.data.urls[0].url;
      this.aluno = res.data.data.aluno.nome_completo
    },
  },
  mounted() {
    this.getImage();
  },
};
</script>

<style></style>
