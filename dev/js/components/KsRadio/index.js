/**
 * @description: 封装了一些列的单选组件。
 * @summary:
 *  KsRadio 中封装了多种 Radio, 它们可以分别导入。
 * @author: pkeros.
 * @date: 2016/10/14.
 */

const NrRadio = require('./src/NrRadio.vue')
const BtnRadio = require('./src/BtnRadio.vue')
const RadioGroup = require('./src/RadioGroup.vue')

export default NrRadio
export const KsRadio = NrRadio
export const KsBtnRadio = BtnRadio
export const KsRadioGroup = RadioGroup
