import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    getUser(state,data){
      state.user=data
    }
  },
  actions: {
    async getUser ({
      commit
    }){
      try{
        const response = await axios.get('http://localhost:8080/sekolah/login')
        const data =response.data;
        commit("getUser",data)

      } catch(error){
console.log(error)
      }
    }
  },
  modules: {
  }
})
