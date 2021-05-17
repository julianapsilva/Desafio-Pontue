<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header title="Pontue - Aprendizagem Inteligente" />
    <!-- <Menu v-if="user" /> -->
    <Content />
  </div>
</template>

<script>
import axios from "axios";
import { userKey } from "@/global";
import { mapState } from "vuex";
import Header from "./components/template/Header";
// import Menu from "./components/template/Menu";
import Content from "./components/template/Content";

axios.interceptors.request.use(
  async (config) => {
    const json = await localStorage.getItem(userKey);
    const userData = JSON.parse(json);

    const userToken = userData.access_token;
    config.headers.Authorization = `Bearer ${userToken}`;

    return config;
  },
  (error) => {
    // I cand handle a request with errors here
    return Promise.reject(error);
  }
);

export default {
  name: "App",
  components: { Header, Content },
  computed: mapState(["isMenuVisible", "user"]),
  data: function() {
    return {
      validatingToken: true,
    };
  },
  methods: {
    async validateToken() {
      this.validateToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validateToken = false;
        this.$router.push({ name: "auth" });
        return;
      }
      //const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

      //faltou o IF/ ELSE AULA 1 DE TOKEN
      this.$store.commit("setUser", userData);

      this.validateToken = false;
    },
  },
  created() {
    this.validateToken();
  },
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}
body {
  margin: 0;
  color: #345;
}

#app {
  height: 100vh;
  display: grid;
  /* grid-template-rows: 60px 1fr 40px; */
  grid-template-columns:  1fr;
  grid-template-areas:
    "header header"
    "content content";
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #345;
}
img {
  max-width: 100%;
  display: block;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  cursor: pointer;
}
.btn:hover {
  transform: scale(1.1);
}
</style>
