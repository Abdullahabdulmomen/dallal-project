<template>
     <div class="container">
        <div class="middle">
        <div class="text">
          <div class="title-text">
            <h5>كيف انشر اعلاني</h5>
          </div>
          <p>1. اكتب عنوان. </p>
          <p>2. اختار الفئة (القسم اللي رح تنشر إعلانك فيه) </p>
          <p>3. اكتب تفاصيل إعلانك. </p>
          <p>4. وعلى فكرة تقدر تشوف إعلانك قبل أي احد ثاني لما تضغط على "شاهد الإعلان قبل نشره".</p>
          <p>5. لما تتأكد إن تفاصيل إعلانك مظبوطة وكل شي تمام، اضغط على "انشر الإعلان".</p>
          </div>
        <div class="related-articals">
          <div class="title">
            <h5>مقالات ذات صلة</h5>
           <ul>
              <li><router-link to="/usageInstructions">تعليمات الاستخدام</router-link ></li>
              <li><router-link  to="/privacyPolicy">سياسة الخصوصية</router-link ></li>
              <li><router-link  to="/howToRegister">كيف اسجل في موقع الدلال</router-link ></li>
               <li><router-link  to="/whyAccountSuspended">لماذا حسابي توقف</router-link ></li>
            </ul>
      </div>
      </div>
      </div>
    </div>
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


.navbar .navbar-nav #add-post a{
    float: left;
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


.middle{
    width: 800px;
    margin: auto;
}

.text{
    margin-top: 50px;
    border: 1px solid #364c638f;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);  
}

.text .title-text{
    text-align: center;
    margin-bottom: 30px;
}

.text p{
    font-size: 18px;
}

.text .title-text h5{
    font-size: 22px;
    font-weight: bold;
}

.related-articals {
    margin-top: 30px;
    border: 1px solid #364c638f;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    padding: 30px;
    

}
.related-articals .title h5{
   font-size: 20px;
   font-weight: bold;
}
.related-articals ul{
    padding: 0;
    margin-top: 20px;
    padding-right: 20px;
}
.related-articals li {
    margin-top: 8px;
    list-style: none;
   
}
.related-articals li a{
    text-decoration: none;
    color: #364C63;
    font-size: 18px;  
}

.related-articals li a:hover{
   color: #F3B340 ;
    
}

.copyright {
    margin-top: 30px;
    text-align: center;
    width: 100%;
    background-color: #364C63;
    
}
.copyright small{
    color: #fff;
    font-size: 15px;
}


/*
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
*/
</style>

<script>
export default {
  
}
</script>