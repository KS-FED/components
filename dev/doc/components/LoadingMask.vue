<template>
  <div class="kloading-mask" v-show="loading">
    <div class="kloading-container">
      <i class="spiner iconfont icon-loading-copy abs" style="font-size: 24px; color: #444"></i>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    vuex: {
      getters: {
        loading ({ ajax }) { return !!ajax.waitRequest }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/mixins/index";

  @keyframes rotate {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  .kloading-mask {
    position: absolute;top: 0;left: 0;right: 0;bottom: 0;
    z-index: 99999999; text-align: center;
    background: rgba($global-background-light, .3);

    .spiner {
      animation: rotate linear 1.5s infinite;
      margin-left: -24px;
    }
  }
  .kloading-container {
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    height: 100%; display: inline-block;
    text-align: center;
  }
</style>
