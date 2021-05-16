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
import {userKey} from '@/global'
import axios from 'axios'
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
       let res = await axios.post('https://desafio.pontue.com.br/auth/login', this.user)
        this.$store.commit('setUser', res.data)
          localStorage.setItem(userKey, JSON.stringify(res.data))
          this.$router.push({path: '/'})
          alert("FUNCIONOU")
  } 
  catch (error) {
    alert(error)
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