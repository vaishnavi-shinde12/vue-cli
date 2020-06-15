<template>
    <div>
        <p>The Publisher</p>
        <button @click="counter++">Increase</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
         data: function() {
             return {
                 counter: 0
             };
         },
         destroyed() {                            
             console.log("Destroyed!");
         },
         activated() {
             console.log("Activated!");
         },
         deactivated() {
             console.log("Deactivated!");
         }           
    }
</script>

<style scoped>
</style>

