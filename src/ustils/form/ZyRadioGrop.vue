<template>
    <div class="ass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String
        }
    }    
}
</script>

<style  scoped>
.ass{
    display: flex;
}
</style>