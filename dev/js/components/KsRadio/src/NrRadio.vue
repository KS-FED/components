<template>
  <div :class="classes">
    <!-- NRCheckbox 选择色块自定义 -->
    <style type="text/css">
      {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__skin:before {
        {{ styleCubeColor }}
      }
      {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__entity:checked + .KSNRRadio__skin:before {
        {{ styleCubeColor }}
      }
    </style>
    <input type="radio" class="KSNRRadio__entity" :name="!!name && name"
           v-model="checked" :value="value" @change.stop
           :disabled="disable && 'disabled'"
           :checked="defChecked && 'checked'"
           :id="`KSNRRadio__entity--${_uid}`" />
    <label class="KSNRRadio__skin" :for="`KSNRRadio__entity--${_uid}`"></label>
    <label class="KSNRRadio__text" :for="`KSNRRadio__entity--${_uid}`">
      <slot>LABEL</slot>
    </label>
  </div>
</template>

<script>
  export default{
    name: 'KsNormalRadio',

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
       * @description 复选框根 div 的 class
       * @summary 用于标识复选框
       * @return {string}
       */
      classes () { return `KSNRRadio KSNRRadio__UID--${this._uid}` },
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
       * @param checked {Boolean} checked 的值
       * @summary 用于监测改变并发送 change 事件
       */
      checked (checked) {
        this.$dispatch('CChange', checked)
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/NrRadio";
</style>
