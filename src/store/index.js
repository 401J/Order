import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// class item{
//   constructor(name,num,price){

//     this.name=name,
//     this.price=price,
//     this.num=num
//   }
// }
export default new Vuex.Store({
  state: {
      list:[],
      user:'',
      payWay:''

  },
  mutations: {
    ADD_TODO(state,item){
        state.list.push(item);
    },
    RM_TODO(state,index){
        state.list.splice(index,1)
    },
    LOGIN(state,user){
      state.user=user;
    } ,
    ADD_NUM(state,index){
      state.list[index].num++;
    },
    SUB_NUM(state,index){
      state.list[index].num--;
    }
  },
  actions: {
    addList({commit},item){
      commit('ADD_TODO',item)
    },
    rmList({commit},index){
      commit('RM_TODO',index)
    },
    login({commit},user){
      commit('LOGIN',user)
    },
    addNum({commit},index){
      commit('ADD_NUM',index)
    },    
    subNum({commit},index){
      commit('SUB_NUM',index)
    },

  },
  getters:{
    
  },
  modules: {
  }
})
