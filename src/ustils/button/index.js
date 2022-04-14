import CsButton from './CsButton.vue'

const ZyCsButton = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('CsButton', CsButton)
  }
}

export default ZyCsButton