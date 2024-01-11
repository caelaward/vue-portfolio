



 <template>
    
     <div class="container" id="resume-container">
     <h1>Resume</h1>
     
      <div v-for="resume in $store.state.resume" :key="resume" >
   
     <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded fw-bold">
      {{resume.experience}}
     <p>{{resume.description}}</p>
     </div>
     
    </div>
     </div>

     
     <h1>Education</h1> 
    <div v-for="education in $store.state.education" :key="education" >
    
  <div class="container" id="education-container">
 <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{education.name}}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item p-5" href="#">{{education.name}}</a></li>
    <li><a class="dropdown-item" href="#">{{education.description}}</a></li>
   
  </ul>
</div>
  </div>
</div>
  
   <h1>Skills</h1>

 <div class="container " id="skill-container">
     <div class="row row-cols-1 row-cols-md-3 g-4 ">
 <div v-for="skill in $store.state.skills" :key="skill" >
            
            <div class="col-sm-12 mb-3 mb-sm-0 ">
              <div class="card ">
                <div class="card-body ">
                  <img :src="skill.image" class="img-fluid rounded-start float-start w-25" alt="...">
                 <h5 class="card-title ">{{skill.type}}</h5>
                  <p class="card-text ">{{skill.description}}</p>
                </div>
              </div>
            </div>
     </div>
 </div>
 </div>
    
 </template>

 
<script>
 
  export default {
    components:{
    
    },
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
