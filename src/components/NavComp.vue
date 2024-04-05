<template>
  <div class="sticky-top" id="navDiv">
    <!-- <div class="container-fluid bg-warning">
      <div class="row justify-content-between">
        <div class="col d-flex justify-content-center">
          <div class="social-media">
            <p class="mb-0 d-flex">
              <a href="https://www.linkedin.com/in/calla-ward-1a5146276/" target="blank" class="d-flex align-items-center justify-content-center me-2">
                <span>
                  <img src="https://cdn-thumbs.imagevenue.com/10/e0/12/ME17GO47_t.png" alt="" id="logo">
                </span>
              </a>
              <a href="https://github.com/caelaward" target="blank" class="d-flex align-items-center justify-content-center ">
                <span>
                  <img src="https://cdn-thumbs.imagevenue.com/8c/a7/f0/ME17GO3H_t.png" alt="" id="logo">
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> -->
    <nav class="navbar navbar-expand-lg p-3">
      <div class="container-fluid ">
        <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link :to="{ name: 'home' }" class="nav-link " :class="{ 'active': currentRoute === 'home' }" exact>Home</router-link>
            <router-link :to="{ name: 'about' }" class="nav-link " :class="{ 'active': currentRoute === 'about' }">About</router-link>
            <router-link :to="{ name: 'resume' }" class="nav-link " :class="{ 'active': currentRoute === 'resume' }">Experience</router-link>
            <router-link :to="{ name: 'projects' }" class="nav-link " :class="{ 'active': currentRoute === 'projects' }">Projects</router-link>
            <router-link :to="{ name: 'testimonials' }" class="nav-link " :class="{ 'active': currentRoute === 'testimonials' }">Reviews</router-link>
            <router-link :to="{ name: 'contact' }" class="nav-link " :class="{ 'active': currentRoute === 'contact' }">Contact</router-link>
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
  background-color:beige
}
</style>
