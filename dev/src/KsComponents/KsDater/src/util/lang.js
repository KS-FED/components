    /**
     * 约定
     *     date : new Date()
     *     // v-m 对象
     *     _date : {dater:'2016-10-14',datetext:'',status:''}
     *     dater : 2016-10-10
     */
    // 周几
    exports.get_days = function () {
        return ['日', '一', '二', '三', '四', '五', '六']
    }
    // 月份
    exports.get_months = function () {
        var arr = []
        for(var i=0;i<12;i++){
            arr.push(i+1+'月')
        }
        return arr
    }
    // 解析date
    exports.parse = function (str) {
        var date = new Date(str)
        return isNaN(date.getTime()) ? null : date
    }
    // 转换date为string
    exports.stringify = function  (date , format) {

        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var date = date.getDate()
        // var monthName = months[date.getMonth()]

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


    
    var addzero = function(len){
        return (''+Math.pow(10,len)).substr(1)
    }

    function fullzero(val,len){
        var real_len = (''+val).length 
        len = len || 2
        return real_len < len 
                        ? addzero(len-real_len)+val : val
    }
    

    /**
     * (string , YYYY-MM-DD HH:mm:ss) => 2016-10-11 10:10:10
     */
    function format_conver(dater_timer,format) {
        if(!dater_timer || typeof dater_timer != 'string') return ''
        var datas = [] , reg = ''
        format = format || 'YYYY-MM-DD HH:mm:ss'
        reg = format.replace(/\w+/g,'\\d+')
        reg = new RegExp(reg,'g')

        var matchs = dater_timer.match(reg)
        if(matchs){
            datas = matchs[0].match(/\d+/g)
        }
        // else{
        //     return format_conver(dater_timer+' 00:00:00',format)
        // }
        
        var map_old = {}
        format.match(/\w+/g).forEach(function(key,i){
            map_old[key] = datas[i]
        })
        
        var map = createAllDT()
        
        Object.keys(map_old).forEach(function(key){
            map[key] = map_old[key] || map[key]
        })
        
        format.match(/Y+|M+|D+|H+|m+|s+/g).forEach((key,i)=>{
            map[key] =  fullzero(map[key],key.length)
        })

        return format.replace(/Y+|M+|D+|H+|m+|s+/g, function (str) {
            return map[str]
        })
        
    }
    
    /**
     * [createAllDT 返回所有可能的YMDHms]
     * @return {[type]} [description]
     */
    function createAllDT(){

        var _date = new Date()
        var year = _date.getFullYear()
        var month = _date.getMonth()+1
        var date =  _date.getDate()
        var hour =  _date.getHours()
        var minute = _date.getMinutes()
        var second = _date.getSeconds()

        // YYYY-MM-DD HH:mm:ss

        return {
            YYYY: year,
            MM: ('0' + month).slice(-2),
            M: month,
            DD: ('0' + date).slice(-2),
            D: date,
            HH:('0' + hour).slice(-2),
            H:hour,
            mm:('0' + minute).slice(-2),
            m:minute,
            ss:('0' + second).slice(-2),
            s:second,
        }
    }
    

    exports.fullzero = fullzero
    exports.format_conver = format_conver

