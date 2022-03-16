<template>
    <div>
    <li class="nav-item" role="presentation">
        <!-- <a class="nav-link " :class="as" @click="fn()" href='javascript:;'> -->
            <a class="nav-link " :class="$parent.value ==name?'active':''" 
             href='javascript:;'  @click="fn()" :name='name'>
            <slot v-if="false" ></slot>
            {{lable}}
        </a>
    </li>
           
    </div>
</template>

<script>
export default {
    data() {
        return {
            as: '',
            btn:''
        }
    },
    methods: {
         fn(e) {    
                //  this.$parent.$children.forEach(v=>{ v.as=''})
                //   this.name == this.$parent.key ? this.as='active':''
                  this.$parent.$emit('input',this.name)
                  if (this.$parent.$listeners['tab-click']) {
                     this.$parent.$emit('tab-click',this,e)
                  }
            // this.btn=this.$slots.default[0].text
            //  this.$parent.$children.forEach(v=>{ v.as=''})
            // this.$parent.key=this.name
            // this.name == this.$parent.key ? this.as='active':''
        },  
    },
    props:{
        lable:{
            type:String,
            required:true
        },
        name:{
            type:String,
             required:true
        }
    } ,
    created(){
       this.$parent.$children[0].as='active'
        // this.$parent.key=this.name == this.$parent.key ?this.name:''
        // this.name == this.$parent.key ? this.as='active':''
    } 
}
</script>

<style scoped>

</style>