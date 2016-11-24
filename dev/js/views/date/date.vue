<template>
	<div style="margin:10px;">


	<h3>纯净版 dater</h3>
	<br><br>
	<ks-dater-pure></ks-dater-pure>
	<br><br>
	<h3>基础 dater</h3>
	<pre>
    	<code class="html">
		&lt;ks-dater value="2016-10-12" v-on:change="current_change">&lt;/ks-dater&gt;
		</code>
    </pre>
	<ks-dater :value.sync="date_base" time="23:59:59" v-on:change="current_change"></ks-dater>
    {{date_base}}
	
    <br><br>
    <h3>date-picker</h3>
    <pre>
    	<code class="html">
		&lt;ks-date-picker value="2016-10-12" v-on:change="current_change">&lt;/ks-date-picker&gt;
		</code>
    </pre>
	<ks-date-picker value="2016-10-12"  time="00:00:00"  v-on:change="current_change"></ks-date-picker>
	<ks-date-picker value="2016-10-12"  time="23:59:59"  v-on:change="current_change"></ks-date-picker>
	
	<br><br>
	<h3>只读date-picker</h3>
	<pre>
    	<code class="html">
		&lt;ks-date-picker value="2016-10-12" v-on:change="current_change" :readonly="true">&lt;/ks-date-picker&gt;
		</code>
    </pre>
	<ks-date-picker value="2016-10-12" v-on:change="current_change" :readonly="true"></ks-date-picker>
	<ks-date-picker value="2016-10-12" v-on:change="current_change"></ks-date-picker>
	
	<br><br>
	<h3>多选 date-picker （和范围有差异） </h3>
	<pre>
    	<code class="html">
    		&lt;ks-date-picker value="2016-10-12" placeholder="日期" :exclude="true" v-on:change="current_change"&gt;&lt;/ks-date-picker&gt;
    	</code>		
    </pre>
	 <ks-date-picker :value="date_val" placeholder="日期" :exclude="true" v-on:change="current_change"></ks-date-picker>
	<br><br>
	
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
        			<td>value (type:String)</td><td>选中的日期 </td>
        		</tr>
        		<tr>
        			<td>v-on:change (type:Function)</td><td>改变后的回调，属性值写入methods </td>
        		</tr>
        		<tr>
        			<td>placeholder (type:String)</td><td>占位符 </td>
        		</tr>
        		<tr>
        			<td>time (type:String)</td><td>now：当前时分秒；不写：忽略时分秒；'00:10:32'：任意时分秒 </td>
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
	<h3>范围 dater-multi  </h3>
	<pre>
    	<code class="html">
    		&lt;ks-dater-multi v-on:change="current_change"&gt;&lt;/ks-dater-multi&gt;
    	</code>		
    </pre>
	<ks-dater-multi v-on:change="current_change"></ks-dater-multi> 
	<br><br>
	<h3>范围 dater-multi-picker  </h3>
	<pre>
    	<code class="html">
    		&lt;ks-date-multi-picker placeholder="开始,结束" 
				:range="['2016-10-08','2016-12-20']"
				v-on:change="date_multi_picker_change"&gt;&lt;/ks-date-multi-picker&gt;
    	</code>		
    </pre>
	<ks-date-multi-picker placeholder="开始,结束" 
		:range="['2016-10-08','2016-12-20']"
		:readonly="true"
		v-on:change="date_multi_picker_change"></ks-date-multi-picker>

	<br><br>
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
        			<td>range (type:Array)</td><td>选中的范围日期 </td>
        		</tr>
        		<tr>
        			<td>v-on:change (type:Function)</td><td>改变后的回调，属性值写入methods </td>
        		</tr>
        		<tr>
        			<td>placeholder (type:String 逗号分隔 '开始日期,结束日期')</td><td>占位符 </td>
        		</tr>
        		<tr>
        			<td>readonly (type:Boolean)</td><td>是否只读 </td>
        		</tr>
        	</tbody>
        </table>
    </div>	
	<br><br>
	<br><br>
	<ks-date-month></ks-date-month>
	<br><br>
	<hr>
	<hr>
	<hr>
	<h2>css 部分</h2>
		



		<!-- 日期默认样式——月 -->
		<div class="KsDateMonthPicker" cid="KsDateMonthPicker" style="margin-bottom: 300px;">
			<div class="_input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="KsDateMonth" cid="KsDateMonth">
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
		<div class="KsDateYearPicker" cid="KsDateYearPicker" style="margin-bottom: 300px;">
			<div class="_input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="KsDateYear" cid="KsDateYear">
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
				date_base:'2016-10-12:03:04:20',
				date_val:'2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14'
			}
		},
		methods:{
			current_change(val){
				// console.log('current_change',val)
				setTimeout(()=>{
					// this.date_base = '2016-10-12'	
				})
				
			},
			date_multi_picker_change(val){
				console.log('多选 picker',val)
			}
		},
		ready(){
			// setTimeout(()=>{
			// 	this.date_val = '2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14'
			// },3000)
			this.date_base = '2016-10-12 03:04:20'	
		}

	}
</script>