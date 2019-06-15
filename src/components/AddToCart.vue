<template>
  <div class="add-to-cart">
    
 <button class="btn btn-primary float-left">Add to cart</button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    productID: String
  },

    data(){
        return{
        productName: this.name,
        productPrice: this.price,
        product_id: this.id  
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
