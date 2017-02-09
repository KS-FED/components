<template>
  <div class="KSButton">
    <!-- 普通按钮 -->
    <nr-button v-if="!ghost" :native-type="nativeType" :disable="disable"
               :loading.sync="loading"
               :height="sizeMapper[size] && sizeMapper[size].height"
               :width="sizeMapper[size] && sizeMapper[size].width"
               :font-size="sizeMapper[size] && sizeMapper[size].fSize"
               :color-normal="colorMapper[type] && colorMapper[type].normal"
               :color-hover="colorMapper[type] && colorMapper[type].hover"
               :color-active="colorMapper[type] && colorMapper[type].active"
    >
      <slot></slot>
    </nr-button>
    <!-- 幽灵按钮 -->
    <ghost-button v-if="ghost" :native-type="nativeType" :disable="disable"
                  :loading.sync="loading"
                  :height="sizeMapper[size] && sizeMapper[size].height"
                  :width="sizeMapper[size] && sizeMapper[size].width"
                  :font-size="sizeMapper[size] && sizeMapper[size].fSize"
                  :color-normal="colorMapper[type] && colorMapper[type].normal"
                  :color-hover="colorMapper[type] && colorMapper[type].hover"
                  :color-active="colorMapper[type] && colorMapper[type].active"
    >
      <slot></slot>
    </ghost-button>
  </div>
</template>

<script lang="babel">
  import NrButton from './NrButton.vue'
  import GhostButton from './GhostButton.vue'

  export default {
    name: 'KsButton',

    data () {
      return {
        sizeMapper: {
          normal: { width: 90, height: 36, fSize: 13 },
          middle: { width: 120, height: 42, fSize: 16 },
          large: { width: 160, height: 54, fSize: 18 }
        },
        colorMapper: {
          primary: { normal: '#2196F3', hover: '#42A5F5', active: '#1E88E5' },
          success: { normal: '#4CAF50', hover: '#66BB6A', active: '#43A047' },
          info: { normal: '#00BCD4', hover: '#26C6DA', active: '#00ACC1' },
          warn: { normal: '#FF5722', hover: '#FF7043', active: '#F4511E' },
          danger: { normal: '#F44336', hover: '#EF5350', active: '#E53935' },
          other: { normal: '#999999', hover: '#C8C8C8', active: '#777777' }
        }
      }
    },

    props: {
      loading: { type: Boolean, twoWay: true },
      disable: { type: Boolean, default: false },
      size: { type: String, default: 'normal' },
      type: { type: String, default: 'primary' },
      ghost: { type: Boolean, default: false },
      nativeType: { type: String, default: 'button' }
    },

    components: { NrButton, GhostButton }
  }
</script>

<style lang="scss">
  @import "../styles/Button";
</style>
