import { fullzero } from '../util/lang'
export default {
    props: {
        
        readonly: { type: Boolean, default: false },
        exclude:{type:Boolean,default:false},
        value: { 
            type: String, 
            coerce(val) {
                return val
            } 
        },
        time:{
            // type:String,
            coerce(val) {
                // console.log(val)
                if(val){
                    var date = new Date()
                    'now' == val && (val = [date.getHours(),date.getMinutes(),fullzero(date.getSeconds(),2)])
                    typeof val == 'string' && val.split(':').length &&  (val=val.split(':'))
                    // console.log(val)
                    return val
                }
                return ''
            }  
        },
        format: { type: String, default: 'YYYY-MM-DD' }
        
    }
}