<template>
    <div class="form-check form-switch" :style="{display:activeText||inactiveText?'flex':''}">
        <span class="bb " v-if="activeText" @click="acttext=false" :style="{'color':acttext?'':'#409eff'}"> {{activeText}} </span>
        <input @input="atn" :class="[ 'form-check-input', 'inp']" 
        :style="{'background-color': acttext?activeColor:(inactiveColor?inactiveColor:''),}"
         type="checkbox" role="switch" id="flexSwitchCheckDefault" :checked='checked ||acttext' :disabled='disabled'>
        <label v-if="lable" class="form-check-label" for="flexSwitchCheckDefault">{{lable}}</label>
        <span class="a" v-if="inactiveText" @click="acttext=true" :style="{'color':acttext?'#409eff':''}"> {{inactiveText}} </span>
    </div>
</template>

<script>
export default {
     props:{
         lable:{
             type:String,
             defaulte:'35'
         },
         checked:{
             type:Boolean
         },
         disabled:{
             type:Boolean
         },
         activeText:{
             type:[String,Boolean,Number]
         },
         inactiveText:{
             type:[String,Boolean,Number]
         },
          activeColor:{
             type:String
         },
         inactiveColor:{
             type:String
         },
          activeValue:{
             type:String
         },
         inactiveValue:{
             type:String
         }
     },
     data() {
         return {
             acttext: false
         }
     }, 
     created () {
         this.acttext=true;
     },
     methods: {
         atn(e) {
             this.acttext=e.target.checked
         }
     },
     watch: {
         acttext(newValue) {
            this.$parent.tool= newValue?this.activeValue:this.inactiveValue
         }
     },
}
</script>

<style scoped>
.inp{
    width: 40px;
}
.a{
    display: block;
}
.bb {
    display: block;
    margin-left: -40px;
    margin-right: 43px;
}
.att:checked{
   background-color: burlywood;
}
</style>