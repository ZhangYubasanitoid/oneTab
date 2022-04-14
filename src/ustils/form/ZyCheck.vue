<template>
<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" @input="flec" :id="flex" :checked='value'>
        <label class="form-check-label" for="flexCheckDefault" @click="fncek">
            Default checkbox{{flex}}
        </label>
</div>
</template>

<script>
export default {
    props:{
        value:{
            type:Boolean
        }
    },
    data() {
        return {
            flex: 'flexCheckDefault'
        }
    },
    methods: {
       async fncek()  {
            if (this.flex) {
               await  this.$emit('input',false)
                this.flex=''
            }else{
                console.log(1);
               await  this.$emit('input',true)
                 this.flex='flexCheckDefault'
            }
            console.log(this.value,this.flex);
        //     this.value?(this.flex=''&&this.$emit('input',false)):
        //    ( 
        },
        flec(){
            this.$emit('input',!this.value)
        }
    },
    watch: {
        value(newValue) {
           newValue//?this.flex='flexCheckDefault':this.flex=''
           //
        }
    },

}
</script>

<style scoped>

</style>