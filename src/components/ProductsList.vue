<template>

  <div>
    <h1>
      Product List
    </h1>
    <img v-if="loading"
    src="">

    <ul v-else>
      <li v-for="product in products">{{product.title}} - {{product.price | currency}} - {{product.inventory}}
      <button :disabled="!productIsInStock(product)"  @click="addProductToCart(product) ">Add to Cart</button>
      </li>
    </ul>
  </div>

</template>
<script>
import shop from '@/api/shop'
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  data(){
    return{
      loading: true
    }
  },

  computed: {
    ...mapState({
      products: state => state.products.products
    }),

    ...mapGetters('products', {
      productIsInStock: 'productIsInStock'
    }),

  },

  methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addProductToCart: 'cart/addProductToCart',
      }),
  },

  created(){
    this.loading = true,
    this.fetchProducts().then(() => this.loading = false)
  }
}
</script>
