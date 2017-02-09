<template>
  <div class="app-container">
    <k-header></k-header>
    <div class="content-container">
      <k-menu></k-menu>
      <div class="work-container" v-el:main-container>
        <k-crumbs></k-crumbs>
        <loading-mask></loading-mask>
        <div class="router-container">
          <div class="router-wrap">
            <router-view class="p20"></router-view>
          </div>
        </div>
        <k-footer></k-footer>
      </div>
    </div>
  </div>
</template>

<script lang="babel">
  import KHeader from './core/KHeader.vue'
  import KMenu from './core/KMenu.vue'
  import KFooter from './core/KFooter.vue'
  import KCrumbs from './core/KCrumbs.vue'
  import LoadingMask from '../components/LoadingMask.vue'

  export default{
    data () {
      return { }
    },

    events: {

      /**
       * @description 错误处理处理
       * @param message {String} 错误信息
       */
      errHandle (message) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        dialog.show(message, '信息', 'danger')(() => dialog.close())
      },

      /**
       * @description 主容器滚动条是否显示
       * @param sw
       */
      scrollSwitch (sw) {
        let container = this.$els.mainContainer

        if (sw) {
          container.style.overflow = 'hidden'
          container.scrollTop = 0
        } else {
          container.style.overflow = ''
        }
      }
    },

    components: { KHeader, KMenu, KFooter, KCrumbs, LoadingMask }
  }
</script>
