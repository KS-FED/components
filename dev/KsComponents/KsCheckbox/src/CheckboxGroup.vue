<template>
  <div class="ks-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'KsCheckboxGroup',

    props: {
      vModel: { type: Array, towWay: true }
    },

    events: {
      /**
       * @description change 事件处理函数
       * @param value {Boolean} 事件传递的 value
       * @param name {String} 组件的名称
       * @summary 负责处理子组件产生的 change 事件
       */
      CChange (value, name) {
        let vModel = this.vModel
        let pos = vModel.indexOf(name)

        if (pos >= 0 && !value) {
          vModel.splice(pos, 1)
        } else if (pos < 0 && value) {
          vModel.push(name)
        }
      }
    },

    watch: {
      /**
       * @description vModel 监听器
       * @param vModel {Array} vModel 属性值
       */
      vModel (vModel) {
        this.$emit('change', vModel)
        this.$broadcast('VMChange', vModel)
      }
    },

    created () {
      // 通知子组件初始化状态
      setTimeout(() => { this.$broadcast('VMChange', this.vModel) }, 0)
    }
  };
</script>
