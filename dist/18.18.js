webpackJsonp([18],{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(241)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/switch/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(242)
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
	  var id = "_v-088e8aa0/switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 241:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//
	// 	<div style="text-align: center">
	//     <!-- IosSwitch -->
	//      <div style="margin-top: 15px">
	//       <h4>IosSwitch:</h4>
	//       <ks-switch :disable="false" @change="changeHandle">
	//         <div slot="checkedChildren">O</div>
	//         <div slot="unCheckedChildren">F</div>
	//       </ks-switch>
	//     </div>
	//
	//     <!-- 纯 CSS 实现的 Switch -->
	//     <div style="margin-top: 15px">
	//       <h4>纯 CSS 实现的 Switch</h4>
	//       <input type="checkbox" class="switch">
	//     </div>
	//
	//     <div style="margin-top: 15px;">
	//       <!-- 属性部分 -->
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
	//             <td>size</td>
	//             <td>大小, 在设计稿上按钮一共有种大小</td>
	//             <td>String</td>
	//             <td>
	//               <label>large:</label>
	//               <ks-switch size="large"></ks-switch><br>
	//               <label>normal:</label>
	//               <ks-switch size="normal"></ks-switch><br>
	//               <label>small:</label>
	//               <ks-switch size="small"></ks-switch><br>
	//               <label>mini:</label>
	//               <ks-switch size="mini"></ks-switch><br>
	//             </td>
	//             <td>large, normal, small, mini</td>
	//             <td>normal</td>
	//           </tr>
	//           <tr style="text-align: left">
	//             <td>color</td>
	//             <td>颜色, Switch 的颜色是一个十六进制的数值</td>
	//             <td>String</td>
	//             <td>
	//               <label>#00BCD4:</label>
	//               <ks-switch color="#00BCD4"></ks-switch><br>
	//               <label>#2196F3:</label>
	//               <ks-switch color="#2196F3"></ks-switch><br>
	//               <label>#F44336:</label>
	//               <ks-switch color="#F44336"></ks-switch><br>
	//             </td>
	//             <td>---</td>
	//             <td style="color: #04BE02">#04BE02</td>
	//           </tr>
	//           <tr style="text-align: left">
	//             <td>checked</td>
	//             <td>属性, 用于判断当前开关是否是打开状态</td>
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
	//               <ks-switch :disable="false"></ks-switch><br>
	//               <label>true:</label>
	//               <ks-switch :disable="true"></ks-switch><br>
	//             </td>
	//             <td>true, false</td>
	//             <td>false</td>
	//           </tr>
	//           </tbody>
	//         </table>
	//       </div>
	//
	//       <div style="margin-top: 10px;"></div>
	//       <!-- Slot 部分 -->
	//       <h4 style="text-align: left">Slot:</h4>
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
	//             <td>checkedChildren</td>
	//             <td>表示在打开状态下开关显示的文字</td>
	//             <td>String</td>
	//             <td>
	//               <ks-switch size="large">
	//                 <div slot="checkedChildren">ON</div>
	//               </ks-switch>
	//               <br>
	//               <ks-switch size="large">
	//                 <div slot="checkedChildren">开</div>
	//               </ks-switch>
	//             </td>
	//             <td>---</td>
	//             <td>---</td>
	//           </tr>
	//           <tr style="text-align: left">
	//             <td>unCheckedChildren</td>
	//             <td>表示在关闭状态下开关显示的文字</td>
	//             <td>String</td>
	//             <td>
	//               <ks-switch size="large">
	//                 <div slot="unCheckedChildren">OFF</div>
	//               </ks-switch>
	//               <br>
	//               <ks-switch size="large">
	//                 <div slot="unCheckedChildren">关</div>
	//               </ks-switch>
	//             </td>
	//             <td>---</td>
	//             <td>---</td>
	//           </tr>
	//           </tbody>
	//         </table>
	//       </div>
	//
	//       <div style="margin-top: 10px;"></div>
	//       <!-- Event 部分 -->
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
	//             <td>在状态切换时会触发的事件, 该事件会携带当前的 Switch 状态传递给处理函数</td>
	//             <td>event</td>
	//             <td>---</td>
	//             <td>---</td>
	//             <td>---</td>
	//           </tr>
	//           </tbody>
	//         </table>
	//       </div>
	//
	//       <!-- 代码示例 -->
	//       <div style="margin-top: 10px;"></div>
	//       <h4 style="text-align: left">代码示例:</h4>
	//       <hr>
	//       <pre class="html" style="text-align: left">
	//         <code class="html">
	//           &lt;ks-switch :disable=&quot;false&quot; :def-checked=&quot;true&quot; color=&quot;#FF5722&quot;
	//               size=&quot;large&quot; :checked.sync=&quot;checked&quot;
	//           &gt;
	//               &lt;div slot=&quot;checkedChildren&quot;&gt;O&lt;/div&gt;
	//               &lt;div slot=&quot;unCheckedChildren&quot;&gt;F&lt;/div&gt;
	//           &lt;/ks-switch&gt;
	//         </code>
	//       </pre>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checked: true
	    };
	  },

	  methods: {
	    changeHandle: function changeHandle(data) {
	      console.info(data);
	    }
	  }
	};
	// </script>
	//

/***/ },

/***/ 242:
/***/ function(module, exports) {

	module.exports = "\n\n\t<div style=\"text-align: center\">\n    <!-- IosSwitch -->\n     <div style=\"margin-top: 15px\">\n      <h4>IosSwitch:</h4>\n      <ks-switch :disable=\"false\" @change=\"changeHandle\">\n        <div slot=\"checkedChildren\">O</div>\n        <div slot=\"unCheckedChildren\">F</div>\n      </ks-switch>\n    </div>\n\n    <!-- 纯 CSS 实现的 Switch -->\n    <div style=\"margin-top: 15px\">\n      <h4>纯 CSS 实现的 Switch</h4>\n      <input type=\"checkbox\" class=\"switch\">\n    </div>\n\n    <div style=\"margin-top: 15px;\">\n      <!-- 属性部分 -->\n      <h4 style=\"text-align: left\">属性:</h4>\n      <hr>\n      <div class=\"table-striped\">\n        <table>\n          <thead>\n          <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>效果</th>\n            <th>可选值</th>\n            <th>默认值</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr style=\"text-align: left\">\n            <td>size</td>\n            <td>大小, 在设计稿上按钮一共有种大小</td>\n            <td>String</td>\n            <td>\n              <label>large:</label>\n              <ks-switch size=\"large\"></ks-switch><br>\n              <label>normal:</label>\n              <ks-switch size=\"normal\"></ks-switch><br>\n              <label>small:</label>\n              <ks-switch size=\"small\"></ks-switch><br>\n              <label>mini:</label>\n              <ks-switch size=\"mini\"></ks-switch><br>\n            </td>\n            <td>large, normal, small, mini</td>\n            <td>normal</td>\n          </tr>\n          <tr style=\"text-align: left\">\n            <td>color</td>\n            <td>颜色, Switch 的颜色是一个十六进制的数值</td>\n            <td>String</td>\n            <td>\n              <label>#00BCD4:</label>\n              <ks-switch color=\"#00BCD4\"></ks-switch><br>\n              <label>#2196F3:</label>\n              <ks-switch color=\"#2196F3\"></ks-switch><br>\n              <label>#F44336:</label>\n              <ks-switch color=\"#F44336\"></ks-switch><br>\n            </td>\n            <td>---</td>\n            <td style=\"color: #04BE02\">#04BE02</td>\n          </tr>\n          <tr style=\"text-align: left\">\n            <td>checked</td>\n            <td>属性, 用于判断当前开关是否是打开状态</td>\n            <td>Boolean</td>\n            <td>\n              ---\n            </td>\n            <td>true, false</td>\n            <td>---</td>\n          </tr>\n          <tr style=\"text-align: left\">\n            <td>disable</td>\n            <td>属性, 表示组件是否禁用</td>\n            <td>Boolean</td>\n            <td>\n              <label>false:</label>\n              <ks-switch :disable=\"false\"></ks-switch><br>\n              <label>true:</label>\n              <ks-switch :disable=\"true\"></ks-switch><br>\n            </td>\n            <td>true, false</td>\n            <td>false</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div style=\"margin-top: 10px;\"></div>\n      <!-- Slot 部分 -->\n      <h4 style=\"text-align: left\">Slot:</h4>\n      <hr>\n      <div class=\"table-striped\">\n        <table>\n          <thead>\n          <tr>\n            <th>名称</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>效果</th>\n            <th>可选值</th>\n            <th>默认值</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr style=\"text-align: left\">\n            <td>checkedChildren</td>\n            <td>表示在打开状态下开关显示的文字</td>\n            <td>String</td>\n            <td>\n              <ks-switch size=\"large\">\n                <div slot=\"checkedChildren\">ON</div>\n              </ks-switch>\n              <br>\n              <ks-switch size=\"large\">\n                <div slot=\"checkedChildren\">开</div>\n              </ks-switch>\n            </td>\n            <td>---</td>\n            <td>---</td>\n          </tr>\n          <tr style=\"text-align: left\">\n            <td>unCheckedChildren</td>\n            <td>表示在关闭状态下开关显示的文字</td>\n            <td>String</td>\n            <td>\n              <ks-switch size=\"large\">\n                <div slot=\"unCheckedChildren\">OFF</div>\n              </ks-switch>\n              <br>\n              <ks-switch size=\"large\">\n                <div slot=\"unCheckedChildren\">关</div>\n              </ks-switch>\n            </td>\n            <td>---</td>\n            <td>---</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div style=\"margin-top: 10px;\"></div>\n      <!-- Event 部分 -->\n      <h4 style=\"text-align: left\">Event:</h4>\n      <hr>\n      <div class=\"table-striped\">\n        <table>\n          <thead>\n          <tr>\n            <th>名称</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>效果</th>\n            <th>可选值</th>\n            <th>默认值</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr style=\"text-align: left\">\n            <td>Change</td>\n            <td>在状态切换时会触发的事件, 该事件会携带当前的 Switch 状态传递给处理函数</td>\n            <td>event</td>\n            <td>---</td>\n            <td>---</td>\n            <td>---</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- 代码示例 -->\n      <div style=\"margin-top: 10px;\"></div>\n      <h4 style=\"text-align: left\">代码示例:</h4>\n      <hr>\n      <pre class=\"html\" style=\"text-align: left\">\n        <code class=\"html\">\n          &lt;ks-switch :disable=&quot;false&quot; :def-checked=&quot;true&quot; color=&quot;#FF5722&quot;\n              size=&quot;large&quot; :checked.sync=&quot;checked&quot;\n          &gt;\n              &lt;div slot=&quot;checkedChildren&quot;&gt;O&lt;/div&gt;\n              &lt;div slot=&quot;unCheckedChildren&quot;&gt;F&lt;/div&gt;\n          &lt;/ks-switch&gt;\n        </code>\n      </pre>\n    </div>\n  </div>\n";

/***/ }

});