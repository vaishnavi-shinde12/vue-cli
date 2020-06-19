<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                 <h1>Filters & Mixins</h1>
                 <input v-model="filterText"> 
                 <ul>
                     <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                 </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { fruitMixin} from '@/components/fruitMixin.js';

    export default { 
         mixins: [fruitMixin],
         created() {
             console.log('Inside Created List Hook');
         }
    }
</script>

<style>
</style>
