<template>
	<div style="margin: 100px;">

    <div class="input-container">
      <input type="text" v-model="inputValueH" v-ks-scroll-bound-value:0:24:0:1="scrollHandleH"/>:
      <input type="text" v-model="inputValueM" v-ks-scroll-bound-value:0:59:0:1="scrollHandleM"/>:
      <input type="text" v-model="inputValueS" v-ks-scroll-bound-value:0:59:0:1="scrollHandleS"/>
      <br>
      <!--v-ks-scroll-bound-value:0:86400000:0:30000="scrollHandleHMS"-->
      <div class="HMS-container" style="position: relative">
        <input type="text" v-el:hsmEntity class="HSM-entity" v-model="inputValueHMS"/>
        <div class="HMS-H" @mouseenter="hover(0,2)" v-ks-scroll-bound-value:0:86400000:0:3600000="scrollHandleH"></div>
        <div class="HMS-M" @mouseenter="hover(3,5)" v-ks-scroll-bound-value:0:86400000:0:60000="scrollHandleM"></div>
        <div class="HMS-S" @mouseenter="hover(6,8)" v-ks-scroll-bound-value:0:86400000:0:1000="scrollHandleS"></div>
      </div>
    </div>

		<!-- 文字提示 -->
		<div class="KsTooltipLeft" cid="KsTooltipLeft">
			<p>Left Center 提示信息</p>
			<span></span>
		</div>
		<div class="KsTooltipTop" cid="KsTooltipTop">
			<p>Top Center 提示信息</p>
			<span></span>
		</div>
		<div class="KsTooltipRight" cid="KsTooltipRight">
			<p>Right Center 提示信息</p>
			<span></span>
		</div>
		<div class="KsTooltipBottom" cid="KsTooltipBottom">
			<p>Bottom Center 提示信息</p>
			<span></span>
		</div>

		<br/>

		<pre>
			<code class="html">
				<div class="KsTooltipLeft" cid="KsTooltipLeft">
					<p>Left Center 提示信息</p>
					<span></span>
				</div>
				<div class="KsTooltipTop" cid="KsTooltipTop">
					<p>Top Center 提示信息</p>
					<span></span>
				</div>
				<div class="KsTooltipRight" cid="KsTooltipRight">
					<p>Right Center 提示信息</p>
					<span></span>
				</div>
				<div class="KsTooltipBottom" cid="KsTooltipBottom">
					<p>Bottom Center 提示信息</p>
					<span></span>
				</div>
			</code>
		</pre>

    <br>

    <ks-tool-tip placement="top-start" content="I'am is tips text.">
      <button>click me</button>
    </ks-tool-tip>

    <br>

    <ks-tool-tip placement="right" content="I'am is tips text.">
      <button>click me</button>
    </ks-tool-tip>

    <br>

    <ks-tool-tip placement="bottom" content="I'am is tips text.">
      <button>click me</button>
    </ks-tool-tip>

    <br>

    <ks-tool-tip placement="left" content="I'am is tips text.">
      <!--<div style="height: 2800px;width: 100px;background: red;margin:300px auto 0">click me</div>-->
    </ks-tool-tip>

	</div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      inputValueH: 0,
      inputValueM: 0,
      inputValueS: 0,
      inputValueHMS: '00:00:00',
      HMSValue: 0,
    }
  },

  watch: {
    HMSValue () {
      let date = new Date(this.HMSValue)

      date.setMinutes( date.getMinutes() + date.getTimezoneOffset() )

      this.setHSM('H', date.getHours())
      this.setHSM('M', date.getMinutes())
      this.setHSM('S', date.getSeconds())
    }
  },

  methods: {
    hover (start, end) {
      let HSMEntity = this.$els.hsmentity

      HSMEntity.focus()
      HSMEntity.setSelectionRange(start, end)
    },
    setHSM (type, value) {
      let HMSValue = this.inputValueHMS
      let times = HMSValue.split(':')

      switch (type)
      {
        case 'H':
        {
          let H = String(value).length === 2 ? String(value) : '0' + value
          this.inputValueHMS = `${H}:${times[1]}:${times[2]}`
          break
        }
        case 'M':
        {
          let M = String(value).length === 2 ? String(value) : '0' + value
          this.inputValueHMS = `${times[0]}:${M}:${times[2]}`
          break
        }
        case 'S':
        {
          let S = String(value).length === 2 ? String(value) : '0' + value
          this.inputValueHMS = `${times[0]}:${times[1]}:${S}`
          break
        }
      }
    },
    scrollHandleH (value, delta, options) {
      this.inputValueH = value

      if (delta > 0) {
        if (value >= options.min) {
          this.HMSValue -= options.step
        }
      } else {
        if (value < options.max) {
          this.HMSValue += options.step
        }
      }

      return this.HMSValue
    },
    scrollHandleM (value, delta, options) {
      this.inputValueM = value

      if (delta > 0) {
        if (value >= options.min) {
          this.HMSValue -= options.step
        }
      } else {
        if (value < options.max) {
          this.HMSValue += options.step
        }
      }

      return this.HMSValue
    },
    scrollHandleS (value, delta, options) {
      this.inputValueS = value

      if (delta > 0) {
        if (value >= options.min) {
          this.HMSValue -= options.step
        }
      } else {
        if (value < options.max) {
          this.HMSValue += options.step
        }
      }

      return this.HMSValue
    },
    scrollHandleHMS (value) {
      let time = ''
      let date = new Date(value)

      date.setMinutes( date.getMinutes() + date.getTimezoneOffset() )

      console.log(value)
      console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
      this.inputValueHMS = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
  }

}
</script>

<style lang="scss">
  .HMS-container {position: relative}
  .HMS-entity {height: 100%;}
  .HMS-H, .HMS-M, .HMS-S {
    position: absolute;
    display: inline-block;
    height: 100%;
    width: 15px;
    /*border: 1px solid red;*/
  }
  .HMS-H {left: 0;}
  .HMS-M {left: 20px;}
  .HMS-S {left: 40px;}
</style>
