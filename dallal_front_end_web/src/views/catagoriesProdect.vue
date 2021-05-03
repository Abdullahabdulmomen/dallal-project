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
              <button type="submit" class="btn" >ابحث</button>
          </div> 
          </div>
        </div>
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
                              <input class="btn" type="checkbox" value=""><span>جديد</span>
                            </div>
                            <div  class="choose">
                              <input class="btn" type="checkbox" value=""><span>مستخدم</span>
                            </div>
                        </div>
                        <div class="filter">
                            <h5>العملية التجارية</h5>
                            <div class="choose">
                              <input class="btn" type="checkbox" value=""><span>الكل</span>
                            </div>
                            <div class="choose">
                              <input class="btn" type="checkbox" value=""><span>المباع</span>
                            </div>
                            <div class="choose">
                              <input class="btn" type="checkbox" value=""><span>المشترى</span>
                            </div>
                            <div class="choose">
                                <input class="btn" type="checkbox" value=""><span>تأجير</span>
                            </div>
                        </div>
                        <div class="filter">
                            <h5>الفترة الزمنية</h5>
                            <div class="choose">
                              <input class="btn" type="checkbox" value=""><span>الكل</span>
                            </div>
                            <div class="choose">
                              <input class="btn" type="checkbox" value=""><span>في الامس</span>
                            </div>
                            <div class="choose">
                              <input class="btn" type="checkbox" value=""><span>قبل اسبوع</span>
                            </div>
                            <div class="choose">
                              <input class="btn" type="checkbox" value=""><span>قبل شهر</span>
                            </div>
                        </div>
                      </div>
                      <div class="submit-filter">
                        <button  type="submit" class="button btn" >ابحث</button>
                      </div>
                  </div>


            <div class="all-add-boxes">


                    <div class="above-filter">
                        <h4>دلَّال - سيارات</h4><span>100 عنصر</span>
                        <ul class="list-group list-group-horizontal">
                          <li class="list-group-item list-group-item-action all_list"><a class="nav-link" href="#">جميع القوائم</a></li>
                          <li class="list-group-item list-group-item-action"><a class="nav-link" href="#">تاجر</a></li>
                          <li class="list-group-item list-group-item-action"><a class="nav-link" href="#">شخصي</a></li>
                        </ul>
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
                    <boxAds/>
          </div>
        </div>

        <div class="browse-more lead text-justify">
          <h4>تصفح المزيد</h4>
          <ul class="list-group list-group-horizontal text-cenetr">
            <li class="list-group-item list-group-item-action"><a class="nav-link" href="#">1</a></li>
            <li class="list-group-item list-group-item-action"><a class="nav-link" href="#">2</a></li>
            <li class="list-group-item list-group-item-action"><a class="nav-link" href="#"><i class="fa fa-angle-left"></i></a></li>
            <li class="list-group-item list-group-item-action"><a class="nav-link" href="#"><i class="fa fa-angle-double-left"></i></a></li>
          </ul>
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
 .content{
     margin-top: 50px;
    
 }

 .content .filter-box {  
    width: 25%;
    height: 425px;
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
    margin-top: 35px;
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

 .content .all-add-boxes{
     width: 74%;
     margin-right: 0;
 }

 .content .all-add-boxes .above-filter{
    position: relative;
    width: 50%;
 }

 .content .all-add-boxes .above-filter h4{
     font-size: 28px;
     font-weight: bold;
     margin-bottom: 12px;
 }

 
.content .all-add-boxes .above-filter span {
    position: absolute;
    right: 180px;
    top: 11px;
    font-size: 14px;
    cursor: pointer;
}

.content .all-add-boxes .above-filter .list-group .list-group-item{
   padding: 2px 0px;
   text-align: center;
   width: 125px;
   
}
.content .all-add-boxes .above-filter .list-group .list-group-item a{
    color: #364C63;
}

.content .all-add-boxes .above-filter .list-group .all_list{
    background-color: #364c6371;
}




 .content .ads-boxes {
    width: 100%; 
    margin-top: 30px;
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

.content .all-add-boxes .browse-more{
    margin-top: 50px;
}



.content .all-add-boxes .browse-more h4{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 18px;
    margin-right: 43.5%;
}

.content .all-add-boxes .browse-more .list-group{
    margin-right: 37%;
}

.content .all-add-boxes .browse-more .list-group-item{
    position: relative;
    text-align: center;
    width: 50px;
    margin-left: 5px;
    border: 1px solid #364c6370;
    border-radius: 10px;
    padding: 0;
} 

.content .all-add-boxes .browse-more .list-group-item a{
    color: #364C63;
    font-size: 20px;
    font-weight: bold;
}

.content .all-add-boxes .browse-more .list-group-item .fa-angle-double-left{
    position: absolute;
    color: #F3B340;
    top: 13px;
    right: 17px;
}

.content .all-add-boxes .browse-more .list-group-item .fa-angle-left{
    position: absolute;
    color: #F3B340;
    top: 13px;
    right: 20px;
}



@media (min-width:992px) and (max-width:1200px){
 
    .container{
        max-width:1200px;
    }
    .content .all-add-boxes .above-filter{
        width: 55%;
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

    .content .all-add-boxes .browse-more h4{
        margin-right: 26%;
    }

    .content .all-add-boxes .browse-more .list-group{
        margin-right: 20%;
    }
}




@media (min-width:768px) and (max-width:992px){
    .container{
        max-width:992px;
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

    .content .all-add-boxes .above-filter{
        width: auto;
    }

    .content .all-add-boxes .above-filter .list-group .list-group-item{
        text-align: center;
            
     }
  
    .content .filter-box {
        width: 25%;
        height: 425px;
     }
     .content .filter-box .filter-border{
        padding: 10px 10px 10px 0;
     }

     .content .filter-box .filter-border .input-number{
        margin-left: 5px;

     }
     .content .filter-box .filter-border .price h5{
        font-size: 18px;
     }

    .content .filter-box .filter-border .filter h5{
        font-size: 18px;
    }
    .content .filter-box .filter-border .filter .choose span{
        font-size: 15px;
        margin-right: 8px;
    }
     .content .ads-boxes {
        margin-top: 40px; 
     }
     
     .content .ads-boxes .box{
         width: 33%;
         height: auto;
         padding: 5px;
         margin-top: 10px;
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
        font-size: 16px;
        bottom: 5px;
    }

    
    .content .ads-boxes .card .time{
        font-size: 13px;
    }

    .content .all-add-boxes .browse-more h4{
        margin-right: 30%;
    }

    .content .all-add-boxes .browse-more .list-group{
        margin-right: 20%;
    }

}

@media (min-width:576px) and (max-width:768px){
    .container{
        max-width:768px;
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
    .content .filter-box .filter-border{
        padding: 5px 5px 5px 0;
     }
    
     .content .filter-box .filter-border .price h5{
        font-size: 17px;
     }

     .content .filter-box .filter-border .input-number{
        width: 40%;
        margin-left: 5px;
        margin-top: 10px;
     }
    


    .content .filter-box .filter-border .filter h5{
        font-size: 17px;
    }
    .content .filter-box .filter-border .filter .choose span{
        font-size: 15px;
        margin-right: 8px;
    }

    .content .all-add-boxes {
        width: 70%;
    }

    .content .all-add-boxes .above-filter h4{
        font-size: 28px;
        font-weight: bold;
        
   }


    .content .all-add-boxes .above-filter{
        width: auto;
    }
 

    .content .filter-box {
        width: 25%;
        height: 425px;
     }
 
     .content .ads-boxes {
        margin-top: 40px; 
     }
     
     .content .ads-boxes .box{
         width: 50%;
         margin-top: 10px;
         height: auto;
         padding: 5px;
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

    .content .all-add-boxes .browse-more h4{
        margin-right: 30%;
    }

    .content .all-add-boxes .browse-more .list-group{
        margin-right: 20%;
    }

  
}

@media (max-width:576px){
    .container{
        max-width:576px;
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
   
     .content .all-add-boxes {
         width: 100%;
     }
     .content .all-add-boxes .above-filter{
        width: auto;
    }
     .content .ads-boxes {
        width: 100%;
        margin-top: 40px; 
     }
     
     .content .ads-boxes .box{
      
        width: 50%;
        margin-top: 0;
        height: auto;
        padding: 5px;
        
     }

     .content .ads-boxes .row .card{
         height: 240px;
     }



    .content .ads-boxes .row .card .card-body h5{
        font-size: 20px;
        top: 10px;
        right: 5px;
    }
    .content .ads-boxes .row .card .card-text{
        font-size: 18px;
        bottom: 5px;
    }

    .content .ads-boxes .row .card .time{
        font-size: 15px;
        bottom: 5px;
    }

    .content .all-add-boxes .browse-more h4{
        margin-right: 30%;
    }

    .content .all-add-boxes .browse-more .list-group{
        margin-right: 20%;
    }

}

@media (max-width:430px){
    .container{
        max-width: 400px;
    }
    .ads-boxes .row .card .time{
        display: none;
    }
    .content .all-add-boxes .box{
        margin-top: 0;
    }
    .content .all-add-boxes .above-filter .list-group-item a{
       padding: 5px;
    }

    .content .all-add-boxes .browse-more h4{
        margin-right: 30%;
    }

    .content .all-add-boxes .browse-more .list-group{
        margin-right: 20%;
    }


}

</style>

<script>
import boxAds from "@/components/global/boxAds.vue";
export default {
    components:{
        boxAds
    }
}
</script>