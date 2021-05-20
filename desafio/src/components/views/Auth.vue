<template>
  <div class="auth-content">
    <div class="auth-modal">
      <h1 class="auth-title">Login</h1>

      <input
        v-model="user.email"
        name="email"
        type="email"
        placeholder="E-mail"
      />
      <input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <button class="btn" @click="signin">Entrar</button>
    </div>
  </div>
</template>

<script>
import api from "@/config/services";
export default {
  name: "Auth",
  data: function() {
    return {
      user: {},
    };
  },
  methods: {
    async signin() {
      if (this.user.email == null || this.user.password == null) {
        alert("Todos os campos são obrigatórios!");
      } else {
        try {
          let res = await api.post("/auth/login", this.user);
          this.$store.commit("setUser", res.data);
          localStorage.setItem("knowledge_user", JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        } catch (error) {
          alert("Não foi possível acessar: ", error);
        }
      }
    },
  },
};
</script>

<style>
.auth-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background: #f5f5f5;
  width: 350px;
  padding: 100px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.4rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 30px;
}

.auth-modal input {
  border: 1px solid #bbb;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.auth-modal input:nth-child(3) {
  margin-bottom: 0px;
}
</style>
