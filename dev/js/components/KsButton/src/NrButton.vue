<template>
  <div class="KSNRButton" cid="KSNRButton">
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
    name: 'KsNrButton',

    mixins: [BtnMixins]
  }
</script>

<style lang="scss">
  @import '../../../../sass/components/icon-loading';
</style>
