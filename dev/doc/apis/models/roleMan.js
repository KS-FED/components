/**
 * @author: pkeros.
 * @date: 2016/7/5.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import * as res from '../resources'

export default {

  /**
   * @description 获取角色权限
   * @param roleId {Number} 角色权限
   * @param withParent {Boolean} 是否包含父级角色权限
   * @returns {Promise} 请求的 Promise
   */
  getRoleAuth (roleId, withParent = false) {
    return res.roleManGetRoleAuth.get({roleId: roleId}, {withParent: withParent})
  },

  /**
   * @description 配置角色权限
   * @param roleId {Number} 角色权限
   * @param permissionIds {Array} 权限数据
   * @returns {Promise} 请求的 Promise
   */
  configRoleAuth (roleId, permissionIds) {
    return res.roleManConfigRoleAuth.update({roleId: roleId}, `[${permissionIds}]`)
  },

  /**
   * @description 获取角色列表
   * @param currentPage {Number} 当前页
   * @param pageSize {Number} 页大小
   * @param roleName {String} 用户名
   * @returns {Promise} 请求的 Promise
   */
  getRoleList ({
    currentPage = null,
    pageSize = null,
    roleName = null
  }) {
    let _data = {
      roleName: '',
      pageNum: '',
      pageSize: ''
    }

    _data.roleName = roleName
    _data.pageNum = currentPage
    _data.pageSize = pageSize

    return res.roleManGetRoleList.get(_data)
  },

  /**
   * @description 新增角色
   * @param comment {String} 注释
   * @param name {String} 角色名称
   * @param pid {String} 父级ID
   */
  addRole ({
    name = null,
    comment = null,
    pid = null
  }) {
    let _data = {
      comment: '',
      name: '',
      pid: 0
    }

    _data.comment = comment
    _data.name = name
    _data.pid = pid

    return res.roleManAddRole.save(_data)
  },

  /**
   * @description 编辑角色
   * @param id {Number} 当前角色ID
   * @param comment {String} 注释
   * @param name {String} 角色名称
   * @param pid {String} 父级ID
   */
  editRole (id, {
    comment = null,
    name = null,
    pid = null
  }) {
    let _data = {
      comment: '',
      name: '',
      pid: 0
    }

    _data.comment = comment
    _data.name = name
    _data.pid = pid

    return res.roleManEditRole.update({ id: id }, _data)
  },

  /**
   * @description 删除角色
   * @param roleId {Number} 角色ID
   * @return {Promise} 请求 Promise
   */
  deleteRole (roleId) {
    return res.roleManDeleteRole.delete({roleId: roleId})
  }
}
