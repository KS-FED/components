<template>
	<div style="margin-left: 50px;">
		<!-- 时间 -->
		<div class="time" style="margin-bottom: 200px;">
			<div class="time-input">
				<div class="col-auto"><i class="icon">&#xe616;</i></div>
				<div class="col-auto">
					<div class="select">
						<div class="select-hd">
							<div class="col">上午</div>
							<i class="icon col-auto">&#xe619;</i>
						</div>
						<div class="select-bd">
							<ul class="select-list">
								<li>上午</li>
								<li class="active">下午</li>
							</ul>
						</div>
					</div>
				</div>
				<input type="text" class="col">
			</div>
			<div class="time-list">
				<div class="select-bd">
					<ul class="select-list">
						<li>00:30</li>
						<li>01:00</li>
						<li class="active">01:30</li>
						<li>02:00</li>
						<li>02:30</li>
						<li>03:00</li>
						<li>03:30</li>
						<li>04:00</li>
						<li>04:30</li>
						<li>05:00</li>
						<li>05:30</li>
						<li>06:00</li>
						<li>06:30</li>
						<li>07:00</li>
						<li>07:30</li>
						<li>08:00</li>
						<li>08:30</li>
						<li>09:00</li>
						<li>09:30</li>
						<li>10:00</li>
						<li>10:30</li>
						<li>11:00</li>
						<li>11:30</li>
						<li>12:00</li>
						<li>12:30</li>
						<li>13:00</li>
						<li>13:30</li>
						<li>14:00</li>
						<li>14:30</li>
						<li>15:00</li>
						<li>15:30</li>
						<li>16:00</li>
						<li>16:30</li>
						<li>17:00</li>
						<li>17:30</li>
						<li>18:00</li>
						<li>18:30</li>
						<li>19:00</li>
						<li>19:30</li>
						<li>20:00</li>
						<li>20:30</li>
						<li>21:00</li>
						<li>21:30</li>
						<li>22:00</li>
						<li>22:30</li>
						<li>23:00</li>
						<li>23:30</li>
						<li>00:00</li>
					</ul>
				</div>
			</div>
		</div>

		<pre>
			<code class="html">
				<div class="time">
					<div class="time-input">
						<div class="col-auto"><i class="icon">&#xe616;</i></div>
						<div class="col-auto">
							<div class="select">
								<div class="select-hd">
									<div class="col">上午</div>
									<i class="icon col-auto">&#xe619;</i>
								</div>
								<div class="select-bd">
									<ul class="select-list">
										<li>上午</li>
										<li class="active">下午</li>
									</ul>
								</div>
							</div>
						</div>
						<input type="text" class="col">
					</div>
					<div class="time-list">
						<div class="select-bd">
							<ul class="select-list">
								<li>01:00</li>
								<li class="active">01:30</li>
								<li>02:00</li>
							</ul>
						</div>
					</div>
				</div>
			</code>
		</pre>

		<pre>
			<code class="scss">
				//  time时间组件
				.time{
					.time-input{  // 时间输入框
						// ......
						.select{
							// ......
							.select-hd{...}  // 上午下午  显示框
							.select-bd{...}  // 上午下午  下拉框
						}
					}
					.time-list{
						.select-bd{...}  // 时间下拉框
					}
				}
			</code>
		</pre>
	</div>
</template>