webpackJsonp([14],{

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(229)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/dialog/dialog-icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(230)
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
	  var id = "_v-da952d94/dialog-icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsDialog = __webpack_require__(90);

	var _KsDialog2 = _interopRequireDefault(_KsDialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {};
	  },


	  methods: {
	    cancel: function cancel() {
	      console.log('cancel');
	    },
	    ok: function ok() {
	      console.log('ok');
	    },
	    callDialog: function callDialog() {
	      var m1 = _KsDialog2.default.info('alert1', 'alert', false, {
	        mask: false
	      })();
	      var m2 = _KsDialog2.default.success('alert2', 'alert')();
	      var m3 = _KsDialog2.default.warn('alert3', 'alert', {
	        mask: true
	      })();

	      console.log(m1, m2, m3);
	    }
	  }
	};
	// </script>
	// <template>
	// 	<div>
	//
	//     <div class="playground">
	//       <ks-dialog-entity type="info" @cancel="cancel" @confirm="ok">
	//         <span slot="title">测试1 --- info info</span>
	//         <p slot="text" style="margin: 0">
	//           infoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfo
	//         </p>
	//       </ks-dialog-entity>
	//
	//       <ks-button @click="callDialog">呼叫对话框</ks-button>
	//     </div>
	//
	// 		<!-- 红色icon弹出框 -->
	// 		<div class="KsDialogIcon-danger" cid="KsDialogIcon">
	// 			<div class="_icon-bor"><i class="icon">&#xe60d;</i></div>
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 			</div>
	// 			<div class="_content">
	// 				警告信息！警告信息！警告信息！
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-danger">确定</button>
	// 			</div>
	// 		</div>
	// 		<!-- 青色icon弹出框 -->
	// 		<div class="KsDialogIcon-info" cid="KsDialogIcon">
	// 			<div class="_icon-bor"><i class="icon">&#xe61b;</i></div>
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 			</div>
	// 			<div class="_content">
	// 				警告信息！警告信息！警告信息！
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-info">确定</button>
	// 			</div>
	// 		</div>
	// 		<div class="KsDialogIcon-success" cid="KsDialogIcon">
	// 			<div class="_icon-bor"><i class="icon">&#xe60b;</i></div>
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 			</div>
	// 			<div class="_content">
	// 				警告信息！警告信息！警告信息！
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-success">确定</button>
	// 			</div>
	// 		</div>
	// 		<!-- 橙色icon弹出框 -->
	// 		<div class="KsDialogIcon-warning" cid="KsDialogIcon">
	// 			<div class="_icon-bor"><i class="icon">&#xe60d;</i></div>
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 			</div>
	// 			<div class="_content">
	// 				警告信息！警告信息！警告信息！
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-warning">确定</button>
	// 			</div>
	// 		</div>
	//
	// 		<!-- 绿色icon弹出框 -->
	//
	//
	//
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">

/***/ },

/***/ 230:
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\n    <div class=\"playground\">\n      <ks-dialog-entity type=\"info\" @cancel=\"cancel\" @confirm=\"ok\">\n        <span slot=\"title\">测试1 --- info info</span>\n        <p slot=\"text\" style=\"margin: 0\">\n          infoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfo\n        </p>\n      </ks-dialog-entity>\n\n      <ks-button @click=\"callDialog\">呼叫对话框</ks-button>\n    </div>\n\n\t\t<!-- 红色icon弹出框 -->\n\t\t<div class=\"KsDialogIcon-danger\" cid=\"KsDialogIcon\">\n\t\t\t<div class=\"_icon-bor\"><i class=\"icon\">&#xe60d;</i></div>\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t警告信息！警告信息！警告信息！\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-danger\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- 青色icon弹出框 -->\n\t\t<div class=\"KsDialogIcon-info\" cid=\"KsDialogIcon\">\n\t\t\t<div class=\"_icon-bor\"><i class=\"icon\">&#xe61b;</i></div>\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t警告信息！警告信息！警告信息！\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-info\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"KsDialogIcon-success\" cid=\"KsDialogIcon\">\n\t\t\t<div class=\"_icon-bor\"><i class=\"icon\">&#xe60b;</i></div>\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t警告信息！警告信息！警告信息！\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-success\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- 橙色icon弹出框 -->\n\t\t<div class=\"KsDialogIcon-warning\" cid=\"KsDialogIcon\">\n\t\t\t<div class=\"_icon-bor\"><i class=\"icon\">&#xe60d;</i></div>\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t警告信息！警告信息！警告信息！\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-warning\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- 绿色icon弹出框 -->\n\n\n\n\t</div>\n";

/***/ }

});