<template>
  <div :class="classes">
    <!-- BtnRadio 选择色块自定义 -->
    <style type="text/css">
      {{ '.KSBtnRadio__UID--' + _uid }} .KSBtnRadio__skin:before {
        {{ styleCubeColor }}
      }
      {{ '.KSBtnRadio__UID--' + _uid }} .KSBtnRadio__entity:checked + .KSBtnRadio__skin:before {
        {{ styleCubeColor }}
      }
    </style>
    <input type="radio" class="KSBtnRadio__entity" :name="!!name && name"
           :id="'KSNRCheckbox__entity--' + _uid"
           v-model="checked" :value="value" @change.stop
           :disabled="disable && 'disabled'"
           :checked="defChecked && 'checked'"
           :id="`KSBtnRadio__entity--${_uid}`" />
    <label class="KSBtnRadio__text" :for="'KSNRCheckbox__entity--' + _uid">
      <slot>LABEL</slot>
    </label>
  </div><!-- -->
</template>

<script lang="babel">
  import radioLogic from '../mixins/radioLogic'

  export default{
    name: 'KsNormalRadio',

    mixins: [radioLogic],

    computed: {
      /**
       * @description 复选框根 div 的 class
       * @summary 用于标识复选框
       * @return {string}
       */
      classes () { return `KSBtnRadio KSBtnRadio__UID--${this._uid}` },
    }
  }
</script>

<style lang="scss">
  @import "../styles/BtnRadio";
</style>
