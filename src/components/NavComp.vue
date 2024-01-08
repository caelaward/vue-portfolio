<template>
    <!-- <div class="nav">
       <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link to="/home" class="nav-link active" aria-current="page" href="home">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/about" class="nav-link" >About</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/resume" class="nav-link" href="resume">Resume</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/projects" class="nav-link" href="projects">Projects</router-link>
  </li>
   <li class="nav-item">
    <router-link to="/testimonials" class="nav-link" href="testimonials">Testimonials</router-link>
  </li>  
  <li class="nav-item">
    <router-link to="/contact" class="nav-link" href="contact">Contact</router-link>
  </li>
 
</ul> 
    </div>
   -->
  
    <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div class="bg-dark p-4">
       <ul class="list-group list-group-flush">
  <li class="list-group-item"><router-link to="/home">Home</router-link></li>
   <li class="list-group-item"><router-link to="/about" >About</router-link></li>
   <li class="list-group-item"><router-link to="/resume" >Resume</router-link></li>
   <li class="list-group-item"><router-link to="/projects" >Projects</router-link></li>
 <li class="list-group-item"><router-link to="/testimonials" >Testimonials</router-link></li>
  <li class="list-group-item"><router-link to="/contact" >Contact</router-link></li>
</ul>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
   
</template>

<script>
export default {

}
</script>

<style>

</style>