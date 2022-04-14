
    <!-- <table class="table table-striped table-hover table-bordered">
        <thead>
                <tr>
                    <slot></slot>
                </tr>
        </thead>
        <tbody v-for="(item,index) in data" :key="index">
            <template v-for="(coun , tee) in childer">
                    <td v-if="coun.type=='selection'" :key="tee" :style="'text-align:'+coun.align" >
                        <input type="checkbox" v-model="seleTanCheck" :value="item"/>
                    </td>
                    <td v-else-if="coun.type=='index'" :key="tee" :style="'text-align:'+coun.align"> {{index+1}} </td>
                    <td v-else :key="tee" :style="'text-align:'+coun.align">
                        <span v-if="!coun.$scopedSlots.default">{{item[coun.prop]}}</span>
                        <span v-else>
                           {{adt(coun.$scopedSlots.default)}}
                        </span>
                    </td>
            </template>
        </tbody>
    </table> 
</template> -->

<script>
export default {
     props:{
         data:{
             typr:Array,
             required:true,
         },
          width:{
             type:String,
             default:''
         },
         height:{
             type:Number,
         },
         autoHeight:{
             type:Boolean
         },
         otherHeight:{
             type:Number,
             default:200
         }
         
     },
     methods: {
         adt(a){
             console.log(a('325'));
         },
         othHe(){
            
         }
     },
     mounted () {
         if (this.autoHeight) {
            this.otHeight=window.innerHeight-this.otherHeight
            const  othed =()=> {  this.otHeight=window.innerHeight-this.otherHeight}
            window.onresize=othed
        }
         this.childer=[...this.$children]
         this.$el.style.width=this.width+'%'
        this.datt = [...this.data]
     },
     data() {
         return {
             childer: [],
             seleTanCheck:[],
             tabAll:false,
             mm:'',
             datt:[],
             otHeight:'',

         }
     }, 
     watch: {
         seleTanCheck(newValue) {
             this.tabAll=newValue.length==this.datt.length
             this.$emit('selection-change',newValue)
         }
     },  
     render(){
         return(
            <div class='abb' >
                    <table class="table te table-striped table-hover table-bordered" >
                        <thead>
                                <tr >
                                    {this.$slots.default}
                                   {this.height? <th  class='el-table__cell gutter'  style={{'width':1+ '%','margin':0,'padding':0}}></th>:''}
                                </tr>
                        </thead>
                    </table>
                <div class={this.height?'aaa':''} style={{'max-height':(this.otHeight+'px')}}>
                    <table class="table te table-striped table-hover table-bordered ">
                        <tbody>
                            {this.datt.map((btn,index)=>(
                                <tr>
                                {this.$slots.default.map((item)=>{
                                    const {type ,width, align , prop } = item.componentOptions.propsData
                                    if (type=='selection'){
                                        return  <td  style={{'text-align':align,
                                        'width':width+ 'px','height':12+'px',}}>
                                        <input type="checkbox" v-model={this.seleTanCheck} value={btn}/></td>
                                    }else if (type=='index') {
                                        return <td  style={{'line-height': 41+'px','text-align':align,'width':width+ 'px','padding':0,'margin-left':30+'px'}}>{index+1} </td>
                                    }else{
                                        return <td class='te' style={{'line-height': 41+'px', 'text-align':align,'width':width+ 'px','height':12+'px'}}>
                                        {item.data.scopedSlots?item.data.scopedSlots.default({$index:index,res:btn}):btn[prop]}
                                        </td>
                                    }
                                    })}
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            </div>
         )
     }
}
</script>

<style scoped>
.abb{
    max-width: 80%;
    margin: auto;
}
tbody td{
     border-right: 1px solid #e9ecef;
}
tbody td :first-child{
     border-left: 1px solid #e9ecef;
}
.te{
    margin: 0;
    padding: 0;
   /* width: 1000px;*/
}
.abb >>> .aaa{
    overflow: hidden;
    overflow-y:scroll;
}
</style>