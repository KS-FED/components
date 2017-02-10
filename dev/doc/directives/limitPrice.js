/**
 * author zjh
 *
 */
export default {
	twoWay: true,
	bind () {
		this.handler = function () {
			// 将数据写回 vm
			// 如果指令这样绑定 v-example="a.b.c"
			// 它将用给定值设置 `vm.a.b.c`
			let num=this.el.value.replace(/[^\d+(\-\d+\.\)?$]/g,'')
			this.set(num)
		}.bind(this)
		this.el.addEventListener('keyup', this.handler)
    this.el.addEventListener('change', this.handler)
  }
}
