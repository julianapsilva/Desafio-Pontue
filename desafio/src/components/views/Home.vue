<template>
  <div class="container">
    <div class="welcome">
      <strong>Olá, {{ aluno }}! </strong>
    </div>
    <div class="description">
      <p id="p-description">Confira suas redações já enviadas</p>
      <router-link to="/novaredacao">
        <button id="button-description" class="btn">Enviar nova redação</button>
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
          <p>Redação criada em {{ format_date(value.created_at) }}</p>
        </router-link>
      </div>
    </div>

    <div class="load-more">
      <button class="btn" v-if="loadMore" @click="getRedacoes">
        Carregar Mais Redações
      </button>
    </div>
  </div>
</template>

<script>

import api from "@/config/services"
  import moment from 'moment'

export default {
  name: "Home",
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
      api.get(
          `/index/aluno/${this.$store.state.userId}`
        )
        .then((res) => {
          this.stat = res.data.data;
          if (this.stat.length >= 3) {
            this.pronto = true;
            this.getRedacoes();
          }
          if (this.stat.length >= 1) {
            api.get(`/redacao/${this.stat[0].id}`)
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
    format_date(value){
         if (value) {
           return moment(String(value)).format('DD/MM/YYYY hh:mm')
          }
      },
  },
  mounted() {
    // (this.pronto = false)
    this.getStats()
    // (this.index = 3);
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
  margin-top: 15px;
  margin-left: -50px;
}

.load-more {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  
}

.description {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

@media (min-width: 1500px){
  #p-description{
    margin-left: 200px;
    margin-bottom: -10px;
  }

  #button-description{
    margin-right: 200px;
    margin-bottom: -5px;
  }

}

@media (max-width: 800px){
    .demo{
    width: 50vh;
  }
}
</style>
