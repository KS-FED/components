webpackJsonp([5],{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(241)
	__vue_template__ = __webpack_require__(243)
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
	  var id = "_v-1f46ac40/layout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(53)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layout.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(52)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.desc {\n\twidth:60px;\n}\n.bor {\n\tborder:1px solid #ccc;\n}\n.group {\n\n}\n.group-item {\n\twidth:33.33%;\n}\n.spacing-20{\n\tborder-spacing: 20px;\n}\n.m-20{\n\tmargin: 20px;\n}\n", "", {"version":3,"sources":["/./dev/js/views/layout/layout.vue?55fc5a88"],"names":[],"mappings":";AACA;CACA,WAAA;CACA;AACA;CACA,sBAAA;CACA;AACA;;CAEA;AACA;CACA,aAAA;CACA;AACA;CACA,qBAAA;CACA;AACA;CACA,aAAA;CACA","file":"layout.vue","sourcesContent":["<style type=\"text/css\" media=\"screen\">\n\t.desc {\n\t\twidth:60px;\n\t}\n\t.bor {\n\t\tborder:1px solid #ccc;\n\t}\n\t.group {\n\n\t}\n\t.group-item {\n\t\twidth:33.33%;\n\t}\n\t.spacing-20{\n\t\tborder-spacing: 20px;\n\t}\n\t.m-20{\n\t\tmargin: 20px;\n\t}\n</style>\n<template>\n\t<div style=\"padding-left:30px;\">\n\t\t<h2>layout</h2>\n\t\t<div class=\"ks-row\">\n\t\t\t<span class=\"ks-col h4 desc\">说明 :</span>\n\t\t\t<div>\n\t\t\t\t<p>推荐使用 table、table-cell （*此布局不支持marge）+ inline-block 布局</p>\n\t\t\t\t<p>table、table-cell 转换为 （ks-row、ks-col）</p>\n\t\t\t\t<p>inline-block 转换为 （ib-w、ib）</p>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"ks-row\">\n\t\t\t<span class=\"ks-col h4 desc\">实例 :</span>\n\t\t\t<div>\n\t\t\t\t<h4>ks-row、ks-col</h4>\n\t\t\t\t<div class=\"ks-row\">\n\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\tks-col\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\tks-col\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\n\t\t\t\t<br>\n\n\t\t\t\t<h4>ks-row-auto、ks-col-auto</h4>\n\t\t\t\t<div class=\"ks-row-auto\">\n\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\tks-col\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col-auto bor\">\n\t\t\t\t\t\tks-col-auto\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\n\t\t\t\t<h5>border-spacing 特性</h5>\n\t\t\t\t<div class=\"ks-row spacing-20 bor\">\n\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t左\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t右边\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t<br>\n\t\t\t\t<h5>不用border-spacing</h5>\n\t\t\t\t<div class=\"ks-row bor\">\n\t\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t\t<div class=\"bor m-20\">\n\t\t\t\t\t\t\t左\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t\t<div class=\"bor m-20\">\n\t\t\t\t\t\t\t右边\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<h4>ib-w、ib</h4>\n\t\t\t\t<div class=\"ib-w\">\n\t\t\t\t\t<div class=\"ib bor\">\n\t\t\t\t\t\tib\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ib bor\">\n\t\t\t\t\t\tib\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\n\t\t\t\t<br>\n\t\t\t\t<h4>组合</h4>\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"ks-row bor\" style=\"padding:0 10px;\">\n\t\t\t\t\t\t<div class=\"ks-col\" style=\"text-align: left;\">\n\t\t\t\t\t\t\t<h1>知店</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ks-col\" style=\"text-align: right;vertical-align: middle;\">\n\t\t\t\t\t\t\t<span>图片</span> <div class=\"ib\">账户名称</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bor\" style=\"padding:4px 10px;\">\n\t\t\t\t\t\t<p>首页 / 储值卡</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t\t<div class=\"ks-col\" style=\"width:300px;\">\n\t\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t\t左-上\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t\t<p>左-下</p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t\t<div class=\"ks-row clear-ks-col-space\">\n\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ks-col\" style=\"width:15px;\"></div>\n\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ks-col\" style=\"width:15px;\"></div>\n\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t右-上-右\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib-w\">\n\t\t\t\t\t\t\t<div class=\"ib bor\" style=\"width:50%;\">\n\t\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ib bor\" style=\"width:50%;\">\n\t\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib-w group\">\n\t\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t\t右-上-右\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t\t右边\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t<br>\n\t\t\t\t<h5>嵌套</h5>\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t\t\t<div class=\"ks-col\" style=\"width:300px;\">\n\t\t\t\t\t\t\t<div class=\"ks-row clear-ks-col-space bor\">\n\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t\t\t左-上-左\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t\t\t左-上-左\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t\t左-上-右\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t\t\t左-下\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t右边\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\t\n\t\t\t</div>\n\n\t\t\t\n\t\t\t\n\t\t</div>\n\t\t\n\t</div>\n\t<br><br><br><br>\n</template>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 243:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div style=\"padding-left:30px;\">\n\t<h2>layout</h2>\n\t<div class=\"ks-row\">\n\t\t<span class=\"ks-col h4 desc\">说明 :</span>\n\t\t<div>\n\t\t\t<p>推荐使用 table、table-cell （*此布局不支持marge）+ inline-block 布局</p>\n\t\t\t<p>table、table-cell 转换为 （ks-row、ks-col）</p>\n\t\t\t<p>inline-block 转换为 （ib-w、ib）</p>\n\t\t\t<br>\n\t\t</div>\n\t</div>\n\t<div class=\"ks-row\">\n\t\t<span class=\"ks-col h4 desc\">实例 :</span>\n\t\t<div>\n\t\t\t<h4>ks-row、ks-col</h4>\n\t\t\t<div class=\"ks-row\">\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\tks-col\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\tks-col\n\t\t\t\t</div>\n\t\t\t</div>\t\n\n\t\t\t<br>\n\n\t\t\t<h4>ks-row-auto、ks-col-auto</h4>\n\t\t\t<div class=\"ks-row-auto\">\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\tks-col\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col-auto bor\">\n\t\t\t\t\tks-col-auto\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<br>\n\n\t\t\t<h5>border-spacing 特性</h5>\n\t\t\t<div class=\"ks-row spacing-20 bor\">\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t左\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t右边\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<br>\n\t\t\t<h5>不用border-spacing</h5>\n\t\t\t<div class=\"ks-row bor\">\n\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t<div class=\"bor m-20\">\n\t\t\t\t\t\t左\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t<div class=\"bor m-20\">\n\t\t\t\t\t\t右边\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<h4>ib-w、ib</h4>\n\t\t\t<div class=\"ib-w\">\n\t\t\t\t<div class=\"ib bor\">\n\t\t\t\t\tib\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ib bor\">\n\t\t\t\t\tib\n\t\t\t\t</div>\n\t\t\t</div>\t\n\n\t\t\t<br>\n\t\t\t<h4>组合</h4>\n\t\t\t<div>\n\t\t\t\t<div class=\"ks-row bor\" style=\"padding:0 10px;\">\n\t\t\t\t\t<div class=\"ks-col\" style=\"text-align: left;\">\n\t\t\t\t\t\t<h1>知店</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col\" style=\"text-align: right;vertical-align: middle;\">\n\t\t\t\t\t\t<span>图片</span> <div class=\"ib\">账户名称</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bor\" style=\"padding:4px 10px;\">\n\t\t\t\t\t<p>首页 / 储值卡</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t<div class=\"ks-col\" style=\"width:300px;\">\n\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t左-上\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t<p>左-下</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t<div class=\"ks-row clear-ks-col-space\">\n\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ks-col\" style=\"width:15px;\"></div>\n\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ks-col\" style=\"width:15px;\"></div>\n\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t右-上-右\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ib-w\">\n\t\t\t\t\t\t<div class=\"ib bor\" style=\"width:50%;\">\n\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib bor\" style=\"width:50%;\">\n\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ib-w group\">\n\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t右-上-右\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t右边\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<br>\n\t\t\t<h5>嵌套</h5>\n\t\t\t<div>\n\t\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t\t<div class=\"ks-col\" style=\"width:300px;\">\n\t\t\t\t\t\t<div class=\"ks-row clear-ks-col-space bor\">\n\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t\t左-上-左\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t\t左-上-左\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t左-上-右\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t\t左-下\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t右边\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\t\n\t\t</div>\n\n\t\t\n\t\t\n\t</div>\n\t\n</div>\n<br><br><br><br>\n";

/***/ }

});
//# sourceMappingURL=5.a2c47de5.js.map