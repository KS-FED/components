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
            <div class="_btn" v-if="!exclude">
                <span class="today" v-on:click="today()">今天</span>
                <span class="clear" v-on:click="clear()">清除</span>
            </div>
        </div>
    </div>

</template>
<script>
    import mixins from './mixins/index'
    import { stringify } from './util/lang'
    import { one_page_date } from './util/apage'
    export default {
        mixins: [mixins],
        data(){
            
            if(this.exclude) {
                this.point_daters = []
                ~this.value.indexOf(',') && (this.point_daters = this.value.split(','))
            }
            return {}
        },
        methods:{
            today() {
                // console.log('today')
                this.cur_value = stringify(new Date())
                this.now = new Date()
                this.$emit('change',this.cur_value)
            },
            clear() {
                if(!this.cur_value) return
                var value_temp = this.cur_value
                this.cur_value = ''
                this.now = new Date(value_temp)
                this.$emit('change',this.cur_value)
            },
            selectd(dater){
                var status = ''
                if(this.exclude){
                    ~this.point_daters.indexOf(dater) && (status = 'active')
                }else if(dater === this.cur_value ){
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
                this.exclude ? this.is_exclude(dater) : this.no_exclude(dater)
                this.now = new Date(dater)
                
            },
            // 排除具体时间
            is_exclude(dater){
                this.point_daters = this.non(this.point_daters,dater)
                this.$emit('change',this.point_daters.join(','))
            },
            // 不排除时间
            no_exclude(dater){
                this.$emit('change',dater)
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
            value(val){
                
                if(this.exclude && ~val.indexOf(',') ) {
                    this.point_daters = val.split(',')
                    this.now = new Date(this.point_daters[0])
                }

            },
            now () {
                this.dates = one_page_date(this.now.getFullYear(),this.now.getMonth(),this.selectd)
            }
        },
        created () {}
    }
</script>
