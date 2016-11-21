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
        format: { type: String, default: 'YYYY-MM-DD' }
        
    }
}