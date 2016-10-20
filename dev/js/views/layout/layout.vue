<style type="text/css" media="screen">
	.desc {
		width:60px;
	}
	.bor {
		border:1px solid #ccc;
	}
	.group {

	}
	.group-item {
		width:33.33%;
	}
	.spacing-20{
		border-spacing: 20px;
	}
	.m-20{
		margin: 20px;
	}
</style>
<template>
	<div style="padding-left:30px;">
		<h2>layout</h2>
		<div class="row">
			<span class="col h4 desc">说明 :</span>
			<div>
				<p>推荐使用 table、table-cell （*此布局不支持marge）+ inline-block 布局</p>
				<p>table、table-cell 转换为 （row、col）</p>
				<p>inline-block 转换为 （ib-w、ib）</p>
				<br>
			</div>
		</div>
		<div class="row">
			<span class="col h4 desc">实例 :</span>
			<div>
				<h4>row、col</h4>
				<div class="row">
					<div class="col bor">
						col
					</div>
					<div class="col bor">
						col
					</div>
				</div>	

				<br>

				<h4>row-auto、col-auto</h4>
				<div class="row-auto">
					<div class="col bor">
						col
					</div>
					<div class="col-auto bor">
						col-auto
					</div>
				</div>

				<br>

				<h5>border-spacing 特性</h5>
				<div class="row spacing-20 bor">
					<div class="col bor">
						<div>
							
						</div>
						左
					</div>
					<div class="col bor">
						右边
					</div>
				</div>	
				<br>
				<h5>不用border-spacing</h5>
				<div class="row bor">
					<div class="col">
						<div class="bor m-20">
							左
						</div>
					</div>
					<div class="col">
						<div class="bor m-20">
							右边
						</div>
						
					</div>
				</div>	
				<br>
				<br>
				<h4>ib-w、ib</h4>
				<div class="ib-w">
					<div class="ib bor">
						ib
					</div>
					<div class="ib bor">
						ib
					</div>
				</div>	

				<br>
				<h4>组合</h4>
				<div>
					<div class="row bor" style="padding:0 10px;">
						<div class="col" style="text-align: left;">
							<h1>知店</h1>
						</div>
						<div class="col" style="text-align: right;vertical-align: middle;">
							<span>图片</span> <div class="ib">账户名称</div>
						</div>
					</div>
					<div class="bor" style="padding:4px 10px;">
						<p>首页 / 储值卡</p>
					</div>
				</div>
				<div class="row col-space bor">
					<div class="col" style="width:300px;">
						<div class="bor">
							左-上
						</div>
						<div class="bor">
							<p>左-下</p>
							<ul>
								<li>1</li>
								<li>1</li>
								<li>1</li>
								<li>1</li>
								<li>1</li>
							</ul>
						</div>
					</div>
					<div class="col">
						<div class="row clear-col-space">
							<div class="col bor">
								右-上-左
							</div>
							<div class="col" style="width:15px;"></div>
							<div class="col bor">
								右-上-中
							</div>
							<div class="col" style="width:15px;"></div>
							<div class="col bor">
								右-上-右
							</div>
						</div>
						<div class="ib-w">
							<div class="ib bor" style="width:50%;">
								右-上-左
							</div>
							<div class="ib bor" style="width:50%;">
								右-上-中
							</div>
						</div>
						<div class="ib-w group">
							<div class="ib bor group-item">
								右-上-左
							</div>
							<div class="ib bor group-item">
								右-上-中
							</div>
							<div class="ib bor group-item">
								右-上-右
							</div>
						</div>
						<div class="bor">
							右边	
						</div>
						
					</div>
				</div>	
				<br>
				<h5>嵌套</h5>
				<div>
					<div class="row col-space bor">
						<div class="col" style="width:300px;">
							<div class="row clear-col-space bor">
								<div class="col bor">
								<div class="row col-space bor">
								
									<div class="col bor">
										左-上-左	
									</div>
									<div class="col bor">
										左-上-左	
									</div>
								</div>
								</div>
								<div class="col bor">
									左-上-右
								</div>
							</div>
							<div class="bor">
								左-下
							</div>
						</div>
						<div class="col bor">
							右边
						</div>
					</div>	
				</div>	
			</div>

			
			
		</div>
		
	</div>
	<br><br><br><br>
</template>