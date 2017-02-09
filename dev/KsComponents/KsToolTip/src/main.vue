<template>
  <div v-el:reference cid="KsToolTip" style="display: inline-block"
        @mouseenter="handleShowPopper"
        @mouseleave="handleClosePopper"
  >
    <div style="display: inline-block">
        <slot></slot>
    </div>

    <div transition="KsTooltipTransition" class="KsToolTip"
         v-el:popper v-show="!disabled && showPopper">
      <div v-text="content"></div>
    </div>
  </div>
</template>

<script lang="babel">
  import Vue from 'vue'
  import { VuePopper, DomUtil, StringUtil } from '../../util'

  export default {
    name: 'KsToolTip',

    mixins: [VuePopper],

    data () {
      return {}
    },

    props: {
      arrowClassName: { type: String, default: 'KsToolTip-arrow' },
      openDelay: { type: Number, default: 0 },
      disabled: Boolean,
      content: String,
      visibleArrow: { default: true },
      transition: { type: String, default: 'fade-in-linear' },
      options: {
        default() {
          return {
            boundariesPadding: 10,
            gpuAcceleration: false
          }
        }
      }
    },

    methods: {
      handleShowPopper() {
        this.timeout = setTimeout(() => {
          this.showPopper = true;
        }, this.openDelay);
      },

      handleClosePopper() {
        clearTimeout(this.timeout);
        this.showPopper = false;
      }
    },

    created () {
      // 初始化
      Vue.transition('KsTooltipTransition', {
        afterLeave: this.doDestroy
      })
    }
  }
</script>
