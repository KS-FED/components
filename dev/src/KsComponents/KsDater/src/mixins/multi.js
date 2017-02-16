import {parse , stringify  , split_dt , fullzero} from '../util/lang'
import props from './props'

export default {
        name:'multi',
        data () {
            return{}
        },
        methods: {
            multi(){}
        },
        watch: {
            value(val,oldval){
                var addItem = ''
                console.log(val)
                if(this.type == 'datemulti'){

                     ~val.indexOf(',') && (this.point_daters = val.split(','))
                    if(val.length > oldval.length){
                        addItem = this.point_daters[this.point_daters.length-1]
                    }else{
                        addItem = stringify(this.now)
                    }
                    this.now = parse(addItem)
                }
            }
        },
        created () {
            if(this.type == 'datemulti') {
                this.point_daters = []
                ~this.value.indexOf(',') && (this.point_daters = this.value.split(','))
                // console.log(this.value);    
            }

         
        }

    }