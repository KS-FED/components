<template>
	<div>
		<div class="checkbox">
	        <input type="checkbox" id="checkboxMale">
	        <label class="ui-checkbox" for="checkboxMale"></label>
	        <label for="checkboxMale">男款</label>

	        <input type="checkbox" id="checkboxFemale">
	        <label class="ui-checkbox" for="checkboxFemale"></label>
	        <label for="checkboxFemale">女款</label>
	    </div>

	    <pre>
	    <code class="html">
		<div class="checkbox">
		    <input type="checkbox" id="checkboxMale">
		    <label class="ui-checkbox" for="checkboxMale"></label>
		    <label for="checkboxMale">男款</label>

		    <input type="checkbox" id="checkboxFemale">
		    <label class="ui-checkbox" for="checkboxFemale"></label>
		    <label for="checkboxFemale">女款</label>
		</div>
	    </code>
	    </pre>

	    <pre>
	    <code class="scss">
	        // 多选组件
	        .checkbox {
	            // .....
	            .ui-checkbox {...} // 未选中样式
	            .ui-checkbox::before {...} // 选中样式
	        }
	    </code>
	    </pre>

	</div>
</template>