import {get_days , get_months , parse , stringify  , split_dt , fullzero,format_conver} from '../util/lang'
import props from './props'

export default {
        mixins: [props],
        data () {
            
            return {
                days: get_days(),
                months: get_months(),
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
            today (){
                alert('mixins today')
            },
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
        created () {}

    }