/**
 * @description modal 对话框
 * @summary
 *  可以进行全局调用的哦, 棒棒哒
 * @author: pkeros.
 * @date: 2016/10/19.
 */

import Vue from 'vue'
import Modal from './main.vue'
import KsMask from '../../KsMask'

const pueMapper = ['primary', 'success', 'info', 'warn', 'danger', 'normal']
let defaults = {
  showConfirmBtn: true,
  showCancelBtn: true,
  showCloseBtn: true,
  cancelBtnText: '取消',
  confirmBtnText: '确定',
  mask: true,
  title: 'Title',
  content: 'Content...',
  type: 'normal'
}

let KsModalConstructor = Vue.extend(Modal)

let currentMsg, instance, KsModal, id = 0
let modalQueue = []

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
 * @description 初始化 Modal 实例
 */
let initInstance = function () {
  // 实例化 modal
  instance = new KsModalConstructor({
    el: document.createElement('div')
  })
  instance.show = false

  // 监听关闭动作
  instance.$on('close', KsModal.close)
}

/**
 * @description 显示队列中的下一个信息
 */
let showNextModal = function () {
  if (!instance) {
    initInstance()
  }

  // 检测是否阻塞
  if (instance.show || currentMsg || !modalQueue.length) {
    return
  }

  // 获取当前信息
  currentMsg = modalQueue.shift()

  // 合并配置项
  let options = currentMsg.options
  for (let prop in options) {
    if (instance.hasOwnProperty(prop)) {
      instance[prop] = options[prop]
    }
  }

  // 绑定事件
  let {
    confirmCb = KsModal.close,
    cancelCb = KsModal.close
  } = currentMsg
  instance.$off('confirm')
  instance.$off('cancel')
  instance.$on('confirm', confirmCb)
  instance.$on('cancel', cancelCb)

  // 实例化 mask
  if (typeof currentMsg.maskInstance !== 'undefined') {
    instance['maskConfig'] = currentMsg.maskInstance(cancelCb)
  }

  document.body.appendChild(instance.$el)
  Vue.nextTick(() => instance.show = true)
}

/**
 * @description 构造函数
 * @param options {Object} 配置项
 * @constructor
 */
KsModal = function (options) {
  // 配置 modal 并加入显示队列
  return function (confirmCb, cancelCb) {
    // 参数正确性校验
    if ((typeof confirmCb !== 'undefined' && typeof confirmCb !== 'function')
    || (typeof cancelCb !== 'undefined' && typeof cancelCb !== 'function')) {
      throw new TypeError('KsModal: Parameter is not correct, member not a function!')
    }

    let config = {
      id: id++,
      options: merge({}, defaults, KsModal.defaults || {}, options),
      confirmCb: confirmCb,
      cancelCb: cancelCb,
    }

    // 创建 mask 配置
    options.mask && (config['maskInstance'] = KsMask(options))

    modalQueue.push(config)
    showNextModal()
    return config
  }
}

/**
 * @description 关闭 modal
 */
KsModal.close = function () {
  instance.show = false
  currentMsg = null

  showNextModal()
}

/**
 * @description 设置默认配置项
 * @param defaults 默认配置项
 */
KsModal.setDefaults = function (defaults) {
  KsModal.defaults = defaults
}

/**
 * @description 警告类型模态
 * @summary
 *  这是一种没有取消和确定的的模态类型, 我们称它为警告类型
 *  一般警告类型的运用场景就是弹出一些信息展示给用户, 没有相关后续操作.
 *  @param content {String} 显示的内容
 *  @param title {String} 标题
 *  @param hue {String} 色调
 *  @param options {Object} 附加配置项
 */
KsModal.alert = function (content, title, hue, options) {
  return KsModal(merge({
    showConfirmBtn: false,
    showCancelBtn: false,
    showCloseBtn: true,
    content: content,
    title: title,
    type: hue
  }, options))
}

/**
 * @description confirm 类型模态
 * @summary
 *  这是一种只有确定和取消的模态, 用户必须做出选择.
 * @param content {String} 显示的内容
 * @param title {String} 标题
 * @param hue {String} 色调
 * @param options {Object} 附加配置项
 */
KsModal.confirm = function (content, title, hue, options) {
  return KsModal(merge({
    showConfirmBtn: true,
    showCancelBtn: true,
    showCloseBtn: false,
    content: content,
    title: title,
    type: hue
  }, options))
}

/**
 * @description prompt 类型模态
 * @summary
 *  提示类型也是默认的类型, 拥有确定取消并且有关闭按钮.
 * @param content {String} 显示的内容
 * @param title {String} 标题
 * @param hue {String} 色调
 * @param options {Object} 附加配置项
 */
KsModal.prompt = function (content, title, hue, options) {
  return KsModal(merge({
    showConfirmBtn: true,
    showCancelBtn: true,
    showCloseBtn: true,
    content: content,
    title: title,
    type: hue
  }, options))
}

// 注册不同色调的函数
pueMapper.forEach(hue => {
  KsModal[hue] = function (content, title) {
    return KsModal.prompt(content, title, hue, {})
  }
})

export default KsModal
export { KsModal }
