<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
     <p>{{ msg }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
    msg : "Welcome to Your Vue.js App"
  }
}
};
</script>
