<template>
    
    <div class="wrap">


                <div class="edit-profile">
                <div class="container">
                    <div class="row">
                           
                     <editForm />

                    </div>
                </div>
            </div>
                    
        
            
     </div>

</template>

<style scoped>

.edit-profile{
    margin-top: 30px;
    
}


@media (max-width: 576px){
    .edit-form {
        height: 630px;
        border: 1px solid #364C63;
        padding: 15px;
        width: 95%;
    }

    h1 {
        font-size: 1.5rem;
        margin: 0.67em 0;
    }

    #buttom-viewpage {
        font-size: 15px;
        width: 209px;
        height: 48px;
        margin-top: 20px;
    }
    
    .edit-form a img {
        width: 100px;
        margin-left: 5px;
    }


 .edit-form .icon-text {
    margin-top: 0px;
    font-size: 12px;
    margin-left: -5px;

}

 #line-2 {
    width: 282px;
    margin-right: 50px;
    margin-top: 27px;
}
 

.edit-form .format-input {
    width: 200px;
    height: 40px;
    margin-right: 70px;
}

.edit-form h2 {
    font-size: 25px;
    
}

.edit-form .button-login {
    font-size: 12px;
    width: 92px;
    height: 50px;
    margin-right: 90px;
    margin-top: 40px;
}


.edit-form .format-label {
    font-size: 18px;
}

} 



@media (min-width: 576px) and (max-width: 767.98px){
    .contianer{
        max-width: 767.98px;
    }
    .edit-form {
        height: 630px;
        border: 1px solid #364C63;
        padding: 15px;
        width: 95%;
    }

    h1 {
        font-size: 1.5rem;
        margin: 0.67em 0;
    }

    #buttom-viewpage {
        font-size: 15px;
        width: 209px;
        height: 48px;
        margin-top: 20px;
    }
    
    .edit-form a img {
        width: 100px;
        margin-left: 5px;
    }


 .edit-form .icon-text {
    margin-top: 0px;
    font-size: 12px;
    margin-left: -5px;

}

 #line-2 {
    width: 282px;
    margin-right: 50px;
    margin-top: 27px;
}
 

.edit-form .format-input {
    width: 200px;
    height: 40px;
    margin-right: 70px;
}

.edit-form h2 {
    font-size: 25px;
    
}

.edit-form .button-login {
    font-size: 12px;
    width: 92px;
    height: 50px;
    margin-right: 90px;
    margin-top: 40px;
}


.edit-form .format-label {
    font-size: 18px;
}

}



@media (min-width: 768px)  and  (max-width: 991.98px) { 
    .container{
        max-width: 991.98px ;
    }
    .edit-form{
        height: 630px;
        border: 1px solid #364C63;
        padding:15px;          
        margin-left: 0px;
        width: 75%;

    }

    h1 {
        font-size: 1.5rem;
        margin: 0.67em 0;
    } 



    .edit-form .format-label {
        font-size: 17px;
        margin-right: 60px;
    }



    .edit-form .format-input {
        width: 240px;
        height: 50px;
        margin-right: 57px;
    }


    .edit-form a img {
        width: 130px;
        margin-left: 30px;
    }

    .edit-form .icon-text {
        margin-top: 25px;
        font-size: 15px;
        margin-left:-147px;
    }

    #line-2 {
        width: 55%;
        margin-right: 39px;
        margin-top: 25px;
    } 


    .edit-form h2 {
        font-size: 25px;
        margin-right: 65px;
        margin-top: 25px;
        margin-bottom: 20px;
    }


    .edit-form .button-login {
        font-size: 15px;
        width: 114px;
        height: 50px;
        margin-right: 130px;
    }

    #buttom-viewpage {
        font-size: 13px;
        width: 170px;
        height: 54px;
    }
}


 
@media (min-width: 992px)  and  (max-width: 1199.98px) {
    .edit-form{
        height: 630px;
        border: 1px solid #364C63;
        padding:15px;          
        margin-left: 0px;
        width: 75%;

    }

    h1 {
        font-size: 1.5rem;
        margin: 0.67em 0;
    } 



    .edit-form .format-label {
        font-size: 17px;
        margin-right: 60px;
    }



    .edit-form .format-input {
        width: 240px;
        height: 50px;
        margin-right: 57px;
    }


    .edit-form a img {
        width: 130px;
        margin-left: 30px;
    }

    .edit-form .icon-text {
        margin-top: 25px;
        font-size: 15px;
        margin-left:-147px;
    }

    #line-2 {
        width: 55%;
        margin-right: 39px;
        margin-top: 25px;
    } 


    .edit-form h2 {
        font-size: 25px;
        margin-right: 65px;
        margin-top: 25px;
        margin-bottom: 20px;
    }


    .edit-form .button-login {
        font-size: 15px;
        width: 114px;
        height: 50px;
        margin-right: 130px;
    }

    #buttom-viewpage {
        font-size: 13px;
        width: 170px;
        height: 54px;
    }

}



</style>


<script>
import editForm from "@/components/editForm.vue";

export default {
  name: "editForm",
  data(){
      return{
         
      }
  },
  components: {
    editForm,
    
  },
};
</script>