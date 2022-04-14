<template>
   <div>
        <span>{{label}}-{{valu}}</span>
        <div class="mer" >
            <button class="refu ref" @click="valu--" :disabled='valu==min'><i class="bi bi-dash-lg"></i></button>
            <input type="text"
           name="" id="" class="ate"  @blur="valu=value"  :value='valu' @input='fn' :class="['nub ',colo?'numn': 'num']">
            <button class="add ad" :disabled='valu==max' @click="valu++"><i class="bi bi-plus-lg"></i></button>
        </div>  
   </div>
</template>

<script>
export default {
    props:{
        value:{
            type:Number
        },
        label:{
            type:String
        },
        min:{
            type:Number
        },
        max:{
            type:Number
        }
    },
    data() {
        return {
            colo: false,
            valu:this.value
        }
    }, 
    methods: {
        fn(e) {
           this.valu= e.target.value<=this.max?e.target.value:this.max||
            e.target.value>=this.min?e.target.value:this.min
        },
    },
    watch: {
        valu(newValue) {
            this.$emit('input',newValue)
            this.$emit('change',newValue)
        }
    },   
}
</script>

<style scoped>
.add{
    border: 0;
    width: 40px;
    height: 38px;
    position:absolute;
    right: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.ad:hover{
    border-color:#b3d8ff ;
    color: #b3d8ff ;
}
.refu{
    border: 0;
    width: 40px;
    height: 38px;
    position:absolute;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.ref:hover{
    border-color:#b3d8ff ;
    color: #b3d8ff ;
}
.nub{
    width: 180px;
    height: 38px;
    border: 0;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    border-radius: 10px;
}
.nub:focus{
  outline:none; 
}
.mer{
    width: 182px;
    height: 40px;
    border: 1px solid #dcdfe6;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
}
.ate{
    cursor: pointer;
}
.mer:hover{
    border: 1px solid #b3d8ff;
}
</style>