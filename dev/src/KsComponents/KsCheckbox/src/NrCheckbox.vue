<template>
  <div :class="classes">
    <!-- NRCheckbox 选择色块自定义 -->
    <style type="text/css">
      {{ '.KSNRCheckbox__UID--' + _uid }} .KSNRCheckbox__entity:checked + .KSNRCheckbox__skin:before {
        {{ styleCubeColor }}
      }
    </style>
    <input type="checkbox" class="KSNRCheckbox__entity"
           v-model="checked" @change.stop
           :disabled="disable && 'disabled'"
           :checked="defChecked && 'checked'"
           :id="`KSNRCheckbox__entity--${_uid}`" />
    <label class="KSNRCheckbox__skin" :for="`KSNRCheckbox__entity--${_uid}`"></label>
    <!-- :for="`KSNRCheckbox__entity--${_uid}`" -->
    <label class="KSNRCheckbox__text" @click="$emit('label-click')">
      <slot>LABEL</slot>
    </label>
  </div>
</template>

<script lang="babel">
  export default{
    name: 'KsNormalCheckbox',

    props: {
      defChecked: { type: Boolean, default: false },
      name: { type: String, default: 'ZJCheckbox' },
      color: { type: String, default: '#00A5E0' },
      checked: { type: Boolean, twoWay: true },
      disable: { type: Boolean, default: false }
    },

    computed: {
      /**
       * @description 复选框根 div 的 class
       * @summary 用于标识复选框
       * @return {string}
       */
      classes () { return `KSNRCheckbox KSNRCheckbox__UID--${this._uid}` },
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
        if (vModel.indexOf(this.name) >= 0) {
          this.checked = true
        } else {
          this.checked = false
        }
      }
    },

    watch: {
      /**
       * @description 监测 checked 属性
       * @param checked {Boolean} checked 的值
       * @summary 用于监测改变并发送 OnChange 事件
       */
      checked (checked) {
        this.$emit('change', checked, this.name)
        this.$dispatch('CChange', checked, this.name)
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/NrCheckbox.scss";
</style>
