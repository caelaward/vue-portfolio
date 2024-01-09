 <template>
   <h1>Skills and experience </h1>
    <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.resume.experience}}</h5>
        <p class="card-text">{{$store.state.resume.experience}}</p>
        <a href="#" class="btn btn-primary">{{$store.state.resume.experience}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.resume.skills}}</h5>
        <p class="card-text">{{$store.state.resume.description2}}</p>
        <a href="#" class="btn btn-primary">{{$store.state.resume.skills}}</a>
      </div>
    </div>
  </div>
</div>
  <!-- <p>{{$store.state.resume.experience}}</p>
  <p>{{$store.state.resume.skills}}</p>
     -->
 </template>
 
<script>
  export default {
    computed:{
        fetchDataResume(){
            this.$store.dispatch('fetchDataResume')
        }
    },
    mounted(){
        this.fetchDataResume
    }
}

</script>

 
 <style>
 
 </style>