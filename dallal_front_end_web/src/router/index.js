import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Search from "../views/Search.vue";

import catagoriesProdect from "../views/catagoriesProdect.vue";  
import detailsAdsBox from "../views/detailsAdsBox.vue";
import addPost from "../views/addPost.vue";

import contactUs from  "../views/contactUs.vue";
import login from  "../views/login.vue";
import register from "@/components/register.vue";

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
    path: "/detailsAdsBox",
    name: "detailsAdsBox",
    component: detailsAdsBox,
  },
  {
    path: "/addPost",
    name: "addPost",
    component: addPost,
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
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
