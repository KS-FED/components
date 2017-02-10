<template>
  <div class="no-search-result" v-if="show">
    <div class="no-search-result-shadow">
      <img class="no-search-result__logo" src="../assets/icon/sorry.png" alt="sorry">
      <span class="no-search-result__content f16"><slot></slot></span>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    props: {
      show: {default: false}
    }
  }
</script>

<style lang="scss">
  @import "../../styles/mixins/index";

  $height: 70px;
  $width: 280px;

  // 无查询结果提示
  @include b(no-search-result) {
    position: absolute;top: 50%;left: 50%;
    height: $height;width: $width;
    line-height: $height;

    // logo 部分
    @include e(logo) {
      vertical-align: middle;
    }
    // content 部分
    @include e(content) {
      color: $global-text-normal;
    }
  }
  .no-search-result-shadow {
    position: absolute;top: -50%;left: -50%;
    height: 100%;width: 100%;
  }
</style>
