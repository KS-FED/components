export default {
        props: {
            align:{type: String,default:'left'},
            width: { type: String},
            readonly: { type: Boolean, default: false },
            disabled:{type: Boolean, default: false},
            value: { 
                type: String, 
                coerce(val) {
                    // console.log(val)
                    if(val){
                        return val.slice(0,10)    
                    }else{
                        return val
                    }
                    
                } 
            },
            valueDefault: { type: String, default: '' },
            format: { type: String, default: 'YYYY-MM-DD' },
            limit:{coerce(val) {

                var time = 0

                if(val == 'yesterday'){
                    time = new Date()
                    ////console.log(time.getMonth(),time.getDate(),time.add(-1, "days").getTime()  )   
                    return [{
                        min:time.add(0, "days").getTime()-3600000*24
                    }]               
                }else{
                    // ////console.log(val,'===')
                    val && val.forEach((t)=>{
                        t.min = (new Date(t.min)).getTime()-3600000*24
                        t.max = (new Date(t.max)).getTime()
                    })
                }
                return val
                
                
            }}
        },
        data () {
            var months = (function(){
                var arr = []
                for(var i=0;i<12;i++){
                    arr.push(i+1+'月')
                }
                return arr
            })()

            return {
                days: ['日', '一', '二', '三', '四', '五', '六'],
                months: months,
                dates:[],
                now: new Date()
            }
        },
        watch: {
            now () {
                this.dates = this.get_dates()
            }
        },
        methods: {
            
            // 切换年
            click_year (flag) {
                this.now.setFullYear(this.now.getFullYear() + flag)
                this.now = new Date(this.now)
            },
            // 切换月
            click_month (flag) {
                this.now.setMonth(this.now.getMonth() + flag,1)
                this.now = new Date(this.now)
            },
            // 解析date
            parse (str) {
                var time = new Date(str)
                return isNaN(time.getTime()) ? null : time
            },
            // 转换date为string
            stringify (time = this.now, format = this.format) {
                var year = time.getFullYear()
                var month = time.getMonth() + 1
                var date = time.getDate()
                var monthName = this.months[time.getMonth()]

                var map = {
                    YYYY: year,
                    MMM: monthName,
                    MM: ('0' + month).slice(-2),
                    M: month,
                    DD: ('0' + date).slice(-2),
                    D: date
                }
                return format.replace(/Y+|M+|D+/g, function (str) {
                    return map[str]
                })
            },
            // 获取某页日期数据 上个月(部分) + 当前月(满月) + 下个月(部分)
            get_dates (year = this.now.getFullYear(),month = this.now.getMonth()){
                // console.log(year,month)
                // 生成年月
                var pre_date = this.convert_year_month( year,month,'reduce' )
                var date = this.convert_year_month( year,month )
                var next_date = this.convert_year_month( year,month,'add' )
                // 年月最后一天
                var prev = this.get_month_last_day( pre_date.year , pre_date.month )
                var cur = this.get_month_last_day( date.year,date.month )
                var next = this.get_month_last_day( next_date.year , next_date.month )
                
                // 当页面数据
                var prev_month_dates = this.get_prev_month_dates( prev.day , prev.dater )
                var full_month_dates = this.get_full_month_dates( cur.dater )

                var arr = [].concat( prev_month_dates ).concat( full_month_dates )
                var next_month_dates = this.get_next_month_dates( arr.length , next.dater )
                return arr.concat( next_month_dates )

            },
            /**
             * [get_month_last_day 返回“当前”月份的最后一天]
             * @param  {[type]} month [月份 0~11]
             * @param  {[type]} year  []
             * @return {[type]}       {day:1~6、0 , date:1~31}
             */
            get_month_last_day ( year = this.now.getFullYear() , month = this.now.getMonth() ){
               
                var  date , year = year , month = month+1 , date_temp

                // //console.log(year+'-'+month+'-'+1)
                // date_temp = new Date(year+'-'+month+'-'+1)
                date_temp = new Date()
                date_temp.setFullYear(year,month,1)
                date = new Date(date_temp.getTime() - (24*60*60*1000))
                
                return {
                    day : date.getDay() || 7,
                    dater : this.stringify(date)
                }

            },
            /**
             * [get_month_dates 获取某月或部分数据]
             * @param  {[type]} day    [周几 ]
             * @param  {[type]} datetext   [日期 31号]
             * @param  {[type]} status ['disable','active']
             * @return {[type]}        []
             */
            get_month_dates (counts,datetext,ym,status){

                var arr = [] , dater, status_val = '' , date_text 



                while(counts--){
                    date_text = ''+datetext --

                    date_text.length == 1 && (date_text = '0' + date_text)

                    dater = ym + '-' + date_text 

                    if( dater === this.value || status!='active'){
                        status_val = status
                    }else if(this.range_daters && ~this.range_daters.indexOf(dater)){
                        status_val = (this.range_daters[0] == dater || this.range_daters[this.range_daters.length-1] == dater)
                                        ? status : 'scope-bg'
                    }else{
                        status_val = ''
                    }

                    arr.push({
                        datetext:date_text,
                        status:status_val,
                        dater:dater
                    })
                }
                return arr.reverse()
            },
            /**
             * [get_prev_month_dates 上个月(部分)]
             * @param  {[type]} day   [周几]
             * @param  {[type]} dater [YY-MM-DD]
             * @return {[type]}       [description]
             */
            get_prev_month_dates (day,dater){
                var ym_d = this.split_dater(dater)

                return this.get_month_dates( (day+1)%7 || 7, ym_d.d , ym_d.ym , 'disabled' )
            },
            // 当前月(满月) YY-MM-DD
            get_full_month_dates (dater){
                var ym_d = this.split_dater(dater)

                return  this.get_month_dates( ym_d.d , ym_d.d , ym_d.ym , 'active')
                    

                // return arr.map((_date)=>{

                //     temp_date.setDate( _date.datetext )
                //     if(this.stringify(temp_date) === this.value){
                //         // console.log(this.value)
                //         _date.status = 'active'
                //     }
                    
                //     return _date
                // })

            },
            // 下个月(部分)
            get_next_month_dates(counts,dater) {
                
                var ym_d = this.split_dater(dater)
                    counts = 42 - counts

                return this.get_month_dates( counts,counts,ym_d.ym,'disabled' )
            },
            // YY-MM-DD -> {ym:YY-MM,d:DD}
            split_dater(dater){
                var dater = dater.split('-')
                    
                return {
                    // year:dater[0],
                    ym:dater[0]+'-'+dater[1],
                    d:dater[2]
                }
            },
            // 转换月份
            convert_month(month){
                month = month > 11 ? 0 
                              : month < 0 
                                      ? 11 : month
                return month
            },
            /**
             * [convert_year_month 转换年月]
             * @param  {[type]} year  [any]
             * @param  {[type]} month [0~11]
             * @param  {[type]} type  [+,-]
             * @return {[type]}       []
             */
            convert_year_month(year,month,type){
                // console.log(year,month,type)
                if('add' == type ){
                    month+1 > 11 && (++ year)
                    month = this.convert_month(month+1)
                }else if('reduce' == type ){
                    month-1 < 0 && (-- year)
                    month = this.convert_month(month-1)
                }else {
                    month = this.convert_month(month)
                }

                return { year:year, month:month }
            }
        },

        created () {
            this.value = this.value || this.stringify(this.now)
            this.dates = this.get_dates()
            this.now = this.parse(this.value) || this.parse(this.valueDefault) || new Date()

            console.log(this.value)
            console.log('============== this.value')


         
        }

    }