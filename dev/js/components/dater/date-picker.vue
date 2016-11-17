<style>
    .year {
        color:red;
    }
</style>
<template>

    <div class="picker-wrap">
        <div class="date-bd">
        <div class="date-head">
            <div class="retreat" v-on:click="click_month(-1)">&lt;</div>
            <div class="year">{{now.getFullYear()}}年</div>
            <div class="interstice"></div>
            <div class="month">{{now.getMonth()+1}}月</div>
            <div class="next" v-on:click="click_month(1)">&gt;</div>
        </div>
        <div class="date-week">
            <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
        </div>
        <div v-on:click="pick_date($event)">
        <div class="date-days"
            v-for="week in 6">
            <span 
                v-for="day in  7"
                :id="_uid+'_'+(+week * 7 + day)"
                :class="{
                    'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
                    'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
                    {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
        </div>
        </div>
        <div class="date-btn">
            <span class="today" v-on:click="today()">今天</span>
            <span class="clear" v-on:click="clear()">清除</span>
        </div>
        </div>
    </div>

</template>
<script>
    import mixins from './mixins.js'
    export default {
        mixins: [mixins],
        methods:{
            pick_date (event) {
                var id = event.target.id.split('_')
                var index = +id[1] 

                if(isNaN(index) || id[2]=='disabled') return

                var cur_date = this.dates[index]
                this.value = cur_date.dater
                this.now = new Date(cur_date.dater)
                this.$emit('change',cur_date)
            },
            today() {
                // console.log('today')
                this.value = this.stringify(new Date())
                this.now = new Date()
            },
            clear() {
                // console.log('clear')
                var value_temp = this.value
                this.value = ''
                this.now = new Date(value_temp)
            }
        },
        created () {
            console.log('created')
            this.point_daters = ['2016-10-01','2016-10-02','2016-10-03','2016-10-04']
         
        }
    }
</script>
