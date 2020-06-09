<template>
  <div id="app">
    <div id="nav"> 
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/summary">Summary</router-link> |
      <router-link to="/firstroute/Shinde's">FirstRoute</router-link> | 
      <router-link to="/firstroute/Shinde's/child">FirstRouteChild</router-link> |
      <router-link to="/vueinstance">VueInstance</router-link> |
      <router-link to="/computedprop">ComputedProperty</router-link> |
      <router-link to="/conditionalrender">ConditionalRender</router-link> |     
      <router-link to="/renderinglist">RenderingList</router-link> |

      <router-link to="/profilepage">ProfilePage</router-link> |
      <router-link to="/accountinfo">AccountInfo</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
   export default {
     name: "app"
   }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
