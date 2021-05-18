import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/views/Home";
import Auth from "@/components/views/Auth";
import Redacao from "@/components/views/Redacao";
import CreateRedacao from "@/components/views/CreateRedacao";
import UpdateRedacao from "@/components/views/UpdateRedacao";

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
    path: "/redacao/:id",
    name: "redacao",
    component: Redacao,
    props: true,
  },
  {
    path: "/novaredacao",
    name: "CreateRedacao",
    component: CreateRedacao,
  },
  {
    path: "/update-redacao/:id",
    name: "updateRedacao",
    component: UpdateRedacao,
    props: true,
  },
];

export default new VueRouter({
  mode: "history",
  routes: routes,
});
