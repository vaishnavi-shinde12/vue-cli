<template>
   <div>
     <h1>{{ msg }}</h1>
       Hello {{ $route.params.name }}             <!-- value of name paramter is accessed here -->
   </div>
</template>
<script>
  export default {
    name: 'firstroute',
    data () {
      return {
      msg: 'FirstRoute'
    }
  }
}
</script>