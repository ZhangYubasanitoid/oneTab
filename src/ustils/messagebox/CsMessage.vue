<template>
   <!-- <div class="mes" v-if="mess" @touchmove.prevent @mousewheel.prevent> -->
       <div class="mes" v-if="mess">
        <div  class="toast show"  role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <span >标题内容</span>
                <button type="button" class="btn-close" @click="$emit('update:mess',false)" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body" style="">
              <slot>
                  <span>文本内容</span>
              </slot>
            </div>
            <div class="footer">
                 <cs-button type='warning' @click="$emit('update:mess',false)">确定</cs-button>
                <cs-button type='danger' @click="tota">取消</cs-button>
            </div>
        </div>
        <div class="modal-backdrop fade show" ></div>
   </div>
</template>

<script>
export default {
    props:{
        mess:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
              key: 'value'
        }
    },
    created () {
       this.mess? this.totar():''
    },
    methods: {
        tota() {
           let a = confirm('确定取消')
           if (a) {
               this.$emit('update:mess',false)
           }else{
               alert('确定取消')
           }
        },
        totar(q){
            document.body.style.overflow=q? 'hidden':'';
        }
    }, 
    watch: {
        mess(q){
           this.totar(q)
        }
    },
    components: {
        CsButton:()=>import('../button/CsButton.vue'),
    },
}
</script>

<style scoped>
.mes .toast{
    overflow:hidden;
    display: block;
    z-index: 1090;
    position: relative;
    margin: auto;
}
.footer{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.toast-header{
    justify-content: space-between
}
</style>