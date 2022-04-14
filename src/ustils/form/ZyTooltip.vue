<template>
    <div >
        <div class="tent">
            <span class="cont" >{{content}}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
      content:{
          type:String
      }  
    },
    created () {
       
    },
    data() {
        return {
            tool: ''
        }
    },
    watch: {
        tool(newValue) {
            this.$parent.value=newValue
        }
    },
}
</script>

<style scoped>
.cont{
    width: 137px;
    text-align: center;
    color: #f9fafb;
    border-radius: 30px; 
}
.tent{
   background-color: #f9fafb;
   width: 200px;
   margin: 0 0 -10px 0;
}
.tent:hover{
   background-color: #41464b;
}
</style>