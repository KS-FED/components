/**
 * @description 卡说前端公用库
 * @summary
 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
 * @author pkeros.
 * @date 2016/11/11.
 */

import KsSwitch from './KsSwitch'
import { KsCheckbox, KsCheckboxGroup } from './KsCheckbox'
import { KsRadio, KsRadioGroup, KsBtnRadio } from './KsRadio'
import KsButton from './KsButton'
import KsDialog from './KsDialog'
import { KsModal, KsMaskEntity } from './KsMask'
import KsToolTip from './KsToolTip'
import KsPage from './page'
import KsPageGroup from './pagegroup'

const VERSION = '0.0.1'
const KsComponents = {
  VERSION,
  KsPage,
  KsPageGroup,
  KsSwitch,
  KsCheckbox,
  KsCheckboxGroup,
  KsRadio,
  KsBtnRadio,
  KsRadioGroup,
  KsButton,
  KsModal,
  KsMaskEntity,
  KsDialog,
  KsToolTip
}
const install = function(Vue) {
  if (install.installed) { return }

  // register components.
  Object.keys(KsComponents).forEach(k => {
    Vue.component(k, KsComponents[k])
  })

  // register prototype methods.
  Object.defineProperties(Vue.prototype, {
    $KsDialog: { get () { return KsDialog } }
  })
}

// automation register components.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export { KsComponents }
