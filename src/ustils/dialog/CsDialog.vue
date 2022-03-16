<template>
    <div class="modal" :style="'display:'+(visibe?'block':'none')">
  <div class="modal-dialog" :style="'z-index: 1060;'+ 'max-width:'+width">                    
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
            <slot name="header">{{title}}</slot>
        </h5>
        <button type="button" v-if="showClose" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close" @click="add"></button>
         <!-- <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close" @click="$parent.visibe=false"></button> -->
      </div>
      <div class="modal-body">
        <p><slot>内容</slot></p>
      </div>
      <div class="modal-footer">
            <slot name="footer" :acd='asb'>
                <button type="button" class="btn btn-secondary" @click="$emit('update:visibe',false)" data-bs-dismiss="modal">确定按钮</button>
                <button type="button" class="btn btn-primary" @click="$emit('update:visibe',false)" >取消按钮</button>
            </slot>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</div>
</template>

<script>
export default {
    props:{
        visibe:{
            type:Boolean,
            default:false
        },
        title:{
            type:String
        },
        showClose:{
          type:Boolean,
          default:true
        },
        beforeClose:{
          type:Function
        },
        width:{
          type:String,
          default:'30%'
        }

    } ,
    data() {
      return {
        asb: 'value'
      }
    },
    methods: {
        add() {
          this.beforeClose &&  this.beforeClose(this.done)
        },
        done(){
          this.$emit('update:visibe',false)
        }
    },
    watch: {
      visibe(a) {
        document.body.style.overflow=a?"hidden":""
      }
    },
}
</script>

<style scoped>
</style>