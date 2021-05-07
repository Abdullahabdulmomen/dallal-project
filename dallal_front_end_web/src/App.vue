<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style scoped>

</style>

<script>
import Navbar from "@/components/global/Navbar.vue";
import navbarUser from "@/components/user/navbarUser.vue";
import Footer from "@/components/global/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    navbarUser
  },
};
</script>