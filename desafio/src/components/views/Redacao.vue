<template>
  <div>
    <p>Redação criada em {{ data }} por {{ aluno }}</p>
    <div class="container">
      <img :src="image" alt="" />
      <div class="buttons">
        <router-link :to="{ name: 'updateRedacao', params: { id: this.id } }">
          <button class="btn">Editar</button></router-link
        >
        <button id="delete" class="btn" @click="deleteRedacao()">Deletar</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/config/services"
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
      let res = await api.get(
        `/redacao/${this.id}`
      );
      this.data = res.data.data.created_at;
      this.image = res.data.data.urls[0].url;
      this.aluno = res.data.data.aluno.nome_completo;
    },
    deleteRedacao() {
      console.log(this.deletada)
      const confirmar = window.confirm("Deseja realmente deletar?");
      if (confirmar) {
        api
          .delete(`/redacao/${this.id}/delete`)
          .then((this.deletada = true));
      }
      if (this.deletada) {
        alert("Redação deletada com sucesso! Você será redirecionado para a página inicial.")
        setTimeout(function(){
          window.location.href = "/"
        }, 1000)
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
/* img {
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}  */

.container {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  
  padding: 0px;
  margin-top: 40px;
  margin-bottom: 20px; 
  display: grid;
  grid-template-columns: 900px;
  justify-content:center;
  background: #F5F5F5;
  overflow: hidden;
}
.buttons {
  margin-top: 20px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  /* padding-bottom: 100px; */
  /* margin-bottom: 40px; */
}



</style>
