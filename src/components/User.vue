<template>
  <div class= "user"> {{ msg2 }}
      <router-view></router-view>
  </div> 
</template>

<script>
  export default ({
      name: "user",
      data() {
          return {
              msg2 : "User(Intermediate) Component"
          }
      }
  })
</script>