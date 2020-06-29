<template>
    <div>
        <button class="btn btn-prmary" @click="increment(100)">Increment</button>
        <button class="btn btn-prmary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        methods: {
            ...mapActions ([                // way 3 using mapMutations to reduce the duplicate code
              'increment',
              'decrement'
         ])
        }


        // methods: {
        //     increment() {
        //         // this.$emit('updated',1);
        //         this.$store.state.counterr++;           // using vuex -- way 1
        //     },
        //     decrement() {
        //         // this.$emit('updated',-1);
        //         this.$store.state.counterr--;           // using vuex -- way 2
        //     } 
        // }
    }
    </script>