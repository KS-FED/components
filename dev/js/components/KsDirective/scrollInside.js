/**
 * @description 在当前元素中使用鼠标滚轮触发的事件.
 * @summary
 *  指令调用 handler 函数会携带一个参数, `1` 是向上滚动, `-1` 是向下滚动
 * @author pkeros.
 * @date 2016/11/15.
 * @example
 *  ```vue
 *  <div v-ks-scroll-inside="handler">
 *  ```
 */

import { DomUtil } from '../util'

const scrollInsideContext = '@@scrollInsideContext';

export default {
  bind () {
    let me = this

    const documentHandler = function(e) {
      let handler = me.vm[me[scrollInsideContext].methodName]
      let type = e.type

      if (type == 'DOMMouseScroll' || type == 'mousewheel') {
        e.delta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3
      }
      if (handler) { handler(e.delta) }
    }

    me[scrollInsideContext] = {
      documentHandler,
      methodName: me.expression,
      eventType: document.mozHidden !== undefined ? 'DOMMouseScroll' : 'mousewheel'
    }
    DomUtil.on(this.el, me[scrollInsideContext].eventType, documentHandler)
  },

  update () {
    this[scrollInsideContext].methodName = this.expression
  },

  unbind () {
    DomUtil.off(this.el, this[scrollInsideContext].eventType, this[scrollInsideContext].documentHandler)
  },

  install (Vue) {
    Vue.directive('KsScrollInside', {
      bind: this.bind,
      unbind: this.unbind
    })
  }
}
