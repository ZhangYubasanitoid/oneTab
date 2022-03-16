
<!-- <template>
//     <div class="cs-tab">
//         <ul class="nav nav-tabs" id="myTab" role="tablist" @click="namebe($event)">
//             <slot></slot>
//         </ul>     
//         <div class="cs-tab-body">123</div>
//          <div> {{abc}}</div> 
//     </div> 
//    </template>
-->


<script>
export default {
  created () {
    this.children=this.$children
  },
  props:['value'],
  data() {
    return {
     // key: 'one',
      abc:'',
      children:[1,2,3,4],
      as:''
    }
  },
  render(){
    return(
      <div class="cs-tab">
        <ul class="nav nav-tabs" id="myTab" role="tablist" >
           {this.$slots.default}
        </ul>     
        <div class="cs-tab-body" >
              { this.children.map((item)=>{return<div class={{'afsa':true, 'active':item.name==this.value}}
               >{item.$slots.default}</div>})}
        </div>
        
    </div>
    )
  },
  methods: {
    namebe() {
      // this.$slots.default.forEach(v => {
      // v.elm.children[0].children[0].className='nav-link'
      // });
      // e.path[0].className='nav-link active'
    }
  },
  computed: {
  
  },
  watch:{
    value(a){
      
      this.children.map((item)=>{ item.name==a?this.as=a:this.as=''  })
      
    //  this.$children.filter(v=>{
    //   console.log(v);
    //   })
     // let  as = ''
    //  let a = this.$children.filter(v=>{
    //   return v.name==this.value
    //   })
    //   console.log(a[0]);
    }
      // key(){
      //   let as = this.$children.filter(v=>v.as)
      //   this.abc=as[0].$slots.default[0].text 
      //    this.$emit('input',this.key)
      // }
  },
  // created () {
  // },
}
</script>

<style scoped>
.cs-tab-body{
  margin: 10px;
}
.cs-tab-body .afsa{
  display: none;
}
.afsa.active{
  display: block;
}
</style>