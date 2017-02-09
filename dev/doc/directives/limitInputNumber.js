/**
 * @description 限制只能输入为数字的指令
 * @author: pkeros.
 * @date: 2016/9/7.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

/**
 * @summary 该指令可以限制输入只能为数字，以及范围的限制
 * e.g: v-limit-input-number={min~max}
 */

export default {
  handle (e) {
    // ASCII 32 以下都是特殊字符
    if (e.keyCode < 32) { return }

    let { min, max } = this.ZJArgs
    let el = this.el
    let elValue = el.value << 0

    switch (true) {
      case elValue < min:
        el.value = min
        break
      case elValue > max:
        el.value = max
        break
      default:
        el.value = elValue
    }
  },
  bind () {
    let el = this.el
    let args = this.expression.split('~')

    this.ZJArgs = { min: args[0] << 0, max: args[1] << 0 }
    el.setAttribute('maxlength', args[1].length)
    el.addEventListener('keyup', this.handle.bind(this))
  },
  unbind () {
    this.el.removeEventListener('click', this.handle)
  }
}
