<template>

                  
    <div class="box">
        <div class="card" >
            <a  href="#"><img class="favorite-icon" src="@/assets/icon/favorite.svg" alt="favorite-icon"></a>
                <div class="inner">
            <a href="#"> <img  src="@/assets/icon/pexels-designecologist-1005058.jpg" class="card-img-top" alt="..."></a>
                </div>
             <div class="card-body">
            <a class="nav-link" href="#"><h5 class="card-title">{{tittle}}</h5></a>
                    <span class="card-text">30.000 ريال</span>
                    <span class="time">قبل 5 دقائق</span>
            </div>
        </div>
    </div>    





</template>
<style scoped>
.ads-boxes .row .box{
    width: 25%;
    height: 260px;
    margin-top: 40px;

}

.ads-boxes .row .card{
    border-radius: 15px;
    position: relative;
    width: 97%;
    height: 100%;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
}

.ads-boxes .row .card .inner{
    height: 165px;
    overflow: hidden;
    
}
.ads-boxes .row .card .inner img {
    transition: all 1.5s ease;
    height: 100%;
}
.ads-boxes .row .card .inner:hover img{
    transform: scale(1.5);

}

.ads-boxes .row .card .favorite-icon{
    position: absolute;
    width: 50px;
    height: 50px;
    top: 5px;
    right: 5px;
    z-index: 2;
}

.ads-boxes .row .card .card-body{
    position: relative;
}

.ads-boxes .row .card .card-body h5{
    position: absolute;
    right: 10px;
    top: 15px;
    font-size: 20px;
    font-weight: bold;

}
.ads-boxes .row .card .card-text{
    position: absolute;
    right: 10px;
    bottom: 2px;
    font-size: 22px;
    font-weight: bold;
    z-index: 1;
}

.ads-boxes .row .card .time{
    position: absolute;
    left: 12px;
    bottom: 5px;
    z-index: 1;
}
</style>

<script>
export default {
    name: "boxAds",
    data(){
        return{
            tittle: "clothes",
        }
    },
    
}
</script>