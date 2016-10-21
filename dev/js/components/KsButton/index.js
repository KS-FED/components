/**
 * @description modal 组件
 * @summary
 *  鉴于设计规范中按钮分为 `幽灵按钮` `普通按钮`
 *  颜色又分为红橙黄绿青蓝紫, 每次想找个按钮宛如大海捞针
 *  后有 WebComponents 思想指导, 故将按钮封装成组件, 简化 Api 方便使用与拓展。
 * @author: pkeros.
 * @date: 2016/10/18.
 */

import KsButton from './src/Button.vue'
import NrButton from './src/NrButton.vue'
import GhostButton from './src/GhostButton.vue'

export default KsButton
export {
  KsButton,
  NrButton,
  GhostButton
}
