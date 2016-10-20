<template>
    <div class="paging-box">
        <ul v-show="total" class="col-auto" @click="click_page_mian($event)">
            <li :class="{'frist':page_current == 1}">&lt;</li>
            <li v-for="i in pages_array"
                track-by="$index"
                :class="{'active':page_current == i}" v-text="i"></li>
            <li :class="{'frist':page_current == total_count}">&gt;</li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    /**
     * <li class="frist">&lt;</li>
     * className不合理 ，目的表达不可点击状态 ，'disabled' 相关比较合理
     */
    
    export default {
        props: {
            // 总条数
            total: {type:Number, default:0 }, 
            // 展示分页个数
            pages: {type:Number, default:7 }, 
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
            init (){
                if(!this.total) return
                if(this.pages%2==0) {
                    this.pages = this.pages - 1
                    console.error('分页中的参数 pages 请传入奇数 , 自动转为：'+this.pages)
                }
                this.total_count = this.get_total_count(this.total,this.page_size)
                this.pages_array = this.get_page_array(1,this.pages,this.total_count)
            },
            // 总页数
            get_total_count (total,page_size){
                var mod = total % page_size
                return  (total-mod)/page_size + (mod && 1)
            },
                
            // 最大页数
            get_cur_count (cur,total){
                return  cur > total 
                            ? total
                            : cur
            },
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
            // 点击分页主体
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
                        this.page_current = this.get_cur_count(this.page_current,this.total_count)
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
            'page_size'(){
                this.page_current = 1
            },
            'total+page_size+pages'(){
                this.init()
            },
            'page_current' (val){
                this.$emit('current_change',val)
                this.pages_array = this.get_page_array(val,this.pages,this.total_count)
            }
        },
        created (){
            this.init()
        }
    }
</script>