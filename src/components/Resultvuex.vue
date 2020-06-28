<template>
    <p>Counter is: {{ counterr }} </p>
</template>

<script>
    export default {
        computed: {
            counterr() {
                return this.$store.getters.doubleCounter;       // using getters we can access the property (mostly used for larger application/calculations)
            }
        } 
    }
</script>