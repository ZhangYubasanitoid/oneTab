import  CsMessage from './MessAge.vue'

export default {
    install(Vue){
        const MessageBox = Vue.extend(CsMessage)
        const instance = new MessageBox().$mount()
        document.body.appendChild(instance.$el)
       
        const _tites = (title,conu,type='alert',option)=>{
            instance.mess=true
            instance.type=type
            instance.title=title
            instance.conu=conu
            instance.option = option
        }

    Vue.prototype.$alert = function(title,conu,option) {
        const arg = arguments[1]
        if (typeof arg == 'string') {
            _tites(title,conu,'alert',option)
        }else{
            _tites(title,'提示','alert',arg)
        }
        
      }

      Vue.prototype.$const = function(title,conu,option) {
        return new Promise ((success,reject)=>{
            const arg = arguments[1]
        if (typeof arg == 'string') {
            option.success = success
            option.reject = reject
            _tites(title,conu,'const',option)
        }else{
            arg.success = success
            arg.reject = reject
            _tites(title,'提示','const',arg)
        }
        })
        
      }
   }
//    Vue.prototype.$const = function(a,b) {
//     instance.mess=true
//     instance.type='const'
//     console.log(a);
//     console.log(b);
//   }
//}
}