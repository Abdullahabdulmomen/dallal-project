<template>
  <header>
    <register />
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/icon/background\ for\ dallal.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

@media (max-width: 767.98px) {
  .main-box .login-word {
    font-size: 125%;
    margin-top: -8%;
  }

  .main-box .register-word {
    font-size: 125%;
    margin-top: -8%;
  }
}
</style>

<script>
import register from "@/components/register.vue";
export default {
  components: {
    register,
   
  },
};
</script>
