<template>
  <div :class="classes">
    <!-- NRCheckbox 选择色块自定义 -->
    <style type="text/css">
      {{ '.KSNRCheckbox__UID--' + _uid }} .KSNRCheckbox__entity:checked + .KSNRCheckbox__skin:before {
        {{ styleCubeColor }}
      }
    </style>
    <input type="checkbox" class="KSNRCheckbox__entity"
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
      color: { type: String, default: '#04BE02' },
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
  // @description 一个复选框样式
  // @summary 我只是一个单纯的复选框
  // @author pkeros
  // @date 2016/10/11

  //
  // 需要的 DOM 结构
  //
  //<div class="KSNRCheckbox KSNRCheckbox__entity--ZERO">
  //  <input type="checkbox" class="KSNRCheckbox__entity" id="KSNRCheckbox__entity--3">
  //  <label class="KSNRCheckbox__skin" for="KSNRCheckbox__entity--ZERO"></label>
  //  <label class="KSNRCheckbox__text" for="KSNRCheckbox__entity--ZERO"></label>
  //</div>
  //
  //

  $primary-color: #00A5E0;                                        // 主色调
  $skin-size: 18px;                                               // 选择框大小

  .KSNRCheckbox {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding: 2px 3px;
  }

  .KSNRCheckbox__entity {
    width: 0; height: 0; opacity: 0;
  }
  .KSNRCheckbox__text { user-select: none }
  .KSNRCheckbox__skin {
    display: inline-block;
    border: 1px solid #D0D0D5; border-radius: 3px;
    width: $skin-size; height: $skin-size;
    text-align: center; line-height: $skin-size;

    // 选择点的样式
    &:before {
      content: ''; display: inline-block;
      height: $skin-size / 1.8; width: $skin-size / 1.8;
      border-radius: 3px;
      background-color: $primary-color;
      opacity: 0;
      transition: opacity .3s;
    }
  }

  // checked 下的选择框样式
  .KSNRCheckbox__entity:checked + .KSNRCheckbox__skin:before {
    opacity: 1;
  }
</style>
