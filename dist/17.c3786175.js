webpackJsonp([17],{

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(277)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/checkbox/checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(278)
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
	  var id = "_v-ec6fd780/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 277:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div style="text-align: left">
	//     <div style="margin-top: 20px">
	//       <ks-checkbox></ks-checkbox>
	//     </div>
	//
	//     <h4>KsCheckbox</h4>
	//     <div style="margin-top: 15px;">
	//       属性部分
	//       <h4 style="text-align: left">属性:</h4>
	//       <hr>
	//       <div class="table-striped">
	//         <table>
	//           <thead>
	//           <tr>
	//             <th>参数</th>
	//             <th>说明</th>
	//             <th>类型</th>
	//             <th>效果</th>
	//             <th>可选值</th>
	//             <th>默认值</th>
	//           </tr>
	//           </thead>
	//           <tbody>
	//           <tr style="text-align: left">
	//             <td>color</td>
	//             <td>颜色, 颜色是一个十六进制的数值</td>
	//             <td>String</td>
	//             <td>
	//               <label>#00BCD4:</label>
	//               <ks-checkbox color="#00BCD4"></ks-checkbox><br>
	//               <label>#2196F3:</label>
	//               <ks-checkbox color="#2196F3"></ks-checkbox><br>
	//               <label>#F44336:</label>
	//               <ks-checkbox color="#F44336"></ks-checkbox><br>
	//             </td>
	//             <td>---</td>
	//             <td style="color: #04BE02">#04BE02</td>
	//           </tr>
	//           <tr style="text-align: left">
	//             <td>checked</td>
	//             <td>属性, 用于判断当前 checkbox 是否被选中</td>
	//             <td>Boolean</td>
	//             <td>
	//               ---
	//             </td>
	//             <td>true, false</td>
	//             <td>---</td>
	//           </tr>
	//           <tr style="text-align: left">
	//             <td>disable</td>
	//             <td>属性, 表示组件是否禁用</td>
	//             <td>Boolean</td>
	//             <td>
	//               <label>false:</label>
	//               <ks-checkbox :checked.sync="checked" :disable="true"></ks-checkbox><br>
	//               <label>true:</label>
	//               <ks-checkbox ></ks-checkbox><br>
	//             </td>
	//             <td>true, false</td>
	//             <td>false</td>
	//           </tr>
	//           </tbody>
	//         </table>
	//       </div>
	//
	//       Event 部分
	//       <div style="margin-top: 10px;"></div>
	//       <h4 style="text-align: left">Event:</h4>
	//       <hr>
	//       <div class="table-striped">
	//         <table>
	//           <thead>
	//           <tr>
	//             <th>名称</th>
	//             <th>说明</th>
	//             <th>类型</th>
	//             <th>效果</th>
	//             <th>可选值</th>
	//             <th>默认值</th>
	//           </tr>
	//           </thead>
	//           <tbody>
	//           <tr style="text-align: left">
	//             <td>Change</td>
	//             <td>checkbox 发生改变</td>
	//             <td>event</td>
	//             <td>---</td>
	//             <td>---</td>
	//             <td>---</td>
	//           </tr>
	//           </tbody>
	//         </table>
	//       </div>
	//
	//       <div style="margin-top: 10px;"></div>
	//
	//       代码示例
	//       <div style="margin-top: 10px;"></div>
	//       <h4 style="text-align: left">代码示例:</h4>
	//       <hr>
	//       <pre class="html" style="text-align: left">
	//         <code class="html">
	//               &lt;ks-checkbox @change=&quot;changeHandle&quot;&gt
	//                 &lt;span &gt;我是开关标签&lt;/span&gt;
	//               &lt;/ks-checkbox&gt;
	//         </code>
	//       </pre>
	//     </div>
	//
	//     <h4>KsCheckboxGroup</h4>
	//     <ks-checkbox-group :v-model.sync="checkboxList" @change="changeHandle">
	//       <ks-checkbox name="TEST1">TEST1</ks-checkbox>
	//       <ks-checkbox name="TEST2">TEST2</ks-checkbox>
	//       <ks-checkbox name="TEST3">TEST3</ks-checkbox>
	//     </ks-checkbox-group>
	//     <div style="margin-top: 15px;">
	//
	//       属性部分
	//       <h4 style="text-align: left">属性:</h4>
	//       <hr>
	//       <div class="table-striped">
	//         <table>
	//           <thead>
	//           <tr>
	//             <th>参数</th>
	//             <th>说明</th>
	//             <th>类型</th>
	//             <th>效果</th>
	//             <th>可选值</th>
	//             <th>默认值</th>
	//           </tr>
	//           </thead>
	//           <tbody>
	//           <tr style="text-align: left">
	//             <td>v-model</td>
	//             <td>组内所选中的项, 是用该特性必须给予 ksCheckbox name</td>
	//             <td>Array</td>
	//             <td>
	//               <ks-checkbox-group :v-model.sync="checkboxList" @change="changeHandle">
	//                 <ks-checkbox name="TEST1">TEST1</ks-checkbox>
	//                 <ks-checkbox name="TEST2">TEST2</ks-checkbox>
	//                 <ks-checkbox name="TEST3">TEST3</ks-checkbox>
	//               </ks-checkbox-group>
	//             </td>
	//             <td>---</td>
	//             <td>---</td>
	//           </tr>
	//           </tbody>
	//         </table>
	//       </div>
	//
	//       Event 部分
	//       <div style="margin-top: 10px;"></div>
	//       <h4 style="text-align: left">Event:</h4>
	//       <hr>
	//       <div class="table-striped">
	//         <table>
	//           <thead>
	//           <tr>
	//             <th>名称</th>
	//             <th>说明</th>
	//             <th>类型</th>
	//             <th>效果</th>
	//             <th>可选值</th>
	//             <th>默认值</th>
	//           </tr>
	//           </thead>
	//           <tbody>
	//           <tr style="text-align: left">
	//             <td>Change</td>
	//             <td>在组内 checkbox 发生变化是触发</td>
	//             <td>event</td>
	//             <td>---</td>
	//             <td>---</td>
	//             <td>---</td>
	//           </tr>
	//           </tbody>
	//         </table>
	//       </div>
	//
	//       代码示例
	//       <div style="margin-top: 10px;"></div>
	//       <h4 style="text-align: left">代码示例:</h4>
	//       <hr>
	//       <pre class="html" style="text-align: left">
	//         <code class="html">
	//              &lt;ks-checkbox-group :v-model.sync=&quot;checkboxList&quot; @change=&quot;changeHandle&quot;&gt;
	//                 &lt;ks-checkbox name=&quot;TEST1&quot;&gt;TEST1&lt;/ks-checkbox&gt;
	//                 &lt;ks-checkbox name=&quot;TEST2&quot;&gt;TEST2&lt;/ks-checkbox&gt;
	//                 &lt;ks-checkbox name=&quot;TEST3&quot;&gt;TEST3&lt;/ks-checkbox&gt;
	//               &lt;/ks-checkbox-group&gt;
	//         </code>
	//       </pre>
	//     </div>
	//
	//     <div class="checkbox" style="margin-top: 30px">
	//           <input type="checkbox" id="checkboxMale">
	//           <label class="ui-checkbox" for="checkboxMale"></label>
	//           <label for="checkboxMale">男款</label>
	//
	//           <input type="checkbox" id="checkboxFemale">
	//           <label class="ui-checkbox" for="checkboxFemale"></label>
	//           <label for="checkboxFemale">女款</label>
	//       </div>
	//
	//       <pre>
	//       <code class="html">
	//         <div class="checkbox">
	//             <input type="checkbox" id="checkboxMale1">
	//             <label class="ui-checkbox" for="checkboxMale"></label>
	//             <label for="checkboxMale">男款</label>
	//
	//             <input type="checkbox" id="checkboxFemale1">
	//             <label class="ui-checkbox" for="checkboxFemale"></label>
	//             <label for="checkboxFemale">女款</label>
	//         </div>
	//       </code>
	//       </pre>
	//
	//   <pre>
	//       <code class="scss">
	//         // 多选组件
	//         .checkbox {
	//           // .....
	//           .ui-checkbox {...} // 未选中样式
	//           .ui-checkbox::before {...} // 选中样式
	//         }
	//       </code>
	//       </pre>
	//   </div>
	// </template>
	//
	//
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checked: true,
	      checkboxList: ['TEST1', 'TEST2', 'TEST3']
	    };
	  },
	
	  methods: {
	    changeHandle: function changeHandle(data) {
	      console.info(data);
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    setTimeout(function () {
	      _this.checkboxList = ['TEST1', 'TEST3'];
	    }, 3000);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },

/***/ 278:
/***/ function(module, exports) {

	module.exports = "\n<div style=\"text-align: left\">\n  <div style=\"margin-top: 20px\">\n    <ks-checkbox></ks-checkbox>\n  </div>\n\n  <h4>KsCheckbox</h4>\n  <div style=\"margin-top: 15px;\">\n    属性部分\n    <h4 style=\"text-align: left\">属性:</h4>\n    <hr>\n    <div class=\"table-striped\">\n      <table>\n        <thead>\n        <tr>\n          <th>参数</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>效果</th>\n          <th>可选值</th>\n          <th>默认值</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr style=\"text-align: left\">\n          <td>color</td>\n          <td>颜色, 颜色是一个十六进制的数值</td>\n          <td>String</td>\n          <td>\n            <label>#00BCD4:</label>\n            <ks-checkbox color=\"#00BCD4\"></ks-checkbox><br>\n            <label>#2196F3:</label>\n            <ks-checkbox color=\"#2196F3\"></ks-checkbox><br>\n            <label>#F44336:</label>\n            <ks-checkbox color=\"#F44336\"></ks-checkbox><br>\n          </td>\n          <td>---</td>\n          <td style=\"color: #04BE02\">#04BE02</td>\n        </tr>\n        <tr style=\"text-align: left\">\n          <td>checked</td>\n          <td>属性, 用于判断当前 checkbox 是否被选中</td>\n          <td>Boolean</td>\n          <td>\n            ---\n          </td>\n          <td>true, false</td>\n          <td>---</td>\n        </tr>\n        <tr style=\"text-align: left\">\n          <td>disable</td>\n          <td>属性, 表示组件是否禁用</td>\n          <td>Boolean</td>\n          <td>\n            <label>false:</label>\n            <ks-checkbox :checked.sync=\"checked\" :disable=\"true\"></ks-checkbox><br>\n            <label>true:</label>\n            <ks-checkbox ></ks-checkbox><br>\n          </td>\n          <td>true, false</td>\n          <td>false</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n    Event 部分\n    <div style=\"margin-top: 10px;\"></div>\n    <h4 style=\"text-align: left\">Event:</h4>\n    <hr>\n    <div class=\"table-striped\">\n      <table>\n        <thead>\n        <tr>\n          <th>名称</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>效果</th>\n          <th>可选值</th>\n          <th>默认值</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr style=\"text-align: left\">\n          <td>Change</td>\n          <td>checkbox 发生改变</td>\n          <td>event</td>\n          <td>---</td>\n          <td>---</td>\n          <td>---</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div style=\"margin-top: 10px;\"></div>\n\n    代码示例\n    <div style=\"margin-top: 10px;\"></div>\n    <h4 style=\"text-align: left\">代码示例:</h4>\n    <hr>\n    <pre class=\"html\" style=\"text-align: left\">\n      <code class=\"html\">\n            &lt;ks-checkbox @change=&quot;changeHandle&quot;&gt\n              &lt;span &gt;我是开关标签&lt;/span&gt;\n            &lt;/ks-checkbox&gt;\n      </code>\n    </pre>\n  </div>\n\n  <h4>KsCheckboxGroup</h4>\n  <ks-checkbox-group :v-model.sync=\"checkboxList\" @change=\"changeHandle\">\n    <ks-checkbox name=\"TEST1\">TEST1</ks-checkbox>\n    <ks-checkbox name=\"TEST2\">TEST2</ks-checkbox>\n    <ks-checkbox name=\"TEST3\">TEST3</ks-checkbox>\n  </ks-checkbox-group>\n  <div style=\"margin-top: 15px;\">\n\n    属性部分\n    <h4 style=\"text-align: left\">属性:</h4>\n    <hr>\n    <div class=\"table-striped\">\n      <table>\n        <thead>\n        <tr>\n          <th>参数</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>效果</th>\n          <th>可选值</th>\n          <th>默认值</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr style=\"text-align: left\">\n          <td>v-model</td>\n          <td>组内所选中的项, 是用该特性必须给予 ksCheckbox name</td>\n          <td>Array</td>\n          <td>\n            <ks-checkbox-group :v-model.sync=\"checkboxList\" @change=\"changeHandle\">\n              <ks-checkbox name=\"TEST1\">TEST1</ks-checkbox>\n              <ks-checkbox name=\"TEST2\">TEST2</ks-checkbox>\n              <ks-checkbox name=\"TEST3\">TEST3</ks-checkbox>\n            </ks-checkbox-group>\n          </td>\n          <td>---</td>\n          <td>---</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n    Event 部分\n    <div style=\"margin-top: 10px;\"></div>\n    <h4 style=\"text-align: left\">Event:</h4>\n    <hr>\n    <div class=\"table-striped\">\n      <table>\n        <thead>\n        <tr>\n          <th>名称</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>效果</th>\n          <th>可选值</th>\n          <th>默认值</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr style=\"text-align: left\">\n          <td>Change</td>\n          <td>在组内 checkbox 发生变化是触发</td>\n          <td>event</td>\n          <td>---</td>\n          <td>---</td>\n          <td>---</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n    代码示例\n    <div style=\"margin-top: 10px;\"></div>\n    <h4 style=\"text-align: left\">代码示例:</h4>\n    <hr>\n    <pre class=\"html\" style=\"text-align: left\">\n      <code class=\"html\">\n           &lt;ks-checkbox-group :v-model.sync=&quot;checkboxList&quot; @change=&quot;changeHandle&quot;&gt;\n              &lt;ks-checkbox name=&quot;TEST1&quot;&gt;TEST1&lt;/ks-checkbox&gt;\n              &lt;ks-checkbox name=&quot;TEST2&quot;&gt;TEST2&lt;/ks-checkbox&gt;\n              &lt;ks-checkbox name=&quot;TEST3&quot;&gt;TEST3&lt;/ks-checkbox&gt;\n            &lt;/ks-checkbox-group&gt;\n      </code>\n    </pre>\n  </div>\n\n  <div class=\"checkbox\" style=\"margin-top: 30px\">\n        <input type=\"checkbox\" id=\"checkboxMale\">\n        <label class=\"ui-checkbox\" for=\"checkboxMale\"></label>\n        <label for=\"checkboxMale\">男款</label>\n\n        <input type=\"checkbox\" id=\"checkboxFemale\">\n        <label class=\"ui-checkbox\" for=\"checkboxFemale\"></label>\n        <label for=\"checkboxFemale\">女款</label>\n    </div>\n\n    <pre>\n    <code class=\"html\">\n      <div class=\"checkbox\">\n          <input type=\"checkbox\" id=\"checkboxMale1\">\n          <label class=\"ui-checkbox\" for=\"checkboxMale\"></label>\n          <label for=\"checkboxMale\">男款</label>\n\n          <input type=\"checkbox\" id=\"checkboxFemale1\">\n          <label class=\"ui-checkbox\" for=\"checkboxFemale\"></label>\n          <label for=\"checkboxFemale\">女款</label>\n      </div>\n    </code>\n    </pre>\n\n<pre>\n    <code class=\"scss\">\n      // 多选组件\n      .checkbox {\n        // .....\n        .ui-checkbox {...} // 未选中样式\n        .ui-checkbox::before {...} // 选中样式\n      }\n    </code>\n    </pre>\n</div>\n";

/***/ }

});
//# sourceMappingURL=17.c3786175.js.map