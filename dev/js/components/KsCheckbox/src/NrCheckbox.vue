<template>
  <div class="KSNRCheckbox" cid="KSNRCheckbox">
    <input type="checkbox" class="_entity" v-model="checked" @change.stop
           :disabled="disable && 'disabled'" :id="`KSNRCheckbox--${_uid}`" />
    <label class="_skin" :for="`KSNRCheckbox--${_uid}`">
      <em class="_cube" :style="{background: color}"></em>
    </label>
    <label class="_text" :for="`KSNRCheckbox--${_uid}`">
      <slot>LABEL</slot>
    </label>
  </div>
</template>

<script type="text/javascript">
  export default{
    name: 'KsNormalCheckbox',

    props: {
      name: {type: String, default: 'KsNormalCheckbox'},
      color: {type: String, default: '#00A5E0'},
      checked: {type: Boolean, twoWay: true},
      disable: {type: Boolean, default: false}
    },

    events: {
      /**
       * @description VMChange 事件响应
       * @summary 负责接受 Group 组件的 change 事件, 改变选中状态
       */
      VMChange (vModel) {
        this.checked = vModel.indexOf(this.name) > -1;
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
</style>
