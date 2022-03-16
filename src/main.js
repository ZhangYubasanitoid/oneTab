import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//bottstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//自定义组件
import messagebox from './ustils/messagebox/index'
Vue.use(messagebox)

//全局注册
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const context = require.context("./ustils", false, /([a-z_]+)\.(vue|js)$/i)
context.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = context(fileName)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

var oba = {
  a:'sgd'
}
var a_oba = Object.defineProperty(oba,'a',{
  get:function () {
    console.log('get');
    return 'geta'
  },
  set:function () {
    console.log('set');
  }
})

console.log(a_oba.a);


new Vue({
  render: h => h(App),
}).$mount('#app')
