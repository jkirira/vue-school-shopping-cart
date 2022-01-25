import Vuex from 'vuex'
import Vue from 'vue'
import shop from "../api/shop";
import cart from "./modules/cart";
import products from "./modules/products";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    products
  },

  state: {

  },

  getters: {

  },


  mutations: {

  },


  actions: {

  }
})

export default store;
