<template>
	<div>
		<!-- 分页 -->
		<div class="paging-box">
			<div class="statistical">共<span>123456</span>条</div>
			<div class="col">
				每页
				<select class="input">
					<option>10</option>
					<option>20</option>
					<option>100</option>
				</select>
				条
			</div>
			<ul class="col-auto">
				<li class="frist">&lt;</li>
				<li class="active">1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>···</li>
				<li>99</li>
				<li>&gt;</li>
			</ul>
		</div>

		<pre>
        <code class="html">
		<div class="paging-box">
			<div class="statistical">共<span>123456</span>条</div>
			<div class="col">
				每页
				<select class="input">
					<option>10</option>
					<option>20</option>
					<option>100</option>
				</select>
				条
			</div>
			<ul class="col-auto">
				<li class="frist">&lt;</li>
				<li class="active">1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>···</li>
				<li>99</li>
				<li>&gt;</li>
			</ul>
		</div>
        </code>
        </pre>

        <pre>
        <code class="scss">
		// 分页组件
		.paging-box{
			//......
			.statistical{...}  
			.active{...}       //  选中样式
			.frist,.last{...}  //  首页/尾页样式
		}
        </code>
        </pre>

	</div>
</template>