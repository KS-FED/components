<template>
  <div class="KSDialog__wrapper">
    <!-- 不想加这个 wrapper, but 不加会变成片断实例 -->
    <div :class="'dialog-icon KSDialog KSDialog__UID--' + _uid"
         v-if="show" transition="Zoom" :style="zIndex">
      <!--
        TODO: 需要设置模态框的背景颜色, 不然遮罩时候背景是透明的, 还需要设置定位, 使 z-index 生效,
        TODO: 组件要是圆角这点也需要处理下
        TODO: 居中效果也是需要添加
      -->
      <style type="text/css">
        .KSDialog {
          position: relative; background: #FFF;
        }
      </style>
      <!-- 模态颜色 -->
      <style type="text/css">
        .KSDialog__UID--{{ _uid }} .icon-bor {
          color: {{ hue.hue }};
        }
      </style>
      <!-- TODO: 此处 class 需要注意修改 -->
      <aside class="KSDialog__icon icon-bor">
        <i :class="'icon ' + hue.icon"></i>
      </aside>
      <article class="KSDialog__content">
        <!--
          TODO: 此处 class 需要注意修改
          TODO: 这边一个小小的 title 也会定义这么长的 class 是想强调它的结构性
         -->
        <h3 class="KSDialog__title title">
          {{ title }} <slot name="title"></slot>
        </h3>
        <!-- TODO: 此处 class 需要注意修改 -->
        <p class="content">
          {{ text }} <slot name="text"></slot>
        </p>
      </article>
      <!-- TODO: 此处 class 需要注意修改 -->
      <footer class="KSDialog__footer operation">
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

<script type="text/javascript">
  import KsButton from '../../KsButton'
  import KsMask from '../../KsMask'

  // 类型对色调映射
  const colorMapper = {
    success: {hue: '#4CAF50', icon: 'icon-chenggongtubiao'},
    info: {hue: '#00BCD4', icon: 'icon-xinxitubiao'},
    warn: {hue: '#FF5722', icon: 'icon-cuowutubiao'},
    danger: {hue: '#F44336', icon: 'icon-cuowutubiao'}
  }
  // z-index
  let zIndex = 19941026

  export default {
    name: 'KSDialog',

    data () {
      return { }
    },

    props: {
      showCancelBtn: {type: Boolean, default: true},
      cancelBtnText: {type: String, default: '取消'},
      confirmBtnText: {type: String, default: '确定'},
      title: {type: String, default: ''},
      text: {type: String, default: ''},
      type: {type: String, default: 'success'},
      mask: {type: Boolean, default: true},
      show: {type: Boolean, default: true, towWay: true}
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
</style>
