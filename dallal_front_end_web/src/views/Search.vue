<template>  
      <div class="wrap">      
        <section class="nav-footer">
          <div class="container">           
          <div class="row">
              
              <div class="search">  
                  <input class="input form-control bg-white" type="search" placeholder="عن ماذا تبحث" value=""  aria-label="Search">
              </div>           
              <div class="select">
                  <select class="form-control">
                    <option selected>في كل مكان</option>
                    <option value="">تعز</option>
                    <option value="">اب</option>
                    <option value="">صنعاء</option>
                    <option value="">عدن</option>
                    <option value="">ماب</option>
                    <option value="">شبوة</option>
                  </select>
          </div>   
          <div class="button">
              <button type="submit" class="btn">ابحث</button>
          </div> 
          </div>
        </div>
        </section>

    <section class="catagories container">
     <catagoriesIcon/>
    </section>
    
          <section class="content">
            <div class="container">
              <div class="row">

                <div class="filter-box">
                    <div class="filter-border">
                        <div class="price">
                          <h5>السعر</h5>
                          <input class="input-number form-control bg-white" type="number" placeholder="اقل" value="" aria-label="Search">
                          <input class="input-number form-control bg-white" type="number" placeholder="اكثر" value=""  aria-label="Search">
                        </div>
                      <div class="filter">
                          <h5>فلترة</h5>
                          <div class="choose">
                            <input class="btn" type="checkbox" value=""><span>الكل</span>
                          </div>
                          <div class="choose">
                            <input class="btn" type="checkbox" value=""><span>في الامس</span>
                          </div>
                          <div class="choose">
                            <input class="btn" type="checkbox" value=""><span>الاسبوع الماضي</span>
                          </div>
                          <div class="choose">
                            <input class="btn" type="checkbox" value=""><span>قبل شهر</span>
                          </div>
                      </div>
                    </div>
                    <div class="submit-filter">
                      <button type="submit" class="button btn" >ابحث</button>
                    </div>
                </div>

                  <div class="ads-boxes">
                    <div class="row">
                      <boxAds/>
                      <boxAds/>
                      <boxAds/>
                      <boxAds/>
                      <boxAds/>
                      <boxAds/>
                      <boxAds/>
                      <boxAds/>
                </div>
            </div>
    </div>
  </div>
</section>
</div>

</template>

<style scoped>
.nav-footer{
    height: 70px;
    padding: 14px;
    background-color: #364C63;
}
.nav-footer .row .search{
    width: 55%;
}

.nav-footer .row .search input{
    width: 100%;
    padding: 8px;
    padding-right: 32px;
    background-image: url('~@/assets/icon/search-24px.svg');
    background-position: right .65rem center;
    background-repeat: no-repeat;
}

.nav-footer .row .select {
    position: relative;
    width: 23%;
    margin-right: 1%;
}

.nav-footer .row .select .form-control{
    width: 100%;
    padding: 8px;
    padding-right: 32px;
    background-image: url('~@/assets/icon/dropdown.svg');
    background-position: left .60rem center;
    background-repeat: no-repeat;   
}

.nav-footer .row .select .map-icon {
    position: absolute;
    width: 18px;
    height: 18px;
    left:224px;
    bottom: 12px;
    z-index: 1;    
}


.nav-footer .row .button{
    width: 18%;
    margin-right: 3%;
}

.nav-footer .row button{
    width: 100%;
    background-color: #F3B340 ;
    color: #364C63;
}


 .content .filter-box {
    width: 24%;
    height: 425px;
    margin-top: 80px;
 }


 .content .filter-box .filter-border{
    padding: 20px 20px 20px 0;
    border: 1px solid #364C63;
    border-radius: 7px;
 }

 .content .filter-box .filter-border .input-number{
    width: 40%;
    height: 41px;
    display: inline-block;
    margin-left: 12px;
    margin-top: 10px;
 }
 

 .content .filter-box .filter{
    margin-top: 70px;
 }

 .content .filter-box .filter h5{
     margin-bottom: 20px;
     font-size: 20px;
 }
 .content .filter-box .filter .choose{
     margin-top: 10px;
 }

 .content .filter-box .filter .choose span{
    margin-right: 15px;
    font-size: 17px;
    cursor: pointer;
 }

 .content .filter-box .submit-filter {
     margin-top: 15px;
 }

 .content .filter-box .submit-filter .button{
    width: 100%;
    background-color: #364C63;
    color: white;
 }


.content .ads-boxes {
   width: 74%;
   margin-top: 40px; 
}

.content .ads-boxes .box{
    width: 33%;
    margin-top: 40px;
}

.content .ads-boxes .card{
    border-radius: 15px;
    position: relative;
    width: 99%;
    height: 260px;
    margin-left: 50px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);    
}

.content .ads-boxes .card .inner{
    height: 165px;
    overflow: hidden;
    
}
.content .ads-boxes .card .inner img {
    transition: all 1.5s ease;
    height: 100%;
}
.ads-boxes .card .inner:hover img{
    transform: scale(1.5);

}

.content .ads-boxes .card .favorite-icon{
    position: absolute;
    width: 50px;
    height: 50px;
    top: 5px;
    right: 5px;
    z-index: 2;
}

.content .ads-boxes .card .card-body{
    position: relative;
}

.content .ads-boxes .card .card-body h5{
    position: absolute;
    right: 10px;
    top: 15px;
    font-size: 20px;
    font-weight: bold;

}
.content .ads-boxes .card .card-text{
    position: absolute;
    right: 10px;
    bottom: 2px;
    font-size: 22px;
    font-weight: bold;
    z-index: 1;
}

.content .ads-boxes .card .time{
    position: absolute;
    left: 12px;
    bottom: 5px;
    z-index: 1;
}



@media (min-width:992px) and (max-width:1200px){
    .container{
        max-width: 1200px;
    }

    .catagories .row{
        margin-right: 10px;
    }
    .content .ads-boxes .row .box{
        height: 255px;
    }

    .content .ads-boxes .row .card .card-body h5{
        font-size: 18px;
    }
    .content .ads-boxes .row .card .card-text{
        font-size: 20px;

    }
}




@media (min-width:768px) and (max-width:992px){
    .container{
        max-width:992px ;
    }

    .nav-footer .row .search{
        width: 50%;
        margin: 0;
    }

    .nav-footer .row .select {
        width: 28%;
        margin: 0;
    }

    .nav-footer .row .button{
        width: 20%;
        margin: 0;
    }

    .content .filter-box {
        width: 25%;
        height: 425px;
        margin-top: 80px;
     }
     .content .container{
         max-width: 992px;
     }
     .content .ads-boxes {
        width: 75%;
        margin-top: 40px; 
     }
     
     .content .ads-boxes .box{
         width: 33%;
         margin-top: 40px;
         height: auto;
     }

     .content .ads-boxes .row .card{
         height: 240px;
     }


    .content .ads-boxes .row .card .card-body h5{
        font-size: 18px;
        top: 10px;
        right: 5px;
    }
    .content .ads-boxes .row .card .card-text{
        font-size: 14px;
        bottom: 5px;
    }

    
    .content .ads-boxes .card .time{
        font-size: 13px;
    }



    
}

@media (min-width:576px) and (max-width:768px){
    .container{
        max-width:768px ;
    }


    .nav-footer .row .search{
        width: 40%;
        margin: 0;
    }

    .nav-footer .row .select {
        width: 35%;
        margin: 0;
    }

    .nav-footer .row .button{
        width: 23%;
        margin: 0;
    }

    .content .filter-box {
        width: 30%;
        height: 425px;
        margin-top: 80px;
     }
     .content .container{
         max-width: 992px;
     }
     .content .filter-box .filter-border{
        padding: 5px 5px 5px 0;
     }
     .content .filter-box .filter-border .input-number{
        margin-left: 5px;

     }
     .content .ads-boxes {
        width: 70%;
        margin-top: 40px; 
     }
     
     .content .ads-boxes .box{
         width: 50%;
         margin-top: 40px;
         height: auto;
     }

     .content .ads-boxes .row .card{
         height: 240px;
     }

    .content .ads-boxes .row .card .card-body h5{
        font-size: 19px;
        top: 10px;
        right: 5px;
    }
    .content .ads-boxes .row .card .card-text{
        font-size: 16px;
        bottom: 5px;
    }

    
    .content .ads-boxes .card .time{
        font-size: 14px;
    }

  
}

@media (max-width:576px){
    .container{
        max-width:576px ;
    }
    .nav-footer .row .search{
        width: 60%;
        margin: 0;
    }

    .nav-footer .row .select {
        display: none;
    }

    .nav-footer .row .button{
        width: 40%;
        margin: 0;
    }

    .content .filter-box {
        display: none;
     }

     .content .ads-boxes {
        width: 100%;
        margin-top: 40px; 
     }
     
     .content .ads-boxes .box{
         width: 50%;
         margin-top: 40px;
         height: auto;
     }

     .content .ads-boxes .row .card{
         height: 240px;
     }



    .content .ads-boxes .row .card .card-body h5{
        font-size: 18px;
        top: 10px;
        right: 5px;
    }
    .content .ads-boxes .row .card .card-text{
        font-size: 17px;
        bottom: 5px;
    }

    .content .ads-boxes .row .card .time{
        font-size: 15px;
        bottom: 5px;
    }

}

@media (max-width:430px){
    .container{
        max-width:430px ;
    }
    .content .ads-boxes .box{
        width: 50%;
        margin-top: 40px;
        height: auto;
        padding: 0;
        padding-left: 2px;
    }

    .content .ads-boxes .row .card{
        height: 240px;
    }
    .content .ads-boxes .row .card .card-body h5{
        font-size: 15px;
    }
    .content .ads-boxes .row .card .card-text{
        font-size: 17px;

    }

    .content .ads-boxes .row .card .time{
        display: none;
    }
}


</style>

<script>
import catagoriesIcon from "@/components/global/catagoriesIcon.vue";
import boxAds from "@/components/global/boxAds.vue";
export default {
    components: {
     catagoriesIcon,
     boxAds,
  },
}
</script>