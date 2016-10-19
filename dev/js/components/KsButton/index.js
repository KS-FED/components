/**
 * @description 一个 button 组件
 * @summary
 *  鉴于设计规范中按钮分为 `幽灵按钮` `普通按钮`
 *  颜色又分为红橙黄绿青蓝紫, 每次想找个按钮宛如大海捞针
 *  后有 WebComponents 思想指导, 故将按钮封装成组件, 简化 Api 方便使用与拓展。
 * @author: pkeros.
 * @date: 2016/10/18.
 */

const Button = require('./src/Button.vue')
const _NrButton = require('./src/NrButton.vue')
const _GhostButton = require('./src/GhostButton.vue')

export default Button
export const KsButton = Button
export const NrButton = _NrButton
export const GhostButton = _GhostButton
