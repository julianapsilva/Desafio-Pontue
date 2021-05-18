<template>
  <div class="container">
    <div class="welcome">
      <strong>Bem vind@, {{ aluno }}!</strong>
    </div>
    <div class="description">
      <p>Confira suas redações já enviadas</p>
      <router-link to="/novaredacao">
        <button class="btn">Enviar nova redação</button>
      </router-link>
    </div>
    <div class="demo" v-if="pronto">
      <div class="redacao-item" v-for="value in redacoes" :key="value.id">
        <router-link :to="{ name: 'redacao', params: { id: value.id } }">
          <img
            src="@/assets/editar.svg"
            height="150"
            width="150"
            alt="icon-redacao"
          />
          <p>Redação criada em {{ value.created_at }}</p>
        </router-link>
      </div>
    </div>

    <div class="load-more">
      <button v-if="loadMore" @click="getRedacoes">
        Carregar Mais Redações
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

//import PageTitle from "./components/template/PageTitle"

export default {
  name: "Home",
  //components: {PageTitle}
  data: function() {
    return {
      stat: [],
      info: [],
      redacoes: [],
      pronto: false,
      loadMore: true,
      index: 3,
      aluno: "",
    };
  },
  methods: {
    async getStats() {
      axios.get(
          `https://desafio.pontue.com.br/index/aluno/${this.$store.state.userId}`
        )
        .then((res) => {
          this.stat = res.data.data;
          if (this.stat.length >= 3) {
            this.pronto = true;
            this.getRedacoes();
          }
          if (this.stat.length >= 1) {
            axios.get(`https://desafio.pontue.com.br/redacao/${this.stat[0].id}`)
              .then((val) => (this.aluno = val.data.data.aluno.nome_completo));
          }
        })
        .catch((err) => console.log("ERRO: ", err));
    },
    getRedacoes() {
      this.redacoes = this.stat.slice(0, this.index);
      this.index += 3;
      if (this.index == this.stat.length - 1) 
      this.loadMore = false;
    },
  },
  mounted() {
    (this.pronto = false), 
    this.getStats(), 
    (this.index = 3);
  },
};
</script>

<style>
.container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.demo {
  width: 100vh;
  overflow: hidden;
  /* justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap; */
}
.welcome {
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 40px;
}

.redacao-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
}
.redacao-item:hover {
  transform: scale(1.1);
}
.redacao-item p {
  margin-left: 20px;
}

.load-more {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
background: red;
  
}

.load-more:hover{
  transform: scale(1.2);
}

.description {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
</style>
