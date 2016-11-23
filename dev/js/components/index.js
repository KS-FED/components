/**
 * @description 卡说前端公用库
 * @summary
 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
 * @author pkeros.
 * @date 2016/11/11.
 */

import KsSwitch from './KSSwitch'
import { KsCheckbox, KsCheckboxGroup } from './KSCheckbox'
import { KsRadio, KsBtnRadio, KsRadioGroup } from './KsRadio'
import { KsButton } from './KsButton'
import { KsModal, KsModalEntity } from './KsModal'
import { KsDialog, KsDialogEntity } from './KsDialog'
import { KsDater,KsDatePicker,KsDaterMulti } from './dater/'
import { KsCitySelect } from './KsCitySelect'
import { KsToolTip } from './KsToolTip'
import { page , pagegroup } from './pager/'

import KsDirective from './KsDirective'

const VERSION = '0.0.1'
const KsComponents = {
  VERSION,
  page,
  pagegroup,
  KsDater,
  KsDatePicker,
  KsDaterMulti,
  KsSwitch,
  KsCheckbox,
  KsCheckboxGroup,
  KsRadio,
  KsBtnRadio,
  KsRadioGroup,
  KsButton,
  KsModal,
  KsModalEntity,
  KsDialog,
  KsDialogEntity,
  KsCitySelect,
  KsToolTip
}
const install = function(Vue) {
  if (install.installed) { return }

  // register components.
  Object.keys(KsComponents).forEach(k => {
    Vue.component(k, KsComponents[k])
  })

  // register directive.
  Object.values(KsDirective).forEach(v => Vue.use(v))
}

// automation register components.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export { KsComponents }
