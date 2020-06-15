<template>
    <div>
    <div class="slots">
        <slot name="title"></slot>       <!-- passing content from outside and render it in child component using slots -->
        <span style= "color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <hr>
    <div>
        <slot name="content"></slot>
    </div>
    <hr>
    <div>
        <slot></slot>
    </div>
</div>  
</template>

<script>
    export default {
    }
</script>

<style scoped>
    div {
        box-shadow: 1px 1px 2px black;
        text-align: center;
        margin: 30px auto;
        border: 1px solid #ccc;
        padding: 30px;
    }
    h2 {
        color: red;
    }
    .slots {
        font-style: italic;
        background-color:green;
    }
</style>