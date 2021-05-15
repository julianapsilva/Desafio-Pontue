import Vue from 'vue'
import VueRouter from 'vue-router'

//import Home from '@components/home/Home'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

const routes = [
  /*{
  name: 'home',
  path: '/',
  component: Home
} , */{
  name: 'auth',
  path: '/auth',
  component: Auth
}

]

export default new VueRouter({
  mode: 'history',
  routes: routes
})

