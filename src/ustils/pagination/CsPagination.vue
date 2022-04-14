<template>
    <div class="asf">
        <span style="dispaly:block;margin-left:10%; line-height: 38px;">总条数：{{total}}</span>
            <div class="dropdown" >
                    <button id="dLabel"   class="btn btn-danger dropdown-toggle "  type="button" data-bs-toggle="dropdown"  @click="atn()" aria-expanded="false">
                       {{newCurrNub}}条/页
                    </button>
                    <ul :class="['dropdown-menu' ,me?'show':''] "  aria-labelledby="dLabel">
                        <li v-for="(item,index) in currNub" :key="index"><a class="dropdown-item" href="#" @click="atne(item)"> {{item}}条/页 </a></li>
                    </ul>
            </div> 
        <nav aria-label="Page navigation example" style="margin-left:10px">
            <ul class="pagination"> 
                <li :class="{'page-item':true,  'disabled':currentPagel<2}"><a class="page-link" :style="{ 'color':currentPagel==1?'red':''}"  href="#" @click="Previous">Previous</a></li>
                <li class="page-item" v-if="(currentPagel>3)&&(totalSize>5)" @click="add(1)"><a class="page-link" href="#">1</a></li>
                <li class="page-item acb" v-if="(currentPagel>4)&&(totalSize>5)||(currentPagel>5)&&(totalSize>4)"  @click="currentPagel=((currentPagel-5)>0?(currentPagel-5):1)"><a  class="page-link" href="#"></a></li>
                <li v-for="(item,index) in pagesArr " :key="index" :class="currentPagel==item?'active':''" class="page-item ">
                    <a class="page-link" href="#" @click="add(item)"> {{item}} </a>
                </li>
                <li class="page-item acb" v-if="(!(currentPagel > totalSize-4)&&(totalSize>6)&&(currentPagel<totalSize-1))" @click="currentPagel =((currentPagel+5)<=totalSize?(currentPagel+5):totalSize)" ><a class="page-link" href="#"></a></li>
                <li class="page-item" v-if="((currentPagel < totalSize-2)&&(totalSize>5))"><a @click="add(totalSize)" class="page-link" href="#">{{totalSize}}</a></li>
                <li :class="{'page-item':true,  'disabled':currentPagel==totalSize}"><a class="page-link" href="#" :style="{ 'color':currentPagel==totalSize?'red':''}"  @click="next">Next</a></li>
            </ul>
        </nav>
        <div>前往 <input type="text" @blur='blur' v-model="souSuo"> 页</div>
    </div>
</template>

<script>
export default {
    props:{
        total:{
            type:Number,
            default:0
        },
        pageSize:{
            type:Number,
            default:10
        },
        currentPage:{
            type:Number,
            default:1
        },
        nub:{
            type:Array
        }
    },
    mounted () {
        this.currentPagel = this.currentPage;
        this.currNub = this.nub
        this.newCurrNub = this.currNub[0]?this.currNub[0]:1
    },
    computed: {
        totalSize() {
            let ab = this.newCurrNub?this.newCurrNub:1
           return Math.ceil(this.total /ab)  
        },
        pagesArr(){
           let star =  this.currentPagel-2
           let end = this.currentPagel+2
           if (star > 0 && end < this.totalSize) {
               return [star , star+1,this.currentPagel,end-1,end]
           }else{
               if (end < this.totalSize-1) {
                    const a = []
                     const b = this.totalSize+1
                    for (let i = 1; i < b; i++) {
                        a.push(i)
                    }
                    return b>5?( a.slice(0,5))
                     : a
                       
               }else{
                   const a = []
                     const b = this.totalSize
                    for (let i = b; i > 0; i--) {
                        a.push(i)
                    }
                   return this.currentPagel==b?
                   (b>6?a.slice(0,5).reverse():(b==5?a.slice(0,5).reverse():a.slice(0,4).reverse())) 
                   :(b>5? (this.currentPagel>4&&this.totalSize==6 ?
                   a.slice(0,4).reverse():a.slice(0,5).reverse())
                   :a.reverse())
               }
                   
              
                   
               
           }
        },
    },
    data() {
        return {
            currentPagel: '',
            me:false,
            currNub:[],
            newCurrNub:0,
            souSuo:1,
            mn:''
        }
    }, 
    methods: {
        blur(e){
            let btt = e.target.value <=this.totalSize?(e.target.value>0?e.target.value:1):this.totalSize
             this.currentPagel = btt-0
             this.souSuo = btt
        },
        add(a) {
            this.currentPagel = a 
        },
        Previous(){
            this.currentPagel>1?this.currentPagel--:this.currentPagel=1
        },
        next(){
            this.currentPagel<this.totalSize-1? this.currentPagel++: this.currentPagel = this.totalSize
        },
        atne(a){
            this.me=false
            this.newCurrNub=a
        },
        atn(){
         this.me=true
        }
    },   
   watch: {
       currentPagel(newValue) {
          if(!this.$listeners['currpage-page'])return
           this.$emit('currpage-page',newValue)
       },
       //判断条数切换时当前页是否满足最大条数
       totalSize(a){
         this.currentPagel =  this.currentPagel<a?this.currentPagel:a
       }
   },
    
}
</script>

<style scoped>
.asf{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.acb a::after{
  content: '…';
  text-align: center;
}
.acb:hover a::after{
  content: '》';
}
</style>