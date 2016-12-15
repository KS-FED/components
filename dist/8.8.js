webpackJsonp([8],{

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(213)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/tab/tab-bor.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(214)
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
	  var id = "_v-8c5138f8/tab-bor.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 213:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <!-- tab导航——边框 -->
	// <template>
	//     <div>
	//         <!-- 横排 -->
	//     	<ul class="tab-bor">
	//     	    <li><a>会员规则</a></li>
	//     	    <li class="active"><a>功能主页</a></li>
	//     	    <li><a>会员管理</a></li>
	//     	</ul>
	//
	//         <pre>
	//         <code class="html">
	//     	<ul class="tab-bor">
	//     	    <li><a>会员规则</a></li>
	//     	    <li class="active"><a>功能主页</a></li>
	//     	    <li><a>会员管理</a></li>
	//     	</ul>
	//         </code>
	//         </pre>
	//
	//         <pre>
	//         <code class="scss">
	//             // tab-bor导航组件
	//             .tab-bor {
	//                 // .....
	//                 .active {...} // 选中样式
	//             }
	//
	//         </code>
	//         </pre>
	//
	//         <!-- 竖排 -->
	//         <ul class="tab-bor-vertical">
	//             <li><a>会员规则</a></li>
	//             <li class="active"><a>功能主页</a></li>
	//             <li><a>会员管理</a></li>
	//         </ul>
	//
	//         <pre>
	//         <code class="html">
	//         <ul class="tab-bor-vertical">
	//             <li><a>会员规则</a></li>
	//             <li class="active"><a>功能主页</a></li>
	//             <li><a>会员管理</a></li>
	//         </ul>
	//         </code>
	//         </pre>
	//
	//         <pre>
	//         <code class="scss">
	//             // tab-bor-vertical导航组件
	//             .tab-bor-vertical {
	//                 // .....
	//                 .active {...} // 选中样式
	//             }
	//
	//         </code>
	//         </pre>
	//
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    ready: function ready() {}
	};
	// </script>

/***/ },

/***/ 214:
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <!-- 横排 -->\n\t<ul class=\"tab-bor\">\n\t    <li><a>会员规则</a></li>\n\t    <li class=\"active\"><a>功能主页</a></li>\n\t    <li><a>会员管理</a></li>\n\t</ul>\n\n    <pre>\n    <code class=\"html\">\n\t<ul class=\"tab-bor\">\n\t    <li><a>会员规则</a></li>\n\t    <li class=\"active\"><a>功能主页</a></li>\n\t    <li><a>会员管理</a></li>\n\t</ul>\n    </code>\n    </pre>\n\n    <pre>\n    <code class=\"scss\">\n        // tab-bor导航组件\n        .tab-bor {\n            // .....\n            .active {...} // 选中样式\n        }\n\t\n    </code>\n    </pre>\n\n    <!-- 竖排 -->\n    <ul class=\"tab-bor-vertical\">\n        <li><a>会员规则</a></li>\n        <li class=\"active\"><a>功能主页</a></li>\n        <li><a>会员管理</a></li>\n    </ul>\n\n    <pre>\n    <code class=\"html\">\n    <ul class=\"tab-bor-vertical\">\n        <li><a>会员规则</a></li>\n        <li class=\"active\"><a>功能主页</a></li>\n        <li><a>会员管理</a></li>\n    </ul>\n    </code>\n    </pre>\n\n    <pre>\n    <code class=\"scss\">\n        // tab-bor-vertical导航组件\n        .tab-bor-vertical {\n            // .....\n            .active {...} // 选中样式\n        }\n    \n    </code>\n    </pre>\n\n</div>\n";

/***/ }

});