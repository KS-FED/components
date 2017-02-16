<template>
    <div class="KsDaterMulti" cid="KsDaterMulti">
        <div class="_date">
            <div class="_head">
                <div class="retreat" v-on:click="click_month(-1)">&lt;</div>
                <div class="year">{{now.getFullYear()}}年</div>
                <div class="interstice"></div>
                <div class="month">{{now.getMonth()+1}}月</div>
                <div class="next" v-on:click="click_month(1)">&gt;</div>
            </div>
            <div class="_week">
                <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
            </div>
            <div v-on:click="pick_date($event)">
                <div class="_days" v-for="week in 6">
                    <span 
                        v-for="day in  7"
                        :id="'dater'+_uid+'_'+(+week * 7 + day)+'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)"
                        :class="{
                            'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
                            'scope-bg':dates[week * 7 + day] && dates[week * 7 + day].status=='scope-bg',
                            'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
                            {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
                </div>
            </div>
            <div class="_btn">
                <span class="reset" v-on:click="reset()">重置</span>
            </div>
        </div>
        <div class="_date">
            <div class="_head">
                <div class="retreat" v-on:click="click_next_month(-1)">&lt;</div>
                <div class="year">{{next_data.year}}年</div>
                <div class="interstice"></div>
                <div class="month">{{next_data.month+1}}月</div>
                <div class="next" v-on:click="click_next_month(1)">&gt;</div>
            </div>
            <div class="_week">
                <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
            </div>
            <div v-on:click="pick_date($event)">
                <div class="_days"
                    v-for="week in 6">
                    <span 
                        v-for="day in  7"
                        :id="'dater'+_uid+'_'+(42+week * 7 + day)+'_'+(next_dates[week * 7 + day] && next_dates[week * 7 + day].status)"
                        :class="{
                            'pass':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='disabled',
                            'scope-bg':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='scope-bg',
                            'active':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='active'}">
                            {{next_dates[week * 7 + day] && +next_dates[week * 7 + day].datetext}}</span>
                </div>
            </div>
            <div class="_btn">
                <span class="selects">已选择{{range_daters_length}}天</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import mixins from './mixins/index'
    import {cur_month, next_month , parse , stringify} from './util/lang'
    import { get_full_month_dates , get_month_last_day , one_page_date} from './util/apage'
    import { get_range_dates , split_ym } from './util/range'

    export default {
        mixins: [mixins],
        props:{
            range_dater:{
                type:Array
            }
        },
        data(){
            this.range_daters = []
            return {
                range_daters_length:0,
                next_dates : [],
                next_now  : new Date(),
                next_data  : {
                    year:'',
                    month:''
                }
            }
        },
        methods:{
            redraw(show_range,range_daters) {
                var show_start = show_range[0] , show_end = show_range[1]
                this.value = ''
                
                this.range_daters = range_daters
                console.log(range_daters)
                // this.point_daters = range_daters
                // 取具体日期
                range_daters.length == 2 && (this.range_daters = get_range_dates(range_daters))
                // console.log(range_daters,this.range_daters)
                // 视图中选中长度
                this.range_daters_length = this.range_daters.length
                if(this.range_daters.length == 2 
                    && this.range_daters[0] == this.range_daters[this.range_daters.length-1]){
                    this.range_daters_length = 1
                }

                // console.log(show_start,show_end)
                // 比较展示
                if(this.compared_month(show_end,show_start)){
                    var ym = split_ym(show_end)
                    show_end = next_month(ym.year,ym.month).stringify+'-01'
                    // console.log('show_end',show_end)
                }

                this.now = new Date(show_start)
                this.next_now = new Date(show_end)
            },
            reset() {
                this.redraw([stringify(this.now),stringify(this.next_now)],[])
            },
            // 点击日期
            pick_date (event) {
                var id = event.target.id.split('_')
                var index = +id[1] ,_date,range_dater

                if(isNaN(index) || id[2]=='disabled') return

                if(index > 42){
                    _date = this.next_dates[index-42]

                }else{
                    _date = this.dates[index] 
                }


                range_dater = this.get_range(this.range_daters , _date.dater)

                this.redraw([stringify(this.now),stringify(this.next_now)],range_dater)
                console.log('range_dater',range_dater)
                this.$emit('change',range_dater)
            },
            // [a,b] , e => [c,d]
            get_range(range_daters,select_value){

                if(range_daters.length >= 2){
                    range_daters = []
                }

                if(range_daters.length && this.compared(select_value , range_daters[0])){
                    range_daters.unshift(select_value)
                }else{
                    range_daters.push(select_value)    
                }
                 
                return range_daters

            },
            // 切换月(右侧)
            click_next_month (flag) {
                this.next_now.setMonth(this.next_now.getMonth() + flag,1)
                this.next_now = new Date(this.next_now)

                if(this.compared_month(stringify(this.next_now) , stringify(this.now))){
                    this.click_month(-1)
                }

            },
            // 切换月(左侧)
            click_month (flag) {
                this.now.setMonth(this.now.getMonth() + flag,1)
                this.now = new Date(this.now)
                // console.log(this.stringify(this.next_now) , this.stringify(this.now))
                if(this.compared_month(stringify(this.next_now) , stringify(this.now))){
                    this.click_next_month(1)
                }
            },
            compared(val1,val2) {
                return +val1.replace(/-/g,'') <= +val2.replace(/-/g,'')
            },
            compared_month(val1,val2) {
                var val1 = split_ym(val1)
                var val2 = split_ym(val2)
                return +(val1.year+''+(val1.month+10)) <= +(val2.year+''+(val2.month+10))
            },
            next_month_dates(year = this.next_now.getFullYear(),month = this.next_now.getMonth()) {
                this.next_data = cur_month( year , month )
                
                this.next_dates = one_page_date( this.next_data.year , this.next_data.month ,this.selectd)
            },
            selectd(dater){
                // console.log(this.range_daters)
                if(~this.range_daters.indexOf(dater)){
                    if(this.range_daters[0] == dater || this.range_daters[this.range_daters.length-1] == dater ) {
                        return 'active'
                    }else{
                        return 'scope-bg'
                    }
                    
                }
            }
            
        },
        watch: {
            now () {
                this.dates = one_page_date(this.now.getFullYear(),this.now.getMonth(),this.selectd)
            },
            next_now () {
                this.next_month_dates()
            }
        },
        created(){
           console.log(this.range_dater)
            if(!this.range_dater || !this.range_dater.length){
                this.range_dater = [stringify(this.now),stringify(this.next_now)]    
            }
            


            // this.next_month_dates()
            // this.click_next_month (1) 
            // this.dates = one_page_date(this.now.getFullYear(),this.now.getMonth(),this.selectd)
            // this.range_dater
            this.redraw(this.range_dater,this.range_dater)

        }
    }
</script>