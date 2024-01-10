 <template>
    <!-- <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.resume.experience}}</h5>
        <p class="card-text">{{$store.state.resume.experience}}</p>
        <a href="#" class="btn btn-primary">{{$store.state.resume.experience}}</a>
      </div>
    </div>
  </div>
</div> -->
  <!-- <p>{{$store.state.resume.experience}}</p>
  <p>{{$store.state.resume.skills}}</p>
     -->
     
     <h1>Resume</h1>
     <p>{{$store.state.resume.description}}</p>
     <!-- <h1>Education</h1>
     <p>{{$store.state.education.name}}</p> -->
   <h1>Skills</h1>
   <div class="container" id="skill-container">
   <div v-for="skill in $store.state.skills" :key="skill" >
     <div class="card mb-3" style="max-width: 540px;">
   <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{skill.type}}</h5>
        <p class="card-text">{{skill.description}}</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
 </template>
 
<script>
  export default {
    computed:{
        fetchDataResume(){
            this.$store.dispatch('fetchDataResume')
        },
        fetchDataSkills(){
          this.$store.dispatch('fetchDataSkills')
        },
         fetchDataEducation(){
          this.$store.dispatch('fetchDataEducation')
        }

    },
    mounted(){
        this.fetchDataResume
        this.fetchDataSkills
        this.fetchDataEducation
    }
}

</script>

 
 <style>
  
 
 </style>
