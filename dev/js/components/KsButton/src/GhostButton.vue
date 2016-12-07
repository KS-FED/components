<template>
  <div class="KSGhostButton" cid="KSGhostButton">
    <button class="_entity" :type="nativeType" :class="btnClassName"
            :disabled="(disable || loading) && 'disabled'"
    >
      <slot></slot>
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
   @import '../../../../sass/components/button';
</style>

