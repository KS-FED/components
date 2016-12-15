<template>
    <div class="KsPageGroup" cid="KsPageGroup">
        <div class="_statistical">共<span>{{total}}</span>条</div>
        <div class="ks-col">
            每页
            <select class="input" v-model="page_size">
                <option 
                    v-for="i in page_sizes" 
                    :value="i">{{i}}</option>
            </select>
            条
        </div>
        <page 
            class="ks-col-auto"
            :page_current="page_current" 
            :pages="pages"
            :total="total"
            :page_size="page_size"
            v-on:current_change="current_change"></page>    
    </div>
</template>
<script type="text/javascript">
    import page from './page.vue'
    export default {
        components:{
            'page':page
        },
        props: {
            // 总条数
            total: {type:Number, default:0 }, 
            // 展示分页个数
            pages: {type:Number, default:7 }, 
            // 当前选中的页数
            page_current: {type:Number, default:1 }, 
            // 每页展示条数
            page_size :{type:Number, default:10 },
            // 每页可能展示条数
            page_sizes :{type:Array, default:[10,20,100] } 
        },
        data() {
            return {}
        },
        methods: {
            init (){
                this.page_size = this.page_sizes[0]
            },
            current_change(val){
                this.$emit('size_change',val)
            }
        },
        created (){
            this.init()
        },
        watch:{
            page_size(val){
                this.$emit('size_change',val)
            }
        }
    }
</script>
<style lang="scss">
    @import '../../../sass/components/paging';
</style>