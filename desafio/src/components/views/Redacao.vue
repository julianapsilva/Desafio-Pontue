<template>
  <div>
    <p>Redação criada em {{ date }} por {{ aluno }}</p>
    <div class="container">
      <img :src="image" alt="" />
      <div class="buttons">
        <router-link :to="{ name: 'updateRedacao', params: { id: this.id } }">
          <button class="btn">Editar</button></router-link
        >
        <button id="delete" class="btn" @click="deleteRedacao()">
          Deletar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import api from "@/config/services";
export default {
  name: "Redacao",
  props: ["id"],

  data: function() {
    return {
      date: "",
      image: "",
      aluno: "",
      deletada: false,
    };
  },

  methods: {
    async getImage() {
      let res = await api.get(`/redacao/${this.id}`);
      this.date = this.format_date(res.data.data.created_at);
      this.image =
        res.data.data.urls.length == 2
          ? res.data.data.urls[1].url
          : res.data.data.urls[0].url;
      this.aluno = res.data.data.aluno.nome_completo;
    },
    deleteRedacao() {
      const confirmar = window.confirm("Deseja realmente deletar?");
      if (confirmar) {
        api.delete(`/redacao/${this.id}/delete`).then((this.deletada = true));
      }
      if (this.deletada) {
        alert(
          "Redação deletada com sucesso! Você será redirecionado para a página inicial."
        );
        setTimeout(function() {
          window.location.href = "/";
        }, 2000);
      }
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm");
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
  margin-top: 40px;
}

.container {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  padding: 0px;
  margin-top: 40px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: center;
  background: #f5f5f5;
  overflow: hidden;
}
.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.buttons button {
  padding-left: 350px;
  padding-right: 350px;
}

#delete {
  margin-top: 40px;
  margin-bottom: 100px;
}

@media (max-width: 800px) {
  p {
    margin-left: -30px;
    font-size: 11px;
  }
  .buttons button {
    padding-left: 110px;
    padding-right: 110px;
  }
  .container {
    grid-template-columns: 0.95fr;
  }
}
</style>
