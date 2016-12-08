<template>
  <div class="KSButton">
    <!-- 普通按钮 -->
    <nr-button v-if="!ghost" :native-type="nativeType"
               :disable="disable" :loading.sync="loading"
               :btn-class-name="btnClassName"
    >
      <slot></slot>
    </nr-button>
    <!-- 幽灵按钮 -->
    <ghost-button v-if="ghost" :native-type="nativeType"
                  :disable="disable"
                  :btn-class-name="btnClassName"
    >
      <slot></slot>
    </ghost-button>
  </div>
</template>

<script lang="babel">
  import NrButton from './NrButton.vue'
  import GhostButton from './GhostButton.vue'

  let sizeMapper = {
    normal: '',
    middle: 'xl',
    large: 'xxl'
  }

  export default {
    name: 'KsButton',

    data () {
      return {}
    },

    props: {
      loading: {type: Boolean, twoWay: true},
      disable: {type: Boolean, default: false},
      size: {type: String, default: 'normal'},
      type: {type: String, default: 'primary'},
      ghost: {type: Boolean, default: false},
      nativeType: {type: String, default: 'button'}
    },

    computed: {
      /**
       * @description 计算按钮 size type 对应选项的 class name.
       */
      btnClassName () {
        let size = sizeMapper[this.size]
        let sizeClass = size ? `-${size}` : ''
        let ghostName = this.ghost ? '-plain' : ''

        return `btn${ghostName}-${this.type}${sizeClass}`
      }
    },

    components: { NrButton, GhostButton }
  }
</script>

<style lang="scss">
  @import "../styles/Button";
</style>
