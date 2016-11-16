<template>
	<!--<div class="KsCitySelect" cid="KsCitySelect">-->
		<!--<div class="_input">-->
			<!--<div class="_icon"><i class="icon">&#xe668;</i></div>-->
			<!--<input type="text" class="col">-->
		<!--</div>-->
		<!--<div class="_bd">-->
			<!--<ul class="_tab">-->
			    <!--<li>省</li>-->
			    <!--<li class="line"><a>|</a></li>-->
			    <!--<li>市</li>-->
			    <!--<li class="line"><a>|</a></li>-->
			    <!--<li class="active">区/县</li>-->
			<!--</ul>-->
			<!--<div class="_content">-->
				<!--<table class="_list">-->
				<!--<tr>-->
					<!--<td>山西</td>-->
					<!--<td class=" active">辽宁</td>-->
					<!--<td>新疆</td>-->
					<!--<td>山东</td>-->
				<!--</tr>-->
				<!--<tr>-->
					<!--<td>山西</td>-->
					<!--<td>辽宁</td>-->
					<!--<td>新疆</td>-->
					<!--<td>山东</td>-->
				<!--</tr>-->
				<!--<tr>-->
					<!--<td>山西</td>-->
					<!--<td>辽宁</td>-->
					<!--<td>新疆</td>-->
					<!--<td>山东</td>-->
				<!--</tr>-->
				<!--<tr>-->
					<!--<td>山西</td>-->
					<!--<td>辽宁</td>-->
					<!--<td>新疆</td>-->
					<!--<td>山东</td>-->
				<!--</tr>-->
				<!--<tr>-->
					<!--<td>山西</td>-->
					<!--<td>辽宁</td>-->
					<!--<td>新疆</td>-->
					<!--<td>山东</td>-->
				<!--</tr>-->
				<!--<tr>-->
					<!--<td>山西</td>-->
					<!--<td>辽宁</td>-->
					<!--<td>新疆</td>-->
					<!--<td>山东</td>-->
				<!--</tr>-->
			<!--</table>-->
			<!--</div>-->
		<!--</div>-->
	<!--</div>-->

  <div class="power-point" style="padding: 20px;">
    <ul class="point-list">
      <li>1. 输入框是不可输入的</li>
      <li>2. 弹出选择层应该层叠顺序较高, 不然会出现被遮盖的情况</li>
      <li>3. 其实我觉得 `|` 竖线可以用 css 实现不用 dom, 如果使用 dom 就会出现 ul 中有装饰性又功能性的东西拓展起来不太方便</li>
    </ul>
  </div>

  <div class="playground">
    <ks-city-select :data-source.sync="data" item-text-key="name"
                    @switch="tabSwitchHanle"></ks-city-select>

    <pre class="document">
      ## 属性
      |------|------|------|
      | 属性 | 示意 | 描述 |
      | tabs | tab 数组 |  默认值为 ['省', '市', '区/县'] 传入几个就会生成几个 tab |
      | dataSource | 数据源 | 用作显示当前 tab 页下内容 |
      | lineSize | 一行展示数据的多少 | 默认值为 4 代表一行显示几个数据 |
      | itemTextKey | 用于显示的成员名 | 用于显示的 key, dataSource 成员需要用于显示的字段 |
      ---
      ## 事件
      |------|------|------|
      | 事件 | 示意 | 描述 |
      | switch | tab 发生切换时产生的事件 | 在此事件中携带了当前切换至第几个 tab 的数据, e.g: 如果切换至第一个 tab 传入值响应函数的值为 0 |

      > 在 switch 事件中如果不是选择城市发生的切换事件 switch 事件的第二个参数永远为 `null`, 否则第二个参数是当前选中城市所属于在 `dataSource` 重点额成员
    </pre>
  </div>

</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        data: [{"id":11,"code":11,"name":"北京市1"},{"id":13,"code":13,"name":"河北省"},{"id":21,"code":21,"name":"辽宁省"},{"id":31,"code":31,"name":"上海市"},{"id":32,"code":32,"name":"江苏省"},{"id":33,"code":33,"name":"浙江省"},{"id":34,"code":34,"name":"安徽省"},{"id":35,"code":35,"name":"福建省"},{"id":36,"code":36,"name":"江西省"},{"id":37,"code":37,"name":"山东省"},{"id":42,"code":42,"name":"湖北省"},{"id":43,"code":43,"name":"湖南省"},{"id":44,"code":44,"name":"广东省"},{"id":45,"code":45,"name":"广西壮族自治区"},{"id":50,"code":50,"name":"重庆市"},{"id":51,"code":51,"name":"四川省"},{"id":53,"code":53,"name":"云南省"},{"id":61,"code":61,"name":"陕西省"}],
        data1: [{"id":11,"code":11,"name":"北京市1"},{"id":13,"code":13,"name":"河北省"},{"id":21,"code":21,"name":"辽宁省"},{"id":31,"code":31,"name":"上海市"},{"id":32,"code":32,"name":"江苏省"},{"id":33,"code":33,"name":"浙江省"},{"id":34,"code":34,"name":"安徽省"},{"id":35,"code":35,"name":"福建省"},{"id":36,"code":36,"name":"江西省"},{"id":37,"code":37,"name":"山东省"},{"id":42,"code":42,"name":"湖北省"},{"id":43,"code":43,"name":"湖南省"},{"id":44,"code":44,"name":"广东省"},{"id":45,"code":45,"name":"广西壮族自治区"},{"id":50,"code":50,"name":"重庆市"},{"id":51,"code":51,"name":"四川省"},{"id":53,"code":53,"name":"云南省"},{"id":61,"code":61,"name":"陕西省"}],
        data2: [{"id":11,"code":11,"name":"北京市2"},{"id":13,"code":13,"name":"河北省"},{"id":21,"code":21,"name":"辽宁省"},{"id":31,"code":31,"name":"上海市"},{"id":32,"code":32,"name":"江苏省"},{"id":33,"code":33,"name":"浙江省"},{"id":34,"code":34,"name":"安徽省"},{"id":35,"code":35,"name":"福建省"}],
        data3: []
      }
    },

    methods: {
      tabSwitchHanle (pos, data) {
        this.data = this[`data${pos + 1}`]
        console.log(pos, data)
      }
    }
  }
</script>

<style lang="scss">
</style>
