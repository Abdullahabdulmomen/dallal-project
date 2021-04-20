<template>
     <footer class="footer">
            <div class="container">
                <div class="row ">
                  <div class="navigation ">
                    <h4>التنقل</h4>
                    <a class="nav-link" href="#">الصفحة الرئيسية</a>
                    <a class="nav-link" href="#">بحث</a>
                    <a class="nav-link" href="#">حسابي</a>
                    <a class="nav-link" href="#">اضف اعلانك</a>
                    <a class="nav-link" href="#">تواصل معنا</a>
                  </div>

                  <div class="catagory">
                    <h4>التصنيفات</h4>
                    <a class="nav-link" href="#">سيارات</a>
                    <a class="nav-link" href="#">اثاث منزل</a>
                    <a class="nav-link" href="#">عقارات</a>
                    <a class="nav-link" href="#">هواتف</a>
                    <a class="nav-link" href="#">الكترونيات</a>
                    <a class="nav-link" href="#">دراجات نارية</a>
                  </div>

                  <div class="information ">
                    <h4 >معلومات</h4>
                    <a class="nav-link" href="#">تعليمات الاستخدام</a>
                    <a class="nav-link" href="#">سياسة الخصوصية</a>
                    <a class="nav-link" href="#">من نحن</a>
                  </div>

                  <div class="social-media ">
                    <h4>تابعنا عبر</h4>
                    <a  href="#"><i class="fab fa-2x fa-facebook"></i></a>
                    <a  href="#"><i class="fab fa-fw fa-2x fa-twitter"></i></a>
                    <a  href="#"><i class="fab fa-fw fa-2x fa-dribbble"></i></a>
                    <a  href="#"><i class="fab fa-fw fa-2x fa-linkedin-in"></i></a>  
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
</style>

<script>
export default {
    name: "Footer",
}
</script>