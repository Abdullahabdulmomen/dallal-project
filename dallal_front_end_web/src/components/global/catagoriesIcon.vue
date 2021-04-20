<template>
    <div class="catagory-icons row">
              <div class="icons">
                <router-link class="nav-link" to="/">
                    <div class="icon rounded-circle"><img src="@/assets/icon/directions_car-24px.svg" alt="car-icon"></div>
                    <h6 class="icon-name">سيارات</h6>
                </router-link>
              </div>

              <div class="icons">
                <router-link class="nav-link" to="/">
                    <div class="icon rounded-circle"><img src="@/assets/icon/weekend-24px.svg" alt="weekend-icon"></div>
                    <h6 class="icon-name goods-home">اثاث منزل</h6>
                </router-link>
              </div>

              <div class="icons">
                <router-link class="nav-link" to="/">
                    <div class="icon rounded-circle"><img src="@/assets/icon/apartment-24p.svg" alt="apartment-icon"></div>
                    <h6 class="icon-name apartment">عقارات</h6>
                </router-link>
              </div>

              <div class="icons">
                <router-link class="nav-link" to="/">
                    <div class="icon rounded-circle"><img src="@/assets/icon/smartphone-24px.svg" alt="smartphone-icon"></div>
                    <h6 class="icon-name smartphone">هواتف</h6>
                </router-link>
              </div>

              <div class="icons">
                <router-link class="nav-link" to="/">
                    <div class="icon rounded-circle"><img src="@/assets/icon/kitchen-24px.svg" alt="kitchen-icon"></div>
                    <h6 class="icon-name electronic-icon">الكترونيات</h6>
                </router-link>
              </div>

              <div class="icons">
                <router-link class="nav-link" to="/">
                    <div class="icon rounded-circle"><img src="@/assets/icon/two_wheeler-24px.svg" alt="motor-cycle-icon"></div>
                    <h6 class="icon-name motor-cycle">دراجات نارية</h6>
                </router-link>
              </div>
        </div>
</template>

<style scoped>

.catagories{
    margin-top: 40px; 
 }


.catagories .catagory-title{
    font-size: larger;
    font-weight: bold;  
}

.catagories .catagory-icons {
    margin-right: 5%;;   
}

.catagories .catagory-icons .icons {
    width: 16.6%;
    margin-top: 40px;
    position: relative;
}

.catagories .catagory-icons .icons a{
    position: relative;
    transition: all .5s ease;
    margin: 0;
    width: 79%;
    height: 79%;
}

.catagories .catagory-icons .icons a:hover{
    transform: scale(1.1);
}

.catagories .catagory-icons .icons .icon{
    border: 1px solid #364C63;
    width: 85px;
    height: 85px;
}


.catagories .catagory-icons .icons .icon img{
    position: absolute;
    right: 33px;
    top: 26px;
    width: 48px;
    height: 48px;
    z-index: 1;
}




.catagories .icons .icon-name{
    font-size: 20px;
    position: absolute;
    width: 100px;
    top: 105px;
    right: 25px;
    z-index: 1;
    
}
.catagories .icons .goods-home {
    top: 105px;
    right: 18px;
    z-index: 1;
    
}

.catagories .icons .motor-cycle{
    top: 105px;
    right: 13px;
    z-index: 1;
}

.catagories .icons .apartment, .catagories .icons .smartphone {
    top: 105px;
    right: 33px;
    z-index: 1;
    
}
.catagories .icons .electronic-icon{
    top: 105px;
    right: 16px;
}catagory-icons {
    margin-right: 5%;;   
}

 .catagory-icons .icons {
    width: 16.6%;
    margin-top: 40px;
    position: relative;
}

 .catagory-icons .icons a{
    position: relative;
    transition: all .5s ease;
    margin: 0;
    width: 79%;
    height: 79%;
}

.catagory-icons .icons a:hover{
    transform: scale(1.1);
}

.catagory-icons .icons .icon{
    border: 1px solid #364C63;
    width: 85px;
    height: 85px;
}


.catagory-icons .icons .icon img{
    position: absolute;
    right: 33px;
    top: 26px;
    width: 48px;
    height: 48px;
    z-index: 1;
}




.icons .icon-name{
    font-size: 20px;
    position: absolute;
    width: 100px;
    top: 105px;
    right: 25px;
    z-index: 1;
    
}
.icons .goods-home {
    top: 105px;
    right: 18px;
    z-index: 1;
    
}

 .icons .motor-cycle{
    top: 105px;
    right: 13px;
    z-index: 1;
}

 .icons .apartment, .catagories .icons .smartphone {
    top: 105px;
    right: 33px;
    z-index: 1;
    
}
.icons .electronic-icon{
    top: 105px;
    right: 16px;
}
</style>

<script>
export default {
    name: "catagoriesIcon"
}
</script>