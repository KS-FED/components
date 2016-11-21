<template>
	<form class="form-box-center">
		<!-- 竖向排版-文字+input -->
		<div class="form-ver">
			<label class="label">竖向排版</label>
			<input type="text" class="input">
		</div>

		<div class="form-ver">
			<label class="label">默认输入框</label>
			<input type="text" class="input">
		</div>

		<!-- 横向排版-文字+input -->
		<div class="form-group">
			<label class="label">默认输入框</label>
			<input type="text" class="input ks-col">
		</div>
		<!-- 必填表单 -->
		<div class="form-group">
			<label class="label"><sup class="sup-red">*</sup>必填表单</label>
			<input type="text" class="input ks-col" placeholder="必填项">
		</div>
		<!-- 纯文字表单 -->
		<div class="form-group">
			<label class="label">纯文字</label>
			<p class="static">email@example.com</p>
		</div>
		<!-- 带图标的表单 -->
		<div class="form-group">
			<label class="label">用户名</label>
			<div class="icon-input ks-col">
				<i class="icon">&#xe61d;</i>
				<input type="text" class="input">
			</div>
		</div>

		<!-- 带描述的表单 -->
		<div class="form-group">
			<label class="label">描述表单一</label>
			<input type="text" class="input ks-col">
			<p class="txt">这里是描述</p>
		</div>
		<div class="form-group">
			<label class="label">描述表单二</label>
			<div class="ks-col">
				<div class="way-negative">
					<div class="ks-row-auto">
						<input type="text" class="input ks-col">
						<p class="desc ks-col-auto">这里是描述</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 带提示的表单 -->
		<div class="form-group has-error">
			<label class="label">错误提示表单</label>
			<input type="text" class="input ks-col">
			<p class="txt"><i class="icon">&#xe60c;</i>错误提示信息</p>
		</div>
		<div class="form-group has-success">
			<label class="label">成功提示表单</label>
			<input type="text" class="input ks-col">
			<p class="txt"><i class="icon">&#xe61e;</i>成功提示信息</p>
		</div>
		<div class="form-group has-warning">
			<label class="label">警告提示表单</label>
			<input type="text" class="input ks-col">
			<p class="txt"><i class="icon">&#xe61f;</i>警告提示信息</p>
		</div>

	</form>
</template>