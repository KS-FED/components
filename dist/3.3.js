webpackJsonp([3],{

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(194)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/validation/validation.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(195)
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
	  var id = "_v-5ed0e200/validation.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 194:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div style="margin: 100px;">
	//
	// <div id="validation-container">
	//   <validator name="validation" :groups="['child1', 'child2','common']">
	//
	//     <form novalidate>
	//         <input type="text" name="" value="" v-validate:a="['required']" group="common" >
	//         <input type="text" name="" value="" v-validate:b="['required']" group="common" >
	//       <div class="radio-field">
	//         <label for="rd1">rd1:</label>
	//         <input id="rd1" type="radio" value="child1" v-model="radio">
	//         <label for="rd2">rd2:</label>
	//         <input id="rd2" type="radio" value="child2" v-model="radio">
	//       </div>
	//       <div class="username-field">
	//         <label for="username">username:</label>
	//         <input id="username" type="text" group="child1" v-validate:username="['required']">
	//       </div>
	//       <input type="button" value="send" v-on:click="submit()">
	//     </form>
	//   </validator>
	// </div>
	//
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      radio: 'child1'
	    };
	  },


	  watch: {
	    radio: function radio() {
	      console.log(this.$validation);
	    }
	  },

	  methods: {
	    submit: function submit() {
	      // ($validation[radio].valid)
	      console.log(this.$validation[this.radio].valid);
	      console.log(this.$validation['common'].valid);
	      console.log(this.$validation.valid && this.$validation[this.radio].valid);

	      // console.log(this.$validation.valid)
	    }
	  }
	};
	// </script>

/***/ },

/***/ 195:
/***/ function(module, exports) {

	module.exports = "\n  <div style=\"margin: 100px;\">\n\n<div id=\"validation-container\">\n  <validator name=\"validation\" :groups=\"['child1', 'child2','common']\">\n\n    <form novalidate>\n        <input type=\"text\" name=\"\" value=\"\" v-validate:a=\"['required']\" group=\"common\" >\n        <input type=\"text\" name=\"\" value=\"\" v-validate:b=\"['required']\" group=\"common\" >\n      <div class=\"radio-field\">\n        <label for=\"rd1\">rd1:</label>\n        <input id=\"rd1\" type=\"radio\" value=\"child1\" v-model=\"radio\">\n        <label for=\"rd2\">rd2:</label>\n        <input id=\"rd2\" type=\"radio\" value=\"child2\" v-model=\"radio\">\n      </div>\n      <div class=\"username-field\">\n        <label for=\"username\">username:</label>\n        <input id=\"username\" type=\"text\" group=\"child1\" v-validate:username=\"['required']\">\n      </div>\n      <input type=\"button\" value=\"send\" v-on:click=\"submit()\">\n    </form>\n  </validator>\n</div>\n\n  </div>\n";

/***/ }

});