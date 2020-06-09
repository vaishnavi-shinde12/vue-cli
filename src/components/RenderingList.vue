<template>
    <div>
        <ul>
            <li v-for="(ingredient, i) in ingredients" :key="ingredient"> {{ ingredient }} ({{ i }}) </li>
            <!-- <button @click="ingredient.push('fruits')">Add New Ingredient</button> -->
        </ul>

        <!-- <template v-for="(ingredient, index) in ingredients" :key="index">                ---  Alternative way to use v-for syntax
        <p> {{ ingredient }} ({{ index }}) </p>
        </template>  -->

        <hr>
        <ul>
            <li v-for="person in persons" :key="person"> 
                  <div v-for="(value, key, index) in person" :key="value"> {{ key }} : {{ value }} ({{ index }}) </div>       <!-- nested v-for loop-->
            </li> 
        </ul>
        <hr>
        <p v-for="n in 10" :key="n">                                   <!-- list of numbers -->
            {{ n }}
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ingredients: ['milk', 'chocolates','icecreams','cookies'],
                persons: [
                    {name: 'Aishu', age: 23, color:'red'},
                    {name: 'Akshu', age: 27, color:'blue'},
                ] 
            }
        }
    } 
</script>
