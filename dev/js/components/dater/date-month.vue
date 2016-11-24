<template>
    <div class="KsDateMonth" cid="KsDateMonth">
        <div class="_date">
            <div class="_head">
                <div class="retreat">&lt;</div>
                <div class="year">2016年</div>
                <div class="next">&gt;</div>
            </div>
            <div class="_days"
                v-for="row in 3">
                <span class="pass" v-for="item in 4">{{months[4*row+item]}}</span>
            </div>
            <!-- <div class="_days">
                <span class="pass">一月</span>
                <span class="pass">二月</span>
                <span class="pass">三月</span>
                <span class="pass">四月</span>
            </div>
            <div class="_days">
                <span>五月</span>
                <span>六月</span>
                <span>七月</span>
                <span>八月</span>
            </div>
            <div class="_days">
                <span>九月</span>
                <span>十月</span>
                <span class="active">十一月</span>
                <span>十二月</span>
            </div> -->
            
            <div class="_btn">
                <span class="today">本月</span>
                <span class="clear">清除</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                months:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            }
        }

    }
</script>