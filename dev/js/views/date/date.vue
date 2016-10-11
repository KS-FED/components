<template>
	<div>
		<div class="date" style="margin-bottom: 350px;">
			<i class="icon col-auto">&#xe615;</i>
			<input type="text">
			<div class="picker-wrap">
				<div class="date-head">
					<div class="retreat">&lt;</div>
					<div class="year">2016年</div>
					<div class="interstice"></div>
					<div class="month">4月</div>
					<div class="next">&gt;</div>
				</div>
				<div class="date-week">
					<span>一</span>
					<span>二</span>
					<span>三</span>
					<span>四</span>
					<span>五</span>
					<span class="week">六</span>
					<span class="week">日</span>
				</div>
				<div class="date-days">
					<span class="pass">1</span>
					<span class="pass">2</span>
					<span class="pass">3</span>
					<span class="pass">4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
				</div>
				<div class="date-days">
					<span>8</span>
					<span>9</span>
					<span>10</span>
					<span>11</span>
					<span>12</span>
					<span>13</span>
					<span>14</span>
				</div>
				<div class="date-days">
					<span>15</span>
					<span>16</span>
					<span class="active">17</span>
					<span>18</span>
					<span>19</span>
					<span>20</span>
					<span>21</span>
				</div>
				<div class="date-days">
					<span>22</span>
					<span>23</span>
					<span>24</span>
					<span>25</span>
					<span>26</span>
					<span>27</span>
					<span>28</span>
				</div>
				<div class="date-days">
					<span>29</span>
					<span>30</span>
					<span class="future">1</span>
					<span class="future">2</span>
					<span class="future">3</span>
					<span class="future">4</span>
					<span class="future">5</span>
				</div>
				<div class="date-btn">
					<span class="today">今天</span>
					<span class="clear">清除</span>
				</div>
			</div>
		</div>

		<pre>
        <code class="html">
    	<div class="date">
			<i class="icon col-auto">&#xe615;</i>
			<input type="text">
			<div class="picker-wrap">
				<div class="date-head">
					<div class="retreat">&lt;</div>
					<div class="year">2016年</div>
					<div class="interstice"></div>
					<div class="month">4月</div>
					<div class="next">&lt;</div>
				</div>
				<div class="date-week">
					<span>一</span>
					<span>二</span>
					<span>三</span>
					<span>四</span>
					<span>五</span>
					<span class="week">六</span>
					<span class="week">日</span>
				</div>
				<div class="date-days">
					<span class="pass">1</span>
					<span class="pass">2</span>
					<span class="pass">3</span>
					<span class="pass">4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
				</div>
				<div class="date-days">
					<span>8</span>
					<span>9</span>
					<span>10</span>
					<span>11</span>
					<span>12</span>
					<span>13</span>
					<span>14</span>
				</div>
				<div class="date-days">
					<span>15</span>
					<span>16</span>
					<span class="active">17</span>
					<span>18</span>
					<span>19</span>
					<span>20</span>
					<span>21</span>
				</div>
				<div class="date-days">
					<span>22</span>
					<span>23</span>
					<span>24</span>
					<span>25</span>
					<span>26</span>
					<span>27</span>
					<span>28</span>
				</div>
				<div class="date-days">
					<span>29</span>
					<span>30</span>
					<span class="future">1</span>
					<span class="future">2</span>
					<span class="future">3</span>
					<span class="future">4</span>
					<span class="future">5</span>
				</div>
				<div class="date-btn">
					<span class="today">今天</span>
					<span class="clear">清除</span>
				</div>
			</div>
		</div>
        </code>
        </pre>

        <pre>
        <code class="scss">
		// date日期组件
		.date{
			//......
		    .picker-wrap{
				//......
			    .date-head{
			    	//......
			    	.retreat{...}     // 向前
			    	.year{...}        // 年
			    	.month{...}       // 月
			    	.interstice{...}  // 空隙
			    	.next{...}        // 向后
			    }
			    .date-week{
			    	//......
			    	.week{...}  // 星期
			    }
			    .date-days{
			    	//......
			    	.pass{...}   // 今天之前的日期
			    	.future{...}  // 下个月
			    	.active{...}  // 日期被选中的样式
			    }
			    .date-btn{
			    	//......
			    	.today{...}   // 今天btn样式
			    	.clear{...}   // 清除btn样式
			    }
			}
		}
        </code>
        </pre>

	</div>
</template>