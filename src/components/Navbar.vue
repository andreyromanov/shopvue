<template>
  <div class="hello">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">Home</router-link>
          </li>
        </ul>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/checkout" class="nav-link" href="#">Checkout</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">About</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <a class="btn btn-outline-success my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#login">Get
            Started</a>
        </form>
      </div>
      <login></login>
    </nav>

  </div>
</template>

<script>
  import Login from './Login.vue';
  export default {
    name: "NavBar",
    props: {
      msg: String
    },
    components: {
      Login
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