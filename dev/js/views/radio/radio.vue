<template>
	<div>
		<div class="radio">
	        <input type="radio" id="radioMale" name="type">
	        <label class="ui-radio" for="radioMale"></label>
	        <label for="radioMale">男款</label>

	        <input type="radio" id="radioFemale" name="type">
	        <label class="ui-radio" for="radioFemale"></label>
	        <label for="radioFemale">女款</label>
	    </div>

	    <pre>
	    <code class="html">
		<div class="radio">
		    <input type="radio" id="radioMale" name="type">
		    <label class="ui-radio" for="radioMale"></label>
		    <label for="radioMale">男款</label>

		    <input type="radio" id="radioFemale" name="type">
		    <label class="ui-radio" for="radioFemale"></label>
		    <label for="radioFemale">女款</label>
		</div>
	    </code>
	    </pre>

	    <pre>
	    <code class="scss">
	        // 单选组件
	        .radio {
	            // .....
	            .ui-radio {...} // 未选中样式
	            .ui-radio::before {...} // 选中样式
	        }
	    </code>
	    </pre>

	</div>
</template>