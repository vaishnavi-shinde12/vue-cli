<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <button @click="title ='The VueJS Instance Lifecycle (Updated)'">Update Title</button>
        <button @click="destroy">Destroy</button>
    </div>
</template>

<script>
    export default {
        name: 'lifecycle',
        data() {
             return {
                 title: "The VueJS Instance Lifecycle"
             }
        },

        beforeCreate : function() {
            console.log('beforeCreated()');
        },
        created : function() {
            console.log('created()');
        },
        beforeMount : function() {
            console.log('beforeMount()');
        },
        mounted : function() {
            console.log('mounted()');
        },
        beforeUpdate : function() {
            console.log('beforeUpdate()');
        },
        updated : function() {
            console.log('updated()');
        },
        beforeDestroy : function() {
            console.log('beforeDestroy()');
        },
        destroyed : function() {
            console.log('destroyed()');
        },

        methods: {
            destroy: function() {
                this.$destroy();
            }
        }
    }
</Script>    