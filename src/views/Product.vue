<template>
  <div class="products">

    <div class="container text-center">
      <h3 class="mb-4">Products Page!!!</h3>

      <div class="form-group">
        <input type="text" class="form-control" placeholder="Product name..." v-model="product.name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Product price..." v-model="product.price">
      </div>
      <div class="form-group">
        <button @click="saveData" class="btn btn-primary btn-lg">Save</button>
      </div>
      <hr>
      <h3 class="mb-4">Products</h3>
      <table class="table table-striped mb-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" v-bind:key="product">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
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
        }

      }
    },
    methods: {
      readData() {
        db.collection("products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc.data());
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