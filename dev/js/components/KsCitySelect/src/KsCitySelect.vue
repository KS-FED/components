<template>
  <div class="KsCitySelect" cid="KsCitySelect" v-ks-click-outside="closeHandle">
    <div class="_input">
      <div class="_icon">
        <i class="icon">&#xe668;</i>
      </div>
      <input type="text" class="col" readonly v-model="selectedValue"
             @click="show = true"
      >
    </div>
    <div class="_bd" v-if="show">
      <ul class="_tab" @click.stop="tabSwitchHandle">
        <li v-for="tab in tabs" :class="tabsCurrentActived === $index && 'active'"
            :data-tabId="$index" v-text="tab"></li>
      </ul>
      <div class="_content">
        <table class="_list" @click.stop="itemSelectedHandle">
          <tr v-for="line in locationList">
            <td v-for="location in line" v-text="location[itemTextKey]"
                :data-itemId="$parent.$index*lineSize + $index"
                :class="itemActivitedControl === $parent.$index*lineSize + $index && 'active'"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'KSCitySelect',

    data () {
      return {
        show: false,
        tabsCurrentActived: 0,
        itemCurrentActived: [
          {id: null, name: ''}
        ]
      }
    },

    props: {
      tabs: {type: Array, default() {return ['省', '市', '区/县']}},
      dataSource: {type: Array, required: true, towWay: true},
      lineSize: {type: Number, default: 4},
      itemTextKey: {type: String, required: true}
    },

    methods: {
      /**
       * @description 处理选择器关闭.
       */
      closeHandle () {
        if (this.show) { this.show = false }
      },

      /**
       * @description 切换 `忒伯` 处理函数.
       * @summary 此处绑定在 `ul` 利用事件冒泡是为了
       *  减少事件绑定的数量.
       * @param target {Element} Dom 对象.
       */
      tabSwitchHandle ({ target }) {
        let tabId = target.getAttribute('data-tabId')

        if (!tabId) { return }
        // 切换 tab
        this.tabsCurrentActived = Number(tabId)
        this.$emit('switch', Number(tabId))
      },

      /**
       * @description 地域选中处理函数.
       * @summary 此处绑定在 `table` 利用事件冒泡是为了
       *  减少事件绑定的数量.
       * @param target {Element} Dom 对象.
       */
      itemSelectedHandle ({ target }) {
        let itemId = target.getAttribute('data-itemId')
        let curTab = this.tabsCurrentActived
        let tabsSize = this.tabs.length

        if (!itemId) { return }

        // 选中 item 并且清除后续选中项
        this.$set(`itemCurrentActived[${curTab}]`, {id: itemId, name: target.innerText})
        for(let i = curTab + 1; i <= tabsSize - 1; i++) {
          this.$set(`itemCurrentActived[${i}]`, {id: null, name: ''})
        }
        // 选中 tabs
        this.tabsCurrentActived = (curTab >= tabsSize - 1) ? curTab : curTab + 1

        this.$emit('switch', this.tabsCurrentActived)
        this.$emit('selected', this.dataSource[Number(itemId)])
      }
    },

    computed: {
      /**
       * @description 用于计算当前选中 item.
       * @return {Boolean/Number} *
       */
      itemActivitedControl () {
        const ica = 'itemCurrentActived'
        const tca = 'tabsCurrentActived'
        let hasSelect = this[ica][this[tca]] ? this[ica][this[tca]].id : false

        if (!hasSelect) { return false }
        return Number(hasSelect)
      },

      /**
       * @description 地域列表.
       * @summary 就是当前需要显示的地域.
       * @returns {Array}
       */
      locationList () {
        let result = [], line = [], accumulator = -1

        this.dataSource.forEach((item, i) => {
          let hasBreakLine = ++accumulator === this.lineSize

          // 检查是否需要折行
          if (hasBreakLine) {
            result.push(line); line = []; accumulator = 0
          }
          line.push(item)
        })
        result.push(line)

        return result
      },

      /**
       * @description 当前已经选中的值.
       */
      selectedValue () {
        let result = []
        let tabsSize = this.tabs.length
        let ica = this.itemCurrentActived

        for (let i = 0; i < tabsSize; i++) {
          if (!ica[i]) { continue }
          if (!ica[i].id) {
            result.push('请选择')
          } else {
            result.push(ica[i].name)
          }
        }

        return result.join(' / ')
      }
    }
  }
</script>

<style lang="scss">
</style>

