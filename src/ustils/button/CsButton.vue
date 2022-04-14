<template>
    <!-- <button @click="add" style="margin:10px;"
     type="button" class="btn" :class="`btn-${type=='text'?'link':type}`">
     btn${plan?'-outline':''}-${type=='text'?'link':type} ${size=='large'?'btn-lg':(size=='small'?'btn-sm':'')}`">
        <slot></slot>
    </button> -->
    <button @click="add" style="margin:0  0 0 6px;" :disabled='disabled '
     type="button" class="btn"  :class="`btn${plan?'-outline':''}-${type=='text'?'link':type}
      ${cls}`">
        <slot></slot>
    </button>
    <!-- <button @click="add" style="margin:10px;" :disabled='loading '
     type="button" class="btn"  :class="`btn${plan?'-outline':''}-${type=='text'?'link':type}
      ${cls}`">
       <span v-if="loading" type=margin-right:6px class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <slot></slot>
    </button> -->
</template>

<script>
export default {
    created(){
    },
    data() {
        return {
           a:''
        }
    },
    props:{
        disabled:{
             type:Boolean,
            default:false
        },
        type:{
            type:String,
            default:'light'
        },
        plan:{
            type:Boolean
        },
        size:{
            type:String,
            default:''
        },
        loading:{
            type:Boolean,
            default:false
        }
    },
    methods:{
       add(){
           this.$emit('click')
       }
    },
    computed:{
        cls(){
            // const ab = {
            //     large:'btn-lg',
            //     small:'btn-sm'
            // }
            
            return this.size=='large'?'btn-lg':(this.size=='small'?'btn-sm':'')
        }
    }
}
</script>

<style scoped>
.btn-link{
    text-decoration: none;
}
.spinner-border-sm{
    margin: 0 8px 0 0;
}
</style>