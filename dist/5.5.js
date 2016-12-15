webpackJsonp([5],{

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(200)
	__vue_template__ = __webpack_require__(204)
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

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(203)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layout.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "\n.desc {\n\twidth:60px;\n}\n.bor {\n\tborder:1px solid #ccc;\n}\n.group {\n\n}\n.group-item {\n\twidth:33.33%;\n}\n.spacing-20{\n\tborder-spacing: 20px;\n}\n.m-20{\n\tmargin: 20px;\n}\n", ""]);

	// exports


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 204:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div style=\"padding-left:30px;\">\n\t<h2>layout</h2>\n\t<div class=\"ks-row\">\n\t\t<span class=\"ks-col h4 desc\">说明 :</span>\n\t\t<div>\n\t\t\t<p>推荐使用 table、table-cell （*此布局不支持marge）+ inline-block 布局</p>\n\t\t\t<p>table、table-cell 转换为 （ks-row、ks-col）</p>\n\t\t\t<p>inline-block 转换为 （ib-w、ib）</p>\n\t\t\t<br>\n\t\t</div>\n\t</div>\n\t<div class=\"ks-row\">\n\t\t<span class=\"ks-col h4 desc\">实例 :</span>\n\t\t<div>\n\t\t\t<h4>ks-row、ks-col</h4>\n\t\t\t<div class=\"ks-row\">\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\tks-col\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\tks-col\n\t\t\t\t</div>\n\t\t\t</div>\t\n\n\t\t\t<br>\n\n\t\t\t<h4>ks-row-auto、ks-col-auto</h4>\n\t\t\t<div class=\"ks-row-auto\">\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\tks-col\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col-auto bor\">\n\t\t\t\t\tks-col-auto\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<br>\n\n\t\t\t<h5>border-spacing 特性</h5>\n\t\t\t<div class=\"ks-row spacing-20 bor\">\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t左\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t右边\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<br>\n\t\t\t<h5>不用border-spacing</h5>\n\t\t\t<div class=\"ks-row bor\">\n\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t<div class=\"bor m-20\">\n\t\t\t\t\t\t左\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t<div class=\"bor m-20\">\n\t\t\t\t\t\t右边\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<h4>ib-w、ib</h4>\n\t\t\t<div class=\"ib-w\">\n\t\t\t\t<div class=\"ib bor\">\n\t\t\t\t\tib\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ib bor\">\n\t\t\t\t\tib\n\t\t\t\t</div>\n\t\t\t</div>\t\n\n\t\t\t<br>\n\t\t\t<h4>组合</h4>\n\t\t\t<div>\n\t\t\t\t<div class=\"ks-row bor\" style=\"padding:0 10px;\">\n\t\t\t\t\t<div class=\"ks-col\" style=\"text-align: left;\">\n\t\t\t\t\t\t<h1>知店</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col\" style=\"text-align: right;vertical-align: middle;\">\n\t\t\t\t\t\t<span>图片</span> <div class=\"ib\">账户名称</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bor\" style=\"padding:4px 10px;\">\n\t\t\t\t\t<p>首页 / 储值卡</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t<div class=\"ks-col\" style=\"width:300px;\">\n\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t左-上\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t<p>左-下</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t\t<li>1</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ks-col\">\n\t\t\t\t\t<div class=\"ks-row clear-ks-col-space\">\n\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ks-col\" style=\"width:15px;\"></div>\n\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ks-col\" style=\"width:15px;\"></div>\n\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t右-上-右\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ib-w\">\n\t\t\t\t\t\t<div class=\"ib bor\" style=\"width:50%;\">\n\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib bor\" style=\"width:50%;\">\n\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ib-w group\">\n\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t右-上-左\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t右-上-中\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ib bor group-item\">\n\t\t\t\t\t\t\t右-上-右\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t右边\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<br>\n\t\t\t<h5>嵌套</h5>\n\t\t\t<div>\n\t\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t\t<div class=\"ks-col\" style=\"width:300px;\">\n\t\t\t\t\t\t<div class=\"ks-row clear-ks-col-space bor\">\n\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t<div class=\"ks-row ks-col-space bor\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t\t左-上-左\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t\t左-上-左\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t\t\t左-上-右\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bor\">\n\t\t\t\t\t\t\t左-下\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ks-col bor\">\n\t\t\t\t\t\t右边\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\t\n\t\t</div>\n\n\t\t\n\t\t\n\t</div>\n\t\n</div>\n<br><br><br><br>\n";

/***/ }

});