/**
 * @description radio 的逻辑
 * @author: pkeros.
 * @date: 2016/10/14.
 */
export default {
  props: {
    name: { type: String, default: '' },
    color: { type: String, default: '#00A5E0' },
    value: { default: '' },
    checked: { twoWay: true },
    defChecked: { type: Boolean, default: false },
    disable: { type: Boolean, default: false }
  },

  computed: {
    /**
     * @description 选择框中方块 style
     * @summary 用于控制选择框中方块的颜色
     * @return {string}
     */
    styleCubeColor () {
      return `background: ${this.color}!important;`
    }
  },

  events: {
    /**
     * @description VMChange 事件响应
     * @summary 负责接受 Group 组件的 change 事件, 改变选中状态
     */
    VMChange (vModel) {
      if (this.value === vModel) {
        this.checked = true
      }
    }
  },

  watch: {
    /**
     * @description 监测 checked 属性
     * @summary 用于监测改变并发送 change 事件
     */
    checked () {
      this.$dispatch('CChange', this.value)
    }
  }
}
