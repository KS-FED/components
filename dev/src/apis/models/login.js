/**
 * @author: pkeros.
 * @date: 2016/6/24.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import * as res from '../resources'

export default {

  /**
   * @description 登录接口
   * @param userName {String} 用户名
   * @param password {String} 密码
   * @param sysId {Number} 系统ID
   * @returns {Promise} 请求的 Promise
   */
  login ({
    userName = null,
    password = null,
    sysId = null
  }) {
    let _data = {
      login_name: '',
      password: '',
      sys_id: null
    }

    _data.login_name = userName
    _data.password = password
    _data.sys_id = sysId

    return res.login.save(_data)
  }
}
