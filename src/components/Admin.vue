<template>
    <div class = "admin">
       <p> {{ msg }} </p>   
       <app-user></app-user>
    </div>    
</template>

<script>
 import User from "./User.vue";  
    export default ({
        name : 'admin',
        components: {
            appUser: User
        },
        data() {
            return {
                msg : 'Admin(Parent) Component'
            }
        }
    })
</script>

