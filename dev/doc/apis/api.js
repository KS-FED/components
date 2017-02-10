/**
 * @description api 相关定义.
 * @author pkeros
 * @data 16/6/2
 * @email pkeros@vip.qq.com
 */

let _c = {}
let _s = {}

/**
 * @description Api 返回状态
 */

// 请求成功
_s.SUCCESS = { code: '200', des: '请求成功' }
_s[_s.SUCCESS.code] = '请求成功'
// 系统错误
_s['500'] = '系统内部错误!'

/**
 * @description Api 线上地址
 */
_c.production = 'http://auth.boss.kashuo.net/auth'
_c.qa = 'http://auth.qa.kashuo.net/auth'
_c.develop = 'http://auth.qa.kashuo.net/auth'

// _c.apiOrigin = !process.env.NODE_ENV ? _c.develop : _c[process.env.NODE_ENV]
_c.apiOrigin = '/auth'

export const ApiConfig = _c
export const ApiStatus = _s
