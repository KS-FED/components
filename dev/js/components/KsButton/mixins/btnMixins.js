/**
 * @description button 的复合
 * @author: pkeros.
 * @date: 2016/10/18.
 */

export default {
  props: {
    btnClassName: {type: String, required: true},
    disable: {type: Boolean, default: false},
    loading: {type: Boolean, twoWay: true},
    nativeType: {type: String, default: 'button'}
  }
}
