<template>
  <div class="header">
    <h1 class="mt-2">Reviews</h1>
      </div>
  <div v-if="$store.state.testimonials.length>0" id="cardsCont">
  <div class="container-fluid mt-5 " id="ReviewCont">


  <div class="row row-cols-1 row-cols-md-3 g-4" >
 <div v-for="testimonial in $store.state.testimonials" :key="testimonial" class="col">
    <div class="card">
     <div class="inner">
        <div class="cover">
           <p > <img :src="testimonial.image" class="card-img-top w-25 rounded-circle" alt="..." id="picture"></p>
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

#picture{
  box-shadow: 10px 10px 8px #888888
 
}

.header {
	/* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png'); */
	/*background-attachment: fixed;*/
	color: #FFF;
	max-height: 500px;
	height: 100%;
  background-color: black;
 
  box-shadow: 10px 10px 8px #888888


}

.card {
  /* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png'); */
  background-color:beige;
  /* background-color:#eef4f7; */
  height: 254px;
  perspective: 1000px;
  width:100%;
  color:black;
  /* font-family: sans-serif; */
  border-radius:0;
  box-shadow: 10px 10px 8px #888888
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
  /* box-shadow: 0 9px 15px 0 rgba(0,0,0,0.2); */
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* border: 1px solid rgb(49, 47, 46); */
  /* border-radius: 1rem; */
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

/* #ReviewCont{
  
  background-color:#eef4f7;
} */
/* 
.testimonials-clean {
  color:#313437;
  background-color:#eef4f7;
}

.testimonials-clean p {
  color:#7d8285;
}

.testimonials-clean h2 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .testimonials-clean h2 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.testimonials-clean .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto;
}

.testimonials-clean .intro p {
  margin-bottom:0;
}

.testimonials-clean .people {
  padding:50px 0 20px;
}

.testimonials-clean .item {
  margin-bottom:32px;
}

@media (min-width:768px) {
  .testimonials-clean .item {
    height:220px;
  }
}

.testimonials-clean .item .box {
  padding:30px;
  background-color:#fff;
  position:relative;
}

.testimonials-clean .item .box:after {
  content:'';
  position:absolute;
  left:30px;
  bottom:-24px;
  width:0;
  height:0;
  border:15px solid transparent;
  border-width:12px 15px;
  border-top-color:#fff;
}

.testimonials-clean .item .author {
  margin-top:28px;
  padding-left:25px;
}

.testimonials-clean .item .name {
  font-weight:bold;
  margin-bottom:2px;
  color:inherit;
}

.testimonials-clean .item .title {
  font-size:13px;
  color:#9da9ae;
}

.testimonials-clean .item .description {
  font-size:15px;
  margin-bottom:0;
}

.testimonials-clean .item img {
  max-width:40px;
  float:left;
  margin-right:12px;
  margin-top:-5px;
} */


</style>