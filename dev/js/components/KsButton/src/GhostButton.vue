<template>
  <div class="KSGhostButton" cid="KSGhostButton">
    <button class="_entity" :type="nativeType" :class="btnClassName"
            :disabled="(disable || loading) && 'disabled'"
    >
      <div v-if="loading" class="_loading icon-loading">
        <div class="line-fade">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
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
</style>
