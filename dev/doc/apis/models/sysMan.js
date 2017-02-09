/**
 * @author: pkeros.
 * @date: 2016/6/30.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import * as res from '../resources'

export default {
  /**
   * @description 获取系统列表
   * @param currentPage {Number} 当前页
   * @param pageSize {Number} 页大小
   */
  getSysList ({
    currentPage = null,
    pageSize = null
  }) {
    let _data = {
      pageNum: '',
      pageSize: ''
    }
    _data.pageNum = currentPage;
    _data.pageSize = pageSize;

    return res.sysManGetSystemList.get(_data)
  },

  /**
   * @description 新增系统
   * @param name {String} 系统名称
   * @param remark {String} 备注
   * @param system_id {Number} 系统ID
   * @param url {String} 系统URL
   */
  addSys ({
    name = null,
    remark = null,
    system_id = null,
    url = null
  }) {
    let _data = {
      name: '',
      remark: '',
      system_id: '',
      url: ''
    }
    _data.name = name
    _data.remark = remark
    _data.system_id = system_id
    _data.url = url

    return res.sysManAddSystem.save(_data)
  },

  /**
  * @description 编辑系统信息
  * @param id {Number} 当前的系统ID
  * @param name {String} 系统名称
  * @param remark {String} 备注
  * @param system_id {Number} 系统ID
  * @param url {String} 系统URL
  */
  editSys (id, {
    name = null,
    remark = null,
    system_id = null,
    url = null
  }) {
    let _data = {
      name: null,
      remark: null,
      system_id: null,
      url: null
    }
    _data.name = name
    _data.remark = remark
    _data.system_id = system_id
    _data.url = url
    return res.sysManEditSystem.update({ id: id }, _data)
  }


}
