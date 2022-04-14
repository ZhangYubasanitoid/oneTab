<template>
    <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" :id="lable " :checked='checked' :disabled='disabled'>
            <label class="form-check-label" :for="$parent.value||value" @click="fn">
               <slot>空</slot>
            </label> {{labe||value}}
</div>
</template>

<script>
export default {
    props:{
        lable:{
            type:String
        },
        value:{
            type:[String,Number]
        },
        checked:{
             type:Boolean
        },
        disabled:{
             type:Boolean
        }
    },
    data() {
        return {
            labe: ''
        }
    },
    methods: {
        fn() {
            if(this.value){
                this.$emit('input',this.lable)
            }else{
                this.$parent.$listeners['input']?this.$parent.$emit('input',this.lable):''
            }
        
            
        }
    },
}
</script>

<style scoped>

</style>