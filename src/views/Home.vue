<template>
  <div class="home">
<Navbar></Navbar>
<products-list></products-list>
<!-- Modal -->
<mini-cart></mini-cart> 

  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
