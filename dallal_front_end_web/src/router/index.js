import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Search from "../views/Search.vue";

import catagoriesProdect from "../views/catagoriesProdect.vue";  
import detailsAdsBox from "../views/detailsAdsBox.vue";
import addPost from "../views/addPost.vue";

import contactUs from  "../views/contactUs.vue";
import login from  "../views/login.vue";
import register from "../views/register.vue";
import usageInstructions from "../views/usageInstructions.vue";
import privacyPolicy from "../views/privacyPolicy.vue";
import howToRegister from "../views/howToRegister.vue";
import howToPostMyAd from "../views/howToPostMyAd.vue";
import whyAccountSuspended from "../views/whyAccountSuspended.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/User",
    name: "User",
    component: User,
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
  {
    path: "/usageInstructions",
    name: "usageInstructions",
    component: usageInstructions,
  },
  {
    path: "/privacyPolicy",
    name: "privacyPolicy",
    component: privacyPolicy,
  },
  {
    path: "/howToRegister",
    name: "howToRegister",
    component:howToRegister,
  },
  {
    path: "/howToPostMyAd",
    name: "howToPostMyAd",
    component:howToPostMyAd,
  },
  {
    path: "/whyAccountSuspended",
    name: "whyAccountSuspended",
    component:whyAccountSuspended,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
