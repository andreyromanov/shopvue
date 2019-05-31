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
          <tr v-for="product in products">
            <td>
              {{product.name}}
            </td>
            <td>
              {{product.price}}
            </td>
            <td>
              <button class="btn btn-primary" @click="editProduct(product)">Update</button>
              <button class="btn btn-danger ml-3" @click="deleteProduct(product)">Delete</button>
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
            <h5 class="modal-title" id="exampleModalLabel" v-if="modal=='new'">Add Product</h5>
            <h5 class="modal-title" id="exampleModalLabel" v-if="modal=='edit'">Edit Product</h5>
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
               <vue-editor v-model="product.description"></vue-editor>
            </div>
            <div class="form-group">
              <input type="text" @keyup.188="addTag" class="form-control" placeholder="Product tags..." v-model="tag">
            </div>
            <div class="form-group">
              <input type="file" @change="uploadImage" class="form-control" placeholder="Product images...">
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal=='new'">Add product</button>
            <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal=='edit'">Update
              product</button>

          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
  import {
    fb,
    db
  } from '../firebase';
  import {
    firestore
  } from 'firebase';
  export default {
    name: "Product",
    props: {
      msg: String
    },
    components: {
      VueEditor
    },

    data() {
      return {
        products: [],
        product: {
          name: null,
          description: null,
          price: null,
          tags: [],
          image: null
        },
        activeItem: null,
        modal: null,
        tag: null
      }
    },

    firestore() {
      return {
        products: db.collection('products'),
      }
    },
    methods: {
      uploadImage(e){
       let file = e.target.files[0];
       var storageRef = fb.storage().ref('products/' + file.name);
       let uploadTask = storageRef.put(file);
       
                 uploadTask.on('state_changed', (snapshot) => {
            
          }, (error) => {
            
          }, () => {
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
             // this.product.images.push(downloadURL);
             this.product.image = downloadURL;
             console.log(downloadURL);
            });
          });
      },
      addTag(){
        this.product.tags.push(this.tag);
        this.tag = "";
      },
      AddNew() {
        this.modal = 'new';
        $('#product').modal('show');
      },

      updateProduct() {
        this.$firestore.products.doc(this.product.id).update(this.product);
         $('#product').modal('hide');
        Toast.fire({
              type: 'success',
              title: 'Updated successfully'
            })
      },
      editProduct(product) {
        this.modal = 'edit';
        this.product = product;
        this.activeItem = product['.key'];
        $('#product').modal('show');
      },
      deleteProduct(doc) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            this.$firestore.products.doc(doc['.key']).delete();
            Toast.fire({
              type: 'success',
              title: 'Signed in successfully'
            })
          }
        })
      },
      readData() {

      },
      addProduct() {
        this.$firestore.products.add(this.product);
        $('#product').modal('hide');
        Toast.fire({
              type: 'success',
              title: 'Added successfully'
            })
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