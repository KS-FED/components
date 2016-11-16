<style>
.datetime-picker {
    position: relative;
    display: inline-block;
    font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei";
    -webkit-font-smoothing: antialiased;
    color: #333;
    width: 100%;
}

.datetime-picker * {
    box-sizing: border-box;
}

.datetime-picker input {
    width: 100%;
    padding: 6px 12px;
    height: 34px;
    outline: 0 none;
    border: 1px solid #ccc;
    font-size: 14px;
}

.datetime-picker .picker-wrap {
    position: absolute;
    z-index: 1000;
    width: 314px;
    margin-top: 2px;
    background-color: #fff;
    box-shadow: 0 0 6px #ccc;
    padding: 20px;
}

.datetime-picker table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
    font-size: 13px;
}

.datetime-picker tr {
    height: 34px;
    border: 0 none;
}

.datetime-picker th, .datetime-picker td {
    user-select: none;
    /*width: 34px;*/
    height: 34px;
    padding: 0;
    border: 0 none;
    line-height: 34px;
    text-align: center;
}

.datetime-picker td {
    cursor: pointer;
}

.datetime-picker td:hover {
    background-color: #f0f0f0;
    border-radius: 3px;
}

.datetime-picker td.date-pass, .datetime-picker td.date-future {
    color: #aaa;
}

.datetime-picker td.date-active {
    background-color: #2196F3;
    color: #fff;
    border-radius: 3px;
}

.datetime-picker .date-head {
    text-align: center;
    font-size: 14px;
}

.datetime-picker .date-days {
    color: #c8c8c8;
    font-size: 13px;
}
.week-days{
    color: #ef5350;
    font-weight: bold;
}
.datetime-picker .show-year {
    display: inline-block;
    min-width: 62px;
    vertical-align: middle;
}

.datetime-picker .show-month {
    display: inline-block;
    min-width: 28px;
    vertical-align: middle;
}

.datetime-picker .btn-prev,
.datetime-picker .btn-next {
    cursor: pointer;
    display: inline-block;
    padding: 0 10px;
    vertical-align: middle;
}

.datetime-picker .btn-prev:hover,
.datetime-picker .btn-next:hover {
    background: rgba(16, 160, 234, 0.5);
}

.datetime-picker .close{
    position: absolute;
    top: 11px;
    right:10px;
    font-size: 12px;
    line-height: 12px;
    color: #C8C8C8;
}
.close:hover{
    color: #777777;
}
</style>

<template>
    <div class="datetime-picker" :style="{ width: width }">
        <input
            class="input"
            type="text"
            :style="styleObj"
            :readonly="readonly"
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
                            @click="pickDate(i * 7 + j)">{{date[i * 7 + j] && date[i * 7 + j].text}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            multiple :{ type: Boolean, default: false },
            align:{type: String,default:'left'},
            width: { type: String},
            readonly: { type: Boolean, default: false },
            value: { type: String, default: false },
            valueDefault: { type: String, default: '' },
            format: { type: String, default: 'YYYY-MM-DD' }
        },
        data () {
            this.memory_date = []
            this.range_date = []
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
                this.update();
            },
            show () {
                this.update();
            }
        },
        methods: {
            close () {
                this.show = false;
            },
            clear() {
                this.value = ''
            },
            update () {
                // console.log(this.now.getMonth())
                var arr = [];
                var time = new Date(this.now);
                time.setMonth(time.getMonth(), 1);           // the first day
                var curFirstDay = time.getDay();
                curFirstDay === 0 && (curFirstDay = 7);
                time.setDate(0);                             // the last day
                var lastDayCount = time.getDate();
                for (let i = curFirstDay; i > 0; i--) {
                    arr.push({
                        text: lastDayCount - i + 1,
                        time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
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
                    let _value = this.stringify(tmpTime);
                    let min = this.range_date[0]
                    let max = this.range_date[1] || this.range_date[1]
                    
                    // 此处可优化
                    // !~this.memory_date.indexOf(_value) && this.memory_date.push(_value)

                    _value === value && (status = 'date-active')
                    // console.log(this.range_date)
                    if(this.multiple && min && max && this.compared(_value,min) && this.compared(max,_value)){
                        status = 'date-active'
                    }
                    arr.push({
                        text: i + 1,
                        time: tmpTime,
                        status: status
                    });
                }
                // console.log(this.memory_date)
                var j = 1;
                while (arr.length < 42) {
                    arr.push({
                        text: j,
                        time: new Date(time.getFullYear(), time.getMonth() + 1, j),
                        status: 'date-future'
                    });
                    j++;
                }
                console.log(this.$parse(arr))
                this.date = arr;
            },
            yearClick (flag) {
                this.now.setFullYear(this.now.getFullYear() + flag);
                this.now = new Date(this.now);
            },
            monthClick (flag) {
                // console.log('当前月份',this.now.getMonth())
                this.now.setMonth(this.now.getMonth() + flag,1);
                // console.log('当前月份',this.now.getMonth())
                this.now = new Date(this.now);
            },
            pickDate (index) {
                // console.log('pppp')

                this.multiple || (this.show = false)
                this.now = new Date(this.date[index].time)
                this.value = this.stringify()
                if(this.range_date.length >= 2){
                     // this.memory_date = []
                     this.range_date = []
                 }
                 if(this.range_date.length && this.compared(this.range_date[0],this.value)){
                    this.range_date.unshift(this.value)
                    console.log(this.range_date)
                    return
                 }
                 this.range_date.push(this.value)    
                
                console.log(this.range_date)


            },
            compared(val1,val2) {
                console.log(+val1.replace(/-/g,''),+val2.replace(/-/g,''))
                return (+val1.replace(/-/g,'')) >= (+val2.replace(/-/g,''))
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
