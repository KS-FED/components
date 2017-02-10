/**
 * @author: pkeros.
 * @date: 2016/7/4.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

export default  {
	/**
   * @description 生成 UUID
   * @returns {string} 生成的 UUID
   */
  createUUID () {
    let s = []
    let hexDigits = '0123456789abcdef'
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-'

    return s.join('')
  },

  /**
   * @description 从 URL 上获取参数
   * @param name 参数名
   * @returns {String} 参数值
   */
  getQueryString (name) {
    let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURIComponent(r[2]); return null
  },

  /**
   * @description 合并选项
   * @param target 需要合并的目标
   * @return {*} 目标
   */
  merge (target) {
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
}
