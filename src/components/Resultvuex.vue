<template>
    <p>Counter is: {{ counterr }} </p>
</template>

<script>
      import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            ...mapGetters({
                counterr: types.DOUBLE_COUNTER,
            })
        }
    }



    // export default {
    //     computed: {
    //         counterr() {
    //             return this.$store.getters.doubleCounter;       // using getters we can access the property (mostly used for larger application/calculations)
    //         }
    //     } 
    // }
</script>