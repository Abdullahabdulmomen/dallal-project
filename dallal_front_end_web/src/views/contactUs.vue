<template>

 <div class="wrap">

      <section class="box-information">
                <div class="overlay">
                    <div class="container">      
                      <contactFarm />
                    </div> 
                        

                </div>
                
        </section> 
   


    </div>

</template>


<style scoped>

  .box-information{
    margin-top: 5%;
    background-image: url(../assets/icon/06e8760a4f0b56dc846a6468c873697d0be7626d-280816105320.jpg);
    height: 1150px;
    -webkit-background-size:cover;
    -moz-background-size: cover;
    background-size: cover;
    position: relative;
    
}
.box-information .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffff;
    background-color: rgb(251 249 248 / 34%);
}
</style>

<script>
import contactFarm from "@/components/contactFarm.vue";
export default {
  name: "contactUs",
  data(){
      return{
          
      }
  },
  components: {
    contactFarm,
  },
};
</script>