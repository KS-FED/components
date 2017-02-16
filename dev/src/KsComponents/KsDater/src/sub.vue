<template>
    <div v-on:click="click">
        {{val}}
    </div>
</template>
<script type="text/javascript">
    export default {
        props:{
            val:{}
        },
        data(){
            return {}
        },
        methods:{
            click(){
                this.val = 'val_'+Math.random()*1000
                this.$emit('change',this.val)
            }
        },
        watch:{
            val(v){
                // console.log(v,'watch sub')
            }
        },
        created(){
            setTimeout(()=>{
                this.val = '99999'
            },6000)
        }

    }
</script>