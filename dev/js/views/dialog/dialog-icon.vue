<template>
	<div>

    <div class="playground">
      <!--<ks-dialog-entity type="info" @cancel="cancel" @confirm="ok">-->
        <!--<span slot="title">测试1 -&#45;&#45; info info</span>-->
        <!--<p slot="text" style="margin: 0">-->
          <!--infoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfo-->
        <!--</p>-->
      <!--</ks-dialog-entity>-->

      <ks-button @click="callDialog">呼叫对话框</ks-button>
    </div>

		<!--&lt;!&ndash; 红色icon弹出框 &ndash;&gt;-->
		<!--<div class="KsDialogIcon-danger" cid="KsDialogIcon">-->
			<!--<div class="_icon-bor"><i class="icon">&#xe60d;</i></div>-->
			<!--<div class="_title">-->
				<!--<h2>标题</h2>-->
			<!--</div>-->
			<!--<div class="_content">-->
				<!--警告信息！警告信息！警告信息！-->
			<!--</div>-->
			<!--<div class="_operation">-->
				<!--<button class="btn-plain-dark">取消</button>-->
				<!--<button class="btn-danger">确定</button>-->
			<!--</div>-->
		<!--</div>-->
		<!--&lt;!&ndash; 青色icon弹出框 &ndash;&gt;-->
		<!--<div class="KsDialogIcon-info" cid="KsDialogIcon">-->
			<!--<div class="_icon-bor"><i class="icon">&#xe61b;</i></div>-->
			<!--<div class="_title">-->
				<!--<h2>标题</h2>-->
			<!--</div>-->
			<!--<div class="_content">-->
				<!--警告信息！警告信息！警告信息！-->
			<!--</div>-->
			<!--<div class="_operation">-->
				<!--<button class="btn-plain-dark">取消</button>-->
				<!--<button class="btn-info">确定</button>-->
			<!--</div>-->
		<!--</div>-->
		<!--<div class="KsDialogIcon-success" cid="KsDialogIcon">-->
			<!--<div class="_icon-bor"><i class="icon">&#xe60b;</i></div>-->
			<!--<div class="_title">-->
				<!--<h2>标题</h2>-->
			<!--</div>-->
			<!--<div class="_content">-->
				<!--警告信息！警告信息！警告信息！-->
			<!--</div>-->
			<!--<div class="_operation">-->
				<!--<button class="btn-plain-dark">取消</button>-->
				<!--<button class="btn-success">确定</button>-->
			<!--</div>-->
		<!--</div>-->
		<!--&lt;!&ndash; 橙色icon弹出框 &ndash;&gt;-->
		<!--<div class="KsDialogIcon-warning" cid="KsDialogIcon">-->
			<!--<div class="_icon-bor"><i class="icon">&#xe60d;</i></div>-->
			<!--<div class="_title">-->
				<!--<h2>标题</h2>-->
			<!--</div>-->
			<!--<div class="_content">-->
				<!--警告信息！警告信息！警告信息！-->
			<!--</div>-->
			<!--<div class="_operation">-->
				<!--<button class="btn-plain-dark">取消</button>-->
				<!--<button class="btn-warning">确定</button>-->
			<!--</div>-->
		<!--</div>-->

		<!--&lt;!&ndash; 绿色icon弹出框 &ndash;&gt;-->

		<div class="table-striped">
			<table class="">
				<thead>
				<tr>
					<th></th>
					<th></th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>props:type (type:String)</td><td>不同类型的Dialog </td>
				</tr>
				<tr>
					<td>props:confirmBtnText (type:String)</td><td>确定按钮的文字 默认为取消 </td>
				</tr>
				<tr>
					<td>props:cancelBtnText (type:String)</td><td>取消按钮的文字 默认为取消 </td>
				</tr>
				<tr>
					<td>props:showCancelBtn (type:Boolean)</td><td>是否显示取消按钮 </td>
				</tr>
				<tr>
					<td>@cancel (type:Function)</td><td> 失败回调</td>
				</tr>
				<tr>
					<td>@confirm (type:Function)</td><td> 成功回调</td>
				</tr>
				<tr>
					<td>slot:title (type:String)</td><td>title 部分</td>
				</tr>
				<tr>
					<td>slot:text (type:Boolean)</td><td>text 内容部分 </td>
				</tr>
				</tbody>
			</table>
		</div>

		<h4>
			以上是通过模板的方式调用可用的参数，如果通过实例化的方式调用不止这些还有更多的参数
		</h4>
		<h5>下面介绍通过实例化来调用 Dialog 的方式</h5>
<pre>
  <code class="javascript">
	// 创建一个 dialog 实例
	let dialog = this.$KsDialog.create({ container: '.work-container' })
	// 这个里面 create 传入的对象就是 options 什么乱七八糟的 title，text，showCancelBtn，cancelBtnText 都可以丢在里面
	// 另外这个 里面 还可以传入 ksMask 的配置项，应为 dialog 的遮罩是 通过 KSMask 组件实现的
	// container: 就是一个容器吧，然后dialog就是在这个容器中居中
	// fillMode: 是否完全填充否则是区域填充
	// backgroundColor: mask 的颜色

	// 显示添加成功呢
	//            内容       标题      类型
	dialog.show('添加成功!', '信息', 'success')(() => {
	  // 关闭提示框
	  dialog.close()
	})
    // show 函数返回的函数 dialog.show()(成功回调， 失败回调)

  </code>
</pre>
	</div>
</template>

<script type="label">
  import KsDialog from '../../components/KsDialog'

  export default {
    data () {
      return { }
    },

    methods: {
      cancel () { console.log('cancel') },
      ok () { console.log('ok') },
      callDialog () {
        let m1 = KsDialog.info('alert1', 'alert', false, {
          mask: false
        })()
        let m2 = KsDialog.success('alert2', 'alert')()
        let m3 = KsDialog.warn('alert3', 'alert', {
          mask: true
        })()


        console.log(m1, m2, m3)
      }
    }
  }
</script>
