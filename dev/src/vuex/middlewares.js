/**
 * @author: pkeros.
 * @date: 2016/6/7.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

import createLogger from 'vuex/logger'

const logger = createLogger({
  collapsed: false,
  transformer (state) {
    return state.subTree
  },
  mutationTransformer (mutation) {
    return mutation.type
  }
})

export default process.env.NODE_ENV !== 'production' ? [logger] : []
