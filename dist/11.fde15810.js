webpackJsonp([11],{

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(260)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/paging/paging.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(261)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-33e910c0/paging.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 260:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div>
	// 		<h3>组件 部分</h3>
	// 		<br>
	// 		<page 
	// 			:page_current="page_current" 
	// 			:pages="13"
	// 			:total="total"
	// 			:page_size="13"
	// 			v-on:current_change="current_change"></page>
	// 		<br>
	// 		<pre>
	//         	<code class="html">
	// 	        	&lt;page 
	// 				:page_current="page_current" 
	// 				:pages="pages"
	// 				:total="total"
	// 				:page_size="13"
	// 				v-on:current_change="current_change"&gt;&lt;/page&gt;
	//
	//         	</code>		
	//         </pre>
	//         <div class="table-striped">
	//         <table class="">
	//         	<thead>
	//         		<tr>
	// 					<th></th>
	// 					<th></th>
	//         		</tr>
	//         	</thead>
	//         	<tbody>
	//         		<tr>
	//         			<td>page_current</td><td>当前选中的分页值</td>
	//         		</tr>
	//         		<tr>
	//         			<td>pages</td><td>显示分页的个数，为奇数</td>
	//         		</tr>
	//         		<tr>
	//         			<td>total</td><td>数据总条数</td>
	//         		</tr>
	//         		<tr>
	//         			<td>page_size</td><td>每页展示多少条数</td>
	//         		</tr>
	//         		<tr>
	//         			<td>v-on:current_change</td><td>切换分页事件</td>
	//         		</tr>
	//         	</tbody>
	//         </table>
	//         </div>	
	// 		<br>
	// 		<br>
	// 		<br>
	// 		<pagegroup 
	// 			:page_current="page_current" 
	// 			:pages="pages"
	// 			:total="total"
	// 			v-on:current_change="current_change"
	// 			v-on:size_change="size_change"></pagegroup>
	// 		<br>
	// 		<pre>
	//         	<code class="html">
	// 	        	&lt;pagegroup 
	// 				:page_current="page_current" 
	// 				:pages="pages"
	// 				:total="total"
	// 				:page_sizes="[10,17,30]"
	// 				v-on:current_change="current_change"
	// 				v-on:size_change="size_change"&gt;&lt;/pagegroup&gt;
	//
	//         	</code>		
	//         </pre>	
	//         <div class="table-striped">
	//         <table class="">
	//         	<thead>
	//         		<tr>
	// 					<th></th>
	// 					<th></th>
	//         		</tr>
	//         	</thead>
	//         	<tbody>
	//         		<tr>
	//         			<td>page_current</td><td>当前选中的分页值</td>
	//         		</tr>
	//         		<tr>
	//         			<td>pages</td><td>显示分页的个数，为奇数</td>
	//         		</tr>
	//         		<tr>
	//         			<td>total</td><td>数据总条数</td>
	//         		</tr>
	//         		<tr>
	//         			<td>page_sizes</td><td>每页展示多少条数组 [10,20,30]</td>
	//         		</tr>
	//         		<tr>
	//         			<td>v-on:current_change</td><td>切换分页事件</td>
	//         		</tr>
	//         		<tr>
	//         			<td>v-on:size_change</td><td>改变每页展示条数事件</td>
	//         		</tr>
	//         	</tbody>
	//         </table>
	//         </div>
	// 		<hr>
	// 		<hr>
	// 		<br>
	//
	//
	// 		<h3>css 部分</h3>
	// 		<br>
	//
	//
	//
	// 		<!-- 分页 -->
	// 	    <div class="KsPageGroup" cid="KsPageGroup">
	// 		    <div class="_statistical">共<span>100</span>条</div>
	// 		    <div class="ks-col">
	// 		        每页
	// 		        <select class="input">
	// 		            <option value="10">10</option><option value="17">17</option><option value="30">30</option>
	// 		        </select>
	// 		        条
	// 		    </div>
	// 		    <ul class="KsPage ks-col-auto" cid="KsPage">
	// 			    <li>&lt;</li>
	// 			    <li>1</li><li class="active">2</li><li>3</li><li>4</li><li>5</li><li>···</li><li>10</li>
	// 			    <li>&gt;</li>
	// 			</ul>
	// 		</div>
	//
	// 		<pre>
	//         <code class="html">
	// 		<div class="KsPageGroup" cid="KsPageGroup">
	// 			<div class="_statistical">共<span>123456</span>条</div>
	// 			<div class="ks-col">
	// 				每页
	// 				<select class="input">
	// 					<option>10</option>
	// 					<option>20</option>
	// 					<option>100</option>
	// 				</select>
	// 				条
	// 			</div>
	// 			<ul class="KsPage ks-col-auto" cid="KsPage">
	// 				<li class="disabled">&lt;</li>
	// 				<li class="active">1</li>
	// 				<li>2</li>
	// 				<li>3</li>
	// 				<li>4</li>
	// 				<li>5</li>
	// 				<li>···</li>
	// 				<li>99</li>
	// 				<li class="disabled">&gt;</li>
	// 			</ul>
	// 		</div>
	//         </code>
	//         </pre>
	//
	//         <!-- <pre>
	//         <code class="scss">
	// 		// 分页组件
	// 		.paging-box{
	// 			//......
	// 			.statistical{...}  
	// 			.active{...}       //  选中样式
	// 			.disabled{...}  //  首页/尾页样式
	// 		}
	//         </code>
	//         </pre> -->
	//
	//
	//
	//
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
		data: function data() {
			return {
				page_current: 2,
				pages: 7,
				total: 10
			};
		},
	
		methods: {
			current_change: function current_change(val) {
				// console.log(val)
				// this.$http.post('xxx')
			},
			size_change: function size_change(val) {
				// console.log(val)
			}
		},
		ready: function ready() {
			// this.current_change('ppp')
			// setTimeout(()=>{	},3000)
			// this.pages = 9
			this.total = 1000;
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },

/***/ 261:
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\t\t<h3>组件 部分</h3>\n\t\t<br>\n\t\t<page \n\t\t\t:page_current=\"page_current\" \n\t\t\t:pages=\"13\"\n\t\t\t:total=\"total\"\n\t\t\t:page_size=\"13\"\n\t\t\tv-on:current_change=\"current_change\"></page>\n\t\t<br>\n\t\t<pre>\n        \t<code class=\"html\">\n\t        \t&lt;page \n\t\t\t\t:page_current=\"page_current\" \n\t\t\t\t:pages=\"pages\"\n\t\t\t\t:total=\"total\"\n\t\t\t\t:page_size=\"13\"\n\t\t\t\tv-on:current_change=\"current_change\"&gt;&lt;/page&gt;\n        \t\t\n        \t</code>\t\t\n        </pre>\n        <div class=\"table-striped\">\n        <table class=\"\">\n        \t<thead>\n        \t\t<tr>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th></th>\n        \t\t</tr>\n        \t</thead>\n        \t<tbody>\n        \t\t<tr>\n        \t\t\t<td>page_current</td><td>当前选中的分页值</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>pages</td><td>显示分页的个数，为奇数</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>total</td><td>数据总条数</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>page_size</td><td>每页展示多少条数</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>v-on:current_change</td><td>切换分页事件</td>\n        \t\t</tr>\n        \t</tbody>\n        </table>\n        </div>\t\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<pagegroup \n\t\t\t:page_current=\"page_current\" \n\t\t\t:pages=\"pages\"\n\t\t\t:total=\"total\"\n\t\t\tv-on:current_change=\"current_change\"\n\t\t\tv-on:size_change=\"size_change\"></pagegroup>\n\t\t<br>\n\t\t<pre>\n        \t<code class=\"html\">\n\t        \t&lt;pagegroup \n\t\t\t\t:page_current=\"page_current\" \n\t\t\t\t:pages=\"pages\"\n\t\t\t\t:total=\"total\"\n\t\t\t\t:page_sizes=\"[10,17,30]\"\n\t\t\t\tv-on:current_change=\"current_change\"\n\t\t\t\tv-on:size_change=\"size_change\"&gt;&lt;/pagegroup&gt;\n        \t\t\n        \t</code>\t\t\n        </pre>\t\n        <div class=\"table-striped\">\n        <table class=\"\">\n        \t<thead>\n        \t\t<tr>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th></th>\n        \t\t</tr>\n        \t</thead>\n        \t<tbody>\n        \t\t<tr>\n        \t\t\t<td>page_current</td><td>当前选中的分页值</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>pages</td><td>显示分页的个数，为奇数</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>total</td><td>数据总条数</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>page_sizes</td><td>每页展示多少条数组 [10,20,30]</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>v-on:current_change</td><td>切换分页事件</td>\n        \t\t</tr>\n        \t\t<tr>\n        \t\t\t<td>v-on:size_change</td><td>改变每页展示条数事件</td>\n        \t\t</tr>\n        \t</tbody>\n        </table>\n        </div>\n\t\t<hr>\n\t\t<hr>\n\t\t<br>\n\n\n\t\t<h3>css 部分</h3>\n\t\t<br>\n\n\n\n\t\t<!-- 分页 -->\n\t    <div class=\"KsPageGroup\" cid=\"KsPageGroup\">\n\t\t    <div class=\"KsPageGroup-statistical\">共<span>100</span>条</div>\n\t\t    <div class=\"ks-col\">\n\t\t        每页\n\t\t        <select class=\"input\">\n\t\t            <option value=\"10\">10</option><option value=\"17\">17</option><option value=\"30\">30</option>\n\t\t        </select>\n\t\t        条\n\t\t    </div>\n\t\t    <ul class=\"KsPage ks-col-auto\" cid=\"KsPage\">\n\t\t\t    <li>&lt;</li>\n\t\t\t    <li>1</li><li class=\"active\">2</li><li>3</li><li>4</li><li>5</li><li>···</li><li>10</li>\n\t\t\t    <li>&gt;</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<pre>\n        <code class=\"html\">\n\t\t<div class=\"KsPageGroup\" cid=\"KsPageGroup\">\n\t\t\t<div class=\"KsPageGroup-statistical\">共<span>123456</span>条</div>\n\t\t\t<div class=\"ks-col\">\n\t\t\t\t每页\n\t\t\t\t<select class=\"input\">\n\t\t\t\t\t<option>10</option>\n\t\t\t\t\t<option>20</option>\n\t\t\t\t\t<option>100</option>\n\t\t\t\t</select>\n\t\t\t\t条\n\t\t\t</div>\n\t\t\t<ul class=\"KsPage ks-col-auto\" cid=\"KsPage\">\n\t\t\t\t<li class=\"disabled\">&lt;</li>\n\t\t\t\t<li class=\"active\">1</li>\n\t\t\t\t<li>2</li>\n\t\t\t\t<li>3</li>\n\t\t\t\t<li>4</li>\n\t\t\t\t<li>5</li>\n\t\t\t\t<li>···</li>\n\t\t\t\t<li>99</li>\n\t\t\t\t<li class=\"disabled\">&gt;</li>\n\t\t\t</ul>\n\t\t</div>\n        </code>\n        </pre>\n\n        <!-- <pre>\n        <code class=\"scss\">\n\t\t// 分页组件\n\t\t.paging-box{\n\t\t\t//......\n\t\t\t.statistical{...}  \n\t\t\t.active{...}       //  选中样式\n\t\t\t.disabled{...}  //  首页/尾页样式\n\t\t}\n        </code>\n        </pre> -->\n\n\t\t\n        \n\n\t</div>\n";

/***/ }

});
//# sourceMappingURL=11.fde15810.js.map