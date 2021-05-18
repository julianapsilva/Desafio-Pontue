<template>
<div class="auth-content">
  <div class="auth-modal"> 
    <h1 class="auth-title">Login </h1>

    <input v-model="user.email" name="email" type="email" placeholder="E-mail">
    <input v-model="user.password" name="password" type="password" placeholder="Senha">
    <button @click="signin">Entrar</button>

  </div>
</div>
  
</template>

<script>
import api from "@/config/services"
export default {
  name: 'Auth',
  data: function(){
    return {
      user: {
      }
    }
  },
  methods: {
    async signin(){
     try {
       console.log(this.user)
       let res = await api.post('/auth/login', this.user)
        this.$store.commit('setUser', res.data)
          localStorage.setItem('knowledge_user', JSON.stringify(res.data))
          this.$router.push({path: '/'})
          alert("FUNCIONOU")
  } 
  catch (error) {
    alert("ERRO LOGIN: ",  error)
  } }
}

} 
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #FFF;
  width: 350px;
  padding: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>