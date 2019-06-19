<template>
  <div class="minicart">
    
 <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Product cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ul>
          <li v-for="item in this.$store.state.cart">
            <img :src="item.productImage" alt="..." width="250px">
           {{item.productName}} - {{item.productQuantity}}
          </li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue</button>
        <button type="button" class="btn btn-primary" @click="checkout()">Checkout</button>
      </div>
    </div>
  </div>
</div>
    
  </div>
</template>

<script>
import CheckoutVue from '../views/Checkout.vue';
export default {
  name: "MiniCart",
  props: {
    msg: String
  },
  methods:{
    checkout(){
      $('#miniCart').modal('hide');
      this.$router.push('/checkout');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
