import { format_conver } from '../util/lang'
export default {
    props: {

        readonly: { type: Boolean, default: false },
        exclude:{type:Boolean,default:false},
        value: {
            type: String
        },
        // year/month/date/week/datetime/datemulti/datetimerange/daterange
        type:{type:String,default:'date'},
        // time:{
        //     // type:String,
        //     coerce(val) {
        //         // console.log(val)
        //         if(val){
        //             var date = new Date()
        //             'now' == val && (val = format_conver('','HH:mm:ss'))
        //             console.log(val,'time')
        //             typeof val == 'string' && val.split(':').length && (val=val.split(':'))
        //             // console.log(val)
        //             return val
        //         }
        //         return ''
        //     }
        // },
        format: { type: String, default: 'YYYY-MM-DD' }

    }
}
