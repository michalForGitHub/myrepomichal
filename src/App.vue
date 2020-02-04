
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: 'app',
  components: {  
  }
  
}
   
</script>
<style lang="scss">
#app {
  font-family:  Arial, sans-serif;

  text-align: center;
  color: black;
}
#nav {
 
  a {
    font-weight: bold;
    color: black;
   font-size: 33px;
  }
}
</style>






