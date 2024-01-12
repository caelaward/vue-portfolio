
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    resume:[],
    skills:[],
    projects:[],
    testimonials:[],
    
  },
  getters: {
  },
  mutations: {
    
    setResume(state,data){
      state.resume=data
    },
    setProjects(state,data){
      state.projects=data
    },
    setTestimonials(state,data){
      state.testimonials=data
    },
    setSkills(state,data){
      state.skills=data
    },
    setEducation(state,data){
      state.education=data
    }
    
    
  },
  actions: {
  
    fetchDataResume(context){
      axios.get( " https://caelaward.github.io/jsonData/")
      .then((r)=>{
       console.log(r.data.resume);
       context.commit("setResume", r.data.resume )
      })
     },
     fetchDataProjects(context){
      axios.get( "https://caelaward.github.io/jsonData/")
      .then((p)=>{
       console.log(p.data.projects);
       context.commit("setProjects", p.data.projects )
      })
     },
     fetchDataTestimonials(context){
      axios.get( "https://caelaward.github.io/jsonData/")
      .then((t)=>{
       console.log(t.data.testimonials);
       context.commit("setTestimonials", t.data.testimonials )
      })
     },
     fetchDataSkills(context){
      axios.get( "https://caelaward.github.io/jsonData/")
      .then((s)=>{
       console.log(s.data.skills);
       context.commit("setSkills", s.data.skills )
      })
     },
     fetchDataEducation(context){
      axios.get( " https://caelaward.github.io/jsonData/")
      .then((e)=>{
       console.log(e.data.Education);
       context.commit("setEducation", e.data.Education )
      })
     }
     
  },
  modules: {
  }
})
