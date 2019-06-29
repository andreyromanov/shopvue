<template>
  <div class="checkout">
    <Navbar></Navbar>
    <h1>This is an checkout page</h1>
    <ul>
      <li v-for="item in this.$store.state.cart">
        <img :src="item.productImage" alt="..." width="250px">
        {{item.productName}} - {{item.productQuantity}}
        <span class="float-right" @click="$store.commit('removeFromCart', item)">X</span>

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "About",
    props: {
      msg: String
    }
  };
</script>