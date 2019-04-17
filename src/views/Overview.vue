<template>
  <div class="overview">
    
 <div class="container text-center">
     <h3>OverView Page!!!</h3>
 </div>
    
  </div>
</template>

<script>
export default {
  name: "OverView",
  props: {
    msg: String
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
