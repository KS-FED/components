/**
 * @author: pkeros.
 * @date: 2016/6/30.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import * as res from '../resources'

export default {
  /**
   * @description 获取模块列表页
   * @param currentPage {Number} 当前页
   * @param pageSize {Number} 页大小
   * @param systemId {Number} 系统ID
   * @param moduleName {String} 模块名称
   */
  getModList ({
    currentPage = null,
    pageSize = null,
    systemId = null,
    moduleName = null
  }) {
    let _data = {
      pageNum: '',
      pageSize: '',
      systemId: '',
      moduleName: ''
    }

    _data.pageNum = currentPage
    _data.pageSize = pageSize
    _data.systemId = systemId
    _data.moduleName = moduleName

    return res.modManGetModList.get(_data)
  },

  /**
   * @description 新增模块
   * @param alias {String} 别名
   * @param name {String} 模块名称
   * @param system_id {Number} 模块ID
   * @param remark {String} 备注
   */
  addMod ({
    alias = null,
    name = null,
    system_id = null,
    remark = null
  }) {
    let _data = {
      alias : '',
      name : '',
      system_id : '',
      remark: ''
    }

    _data.alias = alias
    _data.name = name
    _data.system_id = system_id
    _data.remark = remark

    return res.modManAddMod.save(_data)
  },

  /**
  * @description 编辑模块信息
  * @param id {Number} 当前模块ID
  * @param alias {String} 别名
  * @param name {String} 模块名称
  * @param system_id {Number} 系统ID
  * @param remark {String} 备注
  */
  editMod (id, {
    alias = null,
    name = null,
    system_id = null,
    remark = null
  }) {
    let _data = {
      alias : '',
      name : '',
      system_id : '',
      remark: ''
    }

    _data.alias = alias
    _data.name = name
    _data.system_id = system_id
    _data.remark = remark

    return res.modManEditMod.update({ id: id }, _data)
  },

  /**
   * @description 删除模块
   * @param modId {Number} 模块ID
   * @return {Promise} 请求 Promise
   */
  deleteMod (modId) {
    return res.modManDeleteMod.delete({modId: modId})
  }

}
