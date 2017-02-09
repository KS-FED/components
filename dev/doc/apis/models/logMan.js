/**
 * @author: pkeros.
 * @date: 2016/6/30.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import * as res from '../resources'

export default {
  /**
   * @description 获取用户列表
   * @param currentPage {Number} 当前页
   * @param pageSize {Number} 页大小
   * @param loginName {String} 用户名查询
   */
  getLogList ({
    currentPage = null,
    pageSize = null,
    loginName = null
  }) {
    let _data = {
      pageNum: '',
      pageSize: null,
      loginName: ''
    }

    _data.pageNum = currentPage
    _data.pageSize = pageSize
    _data.loginName = loginName

    return res.logManGetLogList.get(_data)
  }
}
