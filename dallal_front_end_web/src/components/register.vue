<template>
  
  <div class="main-box">
    <img class="img-logo" src="../assets/icon/logo.svg" />
    <router-link class="login-word" to="/login">تسجيل الدخول</router-link>
    <router-link class="register-word" to="/register">حساب جديد</router-link>

    <hr />
    <h1>يرجئ تعبئه المعلومات التاليه</h1>
    <label class="format-label">الاسم</label>
    <p><input class="format-input" type="email" /></p>
    <label class="format-label">البريد الالكتروني</label>
    <p><input class="format-input" type="password" /></p>

    <label class="format-label">اعاده ادخال كلمه السر </label>
    <p><input class="format-input" type="password" /></p>

    <label class="format-label">كلمه السر</label>
    <p><input class="format-input" type="password" /></p>

    <label class="format-label">رقم الهاتف* </label>
    <p><input class="format-input" type="password" /></p>

    <div class="buttom-center">
      <button type="submit" class="button-login">الدخول</button>
    </div>
  </div>
</template>



<style scoped>
.main-box {
  padding: 0px 50px 0px 50px;
  transition: 0.5s;
  border-radius: 10px;
  border: 1px solid #364c63;
  position: relative;
}
.main-box:hover {
  -webkit-box-shadow: -1px 1px 13px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 13px 2px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 13px 2px rgba(0, 0, 0, 0.75);
}

.main-box .img-logo {
  margin-left: 4%;
  margin-right: 34%;
  height: 123px;
  margin-top: 4%;
  margin-bottom: 5%;
}

.main-box .login-word {
  text-decoration: none;
  color: #364c63;
  font-size: 150%;
  font-weight: 500;
  float: right;
  margin-top: -6%;
}

.main-box .login-word::after {
  content: "";
  display: block;
  width: 0;
  height: 5px;

  border: none;
  background: #364c63;
  transition: width 0.3s;
}

.main-box .login-word:hover::after {
  width: 140%;
  transition: wdth 0.3s;
}

.main-box .register-word {
  font-size: 150%;
  font-weight: 500;
  float: left;
  text-decoration: none;
  color: #364c63;
  margin-top: -6%;
}



.main-box hr {
  width: 122% !important;
  margin-right: -11%;
  padding: 3px;
  border: none;
  color: olive;
  -webkit-box-shadow: 6px 85px 65px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 85px 65px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 85px 65px -11px rgba(0, 0, 0, 0.75);
}

.main-box h1 {
  font-size: 200%;
  font-weight: bold;
  color: rgb(54, 76, 99);
  margin: 0.67em 0px;
}

.main-box .format-label {
  font-size: 100%;
  font-weight: 400;
  color: #364c63;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.main-box .format-input {
  width: 100%;
  height: 53px;
  padding: 0.375rem 0.75rem;
  background-color: #fff;
  appearance: none;
  background-clip: padding-box;
  border-radius: 10px;
  border: 1px solid #364c63;
  line-height: 1.5;
  outline: none;
  direction: ltr;
  overflow: visible;
}

.main-box .buttom-center {
  text-align: center;
}

.main-box .buttom-center .button-login {
  background-color: rgb(243, 179, 64);
  background-image: linear-gradient(
    to right top,
    rgb(255 255 255 / 58%) 5%,
    rgb(243, 179, 64) 95%
  );
  color: #364c63;
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

.main-box .buttom-center .button-login:hover {
  background-color: rgb(243, 161, 8);
  background-image: linear-gradient(to right top, #f3b340 5%, #f3b340 95%);
}
</style>

<script>
export default {
  name: "register",
};
</script>
