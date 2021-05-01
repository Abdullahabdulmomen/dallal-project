<template>
  <div class="form-box">
    <h1>تواصل معنا</h1>

    <form class="row g-3">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <label for="inputEmail4" class="form-label">الاسم كامل</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <label for="inputPassword4" class="form-label">البريد الالكتروني</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>

      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <label for="inputState" class="form-label">الموضوع</label>
        <select id="inputState" class="form-select">
          <option selected></option>
          <option>...</option>
        </select>
      </div>
      <div class="col-xl-12 col-lg-6 col-md-6 col-sm-12">
        <label for="inputZip" class="form-label">الوصف</label>
        <input type="text" class="form-control" id="inputZip" />
      </div>

      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            الموافقه علي الشروط
          </label>
        </div>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <button type="submit" class="btn btn-primary">تقديم</button>
      </div>
    </form>
  </div>

</template>





<style scoped>
      
        .box-information .form-box {
            background-color:#E9E3D7;
            margin-top: 200px;
        
            border: 1px solid #364C63;
            width: 90%;
            margin-left:5%;
            margin-right: 5%;
            height: 900px;
            border-radius: 15px;
            padding: 50px;
            position: relative;
        }

        
        .box-information .form-box h1{
            text-align: center;
            margin-top: 0px;
            margin-bottom: 35px;
        }

        .box-information .form-box .form-label{
            font-size: 100%;
            font-weight: 400;

        }

        .box-information .form-box .form-control{
            width: 100%;
            height: 50px;
            border-radius: 10px;
            padding: auto;

        }

        .box-information .form-box .form-select{
            width: 100%;
            height: 50px;
            border-radius: 10px;
            background-image: url(/Dallal/static/icon/dropdown.svg);
            background-position: left .75rem center;

        }

        #inputZip{
            width: 100%;
            height: 300px;
        
        }
        #gridCheck{
            margin-left: 5.5em;
        }
        .box-information .form-box .form-check .form-check-label{
            font-size: 20px;
            font-weight: 400px;

        }

        .box-information .form-box .btn{
            border-radius: 10px;
            margin-right: 35%;
            margin-left: 30%;
            margin-top: 2%;
            margin-bottom:  1%;
            height: 41px;
            width: 35%;
            padding: 3px;
            
        }



        .box-information .form-box .btn-primary{
            background-color: #364C63;
            border-color: #364C63;
            font-size: 23px;
        }






</style>




<script>
export default {
    name:"contactFarm",
}
</script>
