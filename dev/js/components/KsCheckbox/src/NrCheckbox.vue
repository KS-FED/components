<template>
  <div :class="classes">
    <!-- NRCheckbox 选择色块自定义 -->
    <style type="text/css">
      {{ '.KSNRCheckbox__UID--' + _uid }} .KSNRCheckbox__skin:before {
        {{ styleCubeColor }}
      }
      {{ '.KSNRCheckbox__UID--' + _uid }} .KSNRCheckbox__entity:checked + .KSNRCheckbox__skin:before {
        {{ styleCubeColor }}
      }
    </style>
    <input type="checkbox" class="KSNRCheckbox__entity"
           v-model="checked"
           :disabled="disable && 'disabled'"
           :checked="defChecked && 'checked'"
           :id="`KSNRCheckbox__entity--${_uid}`" />
    <label class="KSNRCheckbox__skin" :for="`KSNRCheckbox__entity--${_uid}`"></label>
    <label class="KSNRCheckbox__text" :for="`KSNRCheckbox__entity--${_uid}`">
      <slot name="label">LABEL</slot>
    </label>
  </div>
</template>

<script>
  export default{
    name: 'ks-normalCheckbox',
    props: {
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
    watch: {
      /**
       * @description 监测 checked 属性
       * @summary 用于监测改变并发送 OnChange 事件
       */
      checked () {
        // 如果是默认值则不会触发 onChange 事件
        this.$emit('change', this.checked)
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/NrCheckbox.scss";
</style>
