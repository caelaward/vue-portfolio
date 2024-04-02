<template>
  <div v-if="$store.state.testimonials.length>0">
  <div class="container mt-5 ">
  <h1 class="mt-5 mb-5">Testimonials</h1>

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
  </div>
  <div v-else><SpinnerComp/></div>
  
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue' 
export default {
  components:{
    SpinnerComp
    },
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
  border-radius:1rem
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
  box-shadow: 0 9px 15px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgb(49, 47, 46);
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