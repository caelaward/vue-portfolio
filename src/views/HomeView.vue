<template>
    
  <!-- <div clas="container" >
  <div class="home">
    <div class="name">
   <h2 class="text">Caela Morgan<br>Ward</h2>
   </div>
   <img src="https://i.postimg.cc/RqxS6HFc/pprofile1.jpg" class="w-25 rounded " id="coverImg" alt="" ><br><br>
  <h3 class="description"> <p>Aspiring web developer  </p></h3>
  </div>
  </div> -->

  
    <!-- <div class="row">
        <div class="col-lg-6 mt-5">
            <h1>Caela Morgan Ward</h1>
        </div>


        <div class="col-lg-6">
            <img src="https://i.postimg.cc/RqxS6HFc/pprofile1.jpg" class="container-fluid " id="coverImg"> 

        </div>

    </div> -->
    <div class="container">
        <img src="https://i.postimg.cc/RqxS6HFc/pprofile1.jpg" class="container-fluid " id="coverImg"> 
    </div>
    
    
  
</template>

<script>



export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style scoped>

#coverImg{
    border-radius: 50%;
}


.container{
    display: inline-block;
    background: rgb(255, 253, 253);
    border-radius:50%;
    width: 30%;
    padding-top:5px;
    padding-bottom: 5px;
    margin-top:1%
   
}


.text{
    padding: 1rem;
    font-size: 5rem;
    text-shadow: 5px 8px 10px;
    letter-spacing: 10px;
    font-family: monospace;
    border-right: solid 5px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s ,
    cursor .4s infinite alternate;
}
@keyframes cursor {
    50% {
        border-color: transparent;
    }
}
@keyframes typing {
    from{
        width: 0;
    }
    
}
@media (max-width:768px){
    .text{
        font-size: 2rem;
        margin-top: 16%;
    }
    #coverImg{
        margin-top:50px ;
        margin-bottom: 50px;
    }
    .description{
        margin-bottom: 50px;
    }  
}
@media (max-width:500px){
    .text{
        font-size: 1.8rem;
        margin-top: 16%;
        animation: none;
        
    }
    
    .description{
        margin-bottom: 50px;
    }
}
</style>
