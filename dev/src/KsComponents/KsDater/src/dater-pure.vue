<template>
<div class="KsDater" cid="KsDater"
    v-on:click="pick($event)">

<div class="_date" v-for="(key,date) in dates">
<div>
    <div class="_days"
        v-for="week in 6">
        <span 
            v-for="day in  7"
            :id="'dater'+_uid+'_'+key+'_'+(+week * 7 + day)"
            :class="{
                'pass':date[week * 7 + day] && date[week * 7 + day].status=='disabled',
                'active':date[week * 7 + day] && date[week * 7 + day].status=='active'}">
                {{date[week * 7 + day] && +date[week * 7 + day].datetext}}</span>
    </div>
</div>
</div>

<!-- <div class="date-bd" v-for="(key,data) in dates">
<div>
    <div class="date-days"
        v-for="week in 6">
        <span 
            v-for="day in  7"
            :id="'dater'+_uid+'_'+key+'_'+(+week * 7 + day)"
            :class="{
                'pass':data.date[week * 7 + day] && data.date[week * 7 + day].status=='disabled',
                'active':data.date[week * 7 + day] && data.date[week * 7 + day].status=='active'}">
                {{data.date[week * 7 + day] && +data.date[week * 7 + day].datetext}}</span>
    </div>
</div>
</div> -->

<!-- <div class="_date">
<div>
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
</div> -->
{{val}}
<sub :val="val" v-on:change="val_change"></sub>
</div>
</template>
<script>
    import sub from './sub.vue'
    import { next_month } from './util/lang'
    import { one_page_date } from './util/apage'
    export default {
        components:{
            sub
        },
        data (){
            return {
                dates:[],
                now:new Date(),
                value:'',
                val:'eeeee'
            }
        },
        methods:{
            
            pick (e){
                var id = event.target.id.split('_')
                var unit_index = +id[1] 
                var index = +id[2] 
                // console.log(unit_index,index)
                if(isNaN(unit_index) || isNaN(index) || id[2]=='disabled') return

                this.value = this.dates[unit_index][index].dater
                // console.log(unit_index,index,this.value)
                
                // this.dates[unit_index][index].status = 'active'
                // this.dates[0] = this.pages_date(this.now,this.filter,1)[0]
                // this.dates.splice(0,1,this.pages_date(this.now,this.filter,1)[0])
                this.init()
                // this.dates.splice(1,unit_index,)
                this.val = Math.random()*1000
            },
             pick2 (e){
                var id = event.target.id.split('_')
                var index = +id[1] 
                console.log(index)
                if(isNaN(index) || id[2]=='disabled') return

                this.value = this.dates[index].dater
                console.log(index,this.value)
                
                // this.dates[10].status='active'
                
                this.init()
                // this.dates.splice(1,unit_index,)



                
            },
            filter (item){
                // console.log(item)
                if(this.value === item) return 'active'
                
            },
            init (){
                this.dates = this.pages_date(this.now,this.filter,4)
                // console.log(this.dates)
            },
            pages_date(date,callback_filter,length) {
                var arr = []
                var ym = {
                    year: date.getFullYear(),
                    month: date.getMonth()
                }
                
                for(var i=0,len=length ; i<len ; i++){
                    arr.push(one_page_date(ym.year,ym.month,callback_filter))
                    // 对象
                    // var data = {}
                    // data.date = one_page_date(ym.year,ym.month,callback_filter)
                    // arr.push(data)
                    // 对象 end
                    ym = next_month(ym.year,ym.month)
                }
                return arr
            },
            val_change(val){
                console.log(val)
                this.val = val
                this.val = 'val_I_'+Math.random()*1000
            }
        },
        watch :{
            value (){
                // this.init()
            }
            
        },
        created(){
            this.init()

            setTimeout(()=>{
                this.val = 'cccc'
            },3000)
            // this.dates.push(get_page_dates(2016,7,this.select))
            // this.dates.push(get_page_dates(2016,8))
            // this.dates.push(get_page_dates(2016,9))
            // this.dates.push(get_page_dates(2016,10))
            // this.dates.push(get_page_dates(2016,11))

        }
    }
</script>