<template>
	<div>

    <div class="playground">
      <ks-dialog-entity @cancel="cancel" @confirm="ok">
        <span slot="title">测试1 --- mask false</span>
        <p slot="text" style="margin: 0">
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
          测试内容测试内容测试内容测试内容测试内
        </p>
      </ks-dialog-entity>


      <ks-dialog-entity type="info" @cancel="cancel" @confirm="ok">
        <span slot="title">测试1 --- info info</span>
        <p slot="text" style="margin: 0">
          infoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfo
        </p>
      </ks-dialog-entity>

      <ks-button @click="callDialog">呼叫对话框</ks-button>
    </div>

		<!-- 红色icon弹出框 -->
		<div class="dialog-icon-danger">
			<div class="icon-bor"><i class="icon">&#xe60d;</i></div>
			<div class="title">
				<h2>标题</h2>
			</div>
			<div class="content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-danger">确定</button>
			</div>
		</div>
		<!-- 青色icon弹出框 -->
		<div class="dialog-icon-info">
			<div class="icon-bor"><i class="icon">&#xe61b;</i></div>
			<div class="title">
				<h2>标题</h2>
			</div>
			<div class="content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-info">确定</button>
			</div>
		</div>
		<!-- 橙色icon弹出框 -->
		<div class="dialog-icon-warning">
			<div class="icon-bor"><i class="icon">&#xe60d;</i></div>
			<div class="title">
				<h2>标题</h2>
			</div>
			<div class="content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-warning">确定</button>
			</div>
		</div>

		<!-- 绿色icon弹出框 -->
		<div class="dialog-icon-success">
			<div class="icon-bor"><i class="icon">&#xe60b;</i></div>
			<div class="title">
				<h2>标题</h2>
			</div>
			<div class="content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-success">确定</button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
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
