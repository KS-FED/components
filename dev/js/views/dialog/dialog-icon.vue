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
					<td>type (type:String)</td><td>不同类型的Dialog </td>
				</tr>
				<tr>
					<td>@cancel (type:Function)</td><td>成功回调 </td>
				</tr>
				<tr>
					<td>@confirm (type:Function)</td><td>失败回调 </td>
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
