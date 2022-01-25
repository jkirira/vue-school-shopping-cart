import shop from "../../api/shop";

export default {
  namespaced: true,

  state: {
    cart: [],
    checkoutStatus: null
  },

  getters: {

    cartProducts(state, getters, rootState){
      return state.cart.map(cartItem => {
        const product = rootState.products.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal(state, getters) {
      let total = 0
      getters.cartProducts.forEach(product => {
        total += product.price * product.quantity
      })
      return total
    },

  },


  mutations: {

    setCheckoutStatus(state, status){
      state.checkoutStatus = status
    },


    pushProductToCart(state, productId){
      state.cart.push( { 'id': productId, 'quantity': 1 } )
    },


    incrementProductQuantity(state, cartItem){
      cartItem.quantity +=1
    },

    emptyCart(state){
      state.cart = []
    }

  },


  actions: {

    addProductToCart({state, getters, commit, rootState, rootGetters }, product){
      if(rootGetters['products/productIsInStock'](product)){
        const cartItem = state.cart.find(item => item.id == product.id)

        if(!cartItem){
          commit("pushProductToCart", product.id)
        } else {
          commit("incrementProductQuantity", cartItem)
        }
        commit("products/decrementProductInventory", product, {root: true})
      }

    },

    checkout({state, commit}){
      shop.buyProducts( state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        })
    }

  }
}

