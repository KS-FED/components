webpackJsonp([23],{

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(291)
	__vue_script__ = __webpack_require__(293)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/tooltip/tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(294)
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
	  var id = "_v-ce74a030/tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(292);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(53)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/ks-autobem-loader/index.js?type=css!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tooltip.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/ks-autobem-loader/index.js?type=css!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(52)();
	// imports
	
	
	// module
	exports.push([module.id, ".HMS-container {\n  position: relative; }\n\n.HMS-entity {\n  height: 100%; }\n\n.HMS-H, .HMS-M, .HMS-S {\n  position: absolute;\n  display: inline-block;\n  height: 100%;\n  width: 15px;\n  /*border: 1px solid red;*/ }\n\n.HMS-H {\n  left: 0; }\n\n.HMS-M {\n  left: 20px; }\n\n.HMS-S {\n  left: 40px; }\n", ""]);
	
	// exports


/***/ },

/***/ 293:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div style="margin: 100px;">
	//
	//     <div class="input-container">
	//       <input type="text" v-model="inputValueH" v-ks-scroll-bound-value:0:24:0:1="scrollHandleH"/>:
	//       <input type="text" v-model="inputValueM" v-ks-scroll-bound-value:0:59:0:1="scrollHandleM"/>:
	//       <input type="text" v-model="inputValueS" v-ks-scroll-bound-value:0:59:0:1="scrollHandleS"/>
	//       <br>
	//       <!--v-ks-scroll-bound-value:0:86400000:0:30000="scrollHandleHMS"-->
	//       <div class="HMS-container" style="position: relative">
	//         <input type="text" v-el:hsmEntity class="HSM-entity" v-model="inputValueHMS"/>
	//         <div class="HMS-H" @mouseenter="hover(0,2)" v-ks-scroll-bound-value:0:86400000:0:3600000="scrollHandleH"></div>
	//         <div class="HMS-M" @mouseenter="hover(3,5)" v-ks-scroll-bound-value:0:86400000:0:60000="scrollHandleM"></div>
	//         <div class="HMS-S" @mouseenter="hover(6,8)" v-ks-scroll-bound-value:0:86400000:0:1000="scrollHandleS"></div>
	//       </div>
	//     </div>
	//
	// 		<!-- 文字提示 -->
	// 		<div class="KsTooltipLeft" cid="KsTooltipLeft">
	// 			<p>Left Center 提示信息</p>
	// 			<span></span>
	// 		</div>
	// 		<div class="KsTooltipTop" cid="KsTooltipTop">
	// 			<p>Top Center 提示信息</p>
	// 			<span></span>
	// 		</div>
	// 		<div class="KsTooltipRight" cid="KsTooltipRight">
	// 			<p>Right Center 提示信息</p>
	// 			<span></span>
	// 		</div>
	// 		<div class="KsTooltipBottom" cid="KsTooltipBottom">
	// 			<p>Bottom Center 提示信息</p>
	// 			<span></span>
	// 		</div>
	//
	// 		<br/>
	//
	// 		<pre>
	// 			<code class="html">
	// 				<div class="KsTooltipLeft" cid="KsTooltipLeft">
	// 					<p>Left Center 提示信息</p>
	// 					<span></span>
	// 				</div>
	// 				<div class="KsTooltipTop" cid="KsTooltipTop">
	// 					<p>Top Center 提示信息</p>
	// 					<span></span>
	// 				</div>
	// 				<div class="KsTooltipRight" cid="KsTooltipRight">
	// 					<p>Right Center 提示信息</p>
	// 					<span></span>
	// 				</div>
	// 				<div class="KsTooltipBottom" cid="KsTooltipBottom">
	// 					<p>Bottom Center 提示信息</p>
	// 					<span></span>
	// 				</div>
	// 			</code>
	// 		</pre>
	//
	//     <br>
	//
	//     <ks-tool-tip placement="top-start" content="I'am is tips text.">
	//       <button>click me</button>
	//     </ks-tool-tip>
	//
	//     <br>
	//
	//     <ks-tool-tip placement="right" content="I'am is tips text.">
	//       <button>click me</button>
	//     </ks-tool-tip>
	//
	//     <br>
	//
	//     <ks-tool-tip placement="bottom" content="I'am is tips text.">
	//       <button>click me</button>
	//     </ks-tool-tip>
	//
	//     <br>
	//
	//     <ks-tool-tip placement="left" content="I'am is tips text.">
	//       <!--<div style="height: 2800px;width: 100px;background: red;margin:300px auto 0">click me</div>-->
	//     </ks-tool-tip>
	//
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  data: function data() {
	    return {
	      inputValueH: 0,
	      inputValueM: 0,
	      inputValueS: 0,
	      inputValueHMS: '00:00:00',
	      HMSValue: 0
	    };
	  },
	
	
	  watch: {
	    HMSValue: function HMSValue() {
	      var date = new Date(this.HMSValue);
	
	      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
	
	      this.setHSM('H', date.getHours());
	      this.setHSM('M', date.getMinutes());
	      this.setHSM('S', date.getSeconds());
	    }
	  },
	
	  methods: {
	    hover: function hover(start, end) {
	      var HSMEntity = this.$els.hsmentity;
	
	      HSMEntity.focus();
	      HSMEntity.setSelectionRange(start, end);
	    },
	    setHSM: function setHSM(type, value) {
	      var HMSValue = this.inputValueHMS;
	      var times = HMSValue.split(':');
	
	      switch (type) {
	        case 'H':
	          {
	            var H = String(value).length === 2 ? String(value) : '0' + value;
	            this.inputValueHMS = H + ':' + times[1] + ':' + times[2];
	            break;
	          }
	        case 'M':
	          {
	            var M = String(value).length === 2 ? String(value) : '0' + value;
	            this.inputValueHMS = times[0] + ':' + M + ':' + times[2];
	            break;
	          }
	        case 'S':
	          {
	            var S = String(value).length === 2 ? String(value) : '0' + value;
	            this.inputValueHMS = times[0] + ':' + times[1] + ':' + S;
	            break;
	          }
	      }
	    },
	    scrollHandleH: function scrollHandleH(value, delta, options) {
	      this.inputValueH = value;
	
	      if (delta > 0) {
	        if (value >= options.min) {
	          this.HMSValue -= options.step;
	        }
	      } else {
	        if (value < options.max) {
	          this.HMSValue += options.step;
	        }
	      }
	
	      return this.HMSValue;
	    },
	    scrollHandleM: function scrollHandleM(value, delta, options) {
	      this.inputValueM = value;
	
	      if (delta > 0) {
	        if (value >= options.min) {
	          this.HMSValue -= options.step;
	        }
	      } else {
	        if (value < options.max) {
	          this.HMSValue += options.step;
	        }
	      }
	
	      return this.HMSValue;
	    },
	    scrollHandleS: function scrollHandleS(value, delta, options) {
	      this.inputValueS = value;
	
	      if (delta > 0) {
	        if (value >= options.min) {
	          this.HMSValue -= options.step;
	        }
	      } else {
	        if (value < options.max) {
	          this.HMSValue += options.step;
	        }
	      }
	
	      return this.HMSValue;
	    },
	    scrollHandleHMS: function scrollHandleHMS(value) {
	      var time = '';
	      var date = new Date(value);
	
	      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
	
	      console.log(value);
	      console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
	      this.inputValueHMS = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	    }
	  }
	
	};
	// </script>
	//
	// <style lang="scss">
	//   .HMS-container {position: relative}
	//   .HMS-entity {height: 100%;}
	//   .HMS-H, .HMS-M, .HMS-S {
	//     position: absolute;
	//     display: inline-block;
	//     height: 100%;
	//     width: 15px;
	//     /*border: 1px solid red;*/
	//   }
	//   .HMS-H {left: 0;}
	//   .HMS-M {left: 20px;}
	//   .HMS-S {left: 40px;}
	// </style>

	/* generated by vue-loader */

/***/ },

/***/ 294:
/***/ function(module, exports) {

	module.exports = "\n\t<div style=\"margin: 100px;\">\n\n    <div class=\"input-container\">\n      <input type=\"text\" v-model=\"inputValueH\" v-ks-scroll-bound-value:0:24:0:1=\"scrollHandleH\"/>:\n      <input type=\"text\" v-model=\"inputValueM\" v-ks-scroll-bound-value:0:59:0:1=\"scrollHandleM\"/>:\n      <input type=\"text\" v-model=\"inputValueS\" v-ks-scroll-bound-value:0:59:0:1=\"scrollHandleS\"/>\n      <br>\n      <!--v-ks-scroll-bound-value:0:86400000:0:30000=\"scrollHandleHMS\"-->\n      <div class=\"HMS-container\" style=\"position: relative\">\n        <input type=\"text\" v-el:hsmEntity class=\"HSM-entity\" v-model=\"inputValueHMS\"/>\n        <div class=\"HMS-H\" @mouseenter=\"hover(0,2)\" v-ks-scroll-bound-value:0:86400000:0:3600000=\"scrollHandleH\"></div>\n        <div class=\"HMS-M\" @mouseenter=\"hover(3,5)\" v-ks-scroll-bound-value:0:86400000:0:60000=\"scrollHandleM\"></div>\n        <div class=\"HMS-S\" @mouseenter=\"hover(6,8)\" v-ks-scroll-bound-value:0:86400000:0:1000=\"scrollHandleS\"></div>\n      </div>\n    </div>\n\n\t\t<!-- 文字提示 -->\n\t\t<div class=\"KsTooltipLeft\" cid=\"KsTooltipLeft\">\n\t\t\t<p>Left Center 提示信息</p>\n\t\t\t<span></span>\n\t\t</div>\n\t\t<div class=\"KsTooltipTop\" cid=\"KsTooltipTop\">\n\t\t\t<p>Top Center 提示信息</p>\n\t\t\t<span></span>\n\t\t</div>\n\t\t<div class=\"KsTooltipRight\" cid=\"KsTooltipRight\">\n\t\t\t<p>Right Center 提示信息</p>\n\t\t\t<span></span>\n\t\t</div>\n\t\t<div class=\"KsTooltipBottom\" cid=\"KsTooltipBottom\">\n\t\t\t<p>Bottom Center 提示信息</p>\n\t\t\t<span></span>\n\t\t</div>\n\n\t\t<br/>\n\n\t\t<pre>\n\t\t\t<code class=\"html\">\n\t\t\t\t<div class=\"KsTooltipLeft\" cid=\"KsTooltipLeft\">\n\t\t\t\t\t<p>Left Center 提示信息</p>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"KsTooltipTop\" cid=\"KsTooltipTop\">\n\t\t\t\t\t<p>Top Center 提示信息</p>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"KsTooltipRight\" cid=\"KsTooltipRight\">\n\t\t\t\t\t<p>Right Center 提示信息</p>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"KsTooltipBottom\" cid=\"KsTooltipBottom\">\n\t\t\t\t\t<p>Bottom Center 提示信息</p>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t</code>\n\t\t</pre>\n\n    <br>\n\n    <ks-tool-tip placement=\"top-start\" content=\"I'am is tips text.\">\n      <button>click me</button>\n    </ks-tool-tip>\n\n    <br>\n\n    <ks-tool-tip placement=\"right\" content=\"I'am is tips text.\">\n      <button>click me</button>\n    </ks-tool-tip>\n\n    <br>\n\n    <ks-tool-tip placement=\"bottom\" content=\"I'am is tips text.\">\n      <button>click me</button>\n    </ks-tool-tip>\n\n    <br>\n\n    <ks-tool-tip placement=\"left\" content=\"I'am is tips text.\">\n      <!--<div style=\"height: 2800px;width: 100px;background: red;margin:300px auto 0\">click me</div>-->\n    </ks-tool-tip>\n\n\t</div>\n";

/***/ }

});
//# sourceMappingURL=23.f6d9858d.js.map