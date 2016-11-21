<template>
	<div>


	<h3>左右请添加 no-select 属性</h3>
	<br><br>
	<ks-pure-dater value="2016-10-12" v-on:change="current_change"></ks-pure-dater>
	<ks-dater value="2016-10-12" v-on:change="current_change"></ks-dater>
	<br><br>
	 <ks-date-picker :value="date_val" placeholder="写点啥" :exclude="true" v-on:change="current_change"></ks-date-picker>
	<br><br>
	<ks-date-picker value="2016-10-12" v-on:change="current_change"></ks-date-picker>
	
	<br><br>
	<ks-date-picker-multi v-on:change="current_change"></ks-date-picker-multi>
	<hr>
	<br><br>
	<ks-date-picker-multi v-on:change="current_change"></ks-date-picker-multi> 
	<hr>
	<hr>
	<hr>
	<h2>css 部分</h2>

		
		<!-- 日期默认样式——周——范围 -->
		<div class="date-scope readonly" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<div class="ks-col">
					<div class="ks-row-auto">
						<div class="ks-col"><input type="text"></div>
						<i class="icon ks-col-auto scope-icon">&#xe677;</i>
						<div class="ks-col"><input type="text"></div>
					</div>
				</div>
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="interstice"></div>
						<div class="month">4月</div>
						<div class="next">&gt;</div>
					</div>
					<div class="date-week">
						<span class="week">日</span>
						<span>一</span>
						<span>二</span>
						<span>三</span>
						<span>四</span>
						<span>五</span>
						<span class="week">六</span>
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
						<span class="begin-active">17</span>
						<span class="scope-bg">18</span>
						<span class="scope-bg">19</span>
						<span class="scope-bg">20</span>
						<span class="scope-bg">21</span>
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
						<span class="reset">已选择30天</span>
					</div>
				</div>
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="interstice"></div>
						<div class="month">5月</div>
						<div class="next">&gt;</div>
					</div>
					<div class="date-week">
						<span class="week">日</span>
						<span>一</span>
						<span>二</span>
						<span>三</span>
						<span>四</span>
						<span>五</span>
						<span class="week">六</span>
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
						<span class="end-active">17</span>
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
						<span class="collect"></span>
					</div>
				</div>
			</div>
		</div>
		<pre>
		<code class="html">
		<div class="date-scope" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<div class="ks-col">
					<div class="ks-row-auto">
						<div class="ks-col"><input type="text"></div>
						<i class="icon ks-col-auto scope-icon">&#xe677;</i>
						<div class="ks-col"><input type="text"></div>
					</div>
				</div>
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="interstice"></div>
						<div class="month">4月</div>
						<div class="next">&gt;</div>
					</div>
					<div class="date-week">
						<span class="week">日</span>
						<span>一</span>
						<span>二</span>
						<span>三</span>
						<span>四</span>
						<span>五</span>
						<span class="week">六</span>
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
						<span class="scope-bg">19</span>
						<span class="scope-bg">20</span>
						<span class="scope-bg">21</span>
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
						<span class="reset">重置</span>
					</div>
				</div>
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="interstice"></div>
						<div class="month">5月</div>
						<div class="next">&gt;</div>
					</div>
					<div class="date-week">
						<span class="week">日</span>
						<span>一</span>
						<span>二</span>
						<span>三</span>
						<span>四</span>
						<span>五</span>
						<span class="week">六</span>
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
						<span class="collect">已选择30天</span>
					</div>
				</div>
			</div>
		</div>
		</code>
		</pre>

		<pre>
        <code class="scss">
		// date-month月份组件
		.date-month{
			//......
		    .picker-wrap{
				//......
			    .date-bd{
			    	.date-head{
			    	//......
				    	.retreat{...}     // 向前
				    	.year{...}        // 年
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
		}
        </code>
        </pre>

		<!-- 日期默认样式——周 -->
		<div class="date" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="interstice"></div>
						<div class="month">4月</div>
						<div class="next">&gt;</div>
					</div>
					<div class="date-week">
						<span class="week">日</span>
						<span>一</span>
						<span>二</span>
						<span>三</span>
						<span>四</span>
						<span>五</span>
						<span class="week">六</span>
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
		</div>

		<pre>
        <code class="html">
		<div class="date">
			<div class="date-input">
				<div class="ks-col-auto"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="interstice"></div>
						<div class="month">4月</div>
						<div class="next">&gt;</div>
					</div>
					<div class="date-week">
						<span class="week">日</span>
						<span>一</span>
						<span>二</span>
						<span>三</span>
						<span>四</span>
						<span>五</span>
						<span class="week">六</span>
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
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="interstice"></div>
						<div class="month">4月</div>
						<div class="next">&gt;</div>
					</div>
					<div class="date-week">
						<span class="week">日</span>
						<span>一</span>
						<span>二</span>
						<span>三</span>
						<span>四</span>
						<span>五</span>
						<span class="week">六</span>
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
			    .date-bd{
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
		}
        </code>
        </pre>

		<!-- 日期默认样式——月 -->
		<div class="date-month" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="next">&gt;</div>
					</div>
					
					<div class="date-days">
						<span class="pass">一月</span>
						<span class="pass">二月</span>
						<span class="pass">三月</span>
						<span class="pass">四月</span>
					</div>
					<div class="date-days">
						<span>五月</span>
						<span>六月</span>
						<span>七月</span>
						<span>八月</span>
					</div>
					<div class="date-days">
						<span>九月</span>
						<span>十月</span>
						<span class="active">十一月</span>
						<span>十二月</span>
					</div>
					<div class="date-btn">
						<span class="today">本月</span>
						<span class="clear">清除</span>
					</div>
				</div>
			</div>
		</div>

		<pre>
        <code class="html">
		<div class="date-month" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2016年</div>
						<div class="next">&gt;</div>
					</div>
					
					<div class="date-days">
						<span class="pass">一月</span>
						<span class="pass">二月</span>
						<span class="pass">三月</span>
						<span class="pass">四月</span>
					</div>
					<div class="date-days">
						<span>五月</span>
						<span>六月</span>
						<span>七月</span>
						<span>八月</span>
					</div>
					<div class="date-days">
						<span>九月</span>
						<span>十月</span>
						<span class="active">十一月</span>
						<span>十二月</span>
					</div>
					<div class="date-btn">
						<span class="today">本月</span>
						<span class="clear">清除</span>
					</div>
				</div>
			</div>
		</div>
        </code>
        </pre>

        <pre>
        <code class="scss">
		// date-month月份组件
		.date-month{
			//......
		    .picker-wrap{
				//......
			    .date-bd{
			    	.date-head{
			    	//......
				    	.retreat{...}     // 向前
				    	.year{...}        // 年
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
		}
        </code>
        </pre>

		<!-- 日期默认样式——年 -->
		<div class="date-year" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2010年-2019年</div>
						<div class="next">&gt;</div>
					</div>
					
					<div class="date-days">
						<span class="pass">2010</span>
						<span class="pass">2011</span>
						<span class="pass">2012</span>
						<span class="pass">2013</span>
					</div>
					<div class="date-days">
						<span>2014</span>
						<span>2015</span>
						<span class="active">2016</span>
						<span>2017</span>
					</div>
					<div class="date-days">
						<span>2018</span>
						<span>2019</span>
						<span>2010</span>
						<span></span>
					</div>
					<div class="date-btn">
						<span class="today">今年</span>
						<span class="clear">清除</span>
					</div>
				</div>
			</div>
		</div>

		<pre>
        <code class="html">
		<div class="date-year" style="margin-bottom: 400px;">
			<div class="date-input">
				<div class="ks-col-auto"><i class="icon">&#xe615;</i></div>
				<input type="text" class="ks-col">
			</div>
			<div class="picker-wrap">
				<div class="date-bd">
					<div class="date-head">
						<div class="retreat">&lt;</div>
						<div class="year">2010年-2019年</div>
						<div class="next">&gt;</div>
					</div>
					
					<div class="date-days">
						<span class="pass">2010</span>
						<span class="pass">2011</span>
						<span class="pass">2012</span>
						<span class="pass">2013</span>
					</div>
					<div class="date-days">
						<span>2014</span>
						<span>2015</span>
						<span class="active">2016</span>
						<span>2017</span>
					</div>
					<div class="date-days">
						<span>2018</span>
						<span>2019</span>
						<span>2010</span>
						<span></span>
					</div>
					<div class="date-btn">
						<span class="today">今年</span>
						<span class="clear">清除</span>
					</div>
				</div>
			</div>
		</div>
        </code>
        </pre>

        <pre>
        <code class="scss">
		// date-year年份组件
		.date-year{
			//......
		    .picker-wrap{
				//......
			    .date-bd{
			    	.date-head{
			    	//......
				    	.retreat{...}     // 向前
				    	.year{...}        // 年
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
		}
        </code>
        </pre>

	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				date_val:'2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14'
			}
		},
		methods:{
			current_change(val){
				console.log('current_change',val)
			}
		},
		ready(){
			// setTimeout(()=>{
			// 	this.date_val = '2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14'
			// },3000)
		}

	}
</script>