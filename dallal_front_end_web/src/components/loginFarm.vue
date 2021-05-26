<template>

    <div class="main-box">
            
                <img class="img-logo" src="../assets/icon/logo.svg">
                <router-link class=" login-word" to="/login">تسجيل الدخول</router-link>
                <router-link class=" register-word" to="/register">حساب جديد</router-link>
                
                <hr  />
                <h1> مرحبا بكم</h1>
                <label class="format-label" >البريد الالكتروني</label>
                <p><input class="format-input" type="email" ></p>
                <label   class="format-label" >كلمه السر</label>
                <p><input  class="format-input"  type="password" ></p>
                <router-link class=" forget-pass  " to="">هل نسيت كلمه المرور؟</router-link>
                <div class="buttom-center">
                    <button type="submit" class="button-login" >الدخول</button>
                </div>
                
                <h2> او يمكنك تسجيل الدخول عن طريق</h2>
                <router-link  to=""  alt="media-icon"> <img class="twitter-icon" src="../assets/icon/twitter (1).svg"  alt="">   </router-link>
                <router-link  to="" alt="media-icon">  <img class="twitter-icon" src="../assets/icon/search.svg"  alt="">        </router-link>
                <router-link  to="" alt="media-icon">  <img class="twitter-icon" src="../assets/icon/Path 16.svg"  alt="">       </router-link>
    </div>
    
</template>


<style scoped>


.main-box{
    padding: 0px 50px 0px 50px  ;
    transition: 0.5s;
    border-radius: 10px;
    border: 1px solid  #364C63 ;
    position: relative;

}
.main-box:hover{
    -webkit-box-shadow: -1px 1px 13px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 1px 13px 2px rgba(0,0,0,0.75);
    box-shadow: -1px 1px 13px 2px rgba(0,0,0,0.75);


}





.main-box .img-logo {
    
    margin-left:  4% ;
    margin-right:  34% ;
    height: 123px;
    margin-top: 4%;
    margin-bottom: 5%;
}

.main-box .login-word{
    text-decoration: none; 
    color: #364C63;
    font-size: 150%;
    font-weight: 500;
    float: right;
    margin-top: -6%;
    cursor: pointer;

}


.main-box .register-word{
    font-size: 150%;
    font-weight: 500;
    float: left;
    text-decoration: none;
    color: #364C63;
    margin-top: -6%;
}

.main-box .register-word::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    border-radius: 500px;
    border: none;
    background: #364C63;
    transition: width .3s;



}

.main-box .register-word:hover::after{
    width: 100%;
    transition: wdth .3s;
}

.main-box hr {
    width: 122% !important; 
    margin-right: -11%;
    padding: 3px;
    border: none;
    color: olive;
    -webkit-box-shadow: 6px 85px 65px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 85px 65px -11px rgba(0,0,0,0.75);
    box-shadow: 6px 85px 65px -11px rgba(0,0,0,0.75);


}

.main-box h1{
    font-size: 200%;
    font-weight: bold;
    color: rgb(54, 76, 99);
    margin: 0.67em 0px;
}


.main-box  .format-label{
    font-size: 100%;
    font-weight: 400;
    color: #364C63;
    display: inline-block;
    margin-bottom: 0.5rem;

}

.main-box .format-input{
    width: 100%;
    height: 60px;
    padding: .375rem .75rem;
    background-color: #fff;
    appearance: none;
    background-clip: padding-box;
    border-radius: 10px;
    border: 1px solid #364C63;
    line-height: 1.5;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    outline: none; 
    direction: ltr;
    overflow: visible;
}

.main-box .forget-pass{
    display: block;
    color: rgb(54, 76, 99);
    width: 100%;
    margin-right: 4%;
    text-decoration: none;
    

}
.main-box .buttom-center{
    text-align: center;
}

.main-box .buttom-center .button-login{
    background-color: rgb(243, 179, 64);
    background-image: linear-gradient(to right top, rgb(255 255 255 / 58%) 5%, rgb(243, 179, 64) 95%);;
    color: #364C63 ;
    font-size: 30px;
    font-weight: bold;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    width: 60%;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 30px;
    appearance: button;
    text-align: center;
    transition-duration: 0.4s;
}

.main-box .buttom-center .button-login:hover{
    background-color: rgb(243, 161, 8);
    background-image: linear-gradient(to right top, #F3B340 5% , #F3B340  95%);

}

.main-box h2 {
    font-size: 100%;
    font-weight: bold;
    color: rgb(54, 76, 99);
    margin-top: 0%;

}

.main-box .twitter-icon{

    width: 20%;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
    
    



}

</style>


<script>
export default {
    name:"loginFarm",
}
</script>