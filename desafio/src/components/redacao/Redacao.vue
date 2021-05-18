<template>
  <div>
    <p>Redação criada em {{ data }} por {{ aluno }}</p>
    <div class="container">
      <img :src="image" alt="" />
      <div class="buttons">
        <router-link :to="{ name: 'updateRedacao', params: { id: this.id } }">
          <button class="btn">Editar</button></router-link
        >
        <button class="btn" @click="deleteRedacao()">Deletar</button>
      </div>
    </div>
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
      aluno: "",
      deletada: false,
    };
  },

  methods: {
    async getImage() {
      let res = await axios.get(
        `https://desafio.pontue.com.br/redacao/${this.id}`
      );
      this.data = res.data.data.created_at;
      this.image = res.data.data.urls[0].url;
      this.aluno = res.data.data.aluno.nome_completo;
    },
    deleteRedacao() {
      const confirmar = window.confirm("Deseja realmente deletar?");
      if (confirmar) {
        axios
          .delete(`https://desafio.pontue.com.br/redacao/${this.id}/delete`)
          .then((this.deletada = true));
      }
      if (this.deletada) {
        window.location.href = "/";
      }
    },
  },
  mounted() {
    this.getImage();
  },
};
</script>

<style scoped>
p {
  margin-top: 30px;
  text-align: center;
}
img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.container {
  justify-content: center;
  column-gap: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid;
  margin: 200px;
  padding: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.buttons {
  margin-top: 20px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  /* margin-bottom: 40px; */
}
</style>
