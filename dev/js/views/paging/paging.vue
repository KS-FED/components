<template>
	<div>
		<h3>组件 部分</h3>
		<br>
		<page 
			:page_current="page_current" 
			:pages="13"
			:total="total"
			:page_size="13"
			v-on:current_change="current_change"></page>
		<br>
		<pre>
        	<code class="html">
	        	&lt;page 
				:page_current="page_current" 
				:pages="pages"
				:total="total"
				:page_size="13"
				v-on:current_change="current_change"&gt;&lt;/page&gt;
        		
        	</code>		
        </pre>
        <div class="table-striped">
        <table class="">
        	<thead>
        		<tr>
					<th></th>
					<th></th>
        		</tr>
        	</thead>
        	<tbody>
        		<tr>
        			<td>page_current</td><td>当前选中的分页值</td>
        		</tr>
        		<tr>
        			<td>pages</td><td>显示分页的个数，为奇数</td>
        		</tr>
        		<tr>
        			<td>total</td><td>数据总条数</td>
        		</tr>
        		<tr>
        			<td>page_size</td><td>每页展示多少条数</td>
        		</tr>
        		<tr>
        			<td>v-on:current_change</td><td>切换分页事件</td>
        		</tr>
        	</tbody>
        </table>
        </div>	
		<br>
		<br>
		<br>
		<pagegroup 
			:page_current="page_current" 
			:pages="pages"
			:total="total"
			:page_sizes="[10,17,30]"
			v-on:current_change="current_change"
			v-on:size_change="size_change"></pagegroup>
		<br>
		<pre>
        	<code class="html">
	        	&lt;pagegroup 
				:page_current="page_current" 
				:pages="pages"
				:total="total"
				:page_sizes="[10,17,30]"
				v-on:current_change="current_change"
				v-on:size_change="size_change"&gt;&lt;/pagegroup&gt;
        		
        	</code>		
        </pre>	
        <div class="table-striped">
        <table class="">
        	<thead>
        		<tr>
					<th></th>
					<th></th>
        		</tr>
        	</thead>
        	<tbody>
        		<tr>
        			<td>page_current</td><td>当前选中的分页值</td>
        		</tr>
        		<tr>
        			<td>pages</td><td>显示分页的个数，为奇数</td>
        		</tr>
        		<tr>
        			<td>total</td><td>数据总条数</td>
        		</tr>
        		<tr>
        			<td>page_sizes</td><td>每页展示多少条数组 [10,20,30]</td>
        		</tr>
        		<tr>
        			<td>v-on:current_change</td><td>切换分页事件</td>
        		</tr>
        		<tr>
        			<td>v-on:size_change</td><td>改变每页展示条数事件</td>
        		</tr>
        	</tbody>
        </table>
        </div>
		<hr>
		<hr>
		<br>


		<h3>css 部分</h3>
		<br>



		<!-- 分页 -->
	    <div class="KsPageGroup" cid="KsPageGroup">
		    <div class="_statistical">共<span>100</span>条</div>
		    <div class="ks-col">
		        每页
		        <select class="input">
		            <option value="10">10</option><option value="17">17</option><option value="30">30</option>
		        </select>
		        条
		    </div>
		    <ul class="KsPage ks-col-auto" cid="KsPage">
			    <li>&lt;</li>
			    <li>1</li><li class="active">2</li><li>3</li><li>4</li><li>5</li><li>···</li><li>10</li>
			    <li>&gt;</li>
			</ul>
		</div>

		<pre>
        <code class="html">
		<div class="KsPageGroup" cid="KsPageGroup">
			<div class="_statistical">共<span>123456</span>条</div>
			<div class="ks-col">
				每页
				<select class="input">
					<option>10</option>
					<option>20</option>
					<option>100</option>
				</select>
				条
			</div>
			<ul class="KsPage ks-col-auto" cid="KsPage">
				<li class="disabled">&lt;</li>
				<li class="active">1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>···</li>
				<li>99</li>
				<li class="disabled">&gt;</li>
			</ul>
		</div>
        </code>
        </pre>

        <!-- <pre>
        <code class="scss">
		// 分页组件
		.paging-box{
			//......
			.statistical{...}  
			.active{...}       //  选中样式
			.disabled{...}  //  首页/尾页样式
		}
        </code>
        </pre> -->

		
        

	</div>
</template>

<script type="text/javascript">
	export default {
		data (){
			return {
				page_current:2 ,
				pages:7,
				total:10
			}
		},
		methods:{
			current_change(val){
				// console.log(val)
                 // this.$http.post('xxx')
			},
			size_change(val){
				// console.log(val)
			}
		},
		ready (){
			// this.current_change('ppp')
			// setTimeout(()=>{	},3000)
				// this.pages = 9
				this.total = 1000
		
		}
	}
</script>