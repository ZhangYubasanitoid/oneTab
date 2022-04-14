<template>
    <div class="input-group mb-3">
        <div class="abt"
         :style="{'display':($slots.prepend||$slots.append)?'flex':'',
         'flex-direction':$slots.prepend? 'row-reverse':''}" 
        v-if="!type">
            <input v-if="!showPassword"  class="form-control" :disabled='disabled'
         :value='value'  @input="btner"  :placeholder="placeholder" @blur="bulr" @focus="focu" aria-label="Username" aria-describedby="basic-addon1">
         <input v-else :type="eye?'type':'password'" class="form-control" :disabled='disabled'
         :value='value' @input="btner" :placeholder="placeholder" @blur="bulr" @focus="focu" aria-label="Username" aria-describedby="basic-addon1">
        <i v-if="value&&btn&&clearable&&!showPassword"  class="bi bi-dash-circle" @click="clea"></i> 
        <i v-if="showPassword" :class="['bi atr',eye?' bi-eye':' bi-eye-slash']" @click="eyeBut"></i>
        <span v-if="$slots.prepend" class="prepend input-group-text" id="basic-addon1"> <slot name='prepend'></slot> </span>
        <span v-if="$slots.append" class="append input-group-text" id="basic-addon2"> <slot name='append'></slot> </span>
        </div>
        <div v-else class="bnv">
             <textarea  size='10'  :value="value" :contenteditable='true' :maxlength='maxlength' 
             :rows='zsy?zsy:rows'  @input="btner" class="form-control" aria-label="With textarea"></textarea>
              <span v-if="maxlength" class="nub"> {{value.length}}/{{maxlength}}</span>
        </div>--{{zsy}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            btn: false,
            eye:false,
            area:'',
            zsy:0,
            zdyinp:'',
            maxmore:false,
            minmore:false
        }
    },
    mounted () {
        this.maxmore = (typeof this.autosize)=='boolean'
        this.minmore = (typeof this.autosize)=='object'
    },
     props:{
         value:{
             type:String
         },
         placeholder:{
             type:String,
             default:'请输入内容'
         },
         disabled:{
             type:Boolean,
             default:false
         },
         clearable:{
             type:Boolean
         },
         showPassword:{
             type:Boolean
         },
         type:{
             type:String
         },
         maxlength:{
             type:String
         },
         rows:{
             type:Number,
             default:1
         },
         autosize:{
             type:[Object,Boolean]
         }
     },
     methods: {
         eyeBut(){
             this.eye=!this.eye
         },
         btner(e) {
                this.maxmore?this.zdyinp= e.target.scrollHeight:''
                this.minmore?(this.zdyinp =this.autosize.minRows, 
                 this.zdyinp=this.zsy<this.autosize.maxRows-1?( e.target.scrollHeight):''):''
                this.$emit('input',e.target.value)
         },
         bulr(){
            setTimeout(()=>{this.btn=false},100)
         },
         focu(){
             this.btn=true
         },
         clea(){
             this.$emit('input')
         },
     },
     watch: {
         zdyinp(a,b){
             a==b?'':this.zsy++
         }
     },   
}
</script>

<style scoped>
.abt input {
    border-radius: 0;
}
.abt  span{
    border-radius: 0;
}
.append {
    display: block;
    width: 100px;
}
.prepend{
    display: block;
    width: 100px;
}
.abt {
    width: 300px;
    position: relative;
}
.abt input{
    padding-right: 36px;
}
.abt .atr{
    right: 10px;
}
.abt i {
    position: absolute;
    top: 8px;
    right: 9px;
    z-index: 1000;
    cursor: pointer;
    width: 10px;
    height: 10px;
    color: #909399;
}
.bnv{
    position: relative;
}
.bnv .nub{
    position: absolute;
    width: 40px;
    height: 14px;
    right: 0px;
    font-size: 12px;
    bottom: 0;
    color: #909399;
}
.bi:hover{
    color: rgb(99, 231, 220);
}
</style>