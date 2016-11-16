/**
 * @description 在某个元素上滚动时在一个限制范围内计算一个值.
 * @summary
 *  给定边界 max: 200, min: 100, 选项 step: 10. 鼠标滚轮滚动
 *  方向向上为减, 方向向下为增加, 步进为 10. 会产生一个值范围在 200 ~ 100.
 * @author pkeros.
 * @date 2016/11/15.
 * ```vue
 * <div v-ks-scroll-bound-value:max:min:step="handleClose">
 * ```
 */

import { DomUtil } from '../util'

const scrollInsideContext = '@@scrollInsideContext';

export default {
  bind () {
    let me = this
    let options = {initValue: 0, max: 0, min: 0, step: 0}
    let args = me.arg.split(':')
    let value = 0

    options.initValue = Number(args[0]) || 0
    options.max = Number(args[1]) || 0
    options.min = Number(args[2]) || 0
    options.step = Number(args[3]) || 0
    value = options.initValue

    const handler = function(e) {
      let handler = me.vm[me[scrollInsideContext].methodName]
      let type = e.type

      if (type == 'DOMMouseScroll' || type == 'mousewheel') {
        e.delta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3
      }

      // 计算值
      if (e.delta > 0) {
        if (value > options.min) {
          value -= options.step
        }
      } else {
        if (value < options.max) {
          value += options.step
        }
      }

      if (handler) {
        let result = handler(value, e.delta, options)

        value = result ? result : value
      }
    }

    me[scrollInsideContext] = {
      handler,
      methodName: me.expression,
      eventType: document.mozHidden !== undefined ? 'DOMMouseScroll' : 'mousewheel'
    }
    DomUtil.on(this.el, me[scrollInsideContext].eventType, handler)
  },

  update () {
    this[scrollInsideContext].methodName = this.expression
    console.log(this)
  },

  unbind () {
    DomUtil.off(this.el, this[scrollInsideContext].eventType, this[scrollInsideContext].handler)
  },

  install (Vue) {
    Vue.directive('KsScrollBoundValue', {
      bind: this.bind,
      unbind: this.unbind
    })
  }
}

