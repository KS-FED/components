<template>

  <div class="KsDater" cid="KsDater">
    <div class="_date">
      <div class="_head">
        <div class="retreat" v-on:click="click_month(-1)">&lt;</div>
        <div class="year">{{now.getFullYear()}}年</div>
        <div class="interstice"></div>
        <div class="month">{{now.getMonth()+1}}月</div>
        <div class="next" v-on:click="click_month(1)">&gt;</div>
      </div>
      <div class="_week">
        <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
      </div>
      <div v-on:click="pick_date($event)">
        <div class="_days"
             v-for="week in 6">
                <span
                  v-for="day in  7"
                  :id="'dater'+_uid+'_'+(+week * 7 + day)"
                  :class="{
                        'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
                        'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
                        {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
        </div>
      </div>
      <div class="_btn" v-if="time">
        <select class="input" v-model="time[0]" v-on:change.stop="pick_time">
          <option v-bind:value="i|fr_limit" v-for="i in 24">{{i|fr_limit}}</option>
        </select>
        <select class="input mlr-10" v-model="time[1]" v-on:change.stop="pick_time">
          <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
        </select>
        <select class="input" v-model="time[2]" v-on:change.stop="pick_time">
          <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
        </select>
      </div>
      <div class="_btn" v-if="!exclude">
        <span class="today" v-on:click="today()">今天</span>
        <span class="clear" v-on:click="clear()">清除</span>
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
    import mixins from './mixins/index'
    import { stringify,split_dt } from './util/lang'
    import { one_page_date } from './util/apage'
    export default {
        mixins: [mixins],
        data(){

            if(this.exclude) {
                this.point_daters = []
                ~this.value.indexOf(',') && (this.point_daters = this.value.split(','))
            }

            return {
                // time:['01',2,'03']
            }
        },
        methods:{
            today() {
                if(this.readonly) return
                this.cur_value = stringify(new Date())
                this.now = new Date()
                var timer = this.time ? ' '+this.time.join(':') : ''
                this.value = this.cur_value + timer
                this.$emit('change',this.value)
            },
            clear() {
                if(!this.cur_value || this.readonly) return
                var value_temp = this.cur_value
                this.cur_value = ''
                this.now = new Date(value_temp)
                this.$emit('change','')
            },
            selectd(dater){
                // console.log('dater----',dater , this.cur_value)
                var status = ''
                if(this.exclude){
                    ~this.point_daters.indexOf(dater) && (status = 'active')
                }else if(dater == this.cur_value ){

                    status = 'active'
                }
                return status

            },
            pick_date (event) {
                var id = event.target.id.split('_')
                var index = +id[1]

                if(isNaN(index) || id[2]=='disabled' || this.readonly) return

                var cur_date = this.dates[index]
                var dater = cur_date.dater

                this.cur_value = dater
                // console.log(this.cur_value)
                this.exclude ? this.is_exclude(dater) : this.no_exclude(dater)
                this.now = new Date(dater)

            },
            pick_time(){
                var dater = this.cur_value || stringify(new Date())
                this.no_exclude(dater,true)
            },
            // 排除具体时间
            is_exclude(dater){
                this.point_daters = this.non(this.point_daters,dater)
                this.$emit('change',this.point_daters.join(','))
            },
            // 不排除时间
            no_exclude(dater,no_close){
                // console.log(dater,this.time)
                var timer = this.time ? ' '+this.time.join(':') : ''
                this.value = dater + timer
                // console.log('change',this.value)
                this.$emit('change',this.value,no_close)
            },
            // 数组中数值，无则加，有则去除
            non(point_daters,dater){
                var index = point_daters.indexOf(dater)
                if(~index){
                    point_daters.splice(index,1)
                }else{
                    point_daters.push(dater)
                }
                // console.log(point_daters)
                return point_daters
            },

        },
        watch: {
            value(val,oldval){
                if(this.exclude) {

                        this.point_daters = val.split(',')
                        var long = val.length > oldval.length ? val : oldval
                        var short = val.length < oldval.length ? val : oldval
                        var diff_start = long.split(',').filter((i)=>{
                          return !~short.indexOf(i)
                        })[0]
                        console.log(diff_start,'----')
                        diff_start && (this.now = new Date(diff_start))

                }else{
                    try{
                        this.time = (split_dt(val) && split_dt(val).timer.split(':')) || this.time
                        val = (split_dt(val) && split_dt(val).dater) || val
                    }catch(e){}

                    this.cur_value = val
                    val && (this.now = new Date(val))
                }
                // console.log('val',val,val.length)

            },
            now () {
                this.dates = one_page_date(this.now.getFullYear(),this.now.getMonth(),this.selectd)
            }
        },
        created () {

            // if(this.exclude){
            //   this.$nextTick(()=>{
            //     this.now = new Date(this.point_daters[0])
            //   })
            // }
        }
    }
</script>
