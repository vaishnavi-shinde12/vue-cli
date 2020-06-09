<template>
   <div class= "detail">
       {{ msg3 }}
   </div>
</template>

<script>
    export default ({
        name: 'detail',
        data() {
           return {
               msg3 : "Detail(Child) Component"
           }
        }
    })
</script>

