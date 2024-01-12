<template>
  <div class="container mt-5">
  <h1 class="mt-5">Testimonials</h1>

  <div class="row row-cols-1 row-cols-md-3 g-4">
 <div v-for="testimonial in $store.state.testimonials" :key="testimonial" class="col">
    <div class="card">
     <div class="inner">
        <div class="cover">
           <p> <img :src="testimonial.image" class="card-img-top w-25 rounded-circle" alt="..."></p>
            <p class="title">{{testimonial.name}}</p> 
        </div>
        <div class="back">
            <p >{{testimonial.description}}</p>
        </div>
    </div>
    </div>
  </div>
</div>
  </div>

  


  <!-- <div class="container ">
    <div v-for="(testimonial,index) in $store.state.testimonials" :key="testimonial" :class="{ 'carousel-item': true, active: index === 0 }">
      <div
          id="carouselExampleAutoplaying"
          class="carousel slide pt-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner justify-content-evenly">
            <div class="carousel-item active">
              <img
                src=""
                class="d-block w-25 rounded-circle "
                id="tash-img"/>
                <h4 class="name">{{testimonial.name}}</h4>
              
              <div class="description justify-content-evenly">
                <p >
                  {{testimonial.description}}
                </p>
              </div>
            </div> 
            </div>
            <button
            class="carousel-control-prev carousel-dark"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next carousel-dark "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
            </div>
            </div>
            
  </div> -->
  
  
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

<style scoped>
.card {
  background-color: white;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card:hover .inner {
  transform: rotateY(180deg);
}

.cover, .back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

/* .cover {
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
     rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
} */

.back {
  /* background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
     bisque 40%, rgb(255, 185, 160) 78%);
  color: white; */
  transform: rotateY(180deg);
}
</style>