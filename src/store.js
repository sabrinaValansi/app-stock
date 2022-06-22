import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url:'https://62b0fcc7196a9e98702de964.mockapi.io/productos',
        ultimoProd:'',
        
    },
    actions : {
        ultimoProd({commit},nombre){
            commit('ultimoProdm',nombre)
        },
    },
    mutations : {
        ultimoProdm(state,nombre){
            state.ultimoProd=nombre
        },
    }
})