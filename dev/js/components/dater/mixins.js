export default {
        props: {
            align:{type: String,default:'left'},
            width: { type: String},
            readonly: { type: Boolean, default: false },
            disabled:{type: Boolean, default: false},
            value: { 
                type: String, 
                coerce(val) {
                    // ////console.log(val)
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
                // this.update()
                this.dates = this.get_dates()
            },
            show () {
                this.dates = this.get_dates()
            }
        },
        methods: {
            get_disable(val) {

                var flag = false
                if(!this.limit) return
                
                flag = this.limit.some((t)=>{
                    if(t.min && t.max){
                        if(val>=t.min && val<=t.max) return true
                    }else if(t.min){
                        if(val<=t.min) return true
                    }else if(t.max){
                        if(val>=t.max) return true
                    }
                })

                return flag
            },
            close () {
                this.show = false;
            },
            clear() {
                this.value = ''
            },
            
            
            click_year (flag) {
                this.now.setFullYear(this.now.getFullYear() + flag);
                this.now = new Date(this.now);
            },
            click_month (flag) {
                this.now.setMonth(this.now.getMonth() + flag,1);
                this.now = new Date(this.now);
            },
            pick_date (event) {
                console.log(this.dates[event.target.id],(''+this.dates[event.target.id]).split('_')[1])

                // if( 'date-disable' == status) return
                // this.show = false;
                // this.now = new Date(this.date[index].time);
                // this.value = this.stringify();

            },
            parse (str) {
                var time = new Date(str);
                return isNaN(time.getTime()) ? null : time;
            },
            stringify (time = this.now, format = this.format) {
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                var date = time.getDate();
                var monthName = this.months[time.getMonth()];

                var map = {
                    YYYY: year,
                    MMM: monthName,
                    MM: ('0' + month).slice(-2),
                    M: month,
                    DD: ('0' + date).slice(-2),
                    D: date
                };
                return format.replace(/Y+|M+|D+/g, function (str) {
                    return map[str];
                });
            },
            get_dates (year = this.now.getFullYear(),month = this.now.getMonth()){

                // //console.log(month)                
                var pre_date = this.convert_year_month( year,month,'reduce' )
                var date = this.convert_year_month( year,month )
                var next_date = this.convert_year_month( year,month,'add' )

                var prev = this.get_month_last_day( pre_date.year , pre_date.month )
                var cur = this.get_month_last_day( date.year,date.month )
                var next = this.get_month_last_day( next_date.year , next_date.month )
                
                // //console.log(prev)
                // //console.log(cur)
                // //console.log(next)
                // return 
                // //console.log(prev)

                var prev_month_dates = this.get_prev_month_dates( prev.day , prev.dater )
                var full_month_dates = this.get_full_month_dates( cur.dater )

                var arr = [].concat( prev_month_dates ).concat( full_month_dates )
                var next_month_dates = this.get_next_month_dates( arr.length , next.dater )
                return arr.concat( next_month_dates )

            },
            /**
             * [get_month_last_day 返回月份的最后一天]
             * @param  {[type]} month [月份 0~11]
             * @param  {[type]} year  []
             * @return {[type]}       {day:1~6、0 , date:1~31}
             */
            get_month_last_day ( year = this.now.getFullYear() , month = this.now.getMonth() ){
                // month = 
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
             * [get_month_dates 获取月份数据]
             * @param  {[type]} day    [周几 ]
             * @param  {[type]} date   [日期 31号]
             * @param  {[type]} status ['disable','active']
             * @return {[type]}        []
             */
            get_month_dates (counts,date,year_month_str,status){

                var arr = [] , date_text

                while(counts--){
                    date_text = date --
                    arr.push({
                        text:date_text,
                        status:status,
                        date:year_month_str + date_text 
                    })
                }
                return arr.reverse()
            },
            /**
             * [get_prev_month_dates 上个月数据]
             * @param  {[type]} day   [description]
             * @param  {[type]} dater [description]
             * @return {[type]}       [description]
             */
            get_prev_month_dates (day,dater){
                var date = dater.split('-'),
                    year_month_str = date[0]+'-'+date[1]+'-'

                return this.get_month_dates( (day+1)%7 || 7, date[2] , year_month_str , 'disabled' )
            },
            // 获取满月数据
            get_full_month_dates (dater){
                var date = dater.split('-'),
                    year_month_str = date[0]+'-'+date[1]+'-',
                    arr = this.get_month_dates( date[2] , date[2] , year_month_str ),
                    temp_date = new Date( dater )

                    // //console.log(dater)
                return arr.map((date)=>{

                    temp_date.setDate( date.text )
                    if(this.stringify(temp_date) === this.value){
                        date.status = 'active'
                    }
                    
                    return date
                })

            },
            // 下个月数据
            get_next_month_dates(counts,dater) {
                var date = dater.split('-'),
                    year_month_str = date[0]+'-'+date[1]+'-',
                    counts = 42 - counts
                return this.get_month_dates(counts,counts,year_month_str,'disabled')
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
                //console.log(year,month,type)
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
            console.log(this)
            this.value = this.value || this.stringify(this.now)
            // //console.log(this.value)
            this.dates = this.get_dates()
            // this.now = this.parse(this.value) || this.parse(this.valueDefault) || new Date();
            // document.addEventListener('click', (e) => {
            //     if (this.$el && !this.$el.contains(e.target)) {
            //         this.close();
            //     }
            // }, false);
        },
        beforeDestroy () {
            document.removeEventListener('click', this.close, false);
        }

    }