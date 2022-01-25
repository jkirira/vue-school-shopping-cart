<template>
  <div id="app">
    <ProductsList/>
    <hr>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue'
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: 'app',
  components: {
    ShoppingCart,
    ProductsList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
