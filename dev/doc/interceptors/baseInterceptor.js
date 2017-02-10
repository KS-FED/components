/**
 * @description 请求拦截器.
 * @author pkeros
 * @data 16/6/2
 * @email pkeros@vip.qq.com
 */

import store from '../vuex/store'
import { AJAX_TIMEOUT } from '../global'
import { ApiConfig } from '../apis/api'
import * as types from '../vuex/mutation-types'

export default function install (Vue) {
  Vue.http.options.timeout = AJAX_TIMEOUT
  Vue.http.options.root = ApiConfig.apiOrigin
  Vue.http.headers.common['DOMAIN'] = 'http://auth2.test.kashuo.net'

  Vue.http.interceptors.push({
    request (requestBody) {
      store.dispatch(types.AJAX_REQUEST)

      return requestBody
    },
    response (responseBody) {
      store.dispatch(types.AJAX_RESPONSE)

      return responseBody
    }
  })
}
