import {parse , stringify , prev_month, cur_month , next_month , ymd,split_dt,fullzero} from '../util/lang'
import props from './props'

export default {
        mixins: [props],
        data () {
            var months = (function(){
                var arr = []
                for(var i=0;i<12;i++){
                    arr.push(i+1+'月')
                }
                return arr
            })()

            this.cur_value = ''
            return {
                days: ['日', '一', '二', '三', '四', '五', '六'],
                months: months,
                dates:[],
                now: new Date()
            }
        },
        filters:{
            fr_limit(val,len){
                return fullzero(val,len)
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
            }
            
        },

        created () {
            try{
                if(!this.exclude){
                    this.time && (this.time = split_dt(this.value).timer.split(':'))
                    this.value = split_dt(this.value).dater || this.value
                }
            }catch(e){}
            

            this.cur_value = this.value || stringify(this.now)
            this.now = parse(this.cur_value) || new Date()
         
        }

    }