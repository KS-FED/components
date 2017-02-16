## DatePicker 

> 常用的日期组件

---

### 基础使用 （分类）

#### date
<ks-date-picker :value="date" type="date" v-on:change="date_change"></ks-date-picker>
```html
<ks-date-picker :value="date" type="date" v-on:change="date_change"></ks-date-picker>
```


#### datetime
<ks-date-picker :value="datetime" type="datetime" v-on:change="datetime_change"></ks-date-picker> 
```html
<ks-date-picker :value="datetime" type="datetime" v-on:change="datetime_change"></ks-date-picker> 
```


#### datemulti
<ks-date-picker :value="datemulti" type="datemulti" v-on:change="datemulti_change"></ks-date-picker>
```html
<ks-date-picker :value="datemulti" type="datemulti" v-on:change="datemulti_change"></ks-date-picker>
```



#### daterange
<ks-dater-range v-on:change="daterange_change"></ks-dater-range>
```html
<ks-dater-range v-on:change="daterange_change"></ks-dater-range>
```


#### daterange picker
<ks-date-range-picker placeholder="开始,结束" 
        :range="[]"
        :readonly="false"
        v-on:change="date_multi_picker_change"></ks-date-range-picker>
```html
<ks-date-range-picker placeholder="开始,结束" 
        :range="[]"
        :readonly="false"
        v-on:change="date_multi_picker_change"></ks-date-range-picker>
```



<script lang="babel">
    export default {
        data(){
            return {
                datetime:'2016-10-12 03:04:20',
                date:'',
                datemulti:'2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14',
                date_base:'2016-10-12 03:04:20',
                date_val:'2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14'
            }
        },
        methods:{
            current_change(val){
                this.date_base = val
            },
            datetime_change(val){},
            date_change(val){
                // console.log('parent catch change value',val)
            },
            datemulti_change(val){
                // console.log('筛选 picker',val)
                // this.date3 = val
            },
            daterange_change(){},
            date_multi_picker_change(val){
                // console.log('多选 picker',val)
            }
        },
        ready(){
            this.date1 = '2016-09-21 03:02:24'
        }

    }
</script>
