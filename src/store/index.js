
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    resume:[],
    skills:[],
    projects:[],
    testimonials:[]
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
      axios.get( " http://localhost:3000/resume")
      .then((r)=>{
       console.log(r.data);
       context.commit("setResume", r.data )
      })
     },
     fetchDataProjects(context){
      axios.get( "http://localhost:3000/projects")
      .then((p)=>{
       console.log(p.data);
       context.commit("setProjects", p.data )
      })
     },
     fetchDataTestimonials(context){
      axios.get( "http://localhost:3000/testimonials")
      .then((t)=>{
       console.log(t.data);
       context.commit("setTestimonials", t.data )
      })
     },
     fetchDataSkills(context){
      axios.get( "http://localhost:3000/skills")
      .then((s)=>{
       console.log(s.data);
       context.commit("setSkills", s.data )
      })
     },
     fetchDataEducation(context){
      axios.get( " http://localhost:3000/Education")
      .then((e)=>{
       console.log(e.data);
       context.commit("setEducation", e.data )
      })
     }
  },
  modules: {
  }
})
