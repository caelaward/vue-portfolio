

 <template>
      <div v-if="$store.state.resume.length>0">
     <div class="container" id="resume-container">
     <h1 class="mt-3 mb-5">Resume</h1>
     
      <div v-for="resume in $store.state.resume" :key="resume" >
   
     <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded fw-bold" id="card_bod">
      {{resume.experience}}
     <p>{{resume.description}}</p>
     </div>
     
    </div>
     </div>

     
     <h1 class="mt-5 mb-5">Education</h1> 
    <div v-for="education in $store.state.education" :key="education" >
    
  <div class="container" id="education-container">
 <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{education.name}}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item p-5" >{{education.name}}</a></li>
    <li><a class="dropdown-item" >{{education.description}}</a></li>
   
  </ul>
</div>
  </div>
</div>
  
   <h1 class="mt-5 mb-5">Skills</h1>

 <div class="container " id="skill-container">
     <div class="row row-cols-1 row-cols-md-3 g-4 ">
 <div v-for="skill in $store.state.skills" :key="skill" >
            
            <div class="col-sm-12 mb-3 mb-sm-0 ">
              <div class="card " id="card_bod" >
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

      </div>

  <div v-else>
    <SpinnerComp/>
    </div>
 </template>

 
<script>
  
  import SpinnerComp from '../components/SpinnerComp.vue' 
  export default {
    components:{
    SpinnerComp
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

 
 <style scoped >
 /* #card_bod:hover:before {
  border-color: #262626 ;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .3s;
}

#card:hover:after {
  border-color: #262626;
  height: 100%;
  transform: translateX(0) ;
  transition: .3s transform linear, .3s height linear .5s;
} */


#card_bod::before {
  margin-left: auto;
}

#card_bod::after, #card_bod::before {
  content: '';
  width: 0%;
  height: 2px;
  background:black;
  display: block;
  transition: 0.5s;
}

#card_bod:hover::after, #card_bod:hover::before {
  width: 100%;
}





 
 </style>

