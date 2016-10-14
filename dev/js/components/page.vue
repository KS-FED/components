<template>
    <div class="paging-box">
            <div class="statistical">共<span>123456</span>条</div>
            <div class="col">
                每页
                <select class="input">
                    <option>10</option>
                    <option>20</option>
                    <option>100</option>
                </select>
                条
            </div>
            <ul class="col-auto" @click="page_mian($event)">
                <li class="frist">&lt;</li>
                <li v-for="i in pages_array"
                    track-by="$index"
                    :class="{'active':page_current==i}" v-text="i"></li>
                <!-- <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>···</li>
                <li>99</li> -->
                <li>&gt;</li>
            </ul>
        </div>
</template>
<script type="text/javascript">
    /**
     * <li class="frist">&lt;</li>
     * 不合理 ，目的表达不可点击状态 ，'default' 相关比较合理
     */
    export default {
        props: {
            // 总条数
            total: {
                type:Number,
                default:110
            },
            // 展示分页个数
            pages: {
                type:Number,
                default:9
            },
            // 当前选中的页数
            page_current: {
                type:Number,
                default:1
            },
            // 每页展示条数
            page_size :{
                type:Number,
                default:10
            }
        },
        data (){
            
            var mod = total % page_size
            this.total_count = (total-mod)/page_size + (mod && 1)
            return {
                pages_array : [],
                // pages_total_count : pages_total_count ,
                pages_count : this.pages
            }
        },
        
        methods: {

            page_mian (event){
                // console.log(event.cancelable)
                var value = event.target.innerHTML.trim()

                switch(true){
                    case '&lt;' === value :
                        
                        this.page_current = this.page_current-1 > 0
                                                ? this.page_current -1
                                                : 1
                    break;
                    case '&gt;' === value :
                        
                        this.page_current = this.page_current + 1 > this.pages_total_count 
                                                ? this.pages_total_count 
                                                : this.page_current + 1
                        
                    break;
                    case '···' === value :break;
                    case !isNaN(value):
                        this.page_current = +value
                    break;
                }


            },
            fun (total,page_size){
                var mod = total % page_size
                var total_count = (total-mod)/page_size + (mod && 1)
                
                
                return (pages)=>{
                    pages > total_count && (pages = total_count)

                    return (page_current)=>{
                        var max = page_current + (pages - 1)/2
                        max < pages  && (max = pages)
                        max > total_count && (max = total_count)
                            
                        var arr = [],len = pages - 1
                        for (var i = len ; i>=0; i--){
                            arr.push(max - i)
                        }

                        if(arr[0]>1){
                            arr[0] = 1
                            arr[1] = '···'
                        }
                        
                        if(arr[len] < total_count){
                            arr[len] = total_count
                            arr[len-1] = '···'
                        }
                        return arr
                        
                    }
                }
            },

            // page_current 更改
            page_current_change (){
                // this.page_current    当前选中分页
                // this.pages_count     分页展示总数
                // this.pages_total_count   分页总数
                
                var max = this.page_current + (this.pages_count - 1)/2
                    max < this.pages_count  && (max = this.pages_count)
                    max > this.pages_total_count && (max = this.pages_total_count)
                            
                var arr = [],len = this.pages_count - 1
                for (var i = len ; i>=0; i--){
                    arr.push(max - i)
                }

                if(arr[0]>1){
                    arr[0] = 1
                    arr[1] = '···'
                }
                
                if(arr[len]<this.pages_total_count){
                    arr[len] = this.pages_total_count
                    arr[len-1] = '···'
                }
                
                this.pages_array = arr 

            }
        },
        watch: {
            // pages (val){
            //     this.pages_count = val
            // },
            // pages_count (){
            //     this.page_current_change()
            // },
            page_current (val){
                this.pages_array = this.get_page_array(val)
            }
        },
        created (){

            // this.page_current_change()



            

            this.get_page_array = this.fun(this.total,this.page_size)(this.pages)
            this.pages_array = this.get_page_array(1)



        }
    }
</script>