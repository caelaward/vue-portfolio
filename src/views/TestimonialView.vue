<template>
  <h1>Testimonials Page</h1>
  <div class="container">

  <div class="row row-cols-1 row-cols-md-3 g-4">
 <div v-for="testimonial in $store.state.testimonials" :key="testimonial" class="col">
    <div class="card">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
       <h5 class="card-title">{{testimonial.name}}</h5>
      <p class="card-text">{{testimonial.description}}</p>

      
     
     </div>
    </div>
  </div>
</div>
  </div>
  
  
</template>

<script>
export default {
   computed:{
        fetchDataTestimonials(){
            this.$store.dispatch('fetchDataTestimonials')
        }
    },
    mounted(){
        this.fetchDataTestimonials
    }
}
</script>

<style>

</style>