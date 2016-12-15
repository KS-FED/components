<template>
    <div class="a" cid='app'>
        <div class="_aa _ff">
            <input type="checkbox" checked="{check('id')}"> 
            <div class="_ee">
                eee
            </div>
        </div>
        主路由
        <router-view ></router-view>
    </div>
</template>
<script type="text/javascript">
    export default {
        data (){
            return {}
        },
        ready (){
        }
    }
</script>
<style lang="scss">
  /*@import "../../sass/app";*/
</style>
