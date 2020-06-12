<template>
  <div class= "user"> {{ msg2 }}
      <app-detail></app-detail>
  </div> 
</template>

<script>
  import Detail from "./Detail.vue";
  export default ({
      name: "user",
      components: {
            appDetail: Detail
        },
      data() {
          return {
              msg2 : "User(Intermediate) Component"
          }
      }
  })
</script>