/**
 * @author: pkeros.
 * @date: 2016/6/7.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/**
 * @description 构造 FormData 形式请求
 * @param url 请求地址
 * @returns {*} VueRes 对象
 */
function formDataRequest (url) {
  return Vue.resource(url, null, null, {
    emulateJSON: true
  })
}

/**
 * @description 构造 JSON 形式请求
 * @param url 请求地址
 * @returns {*} VueRes 对象
 */
function payloadRequest (url) {
  return Vue.resource(url)
}

// *** 登录
export const login = payloadRequest('./login')

// *** 公共数据--获取用户级别
export const pubGetUserLevels = payloadRequest('./options/user-level')
// *** 公共数据--获取大区列表
export const pubGetAreaList = payloadRequest('./public-data/area-list')
// *** 公共数据--获取分公司列表
export const pubGetBranchCompanyList = payloadRequest('./public-data/branch-company-list')
// *** 公共数据--获取城市列表
export const pubGetCityList = payloadRequest('./public-data/city-list')


// *** 系统管理--获取列表
export const sysManGetSystemList = payloadRequest('./system-info/list')
// *** 系统管理--添加系统
export const sysManAddSystem = payloadRequest('./system-info/add')
// *** 系统管理--修改系统信息
export const sysManEditSystem = payloadRequest('./system-info/update/{id}')


// *** 模块管理--获取列表
export const modManGetModList = payloadRequest('./module/list')
// *** 模块管理--添加模块
export const modManAddMod = payloadRequest('./module/add')
// *** 模块管理--删除操作
export const modManDeleteMod = payloadRequest('./module/delete/{modId}')
// *** 系统管理--修改系统信息
export const modManEditMod = payloadRequest('./module/update/{id}')


// *** 权限管理--获取列表
export const authManGetAuthList = payloadRequest('./permission/list')
// *** 权限管理--添加权限
export const authManAddAuth = payloadRequest('./permission/add')
// *** 权限管理--修改权限信息
export const authManEditAuth = payloadRequest('./permission/update/{id}')
// *** 权限管理--删除权限
export const authManDeleteAuth = payloadRequest('./permission/delete/{authId}')

// *** 角色管理--获取列表
export const roleManGetRoleList = payloadRequest('./role/list')
// *** 角色管理--添加操作
export const roleManAddRole = payloadRequest('./role/add')
// *** 角色管理--删除操作
export const roleManDeleteRole = payloadRequest('./role/delete/{roleId}')
// *** 角色管理--修改角色信息
export const roleManEditRole = payloadRequest('./role/update/{id}')
// *** 角色管理--配置角色权限
export const roleManConfigRoleAuth = payloadRequest('./role-permission/update/{roleId}')
// *** 角色管理--获取角色权限
export const roleManGetRoleAuth = payloadRequest('./role-permission/permission-list/{roleId}')


// *** 用户管理--获取用户列表
export const userManGetUserList = payloadRequest('./user/list')
// *** 用户管理--添加用户
export const userManAddUser = payloadRequest('./user/add')
// *** 用户管理——修改用户信息
export const userManEditUser = payloadRequest('./user/update/{id}')
// *** 用户管理--配置用户权限
export const userManConfigUserAuth = payloadRequest('./data/permission/update/{userId}')
// *** 用户管理--获取用户权限
export const userManGetUserAuth = payloadRequest('./data/permission/detail/{userId}')
// *** 用户管理--获取用户角色
export const userManGetUserRole = payloadRequest('./user-role/list/{userId}')
// *** 用户管理--获取用户所有角色
export const userManGetUserAllRole = payloadRequest('./user-role/roles/{userId}')
// *** 用户管理--修改用户角色
export const userManConfigUserRole = payloadRequest('./user-role/update/{userId}')
// *** 用户管理--修改用户密码
export const userManUpdatePassword = payloadRequest('./user/update-password/{userId}')
// *** 用户管理--检测用户是否是超级管理员
export const userManIsSuperAdmin = payloadRequest('./user/is-super-admin')

// *** 日志管理--获取列表
export const logManGetLogList = payloadRequest('./log/list')
