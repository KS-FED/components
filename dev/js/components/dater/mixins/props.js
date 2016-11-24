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
                    'now' == val && (val = [date.getHours(),date.getMinutes(),date.getSeconds()])
                    val.split(':').length &&  (val=val.split(':'))
                    return val
                }
                return ''
            }  
        },
        format: { type: String, default: 'YYYY-MM-DD' }
        
    }
}