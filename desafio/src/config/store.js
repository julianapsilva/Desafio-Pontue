import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    userId: "",
    isMenuVisible: false,
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      if (user) {
        state.userId = user.aluno_id;
        //axios.defaults.headers.common["Authorization"] = `bearer ${user.access_token}`;
        window.localStorage.token = `Bearer ${user.access_token}`;
        state.isMenuVisible = true;
      } else {
        delete axios.defaults.headers.common["Authorization"];
        state.isMenuVisible = false;
      }
    },
  },
});
