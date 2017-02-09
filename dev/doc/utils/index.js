/**
 * @description 工具方法.
 * @author pkeros
 * @data 2016/12/8
 * @email pkeros@vip.qq.com
 */

import Cookie from './Cookie'
import Utils from './Util'

const install = function(Vue) {
  if (install.installed) { return }

  Object.defineProperties(Vue.prototype, {
    $cookie: { get () { return Cookie } },
    $utils: { get () { return Utils } }
  })
}

// automation register components.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
