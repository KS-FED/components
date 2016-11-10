<template>
  <div class="KsCitySelect" cid="KsCitySelect">
    <div class="_input">
      <div class="_icon"><i class="icon">&#xe668;</i></div>
      <input type="text" class="col">
    </div>
    <div class="_bd">
      <ul class="_tab">
        <li>省</li>
        <li class="line"><a>|</a></li>
        <li>市</li>
        <li class="line"><a>|</a></li>
        <li class="active">区/县</li>
      </ul>
      <div class="_content">
        <table class="_list">
          <tr>
            <td>山西</td>
            <td class="active">辽宁</td>
            <td>新疆</td>
            <td>山东</td>
          </tr>
          <tr>
            <td>山西</td>
            <td>辽宁</td>
            <td>新疆</td>
            <td>山东</td>
          </tr>
          <tr>
            <td>山西</td>
            <td>辽宁</td>
            <td>新疆</td>
            <td>山东</td>
          </tr>
          <tr>
            <td>山西</td>
            <td>辽宁</td>
            <td>新疆</td>
            <td>山东</td>
          </tr>
          <tr>
            <td>山西</td>
            <td>辽宁</td>
            <td>新疆</td>
            <td>山东</td>
          </tr>
          <tr>
            <td>山西</td>
            <td>辽宁</td>
            <td>新疆</td>
            <td>山东</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import KsButton from '../../KsButton'
  import KsMask from '../../KsMask'

  // 类型对色调映射
  const colorMapper = {
    primary: { hue: '#2196F3' },
    success: { hue: '#4CAF50' },
    info: { hue: '#00BCD4' },
    warn: { hue: '#FF5722' },
    danger: { hue: '#F44336' }
  }

  export default {
    name: 'KSDialog',

    data () {
      return { }
    },

    props: {
      showCancelBtn: { type: Boolean, default: true },
      showCloseBtn: { type: Boolean, default: true },
      cancelBtnText: { type: String, default: '取消' },
      confirmBtnText: { type: String, default: '确定' },
      title: { type: String, default: '' },
      text: { type: String, default: '' },
      type: { type: String, default: 'primary' },
      mask: { type: Boolean, default: true },
      show: { type: Boolean, default: true, towWay: true }
    },

    computed: {
      /**
       * @description 当前模态的主色调
       * @return {*} color
       */
      hue () { return colorMapper[this.type] },
    },

    watch: {
      show (show) {
        let maskConfig = this.maskConfig

        if (!show && maskConfig) {
          KsMask.close()
        }
      }
    },

    components: { KsButton, KsMask }
  }
</script>

<style lang="scss">
</style>

