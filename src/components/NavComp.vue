<template>
  <div class="sticky-top" id="navDiv">
    <nav class="navbar navbar-expand-lg p-3">
      <div class="container-fluid ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link :to="{ name: 'home' }" class="nav-link " :class="{ 'active': currentRoute === 'home' }" @click="collapseNavbar" exact>Home</router-link>
            <router-link :to="{ name: 'about' }" class="nav-link " :class="{ 'active': currentRoute === 'about' }" @click="collapseNavbar">About</router-link>
            <router-link :to="{ name: 'resume' }" class="nav-link " :class="{ 'active': currentRoute === 'resume' }" @click="collapseNavbar">Education&Experience</router-link>
            <router-link :to="{ name: 'projects' }" class="nav-link " :class="{ 'active': currentRoute === 'projects' }" @click="collapseNavbar">Projects</router-link>
            <router-link :to="{ name: 'testimonials' }" class="nav-link " :class="{ 'active': currentRoute === 'testimonials' }" @click="collapseNavbar">Reviews</router-link>
            <router-link :to="{ name: 'contact' }" class="nav-link " :class="{ 'active': currentRoute === 'contact' }" @click="collapseNavbar">Contact</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: ''
    };
  },
  created() {
    this.currentRoute = this.$route.name;
  },
  watch: {
    $route(to) {
      this.currentRoute = to.name;
    }
  },
  methods: {
    collapseNavbar() {
      if (window.innerWidth < 992) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    }
  }
};
</script>

<style>
#logo {
  width: 25px;
  height: 30px;
  padding: 2px;
  mix-blend-mode: multiply;
  transition: transform 0.3s;
}

#logo:hover {
  transform: scale(1.2);
}

.nav-link.active {
  font-weight: bold;
  text-decoration: underline;

  
}

#navDiv{
  background-color:beige;
  

}
</style>
