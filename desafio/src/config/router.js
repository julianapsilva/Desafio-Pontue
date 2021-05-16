import Vue from "vue";
import VueRouter from "vue-router";

//import Home from '@/components/home/Home';
import Home from "@/components/home/Home";
import Auth from "@/components/auth/Auth";
import Redacao from "@/components/redacao/Redacao";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "auth",
    path: "/auth",
    component: Auth,
  },
  {
    path: '/redacao/:id',
    name: "redacao",
    component: Redacao,
    props: true
  },
];

export default new VueRouter({
  mode: "history",
  routes: routes,
});
