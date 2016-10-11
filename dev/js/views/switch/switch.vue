<template>
	<div style="text-align: center">
    <!-- IosSwitch -->
     <div style="margin-top: 15px">
      <h4>IosSwitch:</h4>
      <ios-switch :disable="false" @change="changeHandle">
        <div slot="checkedChildren">O</div>
        <div slot="unCheckedChildren">F</div>
      </ios-switch>
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
              <ios-switch size="large"></ios-switch><br>
              <label>normal:</label>
              <ios-switch size="normal"></ios-switch><br>
              <label>small:</label>
              <ios-switch size="small"></ios-switch><br>
              <label>mini:</label>
              <ios-switch size="mini"></ios-switch><br>
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
              <ios-switch color="#00BCD4"></ios-switch><br>
              <label>#2196F3:</label>
              <ios-switch color="#2196F3"></ios-switch><br>
              <label>#F44336:</label>
              <ios-switch color="#F44336"></ios-switch><br>
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
              <ios-switch :disable="false"></ios-switch><br>
              <label>true:</label>
              <ios-switch :disable="true"></ios-switch><br>
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
              <ios-switch size="large">
                <div slot="checkedChildren">ON</div>
              </ios-switch>
              <br>
              <ios-switch size="large">
                <div slot="checkedChildren">开</div>
              </ios-switch>
            </td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr style="text-align: left">
            <td>unCheckedChildren</td>
            <td>表示在关闭状态下开关显示的文字</td>
            <td>String</td>
            <td>
              <ios-switch size="large">
                <div slot="unCheckedChildren">OFF</div>
              </ios-switch>
              <br>
              <ios-switch size="large">
                <div slot="unCheckedChildren">关</div>
              </ios-switch>
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
            <td>onChange</td>
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
          &lt;ios-switch :disable=&quot;false&quot; :def-checked=&quot;true&quot; color=&quot;#FF5722&quot;
              size=&quot;large&quot; :checked.sync=&quot;checked&quot;
          &gt;
              &lt;div slot=&quot;checkedChildren&quot;&gt;O&lt;/div&gt;
              &lt;div slot=&quot;unCheckedChildren&quot;&gt;F&lt;/div&gt;
          &lt;/ios-switch&gt;
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
