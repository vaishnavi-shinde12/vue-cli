<template>
    <div id="computed">
        <span><button v-on:click="counter++">Increase</button></span>
        <span><button v-on:click="counter--">Decrease</button></span>
        <span><button v-on:click="secondCounter++">Increase Second</button></span>
        <p>{{ counter }} | {{ secondCounter }}</p>
        <p>{{ result() }} | {{ output }}</p>                      <!-- computed:- here anything can be access as a property  -->
    </div>
</template>

<script type="application/javascript">
    export default {
        data() {
            return {
               counter: 0,
               secondCounter: 0
            }
        },
        computed: {
            output: function() {
                console.log("Computed");
                return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
            }
        },
        watch: {
            counter: function() {
                var vm = this;
                setTimeout(function() {
                    vm.counter = 0;
                },5000)
            }
        },
        methods: {
            result: function() {
               console.log("Method");
               return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
            }
        }
    }
</script>