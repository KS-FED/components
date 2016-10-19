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
            <ul class="col-auto" @click="click_page_mian($event)">
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
     * className不合理 ，目的表达不可点击状态 ，'default' 相关比较合理
     */
    import curry from 'lodash.curry'
    import flowright from 'lodash.flowright'
    export default {
        props: {
            // 总条数
            total: {type:Number, default:82 }, 
            // 展示分页个数
            pages: {type:Number, default:9 }, 
            // 当前选中的页数
            page_current: {type:Number, default:1 }, 
            // 每页展示条数
            page_size :{type:Number, default:10 } 
        },
        data (){
            return {
                pages_array : [],
                pages_count : this.pages
            }
        },
        
        methods: {
            // 缓存
            memoize (fun){
                var cache = {}
                return function () {
                    var arg_str = JSON.stringify(arguments)
                    cache[arg_str] = cache[arg_str] || fun.apply(fun,arguments)
                    return cache[arg_str]
                }
            },
            // 总页数
            get_total_count (total,page_size){
                var mod = total % page_size
                return  (total-mod)/page_size + (mod && 1)
            },
            cache_total_count (){
                return this.memoize(this.get_total_count)
            },
            // 最大页数
            limit_max_page : curry((cur,total)=>{
                return  cur > total 
                            ? total
                            : cur
            }),
            // 纯净 当前数组
            get_pure_array (page_cur,pages,total_count){
                var arr = [],len,cur_show_max
                if(pages > total_count){
                    pages = total_count
                    cur_show_max = total_count
                    len = total_count-1
                }else{
                    len = pages - 1
                    var cur_show_max = page_cur + len/2
                    page_cur <= len/2  && (cur_show_max = pages)
                    cur_show_max > total_count && (cur_show_max = total_count)
                }
                    
                
                for (var i = len ; i>=0; i--){
                    arr.push(cur_show_max - i)
                }
                return arr
            },
            // 折叠，添加省略号
            has_fold (max,arr){
                var last = arr.length-1

                arr = [].concat(arr)
                if(arr[0] > 1){
                    arr[0] = 1
                    arr[1] = '···'
                }
                if(arr[last] < max){
                    arr[last] = max
                    arr[last -1] = '···'
                }
                return arr
            },
            click_page_mian (event){

                var value = event.target.innerHTML.trim()

                switch(true){
                    // left
                    case '&lt;' === value :
                        --this.page_current
                        this.page_current < 1 && (this.page_current = 1)
                    break;
                    // right
                    case '&gt;' === value :
                        ++this.page_current
                        var cur = flowright(
                                this.limit_max_page(this.page_current),
                                this.cache_total_count
                                )
                        this.page_current = cur(this.total,this.page_size)
                    break;
                    case '···' === value :break;
                    case !isNaN(value):
                        this.page_current = +value
                    break;
                }


            },
            
            get_page_array (page_cur,pages,total_count) {
                
                var arr 
                arr = this.get_pure_array(page_cur,pages,total_count)    
                arr = this.has_fold(total_count,arr)
                return arr
                
            }
        },
        watch: {
            page_current (val){
                var total_count = this.get_total_count (this.total,this.page_size)
                this.pages_array = this.get_page_array(val,this.pages,total_count)
            }
        },
        created (){
            var total_count = this.cache_total_count (this.total,this.page_size)
            console.log(total_count)
            this.pages_array = this.get_page_array(1,this.pages,total_count)
            
        }
    }
</script>