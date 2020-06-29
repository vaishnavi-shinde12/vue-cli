<template>
    <div>
        <button class="btn btn-prmary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-prmary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
 import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                   'asyncIncrement',
                   'asyncDecrement'
            ])

            // increment() {
            //     this.$store.commit('increment');                // using mutations to define functions way 2
            // },
            // decrement() {
            //     this.$store.commit('decrement');               // using mutations to define functions way 2
            // }
        }
    }
    </script>