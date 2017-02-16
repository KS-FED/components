<template>
<div class="KsDaterMultiPicker" :class="{'readonly':readonly}" cid="KsDaterMultiPicker">
    <div class="_input" v-on:click="show=!show">
        <div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
        <div class="ks-col">
            <div class="ks-row-auto">
                <div class="ks-col">
                    <input type="text" placeholder="{{placeholder[0]}}" :value="range[0]">
                </div>
                <i class="icon ks-col-auto scope-icon">&#xe677;</i>
                <div class="ks-col">
                    <input type="text" placeholder="{{placeholder[1]}}" :value="range[1]">
                </div>
            </div>
        </div>
    </div>
    <ks-dater-range v-show="show" v-on:change="change" :range_dater="range"></ks-dater-range> 
</div>
</template>
<script type="text/javascript">
    import props from './mixins/props.js'
    export default {
        mixins: [props],
        props:{
            range:{
                type:Array
            },
            placeholder:{
                coerce(val) {
                    val = val || ''
                    if(~val.indexOf(',')){
                        console.log(val.split(','))
                        return val.split(',')
                    }

                    return [val]
                } 
            }
        },
        data() {
            return {
                show:false
            }
        },
        methods:{
            close(){
                this.show = false
            },
            change(range){
                console.log(range)
                this.range = range
                range.length == 2 && this.$emit('change',range)
            }
        },
        ready(){
            document.addEventListener('click', (e) => {
                if (this.$el && !this.$el.contains(e.target)) {
                    this.close()
                }
            }, false)
        },
        beforeDestroy () {
            document.removeEventListener('click', this.close, false)
        }

    }
</script>
