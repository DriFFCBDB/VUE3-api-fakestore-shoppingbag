import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    loadProduct(state,products){
      state.products = products
    }
  },
  actions: {

    loadProduct({commit}){
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('increment',response.data);
      })
    }
  },

  modules: {
  }
})
