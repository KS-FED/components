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
     * @param  {[type]} year  [description]
     * @param  {[type]} month [description]
     * @param  {[type]} sgn   [+1|-1]
     * @return {[type]}       [description]
     */
    function api_ym(year,month,sgn){
        if(sgn){
            month = month + sgn
            month > 11 && (++ year)
            month < 0 && (-- year)
            month = api_month(month)
        }else {
            month = api_month(month)
        }
        return { year:year, month:month }
    }

    exports.api_ym = api_ym

    console.log(api_ym)

