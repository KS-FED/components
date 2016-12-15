webpackJsonp([24],{

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(255)
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
	  var id = "_v-3c2bc92c/popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 255:
/***/ function(module, exports) {

	module.exports = "\n<div style=\"margin: 100px;\">\n\t<!-- 弹出框 -->\n\t<div class=\"KsPopoverTop\" cid=\"KsPopoverTop\">\n\t\t<h2>标题</h2>\n\t\t<p>Top Center 提示信息</p>\n\t\t<span></span>\n\t</div>\n\n\t<div class=\"KsPopoverBottom\" cid=\"KsPopoverBottom\">\n\t\t<h2>标题</h2>\n\t\t<p>Bottom Center 提示信息</p>\n\t\t<span></span>\n\t</div>\n\n\t<div class=\"KsPopoverLeft\" cid=\"KsPopoverLeft\">\n\t\t<h2>标题</h2>\n\t\t<p>Left Center 提示信息</p>\n\t\t<span></span>\n\t</div>\n\n\t<div class=\"KsPopoverRight\" cid=\"KsPopoverRight\">\n\t\t<h2>标题</h2>\n\t\t<p>Right Center 提示信息</p>\n\t\t<span></span>\n\t</div>\n\n</div>\n";

/***/ }

});