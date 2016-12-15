<template>
    <div class="page-bar" v-show="all>0">
        <ul class="pagination">
            <li class="dataTables-length" v-show="islength">
                每页展示 
                <div class="example1-length">
                    <a v-for="n in pageSizeList" v-text="n" :class="{'active':pageSize == n}" @click="pageSize=n"></a>
                </div>
                条
            </li>
            <li v-show="page_total>1"><span class="homepage" v-on:click="jump('first')">首页</span></li>
            <li v-if="page_total>1 && showFirst"><span class="btn-prev" v-on:click="cur--">上一页</span></li>
            <li v-for="index in indexs"  v-bind:class="{ 'active': cur == index}">
                <a v-on:click="btn_click(index)">{{ index }}</a>
            </li>
            <li v-if="page_total>1 && show_last"><span class="btn-next" v-on:click="cur++">下一页</span></li>
            <li v-show="page_total>1"><span class="lastpage" v-on:click="jump('last')">尾页</span></li>
            <li><span>共<i v-text="page_total"></i>页</span></li>
            <!-- <li v-show="page_total>pageSize">&nbsp;&nbsp;&nbsp;&nbsp;第<input type="text" class="jump-input form-control" v-model="jump_val" v-limit-number="jump_val">页 <input type="button" value="确定" class="jump-button" @click="jump()" vaule="确定"></li> -->

        </ul>
    </div>
</template>




<script>
    /**
     * 依赖的 filter_number 过滤器
     */
    export default {
        props: {
            all: { type: Number, default: 0 },
            cur: { type: Number, default: 0 },
            pageSizeList: { type: Array, required:false},
            pageSize: { type: Number, default: '' }
        },
        data(){
            return {
                islength:false,
                jump_val:''
            }
        },
        computed: {
            page_total() {
                return (this.all-(this.all%this.pageSize))/this.pageSize + ((this.all%this.pageSize) ? 1:0)
            },
            indexs() {

                var left = 1
                var right = this.page_total
                var ar = []
                if(this.page_total>= 11){
                    if(this.cur > 5 && this.cur < this.page_total-4){
                        left = this.cur - 5
                        right = this.cur + 4
                    }else{
                        if(this.cur<=5){
                            left = 1
                            right = 10
                        }else{
                            right = this.page_total
                            left = this.page_total -9
                        }
                    }
                }
                while (left <= right){
                    ar.push(left)
                    left ++
                }
                return ar
            },
            show_last() {
                if(this.cur == this.page_total){
                    return false
                }
                return true
            },
            showFirst() {
                if(this.cur == 1){
                    return false
                }
                return true
            }
        },
        methods: {
            btn_click(data) {
                if(data != this.cur){
                    this.cur = data
                }
            },
            jump(type) {
                switch(type){
                    case 'first':
                        this.cur = 1
                    break
                    case 'last':
                        this.cur = this.page_total
                    break
                    default :
                        if(+this.jump_val===0) this.jump_val = 1
                        if(!+this.jump_val) return

                        if(+this.jump_val>this.page_total){
                             this.cur = this.page_total   
                             this.jump_val = this.page_total
                        }else{
                            this.cur = +this.jump_val
                        }
                    break    
                }
                
            }
        },
        watch: {
            pageSize() {
                this.cur = 1
            },
            all(){
                this.islength = this.all > this.pageSize
            }
        },
        ready() {
            console.log(this.all)

            !this.pageSizeList && (this.pageSizeList = [10,50,100])
            this.pageSize || (this.pageSize = this.pageSizeList[0])


            
            console.log(this.islength)
        }
    }
</script>