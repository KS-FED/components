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
   * @param moduleId {Number} 模块ID
   * @param authName {String} 权限名称
   */
  getAuthList ({
    currentPage = null,
    pageSize = null,
    moduleId = null,
    authName = null,
  }) {
    let _data = {
      pageNum: '',
      pageSize: '',
      moduleId: '',
      name: '',
    }

    _data.pageNum = currentPage
    _data.pageSize = pageSize
    _data.moduleId = moduleId
    _data.name = authName

    return res.authManGetAuthList.get(_data)
  },

  /**
  * @description 添加权限信息
  * @param alias {String} 权限别名
  * @param name {String} 权限名称
  * @param remark {String} 备注
  * @param module_id {Number} 权限ID
  * @param type {String} 权限类型
  */
  addAuth ({
    alias = null,
    name = null,
    remark = null,
    module_id = null,
    system_id = null,
    type = null
  }) {
    let _data = {
      alias: '',
      name: '',
      remark: '',
      module_id: '',
      system_id: '',
      type: ''
    }

    _data.alias = alias
    _data.name = name
    _data.remark = remark
    _data.module_id = module_id
    _data.system_id = system_id
    _data.type = type

    return res.authManAddAuth.save(_data)
  },

  /**
  * @description 编辑权限内容
  * @param id {Number} 当前权限管理的ID
  * @param alias {String} 权限别名
  * @param name {String} 权限名称
  * @param remark {String} 备注
  * @param module_id {Number} 模块ID
  * @param type {String} 权限类型
  */
  editAuth (id, {
    alias = null,
    name = null,
    remark = null,
    module_id = null,
    type = null
  }) {
    let _data = {
      alias: '',
      name: '',
      remark: '',
      module_id: '',
      type: ''
    }

    _data.alias = alias
    _data.name = name
    _data.remark = remark
    _data.module_id = module_id
    _data.type = type

    return res.authManEditAuth.update({ id: id }, _data)
  },

  /**
   * @description 删除权限
   * @param authId {Number} 权限ID
   * @return {Promise} 请求 Promise
   */
  deleteAuth (authId) {
    return res.authManDeleteAuth.delete({authId: authId})
  }
}
