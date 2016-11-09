<template>
	<div>

    <!-- <div class="playground">
      <ks-dialog-entity :mask="false">
        <span slot="title">测试1 --- mask false</span>
        <p slot="text" style="margin: 0">
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,
          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
          测试内容测试内容测试内容测试内容测试内
        </p>
      </ks-dialog-entity>
    </div> -->

		<!-- 红色icon弹出框 -->
		<div class="KsDialogIcon-danger" cid="KsDialogIcon-danger">
			<div class="_icon-bor"><i class="icon">&#xe60d;</i></div>
			<div class="_title">
				<h2>标题</h2>
			</div>
			<div class="_content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-danger">确定</button>
			</div>
		</div>
		<!-- 青色icon弹出框 -->
		<div class="KsDialogIcon-info" cid="KsDialogIcon-info">
			<div class="_icon-bor"><i class="icon">&#xe61b;</i></div>
			<div class="_title">
				<h2>标题</h2>
			</div>
			<div class="_content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-info">确定</button>
			</div>
		</div>
		<div class="KsDialogIcon-success" cid="KsDialogIcon-success">
			<div class="_icon-bor"><i class="icon">&#xe60b;</i></div>
			<div class="_title">
				<h2>标题</h2>
			</div>
			<div class="_content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-success">确定</button>
			</div>
		</div>
		<!-- 橙色icon弹出框 -->
		<div class="KsDialogIcon-warning" cid="KsDialogIcon-warning">
			<div class="_icon-bor"><i class="icon">&#xe60d;</i></div>
			<div class="_title">
				<h2>标题</h2>
			</div>
			<div class="KsDialogIcon__content">
				警告信息！警告信息！警告信息！
			</div>
			<div class="_operation">
				<button class="btn-plain-dark">取消</button>
				<button class="btn-warning">确定</button>
			</div>
		</div>

		<!-- 绿色icon弹出框 -->
		

		
	</div>
</template>