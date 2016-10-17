<template>
  <div style="text-align: left">
    <div style="margin-top: 20px">
      <ks-radio></ks-radio>
    </div>

    <h4>KsRadio</h4>
    <div style="margin-top: 15px;">
      <!-- 属性部分 -->
      <h4 style="text-align: left">属性:</h4>
      <hr>
      <div class="table-striped">
        <table>
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>效果</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr style="text-align: left">
            <td>color</td>
            <td>颜色, 颜色是一个十六进制的数值</td>
            <td>String</td>
            <td>
              <label>#00BCD4:</label>
              <ks-radio color="#00BCD4" name="TEST0"></ks-radio><br>
              <label>#2196F3:</label>
              <ks-radio color="#2196F3" name="TEST0"></ks-radio><br>
              <label>#F44336:</label>
              <ks-radio color="#F44336" name="TEST0"></ks-radio><br>
            </td>
            <td>---</td>
            <td style="color: #04BE02">#04BE02</td>
          </tr>
          <tr style="text-align: left">
            <td>checked</td>
            <td>
              <p>属性, 当前选中项, 如果设置了 checked 又设置了 defChecked, defChecked 权重是大于 checked 的, checked 的值为设置 defChecked 的 value 值</p>
            </td>
            <td>Any</td>
            <td>
              <ks-radio color="#00BCD4" :checked.sync="checked" :value="1" name="TEST-1"></ks-radio><br>
              <ks-radio color="#2196F3" :checked.sync="checked" :value="2" name="TEST-1"></ks-radio><br>
              <ks-radio color="#F44336" :checked.sync="checked" :value="3" name="TEST-1"></ks-radio><br>
            </td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr style="text-align: left">
            <td>defChecked</td>
            <td>属性, 给定默认选中项</td>
            <td>Boolean</td>
            <td>
              <!--
                以下 name 都为 TEST 同时设置了 checked defChecked checked 值为 1, 选中为 3 也就是最后一个,
                defChecked 权重是大于 checked 的, 在设置 defChecked checked 的值也会变成设置 defChecked 组件的 value
              -->
              <ks-radio color="#00BCD4":checked.sync="checked1" :value="1" name="TEST">TEST</ks-radio><br>
              <ks-radio color="#2196F3":checked.sync="checked1" :value="2" name="TEST">TEST, TEST</ks-radio><br>
              <ks-radio color="#F44336":checked.sync="checked1" :value="3" :def-checked="true" name="TEST">TEST, TEST, TEST</ks-radio><br>
            </td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          <tr style="text-align: left">
            <td>disable</td>
            <td>属性, 表示组件是否禁用</td>
            <td>Boolean</td>
            <td>
              <label>false:</label>
              <ks-radio :checked.sync="checked" :disable="true"></ks-radio><br>
              <label>true:</label>
              <ks-radio ></ks-radio><br>
            </td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- 代码示例 -->
      <div style="margin-top: 10px;"></div>
      <h4 style="text-align: left">代码示例:</h4>
      <hr>
      <pre class="html" style="text-align: left">
        <code class="html">
              &lt;!--
                以下 name 都为 TEST 同时设置了 checked defChecked checked 值为 1, 选中为 3 也就是最后一个,
                defChecked 权重是大于 checked 的, 在设置 defChecked checked 的值也会变成设置 defChecked 组件的 value
              --&gt;
              &lt;ks-radio color=&quot;#00BCD4&quot;:checked.sync=&quot;checked1&quot; :value=&quot;1&quot; name=&quot;TEST&quot;&gt;TEST&lt;/ks-radio&gt;&lt;br&gt;
              &lt;ks-radio color=&quot;#2196F3&quot;:checked.sync=&quot;checked1&quot; :value=&quot;2&quot; name=&quot;TEST&quot;&gt;TEST, TEST&lt;/ks-radio&gt;&lt;br&gt;
              &lt;ks-radio color=&quot;#F44336&quot;:checked.sync=&quot;checked1&quot; :value=&quot;3&quot; :def-checked=&quot;true&quot; name=&quot;TEST&quot;&gt;TEST, TEST, TEST&lt;/ks-radio&gt;&lt;br&gt;
        </code>
      </pre>
    </div>

    <h4>KsBtnRadio</h4>
    <div style="margin-top: 15px;">

      <!-- btn样式的Radio -->
      <ks-radio-group :v-model.sync="checkboxList" @change="changeHandle">
        <ks-btn-radio name="TEST1" value="132">TEST1</ks-btn-radio>
        <ks-btn-radio name="TEST2" value="456">TEST2</ks-btn-radio>
        <ks-btn-radio name="TEST3" value="789">TEST3</ks-btn-radio>
      </ks-radio-group>

      <!-- 代码示例 -->
      <div style="margin-top: 10px;"></div>
      <h4 style="text-align: left">代码示例:</h4>
      <hr>
      <pre class="html" style="text-align: left">
        <code class="html">
              &lt;!--
                以下 name 都为 TEST 同时设置了 checked defChecked checked 值为 1, 选中为 3 也就是最后一个,
                defChecked 权重是大于 checked 的, 在设置 defChecked checked 的值也会变成设置 defChecked 组件的 value
              --&gt;
              &lt;ks-radio color=&quot;#00BCD4&quot;:checked.sync=&quot;checked1&quot; :value=&quot;1&quot; name=&quot;TEST&quot;&gt;TEST&lt;/ks-radio&gt;&lt;br&gt;
              &lt;ks-radio color=&quot;#2196F3&quot;:checked.sync=&quot;checked1&quot; :value=&quot;2&quot; name=&quot;TEST&quot;&gt;TEST, TEST&lt;/ks-radio&gt;&lt;br&gt;
              &lt;ks-radio color=&quot;#F44336&quot;:checked.sync=&quot;checked1&quot; :value=&quot;3&quot; :def-checked=&quot;true&quot; name=&quot;TEST&quot;&gt;TEST, TEST, TEST&lt;/ks-radio&gt;&lt;br&gt;
        </code>
      </pre>
    </div>

    <h4>KsRadioGroup</h4>
    <ks-radio-group :v-model.sync="checkboxList" @change="changeHandle">
      <ks-radio name="TEST1">TEST1</ks-radio>
      <ks-radio name="TEST2">TEST2</ks-radio>
      <ks-radio name="TEST3">TEST3</ks-radio>
    </ks-radio-group>
    <div style="margin-top: 15px;">

      <!-- 属性部分 -->
      <h4 style="text-align: left">属性:</h4>
      <hr>
      <div class="table-striped">
        <table>
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>效果</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr style="text-align: left">
            <td>v-model</td>
            <td>组内所选中的项, 是用该特性必须给予 ksCheckbox name</td>
            <td>Array</td>
            <td>
              <ks-radio-group :v-model.sync="checkboxList" @change="changeHandle">
                <ks-radio name="TEST1" value="132">TEST1</ks-radio>
                <ks-radio name="TEST2" value="456">TEST2</ks-radio>
                <ks-radio name="TEST3" value="789">TEST3</ks-radio>
              </ks-radio-group>
            </td>
            <td>---</td>
            <td>---</td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- Event 部分 -->
      <div style="margin-top: 10px;"></div>
      <h4 style="text-align: left">Event:</h4>
      <hr>
      <div class="table-striped">
        <table>
          <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
            <th>类型</th>
            <th>效果</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr style="text-align: left">
            <td>Change</td>
            <td>在组内 radio 发生变化时触发, 参数是选中的 radio 的 value</td>
            <td>event</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- 代码示例 -->
      <div style="margin-top: 10px;"></div>
      <h4 style="text-align: left">代码示例:</h4>
      <hr>
      <pre class="html" style="text-align: left">
        <code class="html">
             &lt;ks-radio-group @change=&quot;changeHandle&quot;&gt;
                &lt;ks-radio name=&quot;TEST1&quot;&gt;TEST1&lt;/ks-radio&gt;
                &lt;ks-radio name=&quot;TEST2&quot;&gt;TEST2&lt;/ks-radio&gt;
                &lt;ks-radio name=&quot;TEST3&quot;&gt;TEST3&lt;/ks-radio&gt;
              &lt;/ks-radio-group&gt;
        </code>
      </pre>
    </div>

    <div class="radio">
      <input type="radio" id="radioMale1" name="type">
      <label class="ui-radio" for="radioMale1"></label>
      <label for="radioMale">男款</label>

      <input type="radio" id="radioFemale2" name="type">
      <label class="ui-radio" for="radioFemale2"></label>
      <label for="radioFemale">女款</label>
    </div>

    <pre>
	    <code class="html">
		<div class="radio">
		    <input type="radio" id="radioMale" name="type">
		    <label class="ui-radio" for="radioMale"></label>
		    <label for="radioMale">男款</label>

		    <input type="radio" id="radioFemale" name="type">
		    <label class="ui-radio" for="radioFemale"></label>
		    <label for="radioFemale">女款</label>
		</div>
	    </code>
	    </pre>

    <pre>
	    <code class="scss">
	        // 单选组件
	        .radio {
	            // .....
	            .ui-radio {...} // 未选中样式
	            .ui-radio::before {...} // 选中样式
	        }
	    </code>
    </pre>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        checked1: 1,
        checked: 1,
        currentChecked: 'TEST1'
      }
    },
    methods: {
      changeHandle (data) {
        console.info(data)
      }
    },
    created () {
    }
  }
</script>
