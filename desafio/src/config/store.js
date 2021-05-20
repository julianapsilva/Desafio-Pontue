import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      if (user) {
        state.userId = user.aluno_id;
        window.localStorage.token = `Bearer ${user.access_token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    },
  },
});
