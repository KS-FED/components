<template>

	<div>

		<!-- 步骤 -->
		<div class="step">
			<div class="step-finish">
				<span></span>
				<p>基本信息基本信息</p>
			</div>
			<div class="hr-finish"><hr></div>
			<div class="step-ing">
				<span></span>
				<p>基本信息</p>
			</div>
			<div class="step-hr"><hr></div>
			<div class="step-ui">
				<span>3</span>
				<p>基本信息</p>
			</div>
			<div class="step-hr"><hr></div>
			<div class="step-ui">
				<span>4</span>
				<p>基本信息基本信息基本信息基本信息基本</p>
			</div>
		</div>

		<pre>
        <code class="html">
		<div class="step">
			<div class="step-finish">
				<span></span>
				<p>基本信息基本信息</p>
			</div>
			<div class="hr-finish"><hr></div>
			<div class="step-ing">
				<span></span>
				<p>基本信息</p>
			</div>
			<div class="step-hr"><hr></div>
			<div class="step-ui">
				<span>3</span>
				<p>基本信息</p>
			</div>
			<div class="step-hr"><hr></div>
			<div class="step-ui">
				<span>4</span>
				<p>基本信息基本信息基本信息基本信息基本</p>
			</div>
		</div>
        </code>
        </pre>

        <pre>
        <code class="scss">
		// 步骤组件
		.step{
		    // ......
		    .step-ui{...}  // 步骤图形默认样式
		    .step-ing{...}  // 步骤图形正在进行样式
		    .step-finish{...}  // 步骤图形完成样式
		    .step-hr{...}  // 线默认样式
		    .hr-finish{...}  // 线完成样式
		}
        </code>
        </pre>

	</div>
</template>