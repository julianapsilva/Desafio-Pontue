import Vue from "vue";
import VueRouter from "vue-router";

//import Home from '@/components/home/Home';
import Home from "@/components/home/Home";
import Auth from "@/components/auth/Auth";
import Redacao from "@/components/redacao/Redacao";
import CreateRedacao from "@/components/CreateRedacao"
import UpdateRedacao from "@/components/UpdateRedacao"

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
  {
    path: '/novaredacao',
    name: "CreateRedacao",
    component: CreateRedacao,
  },
  {
    path: '/update-redacao/:id',
    name: "updateRedacao",
    component: UpdateRedacao,
    props: true

  }
];

export default new VueRouter({
  mode: "history",
  routes: routes,
});
