import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Search from "../views/Search.vue";
import catagoriesProdect from "../views/catagoriesProdect.vue";  
import contactUs from  "../views/contactUs.vue";
import login from  "../views/login.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },


  {
    path: "/catagoriesProdect",
    name: "catagoriesProdect",
    component: catagoriesProdect,

  },
  {

    path: "/contactUs",
    name: "contactUs",
    component: contactUs,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
