

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
      <div class="item-hints">
  <div class="hint" data-position="4">
    <span class="hint-radius"></span>
    <span class="hint-dot">  {{education.name}}</span>
    <div class="hint-content do--split-children">
      <p>{{education.description}}</p>
    </div>
  </div>
</div>

    
  <!-- <div class="container" id="education-container">
 <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{education.name}}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item p-5" >{{education.name}}</a></li>
    <li><a class="dropdown-item" >{{education.description}}</a></li>
   
  </ul>
</div>
  </div> -->
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
/* 
.item-hints {
  --purple: #720c8f;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding-right: 170px;
}
.item-hints .hint {
  margin: 150px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-hints .hint-dot {
  z-index: 3;
  border: 1px solid black;
  
  width: 100%;
  height: 65px;
  -webkit-transform: translate(-0%, -0%) scale(0.95);
  transform: translate(-0%, -0%) scale(0.95);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color:black;
}
.item-hints .hint-radius {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -125px 0 0 -125px;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(0);
  transform: scale(0);
}
.item-hints .hint[data-position="1"] .hint-content {
  top: 85px;
  left: 50%;
  margin-left: 56px;
}
.item-hints .hint-content {
  width: 300px;
  position: absolute;
  z-index: 5;
  padding: 35px 0;
  opacity: 0;
  transition: opacity 0.7s ease, visibility 0.7s ease;
  color:black;
  visibility: hidden;
  pointer-events: none;
}
.item-hints .hint:hover .hint-content {
  position: absolute;
  z-index: 5;
  padding: 35px 0;
  opacity: 1;
  -webkit-transition: opacity 0.7s ease, visibility 0.7s ease;
  transition: opacity 0.7s ease, visibility 0.7s ease;
  color:black;
  visibility: visible;
  pointer-events: none;
}
.item-hints .hint-content::before {
  width: 0px;
  bottom: 29px;
  left: 0;
  content: "";
  background-color:black;
  height: 1px;
  position: absolute;
  transition: width 0.4s;
}
.item-hints .hint:hover .hint-content::before {
  width: 180px;
  transition: width 0.4s;
}
.item-hints .hint-content::after {
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transform: rotate(-225deg);
  transform: rotate(-225deg);
  bottom: 29px;
  left: 0;
  width: 80px;
  content: "";
  background-color:black;
  height: 1px;
  position: absolute;
  opacity: 1;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.item-hints .hint:hover .hint-content::after {
  opacity: 1;
  visibility: visible;
}
.item-hints .hint[data-position="4"] .hint-content {
  bottom: 85px;
  left: 50%;
  margin-left: 56px;
}

 */


 
 </style>

