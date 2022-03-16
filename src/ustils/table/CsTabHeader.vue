<template>
    <table class="table table-bordered border-primary">
        <thead>
                <tr>
                    <slot></slot>
                </tr>
        </thead>
        <tbody v-for="(item,index) in data" :key="index">
                <td v-for="(coun , tee) in childer" :key="tee" >
                   {{coun.prop=='dat'?index+1:item[coun.prop]}}
                </td>
        </tbody>
    </table>
</template>

<script>
export default {
     props:{
         data:{
             typr:Array,
             required:true
         }
     },
     mounted () {
         console.log(this.childer=this.$children);
     },
     data() {
         return {
             childer: []
         }
     },   
}
</script>

<style scoped>

</style>