import limitInputNumber from './limitInputNumber'
import limitNumberFixed from './limitNumberFixed'
import clickOutside from './clickOutside'

const Directives = {
  limitInputNumber,
  limitNumberFixed,
  clickOutside
}

const install = function(Vue) {
  if (install.installed) { return }

  // register components.
  Object.keys(Directives).forEach(k => {
    Vue.directive(k, Directives[k])
  })
}

// automation register components.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export { Directives }
