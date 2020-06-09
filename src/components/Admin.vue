<template>
    <div class = "admin">
       <p> {{ msg }} </p>   
       <router-view></router-view> 
    </div>    
</template>

<script>
    export default ({
        name : 'admin',
        data() {
            return {
                msg : 'Admin(Parent) Component'
            }
        }
    })
</script>

