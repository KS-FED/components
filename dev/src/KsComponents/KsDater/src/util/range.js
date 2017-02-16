import {cur_month, next_month , parse , stringify} from './lang'
import { get_full_month_dates , month_last_day , one_page_date} from './apage'


// 选择范围取值
function get_range_dates(range_dater){
    range_dater = range_dater || [] 
    var prev_date = range_dater[0]
    var next_date = range_dater[1]

    if(!prev_date || !next_date || gt(prev_date,next_date) ) return null
    if(prev_date === next_date) return range_dater

    var prev = split_ym(prev_date)
    var next = split_ym(next_date)
    // console.log(prev,next)
    if(prev.year == next.year && prev.month == next.month){
        return one_month(prev , next)
    }else{
        return span_month(prev , next , next_date)    
    }
    
}


// 选择同一个月
function one_month(prev , next){
    
    var month = prev.month+1,
        counts = next.datetext - prev.datetext + 1,
        arr = [] , val ,ym

    ;(''+month).length == 1 && (month = '0'+month) 
    ym = prev.year+'-'+(month)
        
    while(counts--){
        val = +prev.datetext+counts;
        (''+val).length == 1 && (val = '0'+val) 
        arr.push(ym+'-'+val)
    }
    
    return arr
}
/**
 * [span_month 选择两个月以上]
 *     第一个月部分日期 + 中间完整月份日期 + 最后一个月部分日期
 * @param  {[type]}   prev      [范围第一个值]
 * @param  {Function} next      [范围第二个值]
 * @param  {[type]}   next_date []
 * @return {[type]}             [description]
 */
function span_month(prev , next , next_date){

    var prev_dates = first_month_part(prev.year , prev.month , prev.datetext)
    // console.log(prev_dates)
    var dates = full_month_dates(loop_full_month(prev,next)).reduce((pre,cur,i,arr)=>{
        return pre.concat(cur)
    },[])
    var next_dates = last_month_part(next_date)
    return prev_dates.concat([].concat(dates)).concat(next_dates).map((_date)=>{
        return _date.dater
    })

}




function first_month_part(year , month , datetext){
    var prev = cur_month(year , month)
    var last_day = month_last_day(prev.year,prev.month)

    return get_full_month_dates(last_day.dater).filter((_date)=>{
        if( parseInt(_date.datetext) >= parseInt(datetext) ){
            return true
        }
        
    })
}

function last_month_part(dater){
    return get_full_month_dates(dater)
}


// [ '2015-10-03','2015-10-03'[,...] ]
function full_month_dates(dater_arr){
    return dater_arr.map((dater)=>{
        return get_full_month_dates(dater)
    })
}

// 尾调用
function loop_full_month(prev,next,arr){
    var last_day , prev_ym

    arr = arr || []

    prev_ym = next_month(prev.year , prev.month)

    if(prev_ym.year+''+(+prev_ym.month+10) >= next.year+''+(+next.month+10)) return arr
     
    last_day = month_last_day(prev_ym.year,prev_ym.month)
    arr.push(last_day.dater)
    return loop_full_month(prev_ym,next,arr)

}

function gt(start,end){
    return +start.replace(/-/g,'') > +end.replace(/-/g,'')
}

function split_ym(dater){
    dater = dater.split('-')
    return {
        year:dater[0],
        month:dater[1]-1,
        datetext:dater[2]
    }
}



module.exports = {
    split_ym,
    get_range_dates
}