<template>
<<<<<<< HEAD
	<div>
		<!-- 开关 -->
		<div class="switch">
	        <input type="checkbox" id="switchMale">
	        <label class="ui-switch" for="switchMale">
	        	<span class="begin">未上线</span>
	        	<span class="end">已上线</span>
	        </label>
	    </div>

	    <pre>
	    	<code class="html">
			<div class="switch">
			    <input type="checkbox" id="switchMale">
			    <label class="ui-switch" for="switchMale">
			    	<span class="begin">未上线</span>
			    	<span class="end">已上线</span>
			    </label>
			</div>
	    	</code>
	    </pre>

	    <pre>
	    	<code class="scss">
			// switch开关组件
			.switch{
			    .ui-switch {
			        // ......
			        .begin{...} // 未上线样式
			        .end{...} // 已上线样式
			    }
			}
	    	</code>
	    </pre>
	</div>
</template>
=======
	<div style="text-align: center">
    <!-- IosSwitch -->
     <div style="margin-top: 15px">
      <h4>IosSwitch:</h4>
      <ks-switch :disable="false" @change="changeHandle">
        <div slot="checkedChildren">O</div>
        <div slot="unCheckedChildren">F</div>
      </ks-switch>
    </div>

    <!-- 纯 CSS 实现的 Switch -->
    <div style="margin-top: 15px">
      <h4>纯 CSS 实现的 Switch</h4>
      <input type="checkbox" class="switch">
    </div>

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
            <td>size</td>
            <td>大小, 在设计稿上按钮一共有种大小</td>
            <td>String</td>
            <td>
              <label>large:</label>
              <ks-switch size="large"></ks-switch><br>
              <label>normal:</label>
              <ks-switch size="normal"></ks-switch><br>
              <label>small:</label>
              <ks-switch size="small"></ks-switch><br>
              <label>mini:</label>
              <ks-switch size="mini"></ks-switch><br>
            </td>
            <td>large, normal, small, mini</td>
            <td>normal</td>
          </tr>
          <tr style="text-align: left">
            <td>color</td>
            <td>颜色, Switch 的颜色是一个十六进制的数值</td>
            <td>String</td>
            <td>
              <label>#00BCD4:</label>
              <ks-switch color="#00BCD4"></ks-switch><br>
              <label>#2196F3:</label>
              <ks-switch color="#2196F3"></ks-switch><br>
              <label>#F44336:</label>
              <ks-switch color="#F44336"></ks-switch><br>
            </td>
            <td>---</td>
            <td style="color: #04BE02">#04BE02</td>
          </tr>
          <tr style="text-align: left">
            <td>checked</td>
            <td>属性, 用于判断当前开关是否是打开状态</td>
            <td>Boolean</td>
            <td>
              ---
            </td>
            <td>true, false</td>
            <td>---</td>
          </tr>
          <tr style="text-align: left">
            <td>disable</td>
            <td>属性, 表示组件是否禁用</td>
            <td>Boolean</td>
            <td>
              <label>false:</label>
              <ks-switch :disable="false"></ks-switch><br>
              <label>true:</label>
              <ks-switch :disable="true"></ks-switch><br>
            </td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: 10px;"></div>
      <!-- Slot 部分 -->
      <h4 style="text-align: left">Slot:</h4>
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
            <td>checkedChildren</td>
            <td>表示在打开状态下开关显示的文字</td>
            <td>String</td>
            <td>
              <ks-switch size="large">
                <div slot="checkedChildren">ON</div>
              </ks-switch>
              <br>
              <ks-switch size="large">
                <div slot="checkedChildren">开</div>
              </ks-switch>
            </td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr style="text-align: left">
            <td>unCheckedChildren</td>
            <td>表示在关闭状态下开关显示的文字</td>
            <td>String</td>
            <td>
              <ks-switch size="large">
                <div slot="unCheckedChildren">OFF</div>
              </ks-switch>
              <br>
              <ks-switch size="large">
                <div slot="unCheckedChildren">关</div>
              </ks-switch>
            </td>
            <td>---</td>
            <td>---</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: 10px;"></div>
      <!-- Event 部分 -->
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
            <td>在状态切换时会触发的事件, 该事件会携带当前的 Switch 状态传递给处理函数</td>
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
          &lt;ks-switch :disable=&quot;false&quot; :def-checked=&quot;true&quot; color=&quot;#FF5722&quot;
              size=&quot;large&quot; :checked.sync=&quot;checked&quot;
          &gt;
              &lt;div slot=&quot;checkedChildren&quot;&gt;O&lt;/div&gt;
              &lt;div slot=&quot;unCheckedChildren&quot;&gt;F&lt;/div&gt;
          &lt;/ks-switch&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        checked: true
      }
    },
    methods: {
      changeHandle (data) {
        console.info(data)
      }
    }
  }
</script>
>>>>>>> develop
