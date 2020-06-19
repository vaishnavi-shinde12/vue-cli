<template>
    <div class="container">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase}}</p>
        <hr>
        <input v-model="filterText"> 
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <app-list></app-list>
    </div>
</template>

<script>
    import List from "@/components/List.vue";
    import { fruitMixin } from '@/components/fruitMixin.js';

    export default { 
        mixins: [fruitMixin],                 //vuejs mergers our mixins with existing data in our any file where we add a mixin
        data() {
            return {
                text: "hello there!"
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        },
        created() {
             console.log('Inside Created Filter Hook');
         }
    }
</script>

<style>
</style>
