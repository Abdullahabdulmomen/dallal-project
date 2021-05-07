<template>
   <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="@/assets/icon/logo.svg" alt="logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">

                <li class="nav-item user-icon">
                    <a  class="nav-link" aria-current="page" href="#"><img src="@/assets/icon/user.svg" alt="user-icon"></a>
                  </li>

                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>التصنيفات</span>
                        <img src="@/assets/icon/dropdown.svg" alt="dropdown-icon">
                    </a>
                    <ul class="dropdown-menu"  aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><img src="@/assets/icon/directions_car-24px.svg" alt="car-icon">سيارات</a></li>
                            
                        <li><a  class="dropdown-item" href="#"><img src="@/assets/icon/weekend-24px.svg" alt="goods-icon">اثاث منزل</a></li>
                        
                        <li><a class="dropdown-item" href="#"><img src="@/assets/icon/apartment-24p.svg" alt="apartment-icon">عقارات</a></li>
                        
                        <li><a class="dropdown-item" href="#"><img src="@/assets/icon/smartphone-24px.svg" alt="phone-icon">هواتف</a></li>
                        
                        <li><a class="dropdown-item" href="#"><img src="@/assets/icon/kitchen-24px.svg" alt="electronic-icon"> الكترونيات</a></li>
                        
                        <li><a class="dropdown-item" href="#"><img src="@/assets/icon/two_wheeler-24px.svg" alt="motorCycle-icon">دراجات نارية</a></li>
            
                    </ul>
                </li>

                <li class="nav-item notvigation-icon">
                    <a  class="nav-link" aria-current="page" href="#"><img src="@/assets/icon/notvigation.svg" alt="notvigation-icon"></a>
                </li>
  
                <li class="nav-item nav-item-left" id="add-post">
                    <a  class="nav-link" aria-current="page" href="#"><span>اضف اعلانك</span><img src="@/assets/icon/add.svg" alt="add-post-icon"></a>
                </li>
    
                  <li class="nav-item nav-item-left">
                    <a class="nav-link" href="#"><span>ابحث</span><img src="@/assets/icon/search-24px.svg" alt="search-icon"></a>
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


.navbar .navbar-nav .user-icon{
    margin-right: 30px;
}

.navbar .navbar-nav .user-icon img{
  width: 36px;
  height: 36px;
}

.navbar .navbar-nav .dropdown{
    margin-right: 25px;
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

.navbar .navbar-nav .notvigation-icon{
    margin-left: auto;
    margin-right: 25px;
    
}

.navbar .navbar-nav .notvigation-icon img{
   width: 21px;
   height: 25px;
}

.navbar .navbar-nav #add-post{
    margin-left: 70px;
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

@media (min-width:992px) and (max-width:1200px){
    .container{
        max-width: 1200px;
    }
}

@media (min-width:768px) and (max-width:992px){
    .container{
        max-width: 992px;
    }
}

@media (min-width:576px) and (max-width:768px){
    .container{
        max-width: 768px;
    }
}

@media (min-width:430px) and (max-width:576px){
    .container{
        max-width: 576px;
    }
}

@media (max-width:430px){
    .container{
        max-width: 400px;
    }
}

</style>

<script>
export default {
    name: "navbarUser"
}
</script>