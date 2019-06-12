<template>
  <div class="products">

    <div class="container">
      <h3 class="text-center mb-5">Profile Page!!!</h3>
      <div class="row">
        <div class="col"></div>
        <div class="col-md-10">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                aria-controls="pills-profile" aria-selected="false">Profile</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input v-model="profile.name" type="text" class="form-control" placeholder="Full name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input v-model="profile.phone" type="text" class="form-control" placeholder="Phone">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input v-model="profile.address" type="text" class="form-control" placeholder="Adress">
              </div>
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <input v-model="profile.postcode" type="text" class="form-control" placeholder="Postcode">
                  </div>
                </div>
                <div class="col-md-4">
                  <button type="submit" @click="updateProfile" class="btn btn-primary form-control">Save
                    Changes</button>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="User name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Confirm password">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <input type="file" class="form-control">
                  </div>
                </div>
                <div class="col-md-4">
                  <button type="submit" class="btn btn-primary form-control">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>

      </div>
    </div>

  </div>
</template>

<script>
  import {
    VueEditor
  } from "vue2-editor";
  import {
    fb,
    db
  } from '../firebase';

  export default {
    name: "profile",
    props: {
      msg: String
    },
    data() {
      return {
        profile: {
          name: null,
          phone: null,
          address: null,
          postcode: null
        },
        account: {
          name: null,
          email: null,
          photoUrl: null,
          emailVerified: null,
          password: null,
          confirmPassword: null,
          uid: null
        }
      }
    },
    firestore() {
      const user = fb.auth().currentUser;
      return {
        profile: db.collection('profiles').doc(user.uid),
      }
    },
    methods: {
      updateProfile() {
        this.$firestore.profile.update(this.profile);
        Toast.fire({
          type: 'success',
          title: 'Updated successfully'
        });
        console.log('Updated');

      },
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