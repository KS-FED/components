webpackJsonp([26],{

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(300)
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
	  var id = "_v-bf230b32/form-layout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 300:
/***/ function(module, exports) {

	module.exports = "\n<form class=\"form-box-center\">\n\t<!-- 竖向排版-文字+input -->\n\t<div class=\"form-ver\">\n\t\t<label class=\"label\">竖向排版</label>\n\t\t<input type=\"text\" class=\"input\">\n\t</div>\n\n\t<div class=\"form-ver\">\n\t\t<label class=\"label\">默认输入框</label>\n\t\t<input type=\"text\" class=\"input\">\n\t</div>\n\n\t<!-- 横向排版-文字+input -->\n\t<div class=\"form-group\">\n\t\t<label class=\"label\">默认输入框</label>\n\t\t<input type=\"text\" class=\"input ks-col\">\n\t</div>\n\t<!-- 必填表单 -->\n\t<div class=\"form-group\">\n\t\t<label class=\"label\"><sup class=\"sup-red\">*</sup>必填表单</label>\n\t\t<input type=\"text\" class=\"input ks-col\" placeholder=\"必填项\">\n\t</div>\n\t<!-- 纯文字表单 -->\n\t<div class=\"form-group\">\n\t\t<label class=\"label\">纯文字</label>\n\t\t<p class=\"static\">email@example.com</p>\n\t</div>\n\t<!-- 带图标的表单 -->\n\t<div class=\"form-group\">\n\t\t<label class=\"label\">用户名</label>\n\t\t<div class=\"icon-input ks-col\">\n\t\t\t<i class=\"icon\">&#xe61d;</i>\n\t\t\t<input type=\"text\" class=\"input\">\n\t\t</div>\n\t</div>\n\n\t<!-- 带描述的表单 -->\n\t<div class=\"form-group\">\n\t\t<label class=\"label\">描述表单一</label>\n\t\t<input type=\"text\" class=\"input ks-col\">\n\t\t<p class=\"txt\">这里是描述</p>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label class=\"label\">描述表单二</label>\n\t\t<div class=\"ks-col\">\n\t\t\t<div class=\"way-negative\">\n\t\t\t\t<div class=\"ks-row-auto\">\n\t\t\t\t\t<input type=\"text\" class=\"input ks-col\">\n\t\t\t\t\t<p class=\"desc ks-col-auto\">这里是描述</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- 带提示的表单 -->\n\t<div class=\"form-group has-error\">\n\t\t<label class=\"label\">错误提示表单</label>\n\t\t<input type=\"text\" class=\"input ks-col\">\n\t\t<p class=\"txt\"><i class=\"icon\">&#xe60c;</i>错误提示信息</p>\n\t</div>\n\t<div class=\"form-group has-success\">\n\t\t<label class=\"label\">成功提示表单</label>\n\t\t<input type=\"text\" class=\"input ks-col\">\n\t\t<p class=\"txt\"><i class=\"icon\">&#xe61e;</i>成功提示信息</p>\n\t</div>\n\t<div class=\"form-group has-warning\">\n\t\t<label class=\"label\">警告提示表单</label>\n\t\t<input type=\"text\" class=\"input ks-col\">\n\t\t<p class=\"txt\"><i class=\"icon\">&#xe61f;</i>警告提示信息</p>\n\t</div>\n\n</form>\n";

/***/ }

});
//# sourceMappingURL=26.fcefa2b9.js.map