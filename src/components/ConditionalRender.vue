<template>
    <div>
        <p v-if="show">You can see me</p>
        <p v-else>Now you will see me..</p>            <!-- using conditional statement -->
        <template v-if="show">
        <h1>Heading</h1>
        <p>You are inside a Template</p>
        </template>
        <p v-if="show">Do you see Me ?</p>
        <button @click ="show = !show">Switch</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>
