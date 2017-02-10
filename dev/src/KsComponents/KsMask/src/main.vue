<template>
  <div class="KSMask__wrapper">
    <div class="KSMask__container" :style="maskStyle"
         v-if="show" @click.stop="$emit('spaceClick')"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'KsMask',

    data () {
      return {
        zIndex: 19940926
      }
    },

    props: {
      fillMode: { type: String, default: 'full' },
      show: { type: Boolean, default: true, twoWay: true },
      backgroundColor: { type: String, default: 'rgba(0, 0, 0, .3)' }
    },

    computed: {
      /**
       * @description mask sytles.
       */
      maskStyle () {
        return `background: ${ this.backgroundColor };
        z-index: ${ ++this.zIndex };
        position: ${ this.fillModel === 'full' ? 'fixed' : 'absolute' }`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/sassMagic/_sassMagic";

  @include b(KSMask) {
    @include e(container) {
      top: 0; right: 0; bottom: 0; left: 0;
    }
  }
</style>
