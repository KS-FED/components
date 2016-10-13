/**
 * @description: 封装了一些列的的复选框组件。
 * @summary:
 *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
 * @author: pkeros.
 * @date: 2016/10/11.
 */

const NrCheckbox = require('./src/NrCheckbox.vue')
const CheckboxGroup = require('./src/CheckboxGroup.vue')

export default NrCheckbox
export const KsCheckbox = NrCheckbox
export const KsCheckboxGroup = CheckboxGroup
