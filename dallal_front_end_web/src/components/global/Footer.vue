<template>
     <footer class="footer">
            <div class="container">
                <div class="row ">
                  <div class="navigation ">
                    <h4>التنقل</h4>
                    <router-link class="nav-link" to="/">الصفحة الرئيسية</router-link>
                    <router-link class="nav-link" to="/">بحث</router-link>
                    <router-link class="nav-link" to="/">حسابي</router-link>
                    <router-link class="nav-link" to="/">اضف اعلانك</router-link>
                    <router-link class="nav-link" to="/">تواصل معنا</router-link>
                  </div>

                  <div class="catagory">
                    <h4>التصنيفات</h4>
                    <router-link class="nav-link" to="/">سيارات</router-link>
                    <router-link class="nav-link" to="/">اثاث منزل</router-link>
                    <router-link class="nav-link" to="/">عقارات</router-link>
                    <router-link class="nav-link" to="/">هواتف</router-link>
                    <router-link class="nav-link" to="/">الكترونيات</router-link>
                    <router-link class="nav-link" to="/">دراجات نارية</router-link>
                  </div>

                  <div class="information ">
                    <h4 >معلومات</h4>
                    <router-link class="nav-link" to="/">تعليمات الاستخدام</router-link>
                    <router-link class="nav-link" to="/">سياسة الخصوصية</router-link>
                    <router-link class="nav-link" to="/">من نحن</router-link>
                  </div>

                  <div class="social-media ">
                    <h4>تابعنا عبر</h4>
                    <router-link  to="/"><i class="fab fa-2x fa-facebook"></i></router-link>
                    <router-link  to="/"><i class="fab fa-fw fa-2x fa-twitter"></i></router-link>
                    <router-link  to="/"><i class="fab fa-fw fa-2x fa-dribbble"></i></router-link>
                    <router-link to="/"><i class="fab fa-fw fa-2x fa-linkedin-in"></i></router-link>  
                  </div>
                </div>
            </div>
            <div class="copyright py-4 text-white">
              <div class="container">
                <small> جميع الحقوق محفوظة © 2021 لشركة دلَّال</small>
              </div>
            </div>
        </footer>
</template>

<style scoped>
 .footer {
    width: 100%;
    background-color:#E9E3D7;
    color: #fff;
    margin-top: 100px;
    
  }
.footer .row {
    padding-top:  30px;
    padding-bottom: 20px;
}

.footer .row > div{
    width: 25%;

}

.footer .row > div h4{
    margin: 0;
    margin-bottom: 9px;
    padding: 0;
    font-size: 20px;
    font-weight: bold;
}
.footer .row > div a{
    color: #364C63;
    padding: 0;
    font-size: 16px;
}

.footer .row > div a:hover{
    color: black;
}

.footer .row .fab{
    color: #F3B340;
    margin-top: 10px;   
}

.footer .copyright {
    text-align: center;
    width: 100%;
    background-color: #364C63;
    
}
.footer .copyright small{
    color: #fff;
    font-size: 15px;
}



@media (min-width:992px) and (max-width:1200px){
    .container{
        max-width: 1200px;
    }
    .footer .row .social-media a{
        margin-left: 10px;
    }
}




@media (min-width:768px) and (max-width:992px){
    .container{
        max-width: 992px;
    }

    .footer .row > div{
        width: 25%;
    
    }

    .footer .row .fab{
        margin-left: 4px !important;   
    }
    
}

@media (min-width:576px) and (max-width:768px){
    .container{
        max-width: 768px;
    }
    .footer .row > div{
        width: 50% !important;
    
    }

}

@media (min-width:400px) and (max-width:576px){
    .container{
        max-width: 576px;
    }    
    .footer .container{
        max-width: 576px;
    }

    .footer .row > div{
        width: 50% !important;
    
    }

    .footer .row .information  {
        margin-top: 30px;
    }
    
    .footer .row .social-media  {
        margin-top: 30px;
    }
}

@media (max-width:400px){
    .container{
        max-width: 400px;
    }
    .footer .container{
        max-width: 576px;
    }

    .footer .row > div{
        width: 50%;
    
    }


    .footer .row > div{
        width: 50% !important;
    
    }

    .footer .row .information  {
        margin-top: 30px;
    }
    
    .footer .row .social-media  {
        margin-top: 30px;
    }

   

}
</style>

<script>
export default {
    name: "Footer",
}
</script>