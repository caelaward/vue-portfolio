<template>
  <div clas="container">
  <div class="home">
    <div class="name">
   <h2 class="text">Caela Morgan Ward </h2>
   </div>
   <img src="https://i.postimg.cc/RqxS6HFc/pprofile1.jpg" class="w-25 rounded " id="coverImg" alt="" ><br><br>
  <h3> <p>Aspiring web developer  </p></h3>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style scoped>
.container{
    display: inline-block;
}
#coverImg{
   box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
}

.text{
    font-size: 5rem;
    text-shadow: 5px 8px 10px;
    letter-spacing: 10px;
    font-family: monospace;
    border-right: solid 5px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s ,
    cursor .4s step-end infinite alternate;
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
</style>
