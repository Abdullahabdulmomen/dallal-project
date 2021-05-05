<template>
  <div class="editForm">
    <div class="edit-form">
      <h1>تعديل الحساب</h1>
      <hr id="line-1" />

      <label class="format-label">الاسم</label>
      <p><input class="format-input" type="email" /></p>
      <hr id="line-2" />
      <div>
        <a href="#"><img src="static/icon/user.svg" alt="user-icon" /></a>
        <h6 class="icon-text">تعديل الصوره الشخصيه</h6>
      </div>

      <h2>معلومات التواصل</h2>
      <label class="format-label">الايميل</label>
      <p><input class="format-input" type="email" /></p>

      <div class="alin-center">
        <div>
          <label class="format-label">رقم الهاتف</label>
          <p><input class="format-input" type="email" /></p>
        </div>
        <button type="submit" class="button-login">حفظ التغيرات</button>
      </div>
    </div>

    <div class="ab">
      <button type="submit" id="buttom-viewpage">عرض الصفحه الشخصيه</button>
    </div>
  </div>
</template>

<style scoped>
.edit-form {
  height: 630px;
  border: 1px solid #364c63;
  padding: 15px;
  width: 75%;
}

#line-1 {
  width: 102%;
  margin-right: -10px;
  height: 2px;
  background-color: #364c63;
}
#line-2 {
  width: 60%;
  margin-right: 81px;
  margin-top: 10px;
  height: 2px;
  background-color: #364c63;
  border-top: 1px solid #364c63;
}

.edit-form h2 {
  font-size: 30px;
  margin-right: 70px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.edit-form a img {
  border: 1px solid #364c63;
  border-radius: 100px;
  float: left;
  width: 160px;
  margin-top: -120px;
  margin-bottom: 10px;
  margin-left: 80px;
  margin-right: 10px;
}
.edit-form .icon-text {
  float: left;
  margin-top: 60px;
  margin-bottom: 10px;
  margin-left: -171px;
  margin-right: 10px;
}

.edit-form .format-label {
  font-size: 22px;
  font-weight: 500;
  color: #364c63;
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 70px;
}

.edit-form .format-input {
  width: 300px;
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
  margin-right: 70px;
}

.edit-form .alin-center {
  display: flex;
  width: 100%;
}

.edit-form .button-login {
  background-color: #364c63;
  color: #e9e3d7;
  font-size: 18px;
  font-weight: bold;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  width: 150px;
  height: 60px;

  margin-right: 200px;
  margin-top: 40px;
  border-radius: 10px;
  appearance: button;
  text-align: center;
  transition-duration: 0.4s;
}

.edit-form .button-login:hover {
  background-color: #17324e;
}

#buttom-viewpage {
  background-color: #364c63;

  color: #e9e3d7;
  font-size: 18px;
  font-weight: bold;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  width: 230px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 10px;
  appearance: button;
  text-align: center;
  transition-duration: 0.4s;
}

#buttom-viewpage:hover {
  background-color: #17324e;
}

.edit-profile .ab {
  width: 25%;
}
</style>

<script>
export default {
  name: "editForm",
};
</script>
