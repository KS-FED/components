<template>
  <div class="KSDialog__wrapper">
    <!-- 不想加这个 wrapper, but 不加会变成片断实例 -->
    <div :class="'KSDialog KSDialog__UID--' + _uid" v-if="show" transition="Zoom">
      <!-- 模态颜色 -->
      <style type="text/css">
        .KSDialog__UID--{{ _uid }} .KSDialog__header {
          background: {{ hue.hue }};
        }
      </style>
      <aside class="KSDialog__icon">
        <div class="KSDialog__round">
          X
        </div>
      </aside>
      <article class="KSDialog__content">
        <h3 class="KSDialog__title">
          {{ title }} <slot name="title"></slot>
        </h3>
        <p class="KSDialog__text">
          {{ text }} <slot name="text"></slot>
        </p>
      </article>
      <footer class="KSDialog__footer">
        <aside class="KSDialog__btnWarp">
          <ks-button :ghost="true" type="other" @click.stop="$emit('cancel')"
                     v-if="showCancelBtn" style="margin-right: 10px"
          >{{ cancelBtnText }}</ks-button>
          <ks-button :type="type === 'normal' ? 'primary' : type" @click.stop="$emit('confirm')"
                     v-if="showConfirmBtn"
          >{{ confirmBtnText }}</ks-button>
        </aside>
      </footer>
    </div>
  </div>
</template>

<script type="text/javascript">
  import KsButton from '../../KsButton'
  import KsMask from '../../KsMask'

  // 类型对色调映射
  const colorMapper = {
    primary: { hue: '#2196F3' },
    success: { hue: '#4CAF50' },
    info: { hue: '#00BCD4' },
    warn: { hue: '#FF5722' },
    danger: { hue: '#F44336' }
  }

  export default {
    name: 'KSDialog',

    data () {
      return { }
    },

    props: {
      showCancelBtn: { type: Boolean, default: true },
      showCloseBtn: { type: Boolean, default: true },
      cancelBtnText: { type: String, default: '取消' },
      confirmBtnText: { type: String, default: '确定' },
      title: { type: String, default: '' },
      text: { type: String, default: '' },
      type: { type: String, default: 'primary' },
      mask: { type: Boolean, default: true },
      show: { type: Boolean, default: true, towWay: true }
    },

    computed: {
      /**
       * @description 当前模态的主色调
       * @return {*} color
       */
      hue () { return colorMapper[this.type] },
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
  /*@import "../../../../sass/base/components/dialog-icon";*/
</style>
