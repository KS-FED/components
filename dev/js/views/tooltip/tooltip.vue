<template>
	<div style="margin: 100px;">

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

    <ks-tool-tip placement="top" content="I'am is tips text.">
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
      <div style="height: 2800px;width: 100px;background: red;margin:300px auto 0">click me</div>
    </ks-tool-tip>

	</div>
</template>
