<template>
       
     <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container">
          <router-link class="navbar-brand" to="/" ><img src="@/assets/icon/logo.svg" alt="logo"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">

                <li class="nav-item dropdown">
                    <router-link class="nav-link" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>التصنيفات</span>
                        <img src="@/assets/icon/dropdown.svg" alt="dropdown-icon">
                    </router-link>
                    <ul class="dropdown-menu"  aria-labelledby="navbarDropdown">
                        <li><router-link class="dropdown-item" to="/catagoriesProdect"><img src="@/assets/icon/directions_car-24px.svg" alt="car-icon">سيارات</router-link></li>
                            
                        <li><router-link  class="dropdown-item" to="/"><img src="@/assets/icon/weekend-24px.svg" alt="goods-icon">اثاث منزل</router-link></li>
                        
                        <li><router-link class="dropdown-item" to="/"><img src="@/assets/icon/apartment-24p.svg" alt="apartment-icon">عقارات</router-link></li>
                        
                        <li><router-link class="dropdown-item" to="/"><img src="@/assets/icon/smartphone-24px.svg" alt="phone-icon">هواتف</router-link></li>
                        
                        <li><router-link class="dropdown-item" to="/"><img src="@/assets/icon/kitchen-24px.svg" alt="electronic-icon"> الكترونيات</router-link></li>
                        
                        <li> <router-link class="dropdown-item" to="/"><img src="@/assets/icon/two_wheeler-24px.svg" alt="motorCycle-icon">دراجات نارية</router-link></li>
            
                    </ul>
                </li>

             
                <li class="nav-item nav-item-left" id="add-post">
                    <router-link   class="nav-link" aria-current="page" to="/"><span>اضف اعلانك</span><img src="@/assets/icon/add.svg" alt="add-post-icon"></router-link >
                </li>
    
                  <li class="nav-item nav-item-left">
                    <router-link  class="nav-link" to="/search"><span>ابحث</span><img src="@/assets/icon/search-24px.svg" alt="search-icon"></router-link >
                </li>


                  <li class="nav-item">
                    <router-link  class="nav-link " to="/" tabindex="-1" aria-disabled="true"><span>تسجيل الدخول</span></router-link >
                  </li>
              
            </ul>
          

          </div>
        </div>
      </nav>
     
</template>


<style scoped>

.navbar{
    background-color:#E9E3D7 ;
    margin: 0;
    padding: 0;
    color: #364C63;
    font-size: 18px;
    width: 100%;
}

.navbar .navbar-nav .dropdown{
    margin: auto;
    margin-right: 45px;
}

.navbar .navbar-nav .dropdown .dropdown-menu{
    width: 250px;
    text-align: right;
    padding: 0;
    background-color: #e9e3d7a4;
    margin-top: 14px;
}



.navbar .navbar-nav .dropdown .dropdown-item:hover{
    background-color: #364C63;
    color: white;
}

.navbar .navbar-nav .dropdown .dropdown-menu img{
    margin-left: 10px;
}

.navbar .navbar-nav .nav-item-left{
    margin-left: 35px;
}

.navbar .navbar-nav #add-post a{
    border: 2px solid #364C63;
    border-radius: 10px;
    width: 180px;
    padding-right: 7px;
    padding-top: 5px;
    padding-bottom:5px;
}

.navbar .navbar-nav #add-post img{
    margin-right: 39px;
}
</style>

<script>
export default {
  name: "Navbar",
}
</script>