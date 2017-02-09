/**
 * @description 限制只能输入为数字的指令
 * @author: pkeros.
 * @date: 2016/9/7.
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
    let parseValue = parseFloat(el.value)

    if (el.value.toString().indexOf('.') === -1 ||
      this.countChar(el.value.toString(), '.') > 1) {
      if (Number.isNaN(parseValue)) {
        el.value = '1.0'
        parseValue = 1.0
      }

      switch (true) {
        case parseValue < min:
          el.value = min
          break
        case parseValue > max:
          el.value = max
          break
        default:
          el.value = parseValue
      }
    }
  },
  countChar (string, char) {
    var count = 0
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === char)
        count++
    }
    return count
  },
  bind () {
    let el = this.el

    this.ZJArgs = { min: 1.0, max: 9.9 }
    el.addEventListener('keyup', this.handle.bind(this))
  },
  unbind () {
    this.el.removeEventListener('click', this.handle)
  }
}
