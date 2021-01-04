import Vue from "vue";
import VueRouter from "vue-router";
import Portfolio from "@/components/Portfolio";
import Offer from "@/components/Offer";
import Contact from "@/components/Contact";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/offer",
    name: "Offer",
    component: Offer,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
