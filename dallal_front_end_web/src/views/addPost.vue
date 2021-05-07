<template>
      <div class="add-post">
          <div class="container">
              <h4 class="add-post-tittle">اضف اعلانك</h4>
              <div class="box-add-post">
                <h4>اختر فئة</h4>
                <ul class="list-group">

                    <li class="list-group-item base-list-group-item dropend"><a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img  src="@/assets/icon/directions_car-24px.svg"  alt="car-icon"><span class="name-base-list">سيارات</span></a>
                        <ul id="dropdownMenu" class="dropdown-menu"  aria-labelledby="navbarDropdown">
                            <li class="list-group-item sub-list-group-item"><a class="nav-link" href="#"><span class="name-sub-list">سيارات مستعملة</span></a></li>
                                
                            <li class="list-group-item sub-list-group-item"><a  class="nav-link" href="#"><span class="name-sub-list">مستلزمات</span></a></li>
                            
                            <li class="list-group-item sub-list-group-item"><a class="nav-link" href="#"><span class="name-sub-list">قطع غيار</span></a></li>
                            
                            <li class="list-group-item sub-list-group-item"><a class="nav-link" href="#"><span class="name-sub-list">عجلات واطارات</span></a></li>
                            
                            <li class="list-group-item sub-list-group-item"><a class="nav-link" href="#"><span class="name-sub-list">الشاحنات والمركبات</span></a></li>
                
                        </ul>
                    </li>

                    <li class="list-group-item base-list-group-item"><a class="nav-link" href="#"><img src="@/assets/icon/weekend-24px.svg" alt="goods-icon"><span class="name-base-list">اثاث منزل</span></a></li>
                    <li class="list-group-item base-list-group-item"><a class="nav-link" href="#"><img src="@/assets/icon/apartment-24p.svg" alt="apartment-icon"><span class="name-base-list">عقارات</span></a></li>
                    <li class="list-group-item base-list-group-item"><a class="nav-link" href="#"><img src="@/assets/icon/smartphone-24px.svg" alt="phone-icon"><span class="name-base-list">هواتف</span></a></li>
                    <li class="list-group-item base-list-group-item"><a class="nav-link" href="#"><img src="@/assets/icon/kitchen-24px.svg" alt="electronic-icon"><span class="name-base-list">الكترونيات</span></a></li>
                    <li class="list-group-item base-list-group-item"><a class="nav-link" href="#"><img src="@/assets/icon/two_wheeler-24px.svg" alt="motorCycle-icon"><span class="name-base-list">دراجات نارية</span></a></li>
                </ul>
              </div>          
      </div>
      </div>
</template>

<style scoped>

.add-post {
    margin-top: 35px;
    
}

.add-post .add-post-tittle{
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 35px;
}
.add-post .box-add-post{
    height: 650px;
    border: 1px solid #758ea8bb;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
}

.add-post .box-add-post h4{
    padding: 30px;
    font-size: 25px;
}

.add-post .box-add-post .list-group{
    width: 50%;

}

.add-post .box-add-post .list-group > .base-list-group-item{
    position: relative !important;
}


.add-post .box-add-post .list-group .base-list-group-item:hover{
    background-color: #364c6379;
    color: white; 
}

.add-post .box-add-post .list-group .base-list-group-item img{
    color: #364C63;
    width: 30px;
    height: 30px;
}

.add-post .box-add-post .base-list-group-item .name-base-list{
    margin-right: 25px;
    font-size: 17px;
}

.add-post .box-add-post .list-group .base-list-group-item .dropdown-menu{
    width: 100%;
    padding: 0;
    text-align: right;
}

.add-post .box-add-post .list-group .base-list-group-item .dropdown-menu .sub-list-group-item:hover{
    background-color: #364c6379;
}

@media (min-width:992px) and (max-width:1200px){

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

    .add-post .add-post-tittle{
        font-size: 30px;
    }

    .add-post .box-add-post h4{
        font-size: 22px;
    }

    .add-post .box-add-post .list-group{
        width: 50%;
        position: none;
    }
    

}


</style>

<script>
export default {
    name: "addPost"
}
</script>