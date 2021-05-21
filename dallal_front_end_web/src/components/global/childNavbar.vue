<template>
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="static/icon/logo.svg" alt="logo"></a>

          <div>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                <li class="nav-item nav-item-left" id="add-post">
                    <a  class="nav-link" aria-current="page" href="#"><span>اضف اعلانك</span><img src="static/icon/add.svg" alt="add-post-icon"></a>
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

</style>

<script>
export default {
    name: "childNavbar"
}
</script>