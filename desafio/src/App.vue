<template>
  <div id="app">
    <Header title="Aprendizagem Inteligente" />
    <Content />
  </div>
</template>

<script>
import Header from "./components/template/Header";
import Content from "./components/template/Content";

export default {
  name: "App",
  components: { Header, Content },
  data: function() {
    return {
      validatingToken: true,
    };
  },
  methods: {
    async validateToken() {
      this.validateToken = true;

      const json = localStorage.getItem("knowledge_user");
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validateToken = false;
        this.$router.push({ name: "auth" });
        return;
      }
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
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  color: #345;
}

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
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

@media (max-width: 500px) {
  .btn {
    font-size: 13px;
  }
}
</style>
