<template>
    <div>
        <p>Counter is: {{ doubleCounter }} </p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            })



            // ...mapGetters([         // ... spread operator - allows us to tell JS to pull out al properties & methods in this object & create key value pair for each of them.
            //   'doubleCounter',      //using mapGetters we save a lot of code and easily get access to our getters
            //   'stringCounter'         
            // ])  
        }

        // computed: {
        //     counterr() {
        //        return this.$store.getters.doubleCounter;        // using getters we can access the property (mostly used for larger application/calculations)
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // } 
    }
</script>