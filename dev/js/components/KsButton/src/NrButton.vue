<template>
  <div :class="'KSNRButton KSNRButton__UID--' + _uid">
    <!-- 按钮颜色 -->
    <style type="text/css">
      /* 默认状态 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity {
        background: {{ colorNormal }};
      }
      /* hover 状态 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity[disabled]:hover {
        background: {{ colorNormal }};
      }
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity:hover {
        background: {{ colorHover }};
      }
      /* active 状态 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity:active {
        background: {{ colorActive }};
      }
      /* loading 大小 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__loading {
        width: {{ loadingSize }}px; height: {{ loadingSize }}px;
      }
    </style>
    <button class="KSNRButton__entity" :type="nativeType"
            :disabled="(disable || loading) && 'disabled'" :style="btnStyle"
    >
      <img :data-size="height / 3 + 'px'" class="KSNRButton__loading"
           align="absmiddle" v-if="loading"
           src="../assets/loading.svg" alt="loading">
      <span class="KSNRButton__text">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script type="text/javascript">
  import BtnMixins from '../mixins/btnMixins'

  export default {
    name: 'KsNrButton',

    mixins: [BtnMixins],

    computed: {
      /**
       * @description loading size.
       * @summary loading 圈圈的大小
       */
      loadingSize () { return Math.round(this.height / 2.1) }
    }
  }
</script>

<style lang="scss">
  @import "../styles/NrButton";
</style>
