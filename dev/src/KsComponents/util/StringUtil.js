/**
 * @description 字符串首字母大写
 * @param str 字符串
 * @return {string} 首字母大写的字符串
 */
let firstUpperCase = function (str) {
  return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase()
  })
}

export default {
  firstUpperCase
}
