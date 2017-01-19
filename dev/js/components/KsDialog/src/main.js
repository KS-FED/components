/**
 * @description Dialog 对话框
 * @summary
 *  可以进行全局调用的哦, 棒棒哒
 * @author: pkeros.
 * @date: 2016/10/19.
 */

import Vue from 'vue'
import Dialog from './main.vue'
import KsMask from '../../KsMask'

const pueMapper = ['success', 'info', 'warn', 'danger']
let defaults = {
  showCancelBtn: false,
  cancelBtnText: '取消',
  confirmBtnText: '确定',
  container: 'body',
  mask: true,
  title: 'Title',
  text: 'Content...',
  type: 'success'
}

let KsDialogConstructor = Vue.extend(Dialog)

let currentMsg, instance, KsDialog, id = 0
let DialogQueue = []

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
 * @description 初始化 Dialog 实例
 */
let initInstance = function () {
  // 实例化 Dialog
  instance = new KsDialogConstructor({
    el: document.createElement('div')
  })
  instance.show = false

  // 监听关闭动作
  instance.$on('close', KsDialog.close)
}

/**
 * @description 显示队列中的下一个信息
 */
let showNextDialog = function () {
  if (!instance) {
    initInstance()
  }

  // 检测是否阻塞
  if (instance.show || currentMsg || !DialogQueue.length) {
    return
  }

  // 获取当前信息
  currentMsg = DialogQueue.shift()

  // 合并配置项
  let options = currentMsg.options
  for (let prop in options) {
    if (instance.hasOwnProperty(prop)) {
      instance[prop] = options[prop]
    }
  }

  // 绑定事件
  let {
    confirmCb = KsDialog.close,
    cancelCb = KsDialog.close
  } = currentMsg
  instance.$off('confirm')
  instance.$off('cancel')
  instance.$on('confirm', confirmCb)
  instance.$on('cancel', cancelCb)

  // 实例化 mask
  if (typeof currentMsg.maskInstance !== 'undefined') {
    instance['maskConfig'] = currentMsg.maskInstance(cancelCb)
  }

  let container = document.querySelector(defaults.container)
  if (container) {
    container.appendChild(instance.$el)
  } else {
    document.body.appendChild(instance.$el)
  }

  Vue.nextTick(() => instance.show = true)
}

/**
 * @description 构造函数
 * @param options {Object} 配置项
 * @constructor
 */
KsDialog = function (options) {
  // 配置 Dialog 并加入显示队列
  return function (confirmCb, cancelCb) {
    // 参数正确性校验
    if ((typeof confirmCb !== 'undefined' && typeof confirmCb !== 'function')
    || (typeof cancelCb !== 'undefined' && typeof cancelCb !== 'function')) {
      throw new TypeError('KsDialog: Parameter is not correct, member not a function!')
    }

    let config = {
      id: id++,
      options: merge({}, defaults, KsDialog.defaults || {}, options),
      confirmCb: confirmCb,
      cancelCb: cancelCb,
    }

    // 创建 mask 配置
    options.mask && (config['maskInstance'] = KsMask(options))

    DialogQueue.push(config)
    showNextDialog()
    return config
  }
}

/**
 * @description 关闭 Dialog
 */
KsDialog.close = function () {
  instance.show = false
  currentMsg = null

  showNextDialog()
}

/**
 * @description show
 * @param text {String} 显示的内容
 * @param title {String} 标题
 * @param hue {String} 色调
 * @param options {Object} 附加配置项
 */
KsDialog.show = function (text, title, hue, options) {
  return KsDialog(merge({
    text: text,
    title: title,
    mask: true,
    type: hue
  }, options))
}

/**
 * @description 创建一个 dialog
 * @param options {Object} 配置项目
 */
KsDialog.create = function (options) {
  KsDialog.setDefaults(options)

  return KsDialog
}

/**
 * @description 设置默认配置项
 * @param options 配置项
 */
KsDialog.setDefaults = function (options) {
  KsDialog.defaults = merge(defaults, options)
}

// 注册不同色调的函数
pueMapper.forEach(hue => {
  KsDialog[hue] = function (text, title, cancel = false) {
    return KsDialog.show(text, title, hue, {
      showCancelBtn: cancel
    })
  }
})

export default KsDialog
export { KsDialog }
