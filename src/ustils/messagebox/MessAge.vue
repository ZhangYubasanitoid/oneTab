<template>
   <!-- <div class="mes" v-if="mess" @touchmove.prevent @mousewheel.prevent> -->
       <div class="mes" v-if="mess" >
        <div  class="toast show"  role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <span >{{title}}</span>
                <button type="button" class="btn-close" @click="mess = false" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body" style="">
              <slot>
                  <span>{{conu}}</span>
              </slot>
            </div>
            <div class="footer">
                 <cs-button type='warning'  @click="tota">{{ option && option.ale || '确定'}}</cs-button>
                <cs-button type='danger' v-if="type=='const'"  @click="totaq">{{ option && option.quer || '取消'}}</cs-button>
            </div>
        </div>
        <div class="modal-backdrop fade show" ></div>
   </div>
</template>

<script>
export default {
    data(){
        return {
              key: 'value',
              mess:false,
              type:'',
              option:null,
        }
    },
    created () {
        
    },
    methods: {
        tota() {
            this.mess = false
            this.option.success  &&  this.option.success('成功')
        //    let a = confirm('确定取消')
        //    if (a) {
        //        this.$emit('update:mess',false)
        //    }else{
        //        alert('确定取消')
        //    }
        },
        totaq() {
            this.mess = false
            this.option.reject  &&  this.option.reject('失败')
        }
    }, 
    watch: {
        mess(q){
          document.body.style.overflow= q ?'hidden':''
        },
    },
    components: {
        CsButton:()=>import('../button/CsButton.vue'),
    },
}
</script>

<style scoped>
.mes .toast{
      overflow: hidden;
    z-index: 1090;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
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