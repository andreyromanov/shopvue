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
          <tr v-for="product in products" v-bind:key="product">
            <td>{{ product.data().name }}</td>
            <td>{{ product.data().price }}</td>
            <td>
              <button @click="editProduct(product)" class="btn btn-primary">Edit</button>
              <button @click="deleteProduct(product.id)" class="btn btn-danger ml-3">Delete</button>
            </td>
          </tr>
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

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="updateProduct()" type="button" class="btn btn-primary">Save changes</button>
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
          price: null
        },
        activeItem: null

      }
    },
    methods: {
      AddNew(){
         $('#product').modal('show');
      },

      updateProduct() {
        db.collection("products").doc(this.activeItem).update(this.product)
          .then(function () {
            $('#edit').modal('hide');
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      },
      editProduct(product) {
        $('#edit').modal('show');
        this.product = product.data();
        this.activeItem = product.id;
      },
      deleteProduct(doc) {
        if (confirm('Are you sure?')) {
          db.collection("products").doc(doc).delete().then(() => {
            console.log("Deleted!!!");
          });
        } else {

        }
      },
      readData() {
        db.collection("products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc);
          })
        });
      },
      saveData() {
        db.collection("products").add(this.product)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.readData();
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      },
      reset() {
        Object.assign(this.$data, this.$options.data.apply(this));
      }
    },
    created() {
      this.readData();
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