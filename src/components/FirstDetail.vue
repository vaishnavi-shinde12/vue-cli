<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>                            <!-- 'myName'- this is similar to string we are passing in props -->
        <p>Reverse UserName: {{ switchName() }}</p>                      <!-- we can also output a method here -->
        <p>User Age: {{ userAge }}</p>                           
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>

    </div>
</template>

<script>
import { eventBus } from '../main';
    export default {
        props: { 
            myName: {
                type: String
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName: function() {                                   
                return this.myName.split("").reverse().join("");      //this will not work when u pass a number or boolean value
            },
            resetName() {
                this.myName = "Shilpa";
                this.$emit('nameWasReset',this.myName)
            }
        },
        created() {                                                 //this is a created method of VueJS lifecycle Hook
            eventBus.$on('ageWasEdited',(age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: rgb(10, 240, 228);
    }
</style>
