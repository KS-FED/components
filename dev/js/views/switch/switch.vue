<template>
	<div>
		<!-- 开关 -->
		<div class="switch">
	        <input type="checkbox" id="switchMale">
	        <label class="ui-switch" for="switchMale">
	        	<span class="begin">未上线</span>
	        	<span class="end">已上线</span>
	        </label>
	    </div>

	    <pre>
	    	<code class="html">
			<div class="switch">
			    <input type="checkbox" id="switchMale">
			    <label class="ui-switch" for="switchMale">
			    	<span class="begin">未上线</span>
			    	<span class="end">已上线</span>
			    </label>
			</div>
	    	</code>
	    </pre>

	    <pre>
	    	<code class="scss">
			// switch开关组件
			.switch{
			    .ui-switch {
			        // ......
			        .begin{...} // 未上线样式
			        .end{...} // 已上线样式
			    }
			}
	    	</code>
	    </pre>
	</div>
</template>