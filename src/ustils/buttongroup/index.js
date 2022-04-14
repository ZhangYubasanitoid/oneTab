import CsButtonGroup from './CsButtonGroup.vue'

const ZyCsButtonGropu = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('CsButtonGroup', CsButtonGroup)
  }
}

export default ZyCsButtonGropu