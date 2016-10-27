
<template>
    <div class="datetime-picker" :style="{ width: width }">
        <input
            class="input"
            type="text"
            :style="styleObj"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            @click="show = !show">
            <a href="javacript:;" class="icon close" v-show="value" @click="clear()">&#xe611;</a>
        <div class="picker-wrap" v-show="show" :style="{ right: (this.align == 'right') && '0px' }">
            <table class="date-picker">
                <thead>
                    <tr class="date-head">
                        <th colspan="4">
                            <span class="btn-prev" @click="yearClick(-1)">&lt;</span>
                            <span class="show-year">{{now.getFullYear()}}</span>
                            <span class="btn-next" @click="yearClick(1)">&gt;</span>
                        </th>
                        <th colspan="3">
                            <span class="btn-prev" @click="monthClick(-1)">&lt;</span>
                            <span class="show-month">{{months[now.getMonth()]}}</span>
                            <span class="btn-next" @click="monthClick(1)">&gt;</span>
                        </th>
                    </tr>
                    <tr class="date-days">
                        <th v-for="day in days" :class="{'week-days': day == '日' || day == '六'}">{{day}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 6">
                        <td v-for="j in 7"
                            :class="date[i * 7 + j] && date[i * 7 + j].status"
                            :date="date[i * 7 + j] && date[i * 7 + j].date"
                            @click="pickDate(i * 7 + j , date[i * 7 + j] && date[i * 7 + j].status)">{{date[i * 7 + j] && date[i * 7 + j].text}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    // dependent 'date-format-lite'
    /**
        <datepicker 
            :readonly="true" 
            :value.sync="" 
            limit="yesterday" 
            format="YYYY-MM-DD"></datepicker>
     */
    export default {
        props: {
            align:{type: String,default:'left'},
            width: { type: String},
            readonly: { type: Boolean, default: false },
            disabled:{type: Boolean, default: false},
            value: { 
                type: String, 
                coerce(val) {
                    // //console.log(val)
                    if(val){
                        return val.slice(0,10)    
                    }else{
                        return val
                    }
                    
                } 
            },
            valueDefault: { type: String, default: '' },
            format: { type: String, default: 'YYYY-MM-DD' },
            limit:{coerce(val) {

                var time = 0

                if(val == 'yesterday'){
                    time = new Date()
                    //console.log(time.getMonth(),time.getDate(),time.add(-1, "days").getTime()  )   
                    return [{
                        min:time.add(0, "days").getTime()-3600000*24
                    }]               
                }else{
                    // //console.log(val,'===')
                    val && val.forEach((t)=>{
                        t.min = (new Date(t.min)).getTime()-3600000*24
                        t.max = (new Date(t.max)).getTime()
                    })
                }
                return val
                
                
            }}
        },
        data () {
            
            return {
                align_style:this.align == 'left' ? '' : 'right:0',
                show: false,
                days: ['日', '一', '二', '三', '四', '五', '六'],
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                date: [],
                now: new Date()
            };
        },
        watch: {
            now () {
                this.update()
            },
            show () {
                this.update()
            }
        },
        methods: {
            get_disable(val) {

                var flag = false
                if(!this.limit) return
                
                flag = this.limit.some((t)=>{
                    if(t.min && t.max){
                        if(val>=t.min && val<=t.max) return true
                    }else if(t.min){
                        if(val<=t.min) return true
                    }else if(t.max){
                        if(val>=t.max) return true
                    }
                })

                return flag
            },
            close () {
                this.show = false;
            },
            clear() {
                this.value = ''
            },
            update () {
                // //console.log(this.now.getMonth())
                var arr = [];
                var time = new Date(this.now);
                time.setMonth(time.getMonth(), 1);           // the first day
                var curFirstDay = time.getDay();
                curFirstDay === 0 && (curFirstDay = 7);
                time.setDate(0);                             // the last day
                var lastDayCount = time.getDate();
                for (let i = curFirstDay; i > 0; i--) {
                    let tmpTime = new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1)
                    // //console.log(tmpTime.getTime())

                    arr.push({
                        text: lastDayCount - i + 1,
                        time: tmpTime,
                        status: 'date-pass'
                    });
                }

                time.setMonth(time.getMonth() + 2, 0);       // the last day of this month
                var curDayCount = time.getDate();
                time.setDate(1);                             // fix bug when month change
                var value = this.value || this.stringify(new Date());
                for (let i = 0; i < curDayCount; i++) {
                    let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1);
                    let status = '';
                    this.stringify(tmpTime) === value && (status = 'date-active');
                    arr.push({
                        text: i + 1,
                        time: tmpTime,
                        status: status
                    });
                }

                var j = 1;
                while (arr.length < 42) {
                    arr.push({
                        text: j,
                        time: new Date(time.getFullYear(), time.getMonth() + 1, j),
                        status: 'date-future'
                    });
                    j++;
                }
                arr.forEach((t)=>{
                    // //console.log(t.time.getTime())
                    if(this.get_disable(t.time.getTime())){
                        t.status = 'date-disable'    
                    }
                    
                })
                this.date = arr;
            },
            yearClick (flag) {
                this.now.setFullYear(this.now.getFullYear() + flag);
                this.now = new Date(this.now);
            },
            monthClick (flag) {
                // //console.log('当前月份',this.now.getMonth())
                this.now.setMonth(this.now.getMonth() + flag,1);
                // //console.log('当前月份',this.now.getMonth())
                this.now = new Date(this.now);
            },
            pickDate (index,status) {
                // //console.log(this.date[index],status);
                if( 'date-disable' == status) return
                this.show = false;
                this.now = new Date(this.date[index].time);
                this.value = this.stringify();

            },
            parse (str) {
                var time = new Date(str);
                return isNaN(time.getTime()) ? null : time;
            },
            stringify (time = this.now, format = this.format) {
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                var date = time.getDate();
                var monthName = this.months[time.getMonth()];

                var map = {
                    YYYY: year,
                    MMM: monthName,
                    MM: ('0' + month).slice(-2),
                    M: month,
                    DD: ('0' + date).slice(-2),
                    D: date
                };
                return format.replace(/Y+|M+|D+/g, function (str) {
                    return map[str];
                });
            }
        },
        ready () {
            this.now = this.parse(this.value) || this.parse(this.valueDefault) || new Date();
            document.addEventListener('click', (e) => {
                if (this.$el && !this.$el.contains(e.target)) {
                    this.close();
                }
            }, false);
        },
        beforeDestroy () {
            document.removeEventListener('click', this.close, false);
        }

    };
</script>
