<template>

  <div class="KsDater" cid="KsDater">
    <div class="_date">
      <div class="_head">
        <div class="retreat" v-on:click.stop="click_month(-1)">&lt;</div>
        <div class="year">{{now.getFullYear()}}年</div>
        <div class="interstice"></div>
        <div class="month">{{now.getMonth()+1}}月</div>
        <div class="next" v-on:click.stop="click_month(1)">&gt;</div>
      </div>
      <div class="_week">
        <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
      </div>
      <div v-on:click.stop="pick_date($event)">
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
      <div class="_btn" v-if="type=='datetime'">
        <select class="input" v-model="times[0]" v-on:change.stop="pick_time">
          <option v-bind:value="i|fr_limit" v-for="i in 24">{{i|fr_limit}}</option>
        </select>
        <select class="input mlr-10" v-model="times[1]" v-on:change.stop="pick_time">
          <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
        </select>
        <select class="input" v-model="times[2]" v-on:change.stop="pick_time">
          <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
        </select>
      </div>
      <div class="_btn" v-if="type!='datemulti'">
        <span class="today" v-on:click.stop="today()">今天</span>
        <span class="clear" v-on:click.stop="clear()">清除</span>
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
    import mixins from './mixins/index'
    import multi from './mixins/multi'
    import { stringify , split_dt , parse,format_conver} from './util/lang'
    import { one_page_date } from './util/apage'
    export default {
        mixins: [mixins,multi],
        data(){
            this.dater = ''
            this.timer = ''
            
            return {
                times:[]
            }
        },
        methods:{
            // 今天
            today() {
                if(this.readonly) return

                var _date = new Date()
                var dater = stringify(_date)
                if(this.dater == dater){
                    this.now = _date    
                    return 
                }
                
                this.putout(dater)
               
            },
            // 清除
            clear() {
                if(!this.value || this.readonly) return
                this.value = ''
                this.$emit('change','')
            },
            // 过滤选择
            selectd(dater){
                
                var status = ''
                
                if(this.type == 'datemulti'){
                    ~this.point_daters.indexOf(dater) && (status = 'active')
                }else if(dater == this.dater ){

                    status = 'active'
                }
                return status

            },
            pick_date (event) {
                var id = event.target.id.split('_');
                var index = +id[1]

                if(isNaN(index) || id[2]=='disabled' || this.readonly) return
                
                var dater = this.dates[index].dater
                this.putout(dater)

            },
            // emit数据
            putout(dater){
                // console.log('putout(dater)',dater,this.type)
                var value = ''
                switch(this.type){
                    case 'date':
                        value = dater
                    break;
                    case 'datemulti':
                        this.point_daters = this.non(this.point_daters,dater)
                        console.log(this.point_daters)
                        value = this.point_daters.join(',')
                    break;
                    case 'datetime':
                        console.log(dater)
                        dater = dater || stringify(new Date())
                        value = dater+' '+this.times.join(':')
                    break;
                }
                this.value = value
                console.log('change',value)
                this.$emit('change',value)
                
            },
            // 选择时间
            pick_time(){
                this.putout(this.dater)
                // var dater = this.cur_value || stringify(new Date())
                // this.no_exclude(dater,true)
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
            // 更新视图
            update(val){

                var dater = format_conver(val,'YYYY-MM-DD')
                var timer = format_conver(val,'HH:mm:ss')
                // console.log('dater',dater,this.dater);
                if(this.dater != dater){
                    this.dater = dater
                    this.now = parse(dater)
                }
                if(this.timer != timer){
                    this.timer = timer
                    this.times = timer.split(':')
                }

            }
        },
        watch: {
            value(val,oldval){

                if(val){
                    this.update(val)
                }else{
                    // clear
                    this.dater = ''
                    this.timer = ''
                    this.now = parse(stringify(this.now))        
                }
                
            },
            // 重新绘制
            now (val,oldval) {
                this.dates = one_page_date(val.getFullYear(),val.getMonth(),this.selectd)
            }

        },
        created () {
            if(!this.value){this.now = parse(stringify(this.now))}
            this.update(this.value)
        }
    }
</script>
<style lang="scss">
    @import '../styles/date';
</style>
