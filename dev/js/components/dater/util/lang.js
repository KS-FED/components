    // 解析date
    exports.parse = function (str) {
        var dater = new Date(str)
        return isNaN(dater.getTime()) ? null : dater
    }
    // 转换date为string
    exports.stringify = function  (dater , format) {

        var year = dater.getFullYear()
        var month = dater.getMonth() + 1
        var date = dater.getDate()
        // var monthName = months[dater.getMonth()]

        format = format || 'YYYY-MM-DD'

        var map = {
            YYYY: year,
            // MMM: monthName,
            MM: ('0' + month).slice(-2),
            M: month,
            DD: ('0' + date).slice(-2),
            D: date
        }
        return format.replace(/Y+|M+|D+/g, function (str) {
            return map[str]
        })
    }


    
    // 上一个月
    exports.prev_month = function(year,month){
        return api_ym(year,month,-1)
    }
    // 当前月
    exports.cur_month = function(year,month){
        return api_ym(year,month)
    }
    // 下一个月
    exports.next_month = function(year,month){
        return api_ym(year,month,+1)
    }
    /**
     * [ymd 获取年月日]
     * @param  {[type]} dater [2016-10-01]
     * @return {[type]}       [{y:'2016',m:'10',d:'01'}]
     */
    exports.ymd = function(dater){
        var dater = dater.split('-')
            
        return {
            y:dater[0],
            m:dater[1],
            ym:dater[0]+'-'+dater[1],
            d:dater[2]
        }
    }


    // number -> [0~11]
    function api_month(month){
        month = month > 11 ? 0 
                      : month < 0 
                              ? 11 : month
        return month
    }
    exports.api_month = api_month

    /**
     * [api_ym Date api 中的年月]
     * @param  {[Number]} year      [2016]
     * @param  {[Number]} month     [8]
     * @param  {[Number]} sgn       [+1|-1]
     * @return {[Object]}           [{year:'2016',month:'08'}]
     */
    function api_ym(year,month,sgn){
        year = parseInt(year)
        month = parseInt(month)
        if(sgn){
            month = month + sgn
            month > 11 && (++ year)
            month < 0 && (-- year)
            month = api_month(month)
        }else {
            month = api_month(month)
        }
        return { year:year, month:month ,stringify:year+'-'+(month+1) }
    }
    exports.api_ym = api_ym
    /**
     * [split_dt 分割 '2016-10-11 10:01:03']
     * @return {[type]} [description]
     */
    function split_dt(val){
        if(val && (/:(\d{2}):(\d{2}):(\d{2})/g.test(val) || /(\d{2}):(\d{2}):(\d{2})/g.test(val))){
            var dater_timer= val.replace(/:(\d{2}):(\d{2}):(\d{2})/g,'$1:$2:$3').replace(/(\d{2}):(\d{2}):(\d{2})/g,'|$1:$2:$3').split('|')
            return {
                dater:dater_timer[0].trim(),
                timer:dater_timer[1]
            }
        }
        return ''
    }
    
    exports.split_dt = split_dt


