
import ZyCsButton from './CsButton.vue'

const components = [
    ZyCsButton
]

const install = function (Vue = {}) {
    components.forEach(component=>{
        Vue.component(component,component)
    })
}

if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ZyCsButton
}