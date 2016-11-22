<template>
	<div>


	<h3>左右请添加 no-select 属性</h3>
	<br><br>
	<ks-dater-pure></ks-dater-pure>
	<br><br>
	<ks-dater value="2016-10-12" v-on:change="current_change"></ks-dater>
	<br><br>
	 <ks-date-picker :value="date_val" placeholder="写点啥" :exclude="true" :readonly="true" v-on:change="current_change"></ks-date-picker>
	<br><br>
	<ks-date-picker value="2016-10-12" v-on:change="current_change"></ks-date-picker>
	<pre>
    	<code class="html">
    		&lt;ks-date-picker value="2016-10-12" v-on:change="current_change"&gt;&lt;/ks-date-picker&gt;
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
        			<td>value (type:String)</td><td>展示的日期 </td>
        		</tr>
        		<tr>
        			<td>v-on:change (type:Function)</td><td>改变后的回调，属性值写入methods </td>
        		</tr>
        		<tr>
        			<td>placeholder (type:String)</td><td>占位符 </td>
        		</tr>
        		<tr>
        			<td>exclude (type:Boolean)</td><td>是否有排除操作 </td>
        		</tr>
        		<tr>
        			<td>readonly (type:Boolean)</td><td>是否只读 </td>
        		</tr>
        	</tbody>
        </table>
        </div>	
	<br><br>

	<ks-dater-multi v-on:change="current_change"></ks-dater-multi> 
	<br><br>
	<br><br>
	<ks-date-multi-picker placeholder="开始,结束" :range="['2016-10-08','2016-12-20']"></ks-date-multi-picker>
	<br><br>
	<br><br>
	<br><br>
	<br><br>
	<hr>
	<hr>
	<hr>
	<h2>css 部分</h2>
		
		<!-- 日期默认样式——周——范围 -->
		<div class="KsDateScope readonly" cid="KsDateScope" style="margin-bottom: 400px;">
			<div class="_input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<div class="ks-col">
					<div class="ks-row-auto">
						<div class="ks-col"><input type="text"></div>
						<i class="icon ks-col-auto scope-icon">&#xe677;</i>
						<div class="ks-col"><input type="text"></div>
					</div>
				</div>
			</div>
			<ks-dater-multi v-on:change="current_change"></ks-dater-multi> 
		</div>

		<!-- 日期默认样式——周 -->
		<div class="date" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<ks-dater value="2016-10-12" v-on:change="current_change"></ks-dater>
		</div>

		<!-- 日期默认样式——月 -->
		<div class="KsDateMonth" cid="KsDateMonth" style="margin-bottom: 400px;">
			<div class="_input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="KsDater" cid="KsDater">
				<div class="_date">
					<div class="_head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="next">&gt;</div>
					</div>
					
					<div class="_days">
						<span class="pass">一月</span>
						<span class="pass">二月</span>
						<span class="pass">三月</span>
						<span class="pass">四月</span>
					</div>
					<div class="_days">
						<span>五月</span>
						<span>六月</span>
						<span>七月</span>
						<span>八月</span>
					</div>
					<div class="_days">
						<span>九月</span>
						<span>十月</span>
						<span class="active">十一月</span>
						<span>十二月</span>
					</div>
					<div class="_btn">
						<span class="today">本月</span>
						<span class="clear">清除</span>
					</div>
				</div>
			</div>
		</div>

		<!-- 日期默认样式——年 -->
		<div class="KsDateYear" cid="KsDateYear" style="margin-bottom: 400px;">
			<div class="_input">
				<div class="ks-col-auto"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="KsDater" cid="KsDater">
				<div class="_date">
					<div class="_head">
						<div class="retreat">&lt;</div>
						<div class="year">2010年-2019年</div>
						<div class="next">&gt;</div>
					</div>
					
					<div class="_days">
						<span class="pass">2010</span>
						<span class="pass">2011</span>
						<span class="pass">2012</span>
						<span class="pass">2013</span>
					</div>
					<div class="_days">
						<span>2014</span>
						<span>2015</span>
						<span class="active">2016</span>
						<span>2017</span>
					</div>
					<div class="_days">
						<span>2018</span>
						<span>2019</span>
						<span>2010</span>
						<span></span>
					</div>
					<div class="_btn">
						<span class="today">今年</span>
						<span class="clear">清除</span>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				date_val:'2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14'
			}
		},
		methods:{
			current_change(val){
				console.log('current_change',val)
			}
		},
		ready(){
			// setTimeout(()=>{
			// 	this.date_val = '2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14'
			// },3000)
		}

	}
</script>