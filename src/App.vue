<template>
  <!-- <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> | 
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav> -->
  <NavComp/>
  
  <router-view/>
  <FooterComp/>


</template>
<script>
import NavComp from './components/NavComp.vue'
import FooterComp from './components/FooterComp.vue'


export default {
   components: {
    NavComp,
    FooterComp
   
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
#app {
  flex-wrap: wrap !important;
  font-family: 'Lora', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #d6c680;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
