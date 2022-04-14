<template>
    <th v-if="type=='index'" scope="col" :style="{'line-height': 41+'px','text-align':align,'padding':0}" >
        <div>#</div>
    </th>
    <th v-else-if="type=='selection'" scope="col" :style="'text-align:'+align">
        <input type="checkbox" @change="tabAll" :checked='$parent.tabAll'>
    </th>
    <th v-else scope="col" :style="'text-align:'+align">
        <div class="asdf" :style="sortable==undefined ?'':'cursor:pointer'">
            {{label}}
            <span v-if="!(sortable==undefined)" class="as" @click="biCaretUp"> 
            <!-- <i  :class="sortable==undefined ?'':'bi bi-caret-up-fill' +(abt? ((attUp % 3)==1?' a':''):'')"></i>
            <i  :class="sortable==undefined ?'':'bi asd bi-caret-down-fill'+(abt? ((attUp % 3)==2?' a':''):'') "></i> -->
            <i  :class="sortable==undefined ?'':'bi bi-caret-up-fill' +($parent.mm==prop? ((attUp % 3)==1?' a':''):'')"></i>
            <i  :class="sortable==undefined ?'':'bi asd bi-caret-down-fill'+($parent.mm==prop? ((attUp % 3)==2?' a':''):'') "></i>
            </span>
            <span v-show="prop"><slot></slot></span>
        </div>
    </th>
</template>

<script>
export default {
    props:{
        prop:{
            type:String
        },
        label:{
            type:String
        },
        type:{
            type:String
        },
        width:{
            type:String,
        },
        align:{
            type:String
        },
        sortable:{
             type:String,
         }
    },
    data() {
        return {
            attUp:0,
            acs:'',
            abt:'',
            chi:[]
        }
    },
    methods: {
        tabAll(e) {
           this.$parent.seleTanCheck = e.target.checked ?this.$parent.data:[]
        },
        biCaretUp(){
             this.attUp++
             let a = [...this.$parent.data]
                this.chi=a
            if (this.attUp % 3==1) {
                this.acs='asc'
                this.sortByKey(this.chi,this.prop,true)  
              this.$parent.datt=this.chi
            }else if(this.attUp % 3==2){
                this.acs='desc'
                 this.sortByKey(this.chi,this.prop,false)  
              this.$parent.datt=this.chi
            }else{
                this.acs=''
                this.$parent.datt=a
            }
            this.$parent.mm=this.prop
            this.$parent.$emit('tab-sort',
            {order:this.acs,
            prop:this.prop,
            par:this.$parent.$children})    
            console.log(this.$parent); 
                   
            },
            
        sortByKey(array,key,pand){
            return array.sort(function(a,b){
                var x = a[key];
                var y = b[key];
                return(pand?((x<y)?-1:((x>y)?1:0)):((x<y)?((x>y)?1:0):-1));
            })
        },

    },
    mounted () {
        this.$el.style.width=this.width+'px'
    },
}
</script>

<style scoped>
span.as {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 24px;
    height: 24px;
    align-items: center;
    margin: auto;
    vertical-align: middle;
}
.asdf {
    display: inline-flex;
    
}
i.bi.bi-caret-up-fill {
    position: absolute;
    bottom: 5px;
}
i.bi.bi-caret-down-fill {
    position: absolute;
    top: 5px;
}
.a{
    color: red;
}
</style>