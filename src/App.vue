<template>
    <div class="atn">
        <!-- <span>普通</span>
        <zy-input v-model="input" placeholder="请输入内容"></zy-input>
         <span>禁用</span>
        <zy-input v-model="input" :disabled="true" placeholder="请输入内容"></zy-input>
        <span>可清空</span>
        <zy-input v-model="input" placeholder="请输入内容" clearable></zy-input>
        <span>密码框</span>
        <zy-input v-model="input" placeholder="请输入内容" show-password></zy-input>
        <span>前置</span>
        <zy-input v-model="input" placeholder="请输入内容">
             <template slot="prepend">Http://</template>
        </zy-input>
        <span>后置</span>
        <zy-input v-model="input" placeholder="请输入内容">
            <template slot="append">.com</template>
        </zy-input>
         <span>自适应文本框???</span>
        <zy-input  type="textarea"  autosize    v-model="input" placeholder="请输入内容" ></zy-input>
        <zy-input  type="textarea"   :autosize="{ 'minRows': 2, 'maxRows': 4}"    v-model="input" placeholder="请输入内容" ></zy-input>
        <span>单行限制文本框</span>
        <zy-input  type="textarea"   maxlength="10"  show-word-limit v-model="input" placeholder="请输入内容" ></zy-input>
        <span>多行限制文本框</span>
        <zy-input  type="textarea" :rows='3' maxlength="30" show-word-limit v-model="input" placeholder="请输入内容" ></zy-input> -->

    <!-- <zy-radio lable='30'></zy-radio>
    <zy-radio  lable='23' checked>666</zy-radio>
    <zy-radio  lable='34' disabled>124</zy-radio>  -->
    <!-- <zy-radio v-model="ab" lable='41'>666</zy-radio>
    <zy-radio v-model="ab" lable='42'>124</zy-radio>

        <zy-radio-grop v-model="bnm">
                <zy-radio  lable='3'>666</zy-radio>
                <zy-radio  lable='4'>124</zy-radio> 
                <zy-radio  lable='5'>124</zy-radio> 
        </zy-radio-grop> -->
    <!-- <zy-radio v-model="bb" lable='35' checked disabled>666</zy-radio>
    <zy-radio v-model="bb" lable='46' disabled>124</zy-radio> -->
   <!-- <span>基础用法</span>
    <zy-switch lable='1'  ></zy-switch>
    <span>文字描述</span>
    <zy-switch   active-text="按月付费"  inactive-text="按年付费" ></zy-switch>
    <zy-switch   active-text="按月付费" inactive-text="按年付费" active-color="#13ce66" inactive-color="rgb(255, 73, 73)"></zy-switch>
    <zy-tooltip :content="'Switch value: ' + value" placement="top">
    <zy-switch  active-value="100" inactive-value="0"  active-color="#13ce66" inactive-color="rgb(255, 73, 73)"></zy-switch></zy-tooltip>
    <zy-switch lable='2' checked></zy-switch>
    <span>禁用</span>
    <zy-switch lable='3' disabled></zy-switch>
    <zy-switch lable='4' disabled checked></zy-switch> -->
    <hr>
    <!-- <zy-counter v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></zy-counter> -->
    <hr>
    <!-- <span>复选框</span>
    <zy-check v-model="check"></zy-check>
    {{check}}
    <span>头像</span>
    <zy-header></zy-header>
    <span>文件上传</span>
    <zy-upload></zy-upload>
    <span>导航</span>
    <zy-navigation></zy-navigation> -->
    
    <button @click="buttoncli">124</button>
    </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
    data() {
        return {
            input: '',
            ab:'1',
            bb:'2',
            bnm:'3',
            value: '100',
            num:1,
            check:true
        }
    },
    created () {},
    methods: {
        handleChange($event){
            console.log($event);
        },
          buttoncli(){
                if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
                alert('不支持全屏')
                return false
             }
              screenfull.toggle()
              
            }
    },
    components: {
        // ZyCheck:()=>import('./ustils/form/ZyCheck.vue'),
        // ZyHeader:()=>import('./ustils/header/ZyHeader.vue'),
        // ZyUpload:()=>import('./ustils/upload/ZyUpload.vue'),
        // ZyNavigation:()=>import('./ustils/navigation/ZyNavigation.vue'),
        // ZyTooltip :()=>import('./ustils/form/ZyTooltip.vue'),
        // ZyInput:()=>import('./ustils/form/ZyInput.vue'),
        // ZyRadio:()=>import('./ustils/form/ZyRadio.vue'),
        // ZyRadioGrop:()=>import('./ustils/form/ZyRadioGrop.vue'),
        // ZyCounter:()=>import('./ustils/form/ZyNubmer.vue'),
        // ZySwitch:()=>import('./ustils/form/ZySwitch.vue'),
    },
}
</script>

<style scoped>
.atn{
    margin: 0 0 0 100px;
}
</style>