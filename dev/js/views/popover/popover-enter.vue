<template>
	<div>
		<!-- 弹出框-输入 -->
		<div class="KsPopoverEnter" cid="KsPopoverEnter">
			<h2>标题</h2>
			<div class="_input">
				<div class="col">
					<input type="text" class="input">
				</div>
				<div class="col-auto">
					<button class="btn-primary">
						<i class="icon">&#xe614;</i>
					</button>
				</div>
				<div class="col-auto">
					<button class="btn-plain-dark">
						<i class="icon">&#xe611;</i>
					</button>
				</div>
			</div>
			<p>这是帮助信息</p>
			<span></span>
		</div>

		<pre>
			<code class="html">
			<div class="KsPopoverEnter">
				<h2>标题</h2>
				<div class="KsPopoverEnter__input">
					<div class="col">
						<input type="text" class="input">
					</div>
					<div class="col-auto">
						<button class="btn-primary KsPopoverEnter__btn-primary">
							<i class="icon">&#xe614;</i>
						</button>
					</div>
					<div class="col-auto">
						<button class="btn-plain-dark">
							<i class="icon">&#xe611;</i>
						</button>
					</div>
				</div>
				<p>这是帮助信息</p>
				<span></span>
			</div>
			</code>
		</pre>
	</div>
</template>