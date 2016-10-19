<template>
  <div :class="'KSGhostButton KSGhostButton__UID--' + _uid">
    <!-- 按钮颜色 -->
    <style type="text/css">
      /* 默认状态 */
      .KSGhostButton__UID--{{ _uid }} .KSGhostButton__entity {
        color: {{ colorNormal }};
        border: 1px solid {{ colorNormal }};
      }
      /* hover 状态 */
      .KSGhostButton__UID--{{ _uid }} .KSGhostButton__entity:hover {
        color: {{ colorNormal }};
        border: 1px solid {{ colorHover }};
      }
      /* active 状态 */
      .KSGhostButton__UID--{{ _uid }} .KSGhostButton__entity:active {
        color: {{ colorNormal }};
        border: 1px solid {{ colorActive }};
      }
    </style>
    <button class="KSGhostButton__entity" :type="nativeType"
            :disabled="disable && 'disabled'" :style="btnStyle"
    >
      <span class="KSGhostButton__text">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script type="text/javascript">
  import BtnMixins from '../mixins/btnMixins'

  export default {
    name: 'KsGhostButton',

    mixins: [BtnMixins]
  }
</script>

<style lang="scss">
  @import "../styles/GhostButton";
</style>
