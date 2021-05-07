<template>
     <div class="search-box" >

        <div class="search">
                <h5>ابحث</h5>   
                <input class="input form-control bg-white" type="search" placeholder="عن ماذا تبحث" value=""  aria-label="Search">
        </div>

         <div class="select">
                    <h5>اختر مدينتك</h5>
                    <select class="form-control">
                        <option selected>في كل مكان</option>
                        <option value="">تعز</option>
                        <option value="">اب</option>
                        <option value="">صنعاء</option>
                        <option value="">عدن</option>
                        <option value="">ماب</option>
                        <option value="">شبوة</option>
                        <option value="">حضرموت</option>
                        <option value="">الحديدة</option>
                        <option value="">الجوف</option>
                        <option value="">المحويت</option>
                        <option value="">ذمار</option>
                        <option value="">أمانة العاصمة</option>
                        <option value="">حجة</option>
                        <option value="">صعدة</option>
                        <option value="">أبين</option>
                        <option value="">الضالع</option>
                        <option value="">عمران</option>
                        <option value="">سقطرى</option> 
                        <option value="">ريمة</option> 
                        <option value="">المهرة</option>  
                    </select>
                    <img class="map-icon" src="@/assets/icon/map.svg" alt="map-icon" aria-hidden="true">
        </div> 
        <div class="button">
                <button type="submit" class="button btn" >ابحث</button>
        </div> 
    </div>
</template>
<style scoped>
.search-box{
    background-color:#E9E3D7;
    margin-top: 35px;
    float: left;
    width: 32%;
    height: auto;
    border-radius: 15px;
    padding-right: 50px;
    padding-top: 35px;
    border: 1px solid #364c6300
}

.search-box:hover{
    border: 1px solid #364C63;
}

.search-box .search {
    position: relative;
}
.search-box .search input{
    width: 75%;
    margin-bottom: 28px;
    padding: 8px;
    padding-right: 32px;
    background-image: url('~@/assets/icon/search-24px.svg');
    background-position: right .60rem center;
    background-repeat: no-repeat;
}

.search-box .search .search-icon{
    position: absolute;
    right: 9px;
    bottom: 10px;
    z-index: 1;
}

.search-box .select{
    position: relative;
}



.search-box .select .form-control{
    width: 75%;
    padding: 8px;
    padding-right: 32px;
    background-image: url('~@/assets/icon/dropdown.svg');
    background-position: left .60rem center;
    background-repeat: no-repeat;
}


.search-box .select .map-icon {
    position: absolute;
    width: 18px;
    height: 18px;
    right: 7px;
    bottom: 10px;
    z-index: 1;
    
}

.search-box .button{
    text-align: center;
    width: 73%;
}

.search-box .button button{
    width: 90%;
    background-color: #364C63;
    margin-top: 26px;
    margin-bottom: 15px;
    color: white;
}
</style>

<script>
export default {
    name:"searchBox",
}
</script>