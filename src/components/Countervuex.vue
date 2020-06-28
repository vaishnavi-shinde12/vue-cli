<template>
    <div>
        <button class="btn btn-prmary" @click="increment">Increment</button>
        <button class="btn btn-prmary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                // this.$emit('updated',1);
                this.$store.state.counterr++;           // using vuex
            },
            decrement() {
                // this.$emit('updated',-1);
                this.$store.state.counterr--;           // using vuex
            }
        }
    }
    </script>