<template>
  <div class="KsDatePicker" cid="KsDatePicker"
       :class="{'readonly':readonly}">
    <div class="_input" v-on:click="show=!show">
      <div class="ks-col-auto date-icon"><i class="icon"></i></div>
      <input type="text" class="ks-col" placeholder="{{placeholder}}" :value="input_value" readonly>
    </div>
    <ks-dater v-show="show" :value="value" :time="time" :exclude="exclude" :readonly="readonly" v-on:change="current_change"></ks-dater>
  </div>
</template>
<script>
    import props from './mixins/props.js'
    import { stringify } from './util/lang'
    import { one_page_date } from './util/apage'
    export default {
        mixins: [props],
        props:{
            placeholder: { type: String, default: '' }
        },
        data(){
            this.tempvalue = this.value
            var timer = ''
            if(!~this.value.indexOf(' ')){
                timer = this.time && ' '+this.time.join(':')
            }
            this.value = this.value || stringify(new Date())
            this.dater_timer = this.value + timer
            
            this.$nextTick(()=>{
                this.value = this.dater_timer
            })


            return {
                show:false,
                input_value : this.dater_timer
            }
        },

        methods:{
            close(){
                this.show = false
            },
            // dater callback
            current_change(cur_date,no_close){
                this.exclude ? this.is_exclude(cur_date) : this.no_exclude(cur_date,no_close)
            },
            // 排除具体时间
            is_exclude(cur_date){
                this.input_value = cur_date
                this.$emit('change',cur_date)
            },
            // 不排除时间
            no_exclude(cur_date,no_close){
                // console.log(cur_date)
                this.input_value = cur_date
                this.value = cur_date
                this.$emit('change',cur_date)
                !no_close && this.close()

            }

        },
        watch:{
            value(val){
                console.log(val)
                this.input_value = val

            }

        },
        created(){
            if(!this.tempvalue){
                this.$emit('change',this.dater_timer)
            }
        },
        ready(){


            document.addEventListener('click', (e) => {
                if (this.$el && !this.$el.contains(e.target)) {
                    this.close()
                }
            }, false)
        },
        beforeDestroy () {
            document.removeEventListener('click', this.close, false)
        }
    }
</script>
