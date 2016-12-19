webpackJsonp([17],{276:function(t,e,c){var l,o,h={};l=c(277),o=c(278),t.exports=l||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var d="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(d.template=o),d.computed||(d.computed={}),Object.keys(h).forEach(function(t){var e=h[t];d.computed[t]=function(){return e}})},277:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{checked:!0,checkboxList:["TEST1","TEST2","TEST3"]}},methods:{changeHandle:function(t){console.info(t)}},created:function(){var t=this;setTimeout(function(){t.checkboxList=["TEST1","TEST3"]},3e3)}}},278:function(t,e){t.exports=' <div style="text-align: left"> <div style="margin-top: 20px"> <ks-checkbox></ks-checkbox> </div> <h4>KsCheckbox</h4> <div style="margin-top: 15px"> 属性部分 <h4 style="text-align: left">属性:</h4> <hr> <div class=table-striped> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>效果</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr style="text-align: left"> <td>color</td> <td>颜色, 颜色是一个十六进制的数值</td> <td>String</td> <td> <label>#00BCD4:</label> <ks-checkbox color=#00BCD4></ks-checkbox><br> <label>#2196F3:</label> <ks-checkbox color=#2196F3></ks-checkbox><br> <label>#F44336:</label> <ks-checkbox color=#F44336></ks-checkbox><br> </td> <td>---</td> <td style="color: #04BE02">#04BE02</td> </tr> <tr style="text-align: left"> <td>checked</td> <td>属性, 用于判断当前 checkbox 是否被选中</td> <td>Boolean</td> <td> --- </td> <td>true, false</td> <td>---</td> </tr> <tr style="text-align: left"> <td>disable</td> <td>属性, 表示组件是否禁用</td> <td>Boolean</td> <td> <label>false:</label> <ks-checkbox :checked.sync=checked :disable=true></ks-checkbox><br> <label>true:</label> <ks-checkbox></ks-checkbox><br> </td> <td>true, false</td> <td>false</td> </tr> </tbody> </table> </div> Event 部分 <div style="margin-top: 10px"></div> <h4 style="text-align: left">Event:</h4> <hr> <div class=table-striped> <table> <thead> <tr> <th>名称</th> <th>说明</th> <th>类型</th> <th>效果</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr style="text-align: left"> <td>Change</td> <td>checkbox 发生改变</td> <td>event</td> <td>---</td> <td>---</td> <td>---</td> </tr> </tbody> </table> </div> <div style="margin-top: 10px"></div> 代码示例 <div style="margin-top: 10px"></div> <h4 style="text-align: left">代码示例:</h4> <hr> <pre class=html style="text-align: left">\n      <code class=html>\n            &lt;ks-checkbox @change=&quot;changeHandle&quot;&gt\n              &lt;span &gt;我是开关标签&lt;/span&gt;\n            &lt;/ks-checkbox&gt;\n      </code>\n    </pre> </div> <h4>KsCheckboxGroup</h4> <ks-checkbox-group :v-model.sync=checkboxList @change=changeHandle> <ks-checkbox name=TEST1>TEST1</ks-checkbox> <ks-checkbox name=TEST2>TEST2</ks-checkbox> <ks-checkbox name=TEST3>TEST3</ks-checkbox> </ks-checkbox-group> <div style="margin-top: 15px"> 属性部分 <h4 style="text-align: left">属性:</h4> <hr> <div class=table-striped> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>效果</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr style="text-align: left"> <td>v-model</td> <td>组内所选中的项, 是用该特性必须给予 ksCheckbox name</td> <td>Array</td> <td> <ks-checkbox-group :v-model.sync=checkboxList @change=changeHandle> <ks-checkbox name=TEST1>TEST1</ks-checkbox> <ks-checkbox name=TEST2>TEST2</ks-checkbox> <ks-checkbox name=TEST3>TEST3</ks-checkbox> </ks-checkbox-group> </td> <td>---</td> <td>---</td> </tr> </tbody> </table> </div> Event 部分 <div style="margin-top: 10px"></div> <h4 style="text-align: left">Event:</h4> <hr> <div class=table-striped> <table> <thead> <tr> <th>名称</th> <th>说明</th> <th>类型</th> <th>效果</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr style="text-align: left"> <td>Change</td> <td>在组内 checkbox 发生变化是触发</td> <td>event</td> <td>---</td> <td>---</td> <td>---</td> </tr> </tbody> </table> </div> 代码示例 <div style="margin-top: 10px"></div> <h4 style="text-align: left">代码示例:</h4> <hr> <pre class=html style="text-align: left">\n      <code class=html>\n           &lt;ks-checkbox-group :v-model.sync=&quot;checkboxList&quot; @change=&quot;changeHandle&quot;&gt;\n              &lt;ks-checkbox name=&quot;TEST1&quot;&gt;TEST1&lt;/ks-checkbox&gt;\n              &lt;ks-checkbox name=&quot;TEST2&quot;&gt;TEST2&lt;/ks-checkbox&gt;\n              &lt;ks-checkbox name=&quot;TEST3&quot;&gt;TEST3&lt;/ks-checkbox&gt;\n            &lt;/ks-checkbox-group&gt;\n      </code>\n    </pre> </div> <div class=checkbox style="margin-top: 30px"> <input type=checkbox id=checkboxMale> <label class=ui-checkbox for=checkboxMale></label> <label for=checkboxMale>男款</label> <input type=checkbox id=checkboxFemale> <label class=ui-checkbox for=checkboxFemale></label> <label for=checkboxFemale>女款</label> </div> <pre>\n    <code class=html>\n      <div class=checkbox>\n          <input type=checkbox id=checkboxMale1>\n          <label class=ui-checkbox for=checkboxMale></label>\n          <label for=checkboxMale>男款</label>\n\n          <input type=checkbox id=checkboxFemale1>\n          <label class=ui-checkbox for=checkboxFemale></label>\n          <label for=checkboxFemale>女款</label>\n      </div>\n    </code>\n    </pre> <pre>\n    <code class=scss>\n      // 多选组件\n      .checkbox {\n        // .....\n        .ui-checkbox {...} // 未选中样式\n        .ui-checkbox::before {...} // 选中样式\n      }\n    </code>\n    </pre> </div> '}});
//# sourceMappingURL=17.e7c4928e.js.map