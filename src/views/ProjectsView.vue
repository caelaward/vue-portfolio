<template>
<div v-if="$store.state.projects.length>0" >
  <h1 class="mt-5">My Projects</h1>
  <div class="container mt-5">

  <div class="row row-cols-1 row-cols-md-3 g-4">
 <div v-for="project in $store.state.projects" :key="project" >
    <div class="card h-100" id="cardBody">
      <img :src="project.image" class="card-img-top h-75 w-100 " alt="...">
      <div class="card-body">
        <h5 class="card-title">{{project.project}}</h5>
    <p class="card-text">{{project.description}}</p>
     <a :href="project.github" class="btn btn-primary me-4" target="blank">github</a>
     <a :href="project.vercel" class="btn btn-primary" target="blank">vercel</a>
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

<style>
#cardBody{
   box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
   transition: transform 0.3s ease
}
#cardBody:hover{
  transform: scale(1.1);

}

</style>