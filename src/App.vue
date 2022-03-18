<template>
  <div id="app">
    <span>Button按钮</span>
    <ul>
    <!-- <cs-button @click="add" >新增按钮</cs-button>
    <cs-button @click="btn" type='primary'>主要按钮</cs-button>
    <cs-button type='success'>成功按钮</cs-button>
    <cs-button type='info'>信息按钮</cs-button>
    <cs-button type='warning'>警告按钮</cs-button>
    <cs-button type='danger'>危险按钮</cs-button>
    <cs-button type='text'>文字按钮</cs-button>
    <hr>
    <cs-button type='warning' plan>朴素按钮1</cs-button>
    <cs-button type='danger' plan>朴素按钮2</cs-button>
    <hr>
    <cs-button type='danger' plan disabled>禁用按钮</cs-button>
    <hr>
    <cs-button type='info'>正常信息按钮</cs-button>
    <cs-button type='info' size='large'>大信息按钮</cs-button>
    <cs-button type='info' size='small'>小信息按钮</cs-button>
    <hr>
    <cs-button type='info' :loading='true'>加载中</cs-button> -->
    <!-- <cs-button-group type='primary' @click="add">
        <cs-button type='warning' size='small'>警告按钮</cs-button>
        <cs-button type='danger'>危险按钮</cs-button>
        <cs-button type='success'>文字按钮</cs-button>
    </cs-button-group>
    <cs-button-group type='warning' plan>修改</cs-button-group>
    <cs-button-group type='danger'>删除</cs-button-group> -->
    </ul>
  <hr>
  <span>Tab切换</span>
  <ul>
  <!-- <cs-tab  v-model="mee" @tab-click='tee'>
      <cs-tab-pane lable='标签一' name='one'>内容1--['12','13']</cs-tab-pane>
      <cs-tab-pane lable='标签二' name='two'>内容2 <button>214</button> </cs-tab-pane>
      <cs-tab-pane lable='标签三' name='the'>内容3</cs-tab-pane>
  </cs-tab> -->
  <!-- <text-cs></text-cs> -->
  </ul>
  <hr>
  <ul>
  <!-- <cs-button type='info' plan @click="showDialog"  >点击弹出</cs-button>
  <cs-dialog :visibe.sync='visibe' :title='titt' :show-close='true' 
  :before-close='beclose'  width='50%'
  >
    <template v-slot:header>
      <span>弹框标题</span>
    </template>
    <template>
        <span>内容</span>
    </template>
    <template v-slot:footer='att'>
          <cs-button type='success'  @click="btn(att)" plan>确定按钮</cs-button>
          <cs-button type='info' @click="btn" >取消按钮</cs-button>
    </template>
  </cs-dialog> -->
  </ul>
  <button @click="aa"> 214</button>
  <hr>
   <!-- <cs-button type='warning' plan @click="add">朴素按钮al</cs-button>
  <cs-message :mess.sync='mess'></cs-message>
  弹窗
  <cs-button type='warning' plan @click="aa">朴素按钮con</cs-button>
  <cs-model :att='att' :ter='ter' :attrbt='attrbt' ></cs-model> -->
  <hr> 
  <div  style="margin-left: 200px">
        <cs-button type='warning' @click="addTab">新增用户</cs-button>
        <cs-button type='danger' @click="revameTab(centTab)" :disabled='centTab.length==0'>修改用户</cs-button>
        <cs-button type='success' @click="deleteTab(centTab)" :disabled='centTab.length==0'>批量删除</cs-button>
    </div>
  <cs-tab-header  @selection-change="handleSelectionChange" :data="tableData" @tab-sort='tabSort' width="80" >
    <cs-tab-bott  type="selection" width="10" align='center' ></cs-tab-bott>
    <cs-tab-bott  type="index"  label="#" width="20" sortable align='center'></cs-tab-bott>
    <cs-tab-bott  prop="date"  label="日期" width="20" sortable align='left'></cs-tab-bott>
    <cs-tab-bott  prop="name"  label="姓名" width="20" sortable  align='center'></cs-tab-bott>
    <cs-tab-bott  prop="address"  label="地址" width="20" sortable align='right'></cs-tab-bott>
    <cs-tab-bott   label="操作" width="20"  align='right'>
      <template v-slot='scope'>
          <cs-button type='success' @click="revameTab(scope.res)">编辑按钮</cs-button>
          <cs-button type='info' @click="deleteTab(scope.res.id)">删除按钮</cs-button>
      </template>
      <!-- <template v-slot='scope'>
        <span @click="addTab(scope)">235</span>
      </template> -->
    </cs-tab-bott>
  </cs-tab-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // mee:"two",
      // visibe:false,
      // titt:'弹框标题',
      // mess:false,
      // att:false,
      // ter:'',
      // attrbt:30,
      tableData: [ {
            id:1,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id:7,
            date: '2016-05-01',
            name: '王是德国',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id:3,
            date: '2016-05-03',
            name: '的广告',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      centTab:[]
    }
  },
  components:{
    CsTabBott:()=>import('./ustils/table/CsTabBott.vue'),
    CsTabHeader:()=>import('./ustils/table/CsTabHeader.vue'),
    // CsModel :()=>import('./ustils/modela/ModeAl'),
    // CsMessage:()=>import('./ustils/messagebox/CsMessage.vue'),
    // CsDialog:()=>import('./ustils/dialog/CsDialog.vue'),
    CsButton:()=>import('./ustils/button/CsButton.vue'),
  // CsButtonGroup:()=>import('./ustils/button/CsButtonGroup.vue'),
    // CsTab:()=>import('./ustils/tab/CsTab.vue'),
    // CsTabPane:()=>import('./ustils/tab/CsTabPane.vue')
  },
  methods:{
    tabSort(a){
      // a.par.forEach(res => {res.abt=''})
      // a.column.abt=true
      console.log(a);
    },
    //选中获取的数据
    handleSelectionChange(a){
      this.centTab = a
    },
    //新增
    addTab(a){
      console.log(a);
    },
    //修改
    revameTab(a){
      console.log(a.length?(a.length>1?alert('只能修改一项'):a[0]):a);
      // if (a.length>1) {
      //   alert('只能修改一项')
      // }else{
      //   console.log(a[0]);
      // }
    },
    //删除
    deleteTab(a){
    let dele =  a.length? a.map((v)=>v.id): a
     console.log(dele);
    },
    aa(){
      this.$const('文本标题','文题',{
        ale:'qxconst',
        quer:'qdconst',
        type:'arr'
      })
      .then((res)=>{
         this.att=true
         this.ter=res
         this.attrbt = 50
        setTimeout(()=>{
          this.att=false
        },2000)
      })
      .catch((res)=>{
        console.log( res);
      })
     // alert('325')
    },
    add(){
      this.$alert('删除用户成功','友情提醒',{
        ale:'alert'
      })
    },
    btn(a){
       this.visibe = false
      console.log(a);
    },
    tee(tab){
      console.log(tab);
    },
    beclose(done){
      const a =  confirm('确定要关闭')
   // if (Math.random()>0.5) {
      if (a) {
      done()
    }else{
      console.log('关闭失败');
    }
    },
    showDialog(){
      this.visibe=true
    }
  }
}
</script>

<style  scoped>
body{
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app{
  overflow: hidden;
  height: 100%;
}
</style>
