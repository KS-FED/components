<template>
  <div class="KsDatePicker" cid="KsDatePicker"
       :class="{'readonly':readonly}">
    <div class="_input" v-on:click="show=!show">
      <div class="ks-col-auto date-icon"><i class="icon"></i></div>
      <input type="text" class="ks-col" placeholder="{{placeholder}}" :value="value" readonly>
    </div>
    <ks-dater v-show="show" :value="value" :type="type" :readonly="readonly" v-on:change="current_change"></ks-dater>
  </div>
</template>
<script>
    import props from './mixins/props.js'
    import { stringify , format_conver } from './util/lang'
    import { one_page_date } from './util/apage'
    import dater from './dater.vue'
    export default {
        components:{
            'ks-dater':dater
        },
        mixins: [props],
        props:{
            placeholder: { type: String, default: '' }
        },
        data(){

            return {
                show:false,
                input_value : ''
            }
        },

        methods:{
            close(){
                this.show = false
            },
            // dater callback
            current_change(cur_date){
                this.value = cur_date
                this.$emit('change',cur_date)
                if(this.type != 'datemulti'){
                    this.close()
                }
            }
           
        },
        watch:{
            value(val){
                
                console.log(val)

            }

        },
        created(){
            // console.log(this.value)
            // this.value = format_conver(this.value , this.type!='datetime' ? 'YYYY-MM-DD' : '')    
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
<style lang="scss">
    @import '../styles/date';
</style>
