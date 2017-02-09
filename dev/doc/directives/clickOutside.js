/**
 * @description 点击元素外面才会触发的事件.
 * @author pkeros.
 * @date 2016/11/11.
 * @example
 * ```vue
 * <div v-ks-click-outside="handleClose">
 * ```
 */

const DomUtil = {
  on (el, event, cb, useCapture) {
    el.addEventListener(event, cb, useCapture)
  },

  off (el, event, cb) {
    el.removeEventListener(event, cb)
  }
}
const clickOutsideContext = '@@clickOutsideContext';

export default {
  bind () {
    let me = this

    const documentHandler = function(e) {
      let handler = me.vm[me[clickOutsideContext].methodName]

      if (handler && !me.el.contains(e.target)) {
        handler()
      }
    }

    me[clickOutsideContext] = {
      documentHandler,
      methodName: me.expression
    }
    DomUtil.on(document, 'click', documentHandler)
  },

  update () {
    this[clickOutsideContext].methodName = this.expression
  },

  unbind () {
    DomUtil.off(document, 'click', this[clickOutsideContext].documentHandler)
  }
}
