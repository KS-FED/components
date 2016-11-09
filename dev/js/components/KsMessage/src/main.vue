<template>
  <div class="KSDialog__wrapper">
    <div :class="'dialog-icon KSDialog KSDialog__UID--' + _uid"
         v-if="show" transition="Zoom" :style="zIndex">

    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: 'KSMessage',

    data () {
      return { }
    },

    props: {
      showCancelBtn: { type: Boolean, default: true },
      cancelBtnText: { type: String, default: '取消' },
      confirmBtnText: { type: String, default: '确定' },
      title: { type: String, default: '' },
      text: { type: String, default: '' },
      type: { type: String, default: 'success' },
      mask: { type: Boolean, default: true },
      show: { type: Boolean, default: true, towWay: true }
    }

  }

</script>

<style lang="scss">
</style>
