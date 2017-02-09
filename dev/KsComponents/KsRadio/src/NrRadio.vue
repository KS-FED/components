<template>
  <div :class="classes">
    <!-- NrRadio 选择色块自定义 -->
    <style type="text/css">
      {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__skin:before {
        {{ styleCubeColor }}
      }
      {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__entity:checked + .KSNRRadio__skin:before {
        {{ styleCubeColor }}
      }
    </style>
    <input type="radio" class="KSNRRadio__entity" :name="!!name && name"
           :id="'KSNRCheckbox__entity--' + _uid"
           v-model="checked" :value="value" @change.stop
           :disabled="disable && 'disabled'"
           :checked="defChecked && 'checked'"
           :id="`KSNRRadio__entity--${_uid}`" />
    <label class="KSNRRadio__skin" :for="'KSNRCheckbox__entity--' + _uid"></label>
    <label class="KSNRRadio__text" :for="'KSNRCheckbox__entity--' + _uid">
      <slot>LABEL</slot>
    </label>
  </div>
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
      classes () { return `KSNRRadio KSNRRadio__UID--${this._uid}` }
    },
  }
</script>

<style lang="scss">
  @import "../styles/NrRadio";
</style>
