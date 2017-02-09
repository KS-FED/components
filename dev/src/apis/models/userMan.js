/**
 * @author: pkeros.
 * @date: 2016/6/30.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import * as res from '../resources'

export default {

  /**
   * @description 用户是否是超级管理员
   * @returns {Promise} 请求的 Promise
   */
  isSuperAdmin () {
    return res.userManIsSuperAdmin.get()
  },

  /**
   * @description 修改用户密码
   * @param userId {Number} 用户ID
   * @param password {String} 用户密码
   * @returns {Promise} 请求的 Promise
   */
  updatePassword (userId, password) {
    return res.userManUpdatePassword.update({userId: userId}, {password: password})
  },

  /**
   * @description 配置用户角色
   * @param userId {Number} 用户ID
   * @param roleIds {Array} 角色数组
   * @returns {Promise} 请求的 Promise
   */
  configUserRole (userId, roleIds) {
    return res.userManConfigUserRole.update({userId: userId}, `[${roleIds}]`)
  },

  /**
   * @description 获取用户的所有角色
   * @param userId {Number} 用户ID
   * @returns {Promise} 请求的 Promise
   */
  getUserAllRole (userId) {
    return res.userManGetUserAllRole.get({userId: userId})
  },

  /**
   * @description 获取用户角色
   * @param userId {Number} 用户ID
   * @returns {Promise} 请求的 Promise
   */
  getUserRole (userId) {
    return res.userManGetUserRole.get({userId: userId})
  },

  /**
   * @description 获取用户拥有的权限
   * @param userId {Number} 用户ID
   * @returns {Promise} 请求的 Promise
   */
  getUserAuth (userId) {
    return res.userManGetUserAuth.get({userId: userId})
  },

  /**
   * @description 获取用户列表
   * @param currentPage {Number} 当前页
   * @param pageSize {Number} 页大小
   * @param userName {String} 用户名
   * @param userMobile {String} 手机号
   * @returns {Promise} 请求的 Promise
   */
  getUserList ({
    currentPage = null,
    pageSize = null,
    userName = null,
    userMobile = null
  }) {
    let _data = {
      pageNum: '',
      pageSize: '',
      name: '',
      mobile: ''
    }

    _data.pageNum = currentPage
    _data.pageSize = pageSize
    _data.name = userName
    _data.mobile = userMobile

    return res.userManGetUserList.get(_data)
  },

  /**
   * @description 添加用户
   * @param email {String} 邮箱
   * @param level {String} 用户等级
   * @param login_name {String} 登录名
   * @param mobile {Number} 手机号
   * @param name {String} 用户姓名
   * @param password {String} 密码
   * @param remark {String} 备注
   * @param sex {Number} 性别 [0: 保密, 1: 男, 2: 女]
   * @returns {Promise} 请求的 Promise
   */
  addUser ({
    email = null,
    level = null,
    login_name = null,
    mobile = null,
    name = null,
    password = null,
    remark = null,
    sex = null
  }) {
    let _data = {
      email: null,
      level: null,
      login_name: null,
      mobile: null,
      name: null,
      password: null,
      remark: null,
      sex: null
    }

    _data.email = email
    _data.level = level
    _data.login_name = login_name
    _data.mobile = mobile
    _data.name = name
    _data.password = password
    _data.remark = remark
    _data.sex = sex

    return res.userManAddUser.save(_data)
  },

  /**
   * @description 为用户配置权限
   * @param userId {Number} 用户 ID
   * @param all {Boolean} 总部是否勾选
   * @param areas {Array} 选择的大区
   * @param branchCompanies {Array} 选择的分公司
   * @param cities {Array} 选择的城市
   */
  configUserAuth (userId, {
    all = false,
    areas = [],
    branchCompanies = [],
    cities = []
  }) {
    let _data = {
      all: false,
      areas: [],
      branch_companies: [],
      cities: []
    }

    _data.all = all
    _data.areas = areas
    _data.branch_companies = branchCompanies
    _data.cities = cities

    return res.userManConfigUserAuth.update({userId: userId}, _data)
  },

  /**
   * @description 编辑用户信息
   * @param id {Number} 需要编辑的用户 ID
   * @param email {String} 邮箱
   * @param level {String} 用户等级
   * @param login_name {String} 登录名
   * @param mobile {Number} 手机号
   * @param name {String} 用户姓名
   * @param remark {String} 备注
   * @param sex {Number} 性别 [0: 保密, 1: 男, 2: 女]
   * @returns {Promise} 请求的 Promise
   */
  editUser (id, {
    email = null,
    level = null,
    login_name = null,
    mobile = null,
    name = null,
    remark = null,
    sex = null
  }) {
    let _data = {
      email: null,
      level: null,
      login_name: null,
      mobile: null,
      name: null,
      remark: null,
      sex: null
    }

    _data.email = email
    _data.level = level
    _data.login_name = login_name
    _data.mobile = mobile
    _data.name = name
    _data.remark = remark
    _data.sex = sex

    return res.userManEditUser.update({ id: id }, _data)
  }
}
