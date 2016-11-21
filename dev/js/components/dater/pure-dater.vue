<template>
<div class="picker-wrap"
    v-on:click="pick($event)">
<div class="date-bd" v-for="(key,date) in dates">

<div>
    <div class="date-days"
        v-for="week in 6">
        <span 
            v-for="day in  7"
            :id="_uid+'_'+key+'_'+(+week * 7 + day)"
            :class="{
                'pass':date[week * 7 + day] && date[week * 7 + day].status=='disabled',
                'active':date[week * 7 + day] && date[week * 7 + day].status=='active'}">
                {{date[week * 7 + day] && +date[week * 7 + day].datetext}}</span>
    </div>
</div>

</div>
</div>
</template>
<script>
    
    import { next_month } from './util/lang'
    import { one_page_date } from './util/apage'
    export default {
        data (){
            return {
                dates:[],
                now:new Date(),
                value:''
            }
        },
        methods:{
            
            pick (e){
                var id = event.target.id.split('_')
                var unit_index = +id[1] 
                var index = +id[2] 

                if(isNaN(unit_index) || isNaN(index) || id[2]=='disabled') return

                console.log(unit_index,index)
                this.value = this.dates[unit_index][index].dater
                console.log(this.value)
                var arr = this.dates
                // this.dates = [].concat(arr)
                this.init()
                
            },
            filter (item){
                // console.log(item)
                if(this.value === item) return 'active'
                
            },
            init (){
                this.dates = this.pages_date(this.now,3)
            },
            pages_date(newDate,length) {
                var arr = []
                var ym = {
                    year: newDate.getFullYear(),
                    month: newDate.getMonth()
                }
                
                for(var i=0,length=3 ; i<3 ; i++){
                    arr.push(one_page_date(ym.year,ym.month,this.filter))
                    ym = next_month(ym.year,ym.month)
                }
                return arr
            }
        },
        watch :{
            value (){
                // this.init()
            }
        },
        created(){
            this.init()
            // this.dates.push(get_page_dates(2016,7,this.select))
            // this.dates.push(get_page_dates(2016,8))
            // this.dates.push(get_page_dates(2016,9))
            // this.dates.push(get_page_dates(2016,10))
            // this.dates.push(get_page_dates(2016,11))

        }
    }
</script>