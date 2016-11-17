import {parse , stringify , prev_month, cur_month , next_month , ymd} from './util/lang'

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

            this.range_daters = []
            this.point_daters = []

            return {
                days: ['日', '一', '二', '三', '四', '五', '六'],
                months: months,
                dates:[],
                now: new Date()
            }
        },
        watch: {
            now () {
                this.dates = this.get_page_dates()
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
            
           
                
            

        },

        created () {
            this.value = this.value || stringify(this.now,this.months)
            this.dates = this.get_page_dates()
            this.now = parse(this.value) || parse(this.valueDefault) || new Date()

            console.log('============== this.value')


         
        }

    }