<template>
	<div>
		<h3>组件 部分</h3>
		<br>
		<page 
			:page_current="page_current" 
			:pages="pages"
			:total="total"></page>
		<br>
		<pre>
        	<code class="html">
	        	&lt;page 
				:page_current="page_current" 
				:pages="pages"
				:total="total"&gt;&lt;/page&gt;
        		
        	</code>		
        </pre>	
		<br>
		<pagegroup 
			:page_current="page_current" 
			:pages="pages"
			:total="total"
			:page_sizes="[9,17,30]"></pagegroup>
		<br>
		<pre>
        	<code class="html">
	        	&lt;pagegroup 
				:page_current="page_current" 
				:pages="pages"
				:total="total"
				:page_sizes="[9,17,30]"&gt;&lt;/pagegroup&gt;
        		
        	</code>		
        </pre>	
		<hr>
		<br>
		<h3>css 部分</h3>
		<br>
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

<script type="text/javascript">
	export default {
		data (){
			return {
				page_current:2 ,
				pages:6,
				total:0
			}
		},
		ready (){
			setTimeout(()=>{
				// this.pages = 9
				this.total = 100
			},3000)
		}
	}
</script>