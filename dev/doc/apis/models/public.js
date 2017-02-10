/**
 * @author: pkeros.
 * @date: 2016/6/30.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import * as res from '../resources'

export default {
  /**
   * @description 获取用户级别列表
   * @returns {Promise} 请求的 Promise
   */
  getUserLevel () {
    return res.pubGetUserLevels.get()
  },

  /**
   * @description 获取大区列表
   * @returns {Promise} 请求的 Promise
   */
  getAreaList () {
    return res.pubGetAreaList.get()
  },

  /**
   * @description 获取分公司列表
   * @param areaId {Number} 城市 ID
   * @returns {Promise} 请求的 Promise
   */
  getBranchCompanyList (areaId) {
    return res.pubGetBranchCompanyList.get({ areaId: areaId })
  },

  /**
   * @description 获取城市列表
   * @param branchCompanyId {Number} 分公司列表
   * @returns {Promise} 请求 Promise
   */
  getCityList (branchCompanyId) {
    return res.pubGetCityList.get({ branchCompanyId: branchCompanyId })
  }
}
