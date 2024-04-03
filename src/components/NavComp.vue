<template>

<div class="sticky-top">
<div class="container-fluid bg-warning">
<div class="row justify-content-between">

<div class="col d-flex justify-content-center ">
<div class="social-media">
<p class="mb-0 d-flex">

<a href="https://www.linkedin.com/in/calla-ward-1a5146276/" target="blank" class="d-flex align-items-center justify-content-center me-2"><span ><img src="https://cdn-thumbs.imagevenue.com/10/e0/12/ME17GO47_t.png" alt="" id="logo"></span></a>
<a href="https://github.com/caelaward" target="blank" class="d-flex align-items-center justify-content-center "><span ><img src="https://cdn-thumbs.imagevenue.com/8c/a7/f0/ME17GO3H_t.png" alt="" id="logo"></span></a>
</p>
</div>
</div>
</div>  

</div>
    <nav class="navbar navbar-expand-lg bg-dark p-3">
  <div class="container-fluid ">
   
    
    <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation ">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
      <div class="navbar-nav  ">
         <li class="nav-item">
           <router-link to="/" class="nav-link  text-white"  href="home">Home</router-link>
         </li>       
         <li class="nav-item">
    <router-link to="/about" class="nav-link text-white" >About</router-link>
  </li>
        <li class="nav-item">
    <router-link to="/resume" class="nav-link text-white" href="resume">Resume</router-link>
  </li>
        <li class="nav-item">
    <router-link to="/projects" class="nav-link text-white" href="projects">Projects</router-link>
  </li>
   <li class="nav-item">
    <router-link to="/testimonials" class="nav-link text-white" href="testimonials">Reviews</router-link>
  </li>
   <li class="nav-item">
    <router-link to="/contact" class="nav-link text-white" href="contact">Contact</router-link>
  </li>
      
      </div>
    </div>
  </div>
</nav>
    

</div>

</template>

<script>
export default {

}
</script>

<style>
#logo {
    width: 25px;
    height: 30px;
    padding: 2px;
    mix-blend-mode: multiply;
    transition: transform 0.3s;
  } 
 #logo:hover{
      transform: scale(1.2);
    }

</style>