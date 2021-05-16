import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isMenuVisible: false,
    user: null,

/*

    session: {
      logged: false,
      token: ''
    } 
  },
  getters: {
    // could use only this getter and use it for both token and logged
    session: state => state.session,
    // or could have both getters separated
    logged: state => state.session.logged,
    token: state => state.session.token
  
*/



  },
  mutations: {
    setUser(state,user){
      state.user = user
      if(user){
        axios.defaults.headers.common['Authorization'] = 'bearer ${user.token}'
        state.isMenuVisible = true
      }
      else{
        delete axios.defaults.headers.common['Authorization']
        state.isMenuVisible = false
      }
    }
  }


})