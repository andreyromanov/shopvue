<template>
  <div class="checkout">
    <Navbar></Navbar>
    <h1 class="mb-5">This is an checkout page</h1>
    <div class="container">
    <div class="row" v-for="item in this.$store.state.cart">
      <div class="col-md-3"></div>
      <div class="col-md-2 border"><img :src="item.productImage" alt="..." width="150px"></div>
      <div class="col-md-2 border pt-4">{{item.productName}} - {{item.productQuantity}}</div>
      <div class="col-md-2 border pt-4 text-center"><span @click="$store.commit('removeFromCart', item)">
          <i class="fa fa-trash fa-2x" style="color: red;" aria-hidden="true"></i>
        </span>
      </div>
      <div class="col-md-3"></div>
    </div>
    </div>
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