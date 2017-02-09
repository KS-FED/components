/**
 * @author: pkeros.
 * @date: 2016/6/6.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Middlewares from './middlewares'

import ajax from './modules/ajax'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: Vue.config.debug,
  modules: {
    ajax
  },
  middlewares: [Middlewares]
})
