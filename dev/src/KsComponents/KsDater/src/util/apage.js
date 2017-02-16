
import {parse , stringify , prev_month, cur_month , next_month , ymd} from './lang' 

/**
 * [one_page_date 获取某页日期数据 上个月(部分) + 当前月(满月) + 下个月(部分)]
 * @param  {Number}   year  [年]
 * @param  {Number}   month [月]
 * @param  {Function} cb    [description]
 * @return {Array}         [description]
 */
exports.one_page_date = function(year,month,cb){
	// console.log(year,month)
	// 生成年月
	var pre_date = prev_month( year,month,-1 )
	var date = cur_month( year,month )
	var next_date = next_month( year,month, +1 )
	// 年月最后一天
	var prev = month_last_day( pre_date.year , pre_date.month )
	var cur = month_last_day( date.year,date.month )
	var next = month_last_day( next_date.year , next_date.month )
	
	// 当页面数据
	var prev_month_dates = get_prev_month_dates( prev.day , prev.dater )
	var full_month_dates = get_full_month_dates( cur.dater , cb)

	var arr = [].concat( prev_month_dates ).concat( full_month_dates )
	var next_month_dates = get_next_month_dates( arr.length , next.dater )
	arr = arr.concat( next_month_dates )
	// console.log(arr)
	return arr

}
/**
 * [month_last_day 返回“某”月份的最后一天]
 * @param  {[type]} year  [2016]
 * @param  {[type]} month [月份 0~11]
 * @return {[type]}       {day:1~6、0 , dater:2016-09-30}
 */

function month_last_day (year,month){
   
	var  date , year = year , month = month+1 , date_temp

	// console.log(year+'-'+month+'-'+1)
	// date_temp = new Date(year+'-'+month+'-'+1)
	date_temp = new Date()
	date_temp.setFullYear(year,month,1)
	date = new Date(date_temp.getTime() - (24*60*60*1000))

	return {
		day : date.getDay() || 7,
		dater : stringify(date)
	}

}

exports.month_last_day = month_last_day


/**
 * [get_prev_month_dates 上个月(部分)]
 * @param  {[type]} day   [周几]
 * @param  {[type]} dater [YY-MM-DD]
 */
function get_prev_month_dates (day,dater){

	var ymdr = ymd(dater),
		counts = (day+1)%7 || 7

	return get_month_dates( counts , ymdr.d , ymdr.ym , 'disabled' )
}
// 当前月(满月) YY-MM-DD
function get_full_month_dates (dater,cb){
	var ymdr = ymd(dater),
		counts = ymdr.d                    

	return  get_month_dates( counts , ymdr.d , ymdr.ym,cb)

}
exports.get_full_month_dates = get_full_month_dates
// 下个月(部分)
function get_next_month_dates(counts,dater) {
	
	var ymdr = ymd(dater)
		counts = 42 - counts

	return get_month_dates( counts , counts , ymdr.ym , 'disabled' )
}

/**
 * [get_month_dates 获取整月或部分的数据]
 * @param  {[type]} counts    [天数 -> length]
 * @param  {[type]} datetext   [日期号 -> 31]
 * @param  {[type]} status [ym -> 2016-10]
 * @param  {[type]} status ['disable|active']
 * @return {[type]}        [{datetext:26,status:'active',dater:'2016-10-03'},{}[,...]]
 */
function get_month_dates (counts,datetext,ym,status){


	var arr = [] , dater, status_temp = '' , datetext_temp 


	while(counts--){

		datetext_temp = ''+datetext --
		// 2016-10,03 -> 2016-10-03
		dater = ym + '-' + ('0' + datetext_temp).slice(-2) 

		
		if(typeof status === 'function'){
			status_temp = status(dater)
		}
		// 'disabled' 或 选中的值
		// if( status!='active' || dater === this.value ){
		//     status_temp = status
		// // 范围值 头尾 + 中间
		// }else if(~this.range_daters.indexOf(dater)){
		//     status_temp = (this.range_daters[0] == dater || this.range_daters[this.range_daters.length-1] == dater)
		//                     ? status : 'scope-bg'
		
		// }else if(~this.point_daters.indexOf(dater)){
		//     status_temp = 'active'
		// }else{
		//     status_temp = ''
		// }
		
		if(status == 'disabled'){
			status_temp = status
		}

		arr.push({
			datetext:datetext_temp,
			status:status_temp,
			dater:dater
		})
	}
	return arr.reverse()

}