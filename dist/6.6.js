webpackJsonp([6],{

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(206)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/button/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(207)
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
	  var id = "_v-4cf110e0/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 206:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div style="padding-left:30px;">
	//
	//     <div class="workspace">
	//       <ks-button type="primary" :loading.sync="loading">测试1</ks-button>
	//       <ks-button size="middle" type="success" :disable="true" :loading.sync="loading">测试2</ks-button>
	//       <ks-button :ghost="true" type="info" :loading.sync="loading">测试3</ks-button>
	//       <ks-button :ghost="true" type="dark" size="large">测试X</ks-button>
	//       <ks-button size="large" type="warning" :loading.sync="loading">测试4</ks-button>
	//     </div>
	//
	//     <select v-model="loading">
	//       <option :value="true">开</option>
	//       <option :value="false">关</option>
	//     </select>
	//
	// 	<div>
	// 		<h3 class="h3">primary</h3>
	// 		<button class="btn-primary-deep" type="button">btn-primary-deep</button>
	// 		<button class="btn-primary" type="button">btn-primary</button>
	// 		<button class="btn-primary-light" type="button">btn-primary-light</button>
	// 	</div>
	// 	<div>
	// 		<h3 class="h3">success</h3>
	// 		<button class="btn-success-deep" type="button">btn-success-deep</button>
	// 		<button class="btn-success" type="button">btn-success</button>
	// 		<button class="btn-success-light" type="button">btn-success-light</button>
	// 		<button class="btn-success-xl" type="button">btn-success-xl</button>
	//
	// 	</div>
	// 	<div>
	// 		<h3 class="h3">info</h3>
	// 		<button class="btn-info-deep" type="button">btn-info-deep</button>
	// 		<button class="btn-info" type="button">btn-info</button>
	// 		<button class="btn-info-light" type="button">btn-info-light</button>
	// 	</div>
	// 	<div>
	// 		<h3 class="h3">danger</h3>
	// 		<button class="btn-danger-deep" type="button">btn-danger-deep</button>
	// 		<button class="btn-danger" type="button">btn-danger</button>
	// 		<button class="btn-danger-light" type="button">btn-danger-light</button>
	// 	</div>
	// 	<div>
	// 		<h3 class="h3">warning</h3>
	// 		<button class="btn-warning-deep" type="button">btn-warning-deep</button>
	// 		<button class="btn-warning" type="button">btn-warning</button>
	// 		<button class="btn-warning-light" type="button">btn-warning-light</button>
	// 	</div>
	// 	<div>
	// 		<h3 class="h3">dark</h3>
	// 		<button class="btn-dark-deep" type="button">btn-dark-deep</button>
	// 		<button class="btn-dark" type="button">btn-dark</button>
	// 		<button class="btn-dark-light" type="button">btn-dark-light</button>
	// 	</div>
	// 	<div>
	// 		<h3 class="h3">gray</h3>
	// 		<button class="btn-gray-deep" type="button">btn-gray-deep</button>
	// 		<button class="btn-gray" type="button">btn-gray</button>
	// 		<button class="btn-gray-light" type="button">btn-gray-light</button>
	// 	</div>
	// 	<br>
	//
	//
	//
	//
	//
	//   <a class="btn-primary">btn-primary</a>
	//   <a class="btn-success">btn-success</a>
	//   <a class="btn-info">btn-info</a>
	//   <a class="btn-danger">btn-danger</a>
	//   <a class="btn-warning">btn-warning</a>
	//   <br/>
	//   <br/>
	//   <a class="btn-primary" disabled>btn-primary</a>
	//   <a class="btn-success disabled">btn-success</a>
	//   <a class="btn-info disabled">btn-info</a>
	//   <a class="btn-danger disabled">btn-danger</a>
	//   <a class="btn-warning disabled">btn-warning</a>
	//   <br/>
	//   <br/>
	//   <a class="btn-plain-primary">btn-plain-primary</a>
	//   <a class="btn-plain-success">btn-plain-success</a>
	//   <a class="btn-plain-danger">btn-plain-danger</a>
	//   <a class="btn-plain-dark">btn-plain-dark</a>
	//   <br/>
	//   <br/>
	//   <a class="btn-plain-primary disabled">btn-plain-primary</a>
	//   <a class="btn-plain-success disabled">btn-plain-success</a>
	//   <a class="btn-plain-danger disabled">btn-plain-danger</a>
	//   <a class="btn-plain-dark disabled">btn-plain-dark</a>
	//   <br/>
	//   <br/>
	//   <a class="btn-primary">btn-primary</a>
	//   <a class="btn-primary-xl">btn-primary-xl</a>
	//   <a class="btn-primary-xxl">btn-primary-xxl</a>
	//   <button class="btn-success-xxl" disabled type="button">btn-success-xxl</button>
	//   <br/>
	//   <br/>
	//   <a class="btn-plain-primary">btn-plain-primary</a>
	//   <a class="btn-plain-primary-xl">btn-plain-primary-xl</a>
	//   <a class="btn-plain-primary-xxl">btn-plain-primary-xxl</a>
	//
	//
	//
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      loading: true,
	      pa: false
	    };
	  }
	};
	// </script>

/***/ },

/***/ 207:
/***/ function(module, exports) {

	module.exports = "\n\t<div style=\"padding-left:30px;\">\n\n    <div class=\"workspace\">\n      <ks-button type=\"primary\" :loading.sync=\"loading\">测试1</ks-button>\n      <ks-button size=\"middle\" type=\"success\" :disable=\"true\" :loading.sync=\"loading\">测试2</ks-button>\n      <ks-button :ghost=\"true\" type=\"info\" :loading.sync=\"loading\">测试3</ks-button>\n      <ks-button :ghost=\"true\" type=\"dark\" size=\"large\">测试X</ks-button>\n      <ks-button size=\"large\" type=\"warning\" :loading.sync=\"loading\">测试4</ks-button>\n    </div>\n\n    <select v-model=\"loading\">\n      <option :value=\"true\">开</option>\n      <option :value=\"false\">关</option>\n    </select>\n\n\t<div>\n\t\t<h3 class=\"h3\">primary</h3>\n\t\t<button class=\"btn-primary-deep\" type=\"button\">btn-primary-deep</button>\n\t\t<button class=\"btn-primary\" type=\"button\">btn-primary</button>\n\t\t<button class=\"btn-primary-light\" type=\"button\">btn-primary-light</button>\n\t</div>\n\t<div>\n\t\t<h3 class=\"h3\">success</h3>\n\t\t<button class=\"btn-success-deep\" type=\"button\">btn-success-deep</button>\n\t\t<button class=\"btn-success\" type=\"button\">btn-success</button>\n\t\t<button class=\"btn-success-light\" type=\"button\">btn-success-light</button>\n\t\t<button class=\"btn-success-xl\" type=\"button\">btn-success-xl</button>\n\n\t</div>\n\t<div>\n\t\t<h3 class=\"h3\">info</h3>\n\t\t<button class=\"btn-info-deep\" type=\"button\">btn-info-deep</button>\n\t\t<button class=\"btn-info\" type=\"button\">btn-info</button>\n\t\t<button class=\"btn-info-light\" type=\"button\">btn-info-light</button>\n\t</div>\n\t<div>\n\t\t<h3 class=\"h3\">danger</h3>\n\t\t<button class=\"btn-danger-deep\" type=\"button\">btn-danger-deep</button>\n\t\t<button class=\"btn-danger\" type=\"button\">btn-danger</button>\n\t\t<button class=\"btn-danger-light\" type=\"button\">btn-danger-light</button>\n\t</div>\n\t<div>\n\t\t<h3 class=\"h3\">warning</h3>\n\t\t<button class=\"btn-warning-deep\" type=\"button\">btn-warning-deep</button>\n\t\t<button class=\"btn-warning\" type=\"button\">btn-warning</button>\n\t\t<button class=\"btn-warning-light\" type=\"button\">btn-warning-light</button>\n\t</div>\n\t<div>\n\t\t<h3 class=\"h3\">dark</h3>\n\t\t<button class=\"btn-dark-deep\" type=\"button\">btn-dark-deep</button>\n\t\t<button class=\"btn-dark\" type=\"button\">btn-dark</button>\n\t\t<button class=\"btn-dark-light\" type=\"button\">btn-dark-light</button>\n\t</div>\n\t<div>\n\t\t<h3 class=\"h3\">gray</h3>\n\t\t<button class=\"btn-gray-deep\" type=\"button\">btn-gray-deep</button>\n\t\t<button class=\"btn-gray\" type=\"button\">btn-gray</button>\n\t\t<button class=\"btn-gray-light\" type=\"button\">btn-gray-light</button>\n\t</div>\n\t<br>\n\n\n\n\n\n  <a class=\"btn-primary\">btn-primary</a>\n  <a class=\"btn-success\">btn-success</a>\n  <a class=\"btn-info\">btn-info</a>\n  <a class=\"btn-danger\">btn-danger</a>\n  <a class=\"btn-warning\">btn-warning</a>\n  <br/>\n  <br/>\n  <a class=\"btn-primary\" disabled>btn-primary</a>\n  <a class=\"btn-success disabled\">btn-success</a>\n  <a class=\"btn-info disabled\">btn-info</a>\n  <a class=\"btn-danger disabled\">btn-danger</a>\n  <a class=\"btn-warning disabled\">btn-warning</a>\n  <br/>\n  <br/>\n  <a class=\"btn-plain-primary\">btn-plain-primary</a>\n  <a class=\"btn-plain-success\">btn-plain-success</a>\n  <a class=\"btn-plain-danger\">btn-plain-danger</a>\n  <a class=\"btn-plain-dark\">btn-plain-dark</a>\n  <br/>\n  <br/>\n  <a class=\"btn-plain-primary disabled\">btn-plain-primary</a>\n  <a class=\"btn-plain-success disabled\">btn-plain-success</a>\n  <a class=\"btn-plain-danger disabled\">btn-plain-danger</a>\n  <a class=\"btn-plain-dark disabled\">btn-plain-dark</a>\n  <br/>\n  <br/>\n  <a class=\"btn-primary\">btn-primary</a>\n  <a class=\"btn-primary-xl\">btn-primary-xl</a>\n  <a class=\"btn-primary-xxl\">btn-primary-xxl</a>\n  <button class=\"btn-success-xxl\" disabled type=\"button\">btn-success-xxl</button>\n  <br/>\n  <br/>\n  <a class=\"btn-plain-primary\">btn-plain-primary</a>\n  <a class=\"btn-plain-primary-xl\">btn-plain-primary-xl</a>\n  <a class=\"btn-plain-primary-xxl\">btn-plain-primary-xxl</a>\n\n\n\n</div>\n";

/***/ }

});