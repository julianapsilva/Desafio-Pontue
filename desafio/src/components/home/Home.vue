<template>
<div class="container">
<div class="demo" v-if="pronto">

  <!-- <div id="im" v-for="value in stat" :key="value">
       {{value.created_at}}
  </div> -->
 <div class="redacao-item" v-for="value in redacoes" :key="value">
     <img src="@/assets/editar.svg" height="150" width="150" alt="icon-redacao">
     <p>Redação criada em {{value.created_at}} </p>
       
  </div>
</div>
<div class="load-more">
  <button v-if="loadMore" @click="getRedacoes">Carregar Mais Redações</button>
</div>
<!-- <div>valor de pronto: {{pronto}}</div>
<div v-if="pronto">
  <div class="welcome"><strong>Bem vind@, {{info[0].aluno.nome_completo}}!</strong></div>
  <div class="demo">
    <div id="im" v-for="value in info" :key="value">
        <img :src="value.urls[0].url" alt="redacao-imagem">
    </div> -->


  </div>
  
</template>

<script>
import axios from 'axios'

//import PageTitle from "./components/template/PageTitle"

export default {
  name: 'Home',
  //components: {PageTitle}
  data: function(){
    return {
      stat: [],
      info: [],
      redacoes: [],
      pronto: false,
      loadMore: true,
      index: 3
    }
  },
  methods: {
    getStats(){
       axios.get("https://desafio.pontue.com.br/index/aluno/ef0c1f20-664a-11eb-9dbc-91c7d6b63ffc")
        .then( res => {
          this.stat = res.data.data 
          if(this.stat.length == 70){
            this.pronto = true
          this.getRedacoes()
          }})
        .catch(err => console.log(err))
        
    },
    async getInfoRedacoes(){
      for( let i = 0;i < 6; i++){
        let redacao_id = this.stat[i].id
        let conteudo = await  axios.get(`https://desafio.pontue.com.br/redacao/${redacao_id}`)
        this.info[i] = conteudo.data.data
       console.log(this.info[i].urls[0].url)
      }
      if(this.info.length == 6){
       // alert('PRONTO')
        this.pronto = true
      }
    },
    getRedacoes(){
      console.log(this.stat)
      this.redacoes = this.stat.slice(0,this.index)
      
      this.index += 3
      if(this.index == this.stat.length-1)
        this.loadMore = false

    }
  },
  mounted() {
        this.pronto = false,
    this.getStats(),
    this.index = 3
    
  
  }

}
</script>

<style>
.container{
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.demo{
  width: 100vh;
  overflow: hidden;
  /* justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap; */
}
.welcome {
  display: flex;
  justify-content:center;
  font-size: 30px;

}

.redacao-item{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
  padding: 20px;
}
.redacao-item p {
  margin-left: 20px;
}

.load-more{
  margin-top: 40px;
  display: flex;
    justify-content: center;
  align-items: center;
  margin-bottom: 60px;

}
</style>
