import { format_conver } from '../util/lang'
export default {
    props: {

        readonly: { type: Boolean, default: false },
        exclude:{type:Boolean,default:false},
        value: {
            type: String
        },
        time:{
            // type:String,
            coerce(val) {
                // console.log(val)
                if(val){
                    var date = new Date()
                    'now' == val && (val = format_conver(''))
                    typeof val == 'string' && val.split(':').length && (val=val.split(':'))
                    // console.log(val)
                    return val
                }
                return ''
            }
        },
        format: { type: String, default: 'YYYY-MM-DD' }

    }
}
