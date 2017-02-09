import filterTrim from './filterTrim'
import toDate from './toDate'

const Filter = {
  filterTrim,
  toDate
}

const install = function(Vue) {
  if (install.installed) { return }

  // register components.
  Object.keys(Filter).forEach(k => {
    Vue.filter(k, Filter[k])
  })
}

// automation register filters.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export { Filter }
