<template>
     <div class="wrap">
        <section class="header">
          <div class="container">
              <searchBox/>
          </div>
        </section>
          <section class="catagories container">
            <span class="catagory-title">تصفح التصنيفات</span>
            <catagoriesIcon/>
          </section>
    

          <div class="ads-boxes">
              <div class="container">
                <span class="adds-title">الاعلانات الحديثة</span>
                <div class="row">
                <boxAds v-for = "boxAd in boxAds" 
                :key = "boxAd.id"
                :nameProduct = "boxAd.nameProduct"
                :price = "boxAd.price"
                :time = "boxAd.time"
                :zone = "boxAd.zone"
              />
              </div>
    
            </div>
          </div>
    </div>
</template>

<style scoped>
.header{
    background-image: url('~@/assets/icon/bg-header.jpg');
    height: 355px;    
}

.catagories{
    margin-top: 40px;
    height: auto; 
 }

.catagories .catagory-title{
    font-size: larger;
    font-weight: bold;  
}


.ads-boxes{
    margin-top: 100px;
}

.ads-boxes .adds-title{
    font-size: larger;
    font-weight: bold;
}

.ads-boxes .row{
    margin-top: 10px;
}


@media (min-width:992px) and (max-width:1200px){
    .container{
        max-width: 1200px;
    }
    .header .search-box{
        width: 39%;
    }
    .catagories .row{
        margin-right: 10px;
    }

    .ads-boxes .row .box{
        height: 255px;
    }
    .ads-boxes .row .card .card-body h5{
        font-size: 18px;
    }
    .ads-boxes .row .card .card-text{
        font-size: 20px;

    }
  
}

@media (min-width:768px) and (max-width:992px){
    .container{
        max-width: 992px;
    }
    .header .search-box{
        width: 45%;
    }

    .catagories .catagory-icons {
        margin-right: 0;  
    }


    .ads-boxes .row .box{
        width: 31%;
        height: 255px;
    }

    .ads-boxes .row .card .card-body h5{
        font-size: 18px;
    }
    .ads-boxes .row .card .card-text{
        font-size: 20px;

    } 
}

@media (min-width:576px) and (max-width:768px){
    .container{
        max-width: 768px;
    }
    .header{
        margin: auto;
    }
    .header .search-box{

        width: 55%;
    }

    .catagories .catagory-icons {
        margin-right: 0;  
    }
    

    .catagories .catagory-icons .icons {
        width: 33%;
    }

    .ads-boxes .row .box{
        width: 43%;
        height: 255px;
    }

    .ads-boxes .row .card .card-body h5{
        font-size: 18px;
    }
    .ads-boxes .row .card .card-text{
        font-size: 20px;

    }
    

}

@media (min-width:430px) and (max-width:576px){
    .container{
        max-width: 576px;
    }
    .header .search-box{
        width: 79%;
    }
    .header .search-box .select .dropdown-icon {
        position: absolute;
        width: 15px;
        height: 15px;
        left: 87px;
        bottom: 13px;
        z-index: 1;
        
    }

    .catagories{
        height: 260px;
    }
    
    .catagories .catagory-icons {
        margin-right: 0;     
    }
    
    .catagories .catagory-icons .icons {
        width: 33%;
    }
    
    .catagories .catagory-icons .icons .icon{
        width: 75px;
        height: 75px;
    }
    
    
    .catagories .catagory-icons .icons .icon img{
        right: 32px;
        top: 24px;
        width: 42px;
        height: 42px;
        z-index: 1;
    }
    
    .catagories .icons .icon-name{
        font-size: 18px;
        width: 100px;
        top: 95px;      
    }

    .ads-boxes{
        margin-top: 130px;
    }

    .ads-boxes .container{
        max-width: 900px;
    }

    .ads-boxes .row{
        margin-top: 0px;
    }

    .ads-boxes .row .box{
        width: 49%;
        margin-left: 0;
        height: 250px;
    }

    .ads-boxes .row .card {
        margin-left: 0;
    }

   
    .ads-boxes .row .card .card-body h5{
        font-size: 18px !important;


    }
    .ads-boxes .row .card .card-text{
        font-size: 16px !important;
    }

    .ads-boxes .row .card .time{
        font-size: 14px !important;
    }

}

@media (max-width:430px){
    .container{
        max-width: 400px;
    }
    .header .search-box{
        width: 79%;
    }
    .header .search-box .select .dropdown-icon {
        position: absolute;
        width: 15px;
        height: 15px;
        left: 87px;
        bottom: 13px;
        z-index: 1;
        
    }

    .catagories{
        height: 260px;
    }
    
    .catagories .catagory-icons {
        margin-right: 0;     
    }
    
    .catagories .catagory-icons .icons {
        width: 33%;
    }
    
    .catagories .catagory-icons .icons .icon{
        width: 75px;
        height: 75px;
    }
    
    
    .catagories .catagory-icons .icons .icon img{
        right: 32px;
        top: 24px;
        width: 42px;
        height: 42px;
        z-index: 1;
    }
    
    .catagories .icons .icon-name{
        font-size: 18px;
        width: 100px;
        top: 95px;      
    }

    .ads-boxes{
        margin-top: 130px;
    }


    .ads-boxes .row{
        margin-top: 0px;
    }

    .ads-boxes .row .box{
        width: 80%;
        margin-left: 0;
        height: 260px;
    }

    .ads-boxes .row .card {
        margin-left: 0;
    }

    .ads-boxes .row .card .card-body h5{
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 20px;
        font-weight: bold;
    
    }
    .ads-boxes .row .card .card-text{
        position: absolute;
        right: 10px;
        bottom: 2px;
        font-size: 22px;
        font-weight: bold;
        z-index: 1;
    }
    
    .ads-boxes .row .card .time{
        font-size: 15px;
        position: absolute;
        left: 15px;
        bottom: 5px;
        z-index: 1;
    }
}

</style>


<script>
import searchBox from "@/components/home/searchBox.vue";
import catagoriesIcon from "@/components/global/catagoriesIcon.vue";
import boxAds from "@/components/global/boxAds.vue";
import boxAdsjson from "@/json/boxAds.json";
export default {
  name: "Home",
  data(){
      return{
        boxAds: boxAdsjson,   
      }
  },
  components: {
    searchBox,
    catagoriesIcon,
    boxAds,
  },
};
</script>
