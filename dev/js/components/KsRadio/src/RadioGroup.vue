<template>
  <div class="ks-radio-group">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'KsRadioGroup',

    props: {
      vModel: { type: Array, towWay: true }
    },

    events: {
      /**
       * @description change 事件处理函数
       * @param value {Boolean} 事件传递的 value
       * @summary 负责处理子组件产生的 change 事件
       */
      CChange (value) {
        this.$emit('change', value)
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/RadioGroup";
</style>
