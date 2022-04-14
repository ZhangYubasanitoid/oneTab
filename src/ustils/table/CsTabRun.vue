
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
             type:String,
             default:'300'
         }
         
     },
     methods: {
         adt(a){
             console.log(a('325'));
         }
     },
     mounted () {
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
             datt:[]
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
            <div style={{ 'margin': 'auto'}}>
                    <table class="table table-striped table-hover table-bordered" >
                        <thead>
                                <tr >
                                    {this.$slots.default}
                                    <th  class='el-table__cell gutter'  style={{'width':17+ 'px','margin':0,'padding':0}}></th>
                                </tr>
                        </thead>
                    </table>
                <div class='aaa' style={{'max-height':(this.height+'px')}}>
                    <table class="table table-striped table-hover table-bordered ">
                        <tbody>
                            {this.datt.map((btn,index)=>(
                                <tr>
                                {this.childer.map((item)=>{
                                    if (item.type=='selection'){
                                        return  <td style={{'text-align':item.align,'width':item.width+ 'px'}}><input type="checkbox" v-model={this.seleTanCheck} value={btn}/></td>
                                    }else if (item.type=='index') {
                                        return <td style={{'text-align':item.align,'width':item.width+ 'px'}}>{index+1} </td>
                                    }else{
                                        return <td style={{'text-align':item.align,'width':item.width+ 'px'}}>
                                        {item.$scopedSlots.default?item.$scopedSlots.default({$index:index,res:btn}):btn[item.prop]}
                                        </td>
                                    }})}
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
tbody td{
     border-right: 1px solid #e9ecef;
}
tbody td :first-child{
     border-left: 1px solid #e9ecef;
}
.table{
    margin: 0;
    padding: 0;
}
.aaa{
    overflow: hidden;
    overflow-y:scroll;
    overflow-x:scroll;
}
</style>