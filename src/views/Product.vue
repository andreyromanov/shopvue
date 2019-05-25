<template>
  <div class="products">

    <div class="container text-center">
      <h3 class="mb-4">Products Page!!!</h3>
      <button @click="AddNew" class="btn btn-primary mb-4">Add product</button>

      <table class="table table-striped mb-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    </div>

    <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Product name..." v-model="product.name">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Product price..." v-model="product.price">
            </div>
            <div class="form-group">
              <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="product.description" placeholder="Product description..."></textarea>
            </div>
             <div class="form-group">
              <input type="text" class="form-control" placeholder="Product tags..." v-model="product.tag">
            </div>
             <div class="form-group">
              <input type="file" class="form-control" placeholder="Product images...">
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="addProduct()" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  import {
    fb,
    db
  } from '../firebase';
import { firestore } from 'firebase';
  export default {
    name: "Product",
    props: {
      msg: String
    },

    data() {
      return {
        products: [],
        product: {
          name: null,
          description: null,
          price: null,
          tag: null,
          image: null
        },
        activeItem: null

      }
    },

    firestore(){
      return{
        products: db.collection('products'),
      }
    },
    methods: {
      AddNew() {
        $('#product').modal('show');
      },

      updateProduct() {
  
      },
      editProduct(product) {
  
      },
      deleteProduct(doc) {
  
      },
      readData() {
    
      },
      addProduct() {
        this.$firestore.products.add(this.product)
      },
     
    },
    created() {
   
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