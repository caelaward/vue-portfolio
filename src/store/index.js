import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    about:[],
    resume:[]
  },
  getters: {
  },
  mutations: {
    setAbout(state,data){
      state.about= data
    },
    setResume(state,data){
      state.resume=data
    }
  },
  actions: {
    fetchDataAbout(context){
     axios.get( "http://localhost:3000/about")
     .then((a)=>{
      console.log(a.data[0]);
      context.commit("setAbout", a.data[0] )
     })
    } ,
    fetchDataResume(context){
      axios.get( " http://localhost:3000/resume")
      .then((r)=>{
       console.log(r.data[0]);
       context.commit("setResume", r.data[0] )
      })
     }
  },
  modules: {
  }
})
