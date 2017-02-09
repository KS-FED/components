<template>
  <div class="ks-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'KsRadioGroup',

    props: {
      vModel: { towWay: true }
    },

    events: {
      /**
       * @description change 事件处理函数
       * @param value {Boolean} 事件传递的 value
       * @summary 负责处理子组件产生的 change 事件
       */
      CChange (value) {
        this.vModel = value
        this.$emit('change', value)
      }
    },

    watch: {
      /**
       * @description vModel 监听器
       * @param vModel {Number} vModel 属性值
       */
      vModel (vModel) {
        this.$broadcast('VMChange', vModel)
      }
    },
  }
</script>

<style lang="scss">
  @import "../styles/RadioGroup";
</style>
