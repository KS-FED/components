<template>
  <div class="KSDialog__wrapper">
    <!-- 不想加这个 wrapper, but 不加会变成片断实例 -->
    <div :class="'dialog-icon KSDialog KSDialog__UID--' + _uid"
         v-if="show" :style="zIndex">
      <style type="text/css">
        .KSDialog {
          background: #FFF;
        }
      </style>
      <!-- 模态颜色 -->
      <style type="text/css">
        .KSDialog__UID--{{ _uid }} .KSDialog__icon {
          color: {{ hue.hue }};
        }
      </style>
      <aside class="KSDialog__icon">
        <i :class="'icon ' + hue.icon"></i>
      </aside>
      <article class="KSDialog__content">
        <h3 class="KSDialog__title">
          {{ title }} <slot name="title"></slot>
        </h3>
        <p class="content">
          {{ text }} <slot name="text"></slot>
        </p>
      </article>
      <footer class="KSDialog__footer">
        <aside class="KSDialog__btnWarp">
          <ks-button :ghost="true" type="other" @click.stop="$emit('cancel')"
                     v-if="showCancelBtn" style="margin-right: 10px"
          >{{ cancelBtnText }}</ks-button>
          <ks-button :type="type" @click.stop="$emit('confirm')"
          >{{ confirmBtnText }}</ks-button>
        </aside>
      </footer>
    </div>
  </div>
</template>

<script lang="babel">
  import KsButton from '../../KsButton'
  import KsMask from '../../KsMask'

  // 类型对色调映射
  const colorMapper = {
    success: { hue: '#4CAF50', icon: 'icon-chenggongtubiao' },
    info: { hue: '#00BCD4', icon: 'icon-xinxitubiao' },
    warn: { hue: '#FF5722', icon: 'icon-cuowutubiao' },
    danger: { hue: '#F44336', icon: 'icon-cuowutubiao' }
  }
  // z-index
  let zIndex = 19941026

  export default {
    name: 'KSDialog',

    data () {
      return { }
    },

    props: {
      showCancelBtn: { type: Boolean, default: true },
      cancelBtnText: { type: String, default: '取消' },
      confirmBtnText: { type: String, default: '确定' },
      title: { type: String, default: '' },
      text: { type: String, default: '' },
      type: { type: String, default: 'success' },
      mask: { type: Boolean, default: true },
      show: { type: Boolean, default: true, towWay: true }
    },

    computed: {
      /**
       * @description 当前模态的主色调
       * @return {*} color
       */
      hue () { return colorMapper[this.type] },
      /**
       * @description 用于控制组件的层叠顺序
       * @return {string} z-index
       */
      zIndex () { return `z-index:${zIndex++}` }
    },

    watch: {
      show (show) {
        let maskConfig = this.maskConfig

        if (!show && maskConfig) {
          KsMask.close()
        }
      }
    },

    components: { KsButton, KsMask }
  }
</script>

<style lang="scss">
  @import "../styles/dialog";
</style>
