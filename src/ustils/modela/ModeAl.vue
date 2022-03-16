<template>
  <div class="mes" v-if="att"  >
        <div  class="toast show" v-if="key"  role="alert" :style="'top:'+key+'%'" aria-live="assertive" aria-atomic="true">
            <div class="toast-body" style="">
              <slot>
                  <span>{{ter || '空'}}</span>
              </slot>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    props:{
        att:{
            type:Boolean,
            default:false
        },
        ter:{
            type:String,
            default:'空'
        },
       attrbt:{
           type:Number,
           default:50
       }
    },
    methods: {
        
    },
    created () {
        this.key=this.attrbt;
    },
    data() {
        return {
            key: ''
        }
    },
    watch: {
        att(newValue){
         if (newValue) {
             console.log(newValue);
              this.key=this.attrbt;
             setInterval(()=>{
               let aaa = this.key-- 
               let a = aaa/2
                if (aaa <1) {
                   this.key=0
                   clearInterval()
                }else{
                    aaa = aaa-a
                   this.key=aaa
                   console.log(aaa);
                }
               },1000)
         }
        }
        
    },
}
</script>

<style scoped>
.toast{
      overflow: hidden;
    z-index: 1090;
    top: 20%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
}
</style>