webpackJsonp([13],{

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(226)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/dialog/dialog-content.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(227)
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
	  var id = "_v-747e3468/dialog-content.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsModal = __webpack_require__(78);

	var _KsModal2 = _interopRequireDefault(_KsModal);

	var _KsMask = __webpack_require__(84);

	var _KsMask2 = _interopRequireDefault(_KsMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div>
	//
	//     <div class="workspce">
	//       <ks-modal-entity :mask="false">
	//         <span slot="title">测试1 --- mask false</span>
	//         <p slot="content" style="margin: 0">
	//           测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,
	//           测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
	//           测试内容测试内容测试内容测试内容测试内
	//         </p>
	//       </ks-modal-entity>
	//
	//       <ks-modal-entity type="primary" @cancel="cancel" @ok="ok">
	//         <span slot="title">测试2 --- mask true</span>
	//         <p slot="content" style="margin: 0">
	//           测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,
	//           测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
	//           测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
	//         </p>
	//       </ks-modal-entity>
	//
	//       <ks-modal-entity type="success" title="属性传值" :show-cancel-btn="false" :mask="false"
	//                        content="测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容">
	//         <span slot="title">---附加slot3 --- mask true</span>
	//       </ks-modal-entity>
	//
	//       <ks-button @click="callModal">呼叫模态框</ks-button>
	//     </div>
	//
	// 		<!-- 内容弹出框 -->
	// 		<div class="KsDialogBg-default" cid="KsDialogBg">
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 				<div class="_close"><i class="icon">&#xe611;</i></div>
	// 			</div>
	// 			<div class="_content">
	// 				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-primary">确定</button>
	// 			</div>
	// 		</div>
	// 		<!-- 红色弹出框 -->
	// 		<div class="KsDialogBg-danger" cid="KsDialogBg">
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 				<div class="_close"><i class="icon">&#xe611;</i></div>
	// 			</div>
	// 			<div class="_content">
	// 				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-danger">确定</button>
	// 			</div>
	// 		</div>
	// 		<!-- 蓝色弹出框 -->
	// 		<div class="KsDialogBg-primary" cid="KsDialogBg">
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 				<div class="_close"><i class="icon">&#xe611;</i></div>
	// 			</div>
	// 			<div class="_content">
	// 				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-primary">确定</button>
	// 			</div>
	// 		</div>
	// 		<!-- 绿色弹出框 -->
	// 		<div class="KsDialogBg-success" cid="KsDialogBg">
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 				<div class="_close"><i class="icon">&#xe611;</i></div>
	// 			</div>
	// 			<div class="_content">
	// 				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-success">确定</button>
	// 			</div>
	// 		</div>
	// 		<!-- 橙色弹出框 -->
	// 		<div class="KsDialogBg-warning" cid="KsDialogBg">
	// 			<div class="_title">
	// 				<h2>标题</h2>
	// 				<div class="_close"><i class="icon">&#xe611;</i></div>
	// 			</div>
	// 			<div class="_content">
	// 				内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框
	// 			</div>
	// 			<div class="_operation">
	// 				<button class="btn-plain-dark">取消</button>
	// 				<button class="btn-warning">确定</button>
	// 			</div>
	// 		</div>
	// 	</div>
	//
	// </template>
	//
	// <script type="text/javascript">
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
	    callModal: function callModal() {
	      var m1 = _KsModal2.default.prompt('alert1', 'alert', 'success', {
	        mask: false,
	        showCloseBtn: false
	      })();
	      var m2 = _KsModal2.default.prompt('alert2', 'alert', 'success', {
	        mask: true
	      })();
	      var m3 = _KsModal2.default.prompt('alert3', 'alert', 'info', {
	        mask: false
	      })();

	      console.log(m1, m2, m3);
	    }
	  }
	};
	// </script>

/***/ },

/***/ 227:
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\n    <div class=\"workspce\">\n      <ks-modal-entity :mask=\"false\">\n        <span slot=\"title\">测试1 --- mask false</span>\n        <p slot=\"content\" style=\"margin: 0\">\n          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,\n          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容\n          测试内容测试内容测试内容测试内容测试内\n        </p>\n      </ks-modal-entity>\n\n      <ks-modal-entity type=\"primary\" @cancel=\"cancel\" @ok=\"ok\">\n        <span slot=\"title\">测试2 --- mask true</span>\n        <p slot=\"content\" style=\"margin: 0\">\n          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容,\n          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容\n          测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容\n        </p>\n      </ks-modal-entity>\n\n      <ks-modal-entity type=\"success\" title=\"属性传值\" :show-cancel-btn=\"false\" :mask=\"false\"\n                       content=\"测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容\">\n        <span slot=\"title\">---附加slot3 --- mask true</span>\n      </ks-modal-entity>\n\n      <ks-button @click=\"callModal\">呼叫模态框</ks-button>\n    </div>\n\n\t\t<!-- 内容弹出框 -->\n\t\t<div class=\"KsDialogBg-default\" cid=\"KsDialogBg\">\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t\t<div class=\"_close\"><i class=\"icon\">&#xe611;</i></div>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-primary\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- 红色弹出框 -->\n\t\t<div class=\"KsDialogBg-danger\" cid=\"KsDialogBg\">\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t\t<div class=\"_close\"><i class=\"icon\">&#xe611;</i></div>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-danger\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- 蓝色弹出框 -->\n\t\t<div class=\"KsDialogBg-primary\" cid=\"KsDialogBg\">\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t\t<div class=\"_close\"><i class=\"icon\">&#xe611;</i></div>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-primary\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- 绿色弹出框 -->\n\t\t<div class=\"KsDialogBg-success\" cid=\"KsDialogBg\">\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t\t<div class=\"_close\"><i class=\"icon\">&#xe611;</i></div>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-success\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- 橙色弹出框 -->\n\t\t<div class=\"KsDialogBg-warning\" cid=\"KsDialogBg\">\n\t\t\t<div class=\"_title\">\n\t\t\t\t<h2>标题</h2>\n\t\t\t\t<div class=\"_close\"><i class=\"icon\">&#xe611;</i></div>\n\t\t\t</div>\n\t\t\t<div class=\"_content\">\n\t\t\t\t内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框\n\t\t\t</div>\n\t\t\t<div class=\"_operation\">\n\t\t\t\t<button class=\"btn-plain-dark\">取消</button>\n\t\t\t\t<button class=\"btn-warning\">确定</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n";

/***/ }

});