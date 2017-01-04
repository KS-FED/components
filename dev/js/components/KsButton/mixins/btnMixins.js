/**
 * @description button 的复合
 * @author: pkeros.
 * @date: 2016/10/18.
 */

export default {
  computed: {
    /**
     * @description button 的样式
     * @summary 在此处主要负责控制按钮大小
     */
    btnStyle () {
      return `min-width: ${this.width}px; height: ${this.height}px; 
      font-size: ${this.fontSize}px;`
    },
    /**
     * @description loading size.
     * @summary loading 圈圈的大小
     */
    loadingSize () { return Math.round(this.height / 2.1) }
  },

  props: {
    width: { type: Number, require: true },
    height: { type: Number, require: true },
    disable: { type: Boolean, default: false },
    loading: { type: Boolean, twoWay: true },
    fontSize: { type: Number, require: true },
    colorNormal: { type: String, require: true },
    colorHover: { type: String, require: true },
    colorActive: { type: String, require: true },
    nativeType: { type: String, default: 'button' }
  }
}
