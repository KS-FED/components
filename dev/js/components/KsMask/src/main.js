/**
 * @description mask 遮罩
 * @summary
 *  可以进行全局调用的哦, 棒棒哒
 * @author: pkeros.
 * @date: 2016/10/21.
 */

import Vue from 'vue'
import MaskEntity from './main.vue'

let defaults = {
  backgroundColor: 'rgba(0, 0, 0, .3)'
}

let KsMaskConstructor = Vue.extend(MaskEntity)

let currentMask, instance, KsMask, id = 0
let maskQueue = []

/**
 * @description 合并选项
 * @param target 需要合并的目标
 * @return {*} 目标
 */
let merge = function(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i]
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target;
}

/**
 * @description 初始化 Mask 实例
 */
let initInstance = function () {
  // 实例化 modal
  instance = new KsMaskConstructor({
    el: document.createElement('div')
  })
  instance.show = false
}

/**
 * @description 显示队列中的下一个 mask
 */
let showNextMask = function () {
  if (!instance) {
    initInstance()
  }

  // 检测是否阻塞
  if (instance.show || currentMask || !maskQueue.length) {
    return
  }

  // 获取当前 mask
  currentMask = maskQueue.shift()

  // 合并配置项
  let options = currentMask.options
  for (let prop in options) {
    if (instance.hasOwnProperty(prop)) {
      instance[prop] = options[prop]
    }
  }

  // 监听关闭动作
  let { callback = KsMask.close } = currentMask
  instance.$off('spaceClick')
  instance.$on('spaceClick', callback)

  document.body.appendChild(instance.$el)
  Vue.nextTick(() => instance.show = true)
}

/**
 * @description 构造函数
 * @param options {Object} 配置项
 * @constructor
 */
KsMask = function (options) {
  return function (callback) {
    // 参数正确性校验
    if (typeof callback !== 'undefined' && typeof callback !== 'function') {
      throw new TypeError('KsMask: Parameter is not correct, member not a function!')
    }

    let config = {
      id: id++,
      options: merge({}, defaults, KsMask.defaults || {}, options),
      callback: callback
    }

    maskQueue.push(config)
    showNextMask()
    return config
  }
}

/**
 * @description 关闭 mask
 */
KsMask.close = function () {
  instance.show = false
  currentMask = null

  showNextMask()
}

export default KsMask
export { KsMask }
