<template>
  <div :class="classesSize">
    <!-- IosSwitch 背景自定义 -->
    <style type="text/css">
      {{ '.KSIosSwitch__UID--' + _uid }} .KSIosSwitch__entity:checked + .KSIosSwitch__slide {
        {{ styleBgColor }}
      }
    </style>
    <input class="KSIosSwitch__entity" type="checkbox"
           v-model="checked" @change.stop
           :checked="defChecked && 'checked'"
           :disabled="disable && 'disabled'"/>
    <div class="KSIosSwitch__slide">
      <small class="KSIosSwitch__btn"></small>
      <slot name="checkedChildren"></slot>
      <slot name="unCheckedChildren"></slot>
    </div>
  </div>
</template>

<script lang="babel">
  export default{
    name: 'KsIosSwitch',

    props: {
      color: { type: String, default: '#04BE02' },
      size: { type: String, default: 'normal' },
      checked: { type: Boolean, twoWay: true },
      disable: { type: Boolean, default: false }
    },

    computed: {
      /**
       * @description 开关根 div 的 class
       * @summary 用于控制组件大小, 标识组件
       * @return {string}
       */
      classesSize () { return `KSIosSwitch KSIosSwitch--${this.size} KSIosSwitch__UID--${this._uid}` },
      /**
       * @description 开关滑动槽的 style
       * @summary 用于控制组件的颜色
       * @return {string}
       */
      styleBgColor () {
        return `box-shadow: ${this.color} 0 0 0 16.667px inset!important;
        background: ${this.color}!important;border: 1px solid ${this.color}!important;`
      }
    },

    watch: {
      /**
       * @description 监测 checked 属性
       * @param checked {Boolean} checked 值
       * @summary 用于监测改变并发送 OnChange 事件
       */
      checked (checked) {
        this.$emit('change', checked)
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/IosSwitch";
</style>
