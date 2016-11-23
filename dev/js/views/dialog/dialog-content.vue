<template>
	<div>

    <div class="workspce">
      <ks-modal-entity :mask="false">
        <span slot="title">测试1 --- mask false</span>
        <p slot="content" style="margin: 0">
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
          测试内容测试内容测试内容测试内容测试内
        </p>
      </ks-modal-entity>

      <ks-modal-entity type="primary" @cancel="cancel" @ok="ok">
        <span slot="title">测试2 --- mask true</span>
        <p slot="content" style="margin: 0">
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
        </p>
      </ks-modal-entity>

      <ks-modal-entity type="success" title="属性传值" :show-cancel-btn="false" :mask="false"
                       content="测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容">
        <span slot="title">---附加slot3 --- mask true</span>
      </ks-modal-entity>

      <ks-button @click="callModal">呼叫模态框</ks-button>
    </div>

		<!-- 内容弹出框 -->
		<div class="KsDialogBg-default" cid="KsDialogBg-default">
			<div class="_title">
				<h2>标题</h2>
				<div class="_close"><i class="icon">&#xe611;</i></div>
			</div>
			<div class="_content">
				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-primary">确定</button>
			</div>
		</div>
		<!-- 红色弹出框 -->
		<div class="KsDialogBg-danger" cid="KsDialogBg-danger">
			<div class="_title">
				<h2>标题</h2>
				<div class="_close"><i class="icon">&#xe611;</i></div>
			</div>
			<div class="_content">
				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-danger">确定</button>
			</div>
		</div>
		<!-- 蓝色弹出框 -->
		<div class="KsDialogBg-primary" cid="KsDialogBg-primary">
			<div class="_title">
				<h2>标题</h2>
				<div class="_close"><i class="icon">&#xe611;</i></div>
			</div>
			<div class="_content">
				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-primary">确定</button>
			</div>
		</div>
		<!-- 绿色弹出框 -->
		<div class="KsDialogBg-success" cid="KsDialogBg-success">
			<div class="_title">
				<h2>标题</h2>
				<div class="_close"><i class="icon">&#xe611;</i></div>
			</div>
			<div class="_content">
				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-success">确定</button>
			</div>
		</div>
		<!-- 橙色弹出框 -->
		<div class="KsDialogBg-warning" cid="KsDialogBg-warning">
			<div class="_title">
				<h2>标题</h2>
				<div class="_close"><i class="icon">&#xe611;</i></div>
			</div>
			<div class="_content">
				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-warning">确定</button>
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">
  import KsModal from '../../components/KsModal'
  import KsMask from '../../components/KsMask'

  export default {
    data () {
      return { }
    },

    methods: {
      cancel () { console.log('cancel') },
      ok () { console.log('ok') },
      callModal () {
        let m1 = KsModal.prompt('alert1', 'alert', 'success', {
          mask: false,
          showCloseBtn: false
        })()
        let m2 = KsModal.prompt('alert2', 'alert', 'success', {
          mask: true
        })()
        let m3 = KsModal.prompt('alert3', 'alert', 'info', {
          mask: false
        })()


        console.log(m1, m2, m3)
      }
    }
  }
</script>
