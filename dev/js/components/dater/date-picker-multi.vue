<template>
    <div class="picker-wrap">
        <div class="date-bd">
        <div class="date-head">
            <div class="retreat" v-on:click="click_month(-1)">&lt;</div>
            <div class="year">{{now.getFullYear()}}年</div>
            <div class="interstice"></div>
            <div class="month">{{now.getMonth()+1}}月</div>
            <div class="next" v-on:click="click_month(1)">&gt;</div>
        </div>
        <div class="date-week">
            <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
        </div>
        <div v-on:click="pick_date($event)">
            <div class="date-days"
                v-for="week in 6">
                <span 
                    v-for="day in  7"
                    :id="_uid+'_'+(+week * 7 + day)+'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)"
                    :class="{
                        'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
                        'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
                        {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
            </div>
        </div>
        <div class="date-btn">
            <span class="today">今天</span>
            <span class="clear">清除</span>
        </div>
        </div>
        <div class="date-bd">
        <div class="date-head">
            <div class="retreat" v-on:click="click_next_month(-1)">&lt;</div>
            <div class="year">{{next_data.year}}年</div>
            <div class="interstice"></div>
            <div class="month">{{next_data.month+1}}月</div>
            <div class="next" v-on:click="click_next_month(1)">&gt;</div>
        </div>
        <div class="date-week">
            <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
        </div>
        <div v-on:click="pick_date($event)">
            <div class="date-days"
                v-for="week in 6">
                <span 
                    v-for="day in  7"
                    :id="_uid+'_'+(42+week * 7 + day)+'_'+(next_dates[week * 7 + day] && next_dates[week * 7 + day].status)"
                    :class="{
                        'pass':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='disabled',
                        'active':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='active'}">
                        {{next_dates[week * 7 + day] && +next_dates[week * 7 + day].datetext}}</span>
            </div>
        </div>
        <div class="date-btn">
            <span class="today">今天</span>
            <span class="clear">清除</span>
        </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import mixins from './mixins.js'
    export default {
        mixins: [mixins],
        data(){
            this.range_daters = []
            return {
                next_dates : [],
                next_now  : new Date(),
                next_data  : {
                    year:'',
                    month:''
                }
            }
        },
        methods:{
            
            // 切换月
            click_next_month (flag) {
                this.next_now.setMonth(this.next_now.getMonth() + flag,1)
                this.next_now = new Date(this.next_now)

                if(this.compared(this.stringify(this.next_now) , this.stringify(this.now))){
                    this.click_month(-1)
                }

            },
            // 切换月
            click_month (flag) {
                this.now.setMonth(this.now.getMonth() + flag,1)
                this.now = new Date(this.now)
                if(this.compared(this.stringify(this.next_now) , this.stringify(this.now))){
                    this.click_next_month(1)
                }
            },
            compared(val1,val2) {
                return +val1.replace(/-/g,'') <= +val2.replace(/-/g,'')
            },
            pick_date (event) {
                var id = event.target.id.split('_')
                var index = +id[1] ,_date

                if(isNaN(index) || id[2]=='disabled') return

                if(index > 42){
                    _date = this.next_dates[index-42]
                    this.next_now = new Date(_date.dater)
                    this.value = this.stringify(this.next_now)
                }else{
                    _date = this.dates[index] 
                    this.now = new Date(_date.dater)
                    this.value = this.stringify(this.now)
                }

                this.range_daters = this.get_range(this.range_daters , this.value)

                if(this.range_daters.length>=2) {
                    this.range_daters = this.get_range_dates(this.range_daters)    
                    console.log(this.range_daters)
                }

                this.now = new Date(this.stringify(this.now))
                this.next_now = new Date(this.stringify(this.next_now))
                this.$emit('change',_date)
            },
            // 选择范围取值
            get_range_dates(range_daters){

                var prev_date = range_daters[0]
                var next_date = range_daters[1]

                if(prev_date === next_date) return range_daters

                var prev = this.split_ym(prev_date)
                var next = this.split_ym(next_date)

                // console.log(prev,next)

                if(prev.year == next.year && prev.month == next.month){
                    return this.only_one_month(prev , next)
                }else{
                    return this.span_two_month(prev , next , next_date)    
                }
                
            },
            // 选择同一个月
            only_one_month(prev , next){
                console.log(prev , next)
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
                // console.log(arr)
                return arr
            },
            // 选择两个月以上
            span_two_month(prev , next , next_date){
                var prev_dates = this.prev_month_part(prev.year , prev.month , prev.datetext)
                var dates = this.get_all_month_dates(this.loop_full_month(prev,next)).reduce((pre,cur,i,arr)=>{
                    return pre.concat(cur)
                },[])
                var next_dates = this.next_month_part(next_date)
                // console.log('prev_dates: ',prev_dates)
                // console.log('next_dates: ',next_dates)
                // console.log(dates)
                return prev_dates.concat([].concat(dates)).concat(next_dates).map((_date)=>{
                    return _date.dater
                })
            },
            loop_full_month(prev,next,arr){
                var last_day , prev_ym

                arr = arr || []

                prev_ym = this.convert_year_month(prev.year , prev.month , 'add')

                if(prev_ym.year+''+(+prev_ym.month+10) >= next.year+''+(+next.month+10)) return arr
                 
                last_day = this.get_month_last_day(prev_ym.year,prev_ym.month)
                arr.push(last_day.dater)
                return this.loop_full_month(prev_ym,next,arr)

            },
            prev_month_part(year , month , datetext){
                var prev = this.convert_year_month(year , month)
                var last_day = this.get_month_last_day(prev.year,prev.month)

                return this.get_full_month_dates(last_day.dater).filter((_date)=>{
                    
                    if( _date.datetext >= datetext ){
                        return true
                    }
                    
                })
            },
            next_month_part(dater){
                return this.get_full_month_dates(dater)
            },

            split_ym(dater){
                dater = dater.split('-')
                return {
                    year:dater[0],
                    month:dater[1]-1,
                    datetext:dater[2]
                }
            },
            // [ '2015-10-03','2015-10-03'[,...] ]
            get_all_month_dates(dater_arr){
                return dater_arr.map((dater)=>{
                    return this.get_full_month_dates(dater)
                })
            },
            // [a,b] , e => [c,d]
            get_range(range_daters,select_value){
                
                if(range_daters.length >= 2){
                     // this.memory_date = []
                     range_daters = []
                 }
                 if(range_daters.length && this.compared(select_value , range_daters[0])){
                    range_daters.unshift(select_value)
                 }else{
                    range_daters.push(select_value)    
                 }
                 console.log(range_daters)
                 return range_daters

            },

            next_month_dates(year = this.next_now.getFullYear(),month = this.next_now.getMonth()) {

                this.next_data = this.convert_year_month( year , month )
                this.next_dates = this.get_dates( this.next_data.year , this.next_data.month )
            }
            
        },
        watch: {
            next_now () {
                this.next_month_dates()
            }
        },
        created(){
            // this.next_month_dates()
            this.click_next_month (1) 
        }
    }
</script>