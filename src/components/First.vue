<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is : {{ name }}</p>
        <p>Age is : {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-first-detail 
                        :myName="name" 
                        @nameWasReset="name = $event"
                        :resetFn="resetName"                
                        :userAge="age"></app-first-detail>  <!-- ( :myName="1" ) If we pass number or boolean value for binding attribute :- TypeError: this.myName.split is not a function -->
                                                            <!-- (way 1) Add this in app-first-detail - @nameWasReset="name = $event" -->
                                                            <!-- (way 2) :reserFn="resetName" is the callback function passing as a prop-->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-first-edit 
                      :userAge="age"
                      @ageWasEdited="age = $event"></app-first-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import FirstDetail from './FirstDetail.vue';
    import FirstEdit from './FirstEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Shilpa',
                age: 27
            }
        },
        methods: {
            changeName: function() {
                this.name = "Aishu";
            },
            resetName() {
                this.name = "Shilpa";
            }
        },
        components: {
            appFirstDetail: FirstDetail,
            appFirstEdit: FirstEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
