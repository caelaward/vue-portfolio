<template>
   <div class="header">
    <h1 class="mt-2 mb-5">My Projects</h1>
  </div>
<div v-if="$store.state.projects.length>0" >
  

  <div class="container " id="cardCont">

  <div class="row row-cols-1 row-cols-md-3 g-4">
 <div v-for="project in $store.state.projects" :key="project" >
    <div class="card h-100" id="cardBody">
      <img :src="project.image" class="card-img-top h-75 w-100 " alt="...">
      <div class="card-body">
        <h5 class="card-title">{{project.project}}</h5>
    <p class="card-text">{{project.description}}</p>
     <a :href="project.github" class="btn me-4" target="blank">github</a>
     <a :href="project.vercel" class="btn" target="blank">vercel</a>
     </div>
    </div>
  </div>
</div>

  </div>
</div>
<div v-else><SpinnerComp/></div>


</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue'

export default {
  components: {
    SpinnerComp
   
    },
   computed:{
        fetchDataProjects(){
            this.$store.dispatch('fetchDataProjects')
        }
    },
    mounted(){
        this.fetchDataProjects
    }
}
</script scoped>

<style scoped>
.header {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png');
	/*background-attachment: fixed;*/
	color: #FFF;
	max-height: 500px;
	height: 100%;

}
#cardBody{
   box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
   transition: transform 0.3s ease;
   border-radius:0
   
}
#cardBody:hover{
  transform: scale(1.1);

}

.btn{
 border-color:maroon;
 
  
}

.btn:hover{
  background-color:maroon;
  color:white
}


</style>