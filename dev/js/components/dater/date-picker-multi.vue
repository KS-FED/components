<template>
    
        <div class="picker-wrap">
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
        <div>
        <div class="date-days"
            v-for="week in 6">
            <span 
                v-for="day in  7"
                :id="week * 7 + day"
                :class="{
                    'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
                    'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
                    {{dates[week * 7 + day] && dates[week * 7 + day].text}}</span>
        </div>
        </div>
        <div>
        <div class="date-days"
            v-for="week in 6">
            <span 
                v-for="day in  7"
                :id="week * 7 + day"
                :class="{
                    'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
                    'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
                    {{dates[week * 7 + day] && dates[week * 7 + day].text}}</span>
        </div>
        </div>
        </div>
        <div class="date-btn">
            <span class="today">今天</span>
            <span class="clear">清除</span>
        </div>
    </div>
   
</template>
<script type="text/javascript">
    import mixins from './mixins.js'
    export default {
        mixins: [mixins],
        data(){
            return {
                next_dates:[]
            }
        },
        created(){
            this.next_dates = this.get_dates(this.now.getMonth()+1)
        }
    }
</script>