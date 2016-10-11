<template>
	<div>

		<!-- 下拉列表 -->
		<div class="select">
			<div class="select-hd">
				<div class="col">选择内容</div>
				<i class="icon col-auto">&#xe619;</i>
			</div>
			<div class="select-bd">
				<div class="search">
					<div class="row-auto">
						<i class="icon col-auto">&#xe617;</i>
						<input type="text">
					</div>
				</div>
				<ul class="select-list">
					<li>选择内容</li>
					<li class="active">选择内容选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
					<li>选择内容</li>
				</ul>
			</div>
		</div>

		<pre>
        <code class="html">
		<div class="select">
			<div class="select-hd">
				<div class="col">选择内容</div>
				<i class="icon col-auto">&#xe619;</i>
			</div>
			<div class="select-bd">
				<div class="search">
					<div class="row-auto">
						<i class="icon col-auto">&#xe617;</i>
						<input type="text">
					</div>
				</div>
				<ul class="select-list">
					<li>选择内容</li>
					<li class="active">选择内容选择内容</li>
					<li>选择内容</li>
				</ul>
			</div>
		</div>
        </code>
        </pre>

        <pre>
        <code class="scss">
		// 下拉列表组件
		.select{
			// ......
			.select-hd{...}  //显示选中内容区
			.select-bd{
				// ......
				.select-list{  // 下拉列表内容
					// ......
					.active,.active:hover{...} //下拉区中选中样式
				}
				.search{...}  // 搜索框
			}
		}
        </code>
        </pre>

	</div>
</template>