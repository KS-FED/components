<template>
  <div class="sys-container">
    <ul class="tab-bor">
      <li class="poi active">日志查询</li>
    </ul>
    <div class="kframe__header">
        <div class="ks-row-auto spacing-20-0">
          <div class="ks-col"></div>

          <div class="ks-col-auto">
            <input class="input" type="text" placeholder="用户名" maxlength="32"
                   v-model="searchForm.loginName"
            >
          </div>

          <div class="ks-col-auto">
            <ks-button size="normal" data-ksa="log.list" type="primary" @click="getLogList">搜索</ks-button>
          </div>
        </div>
      </div>
      <div class="table-striped">
        <no-search-result :show="!logList.length">
          很抱歉, 未查询到相关结果!
        </no-search-result>
        <table class="ktable">
          <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>URL</th>
            <th>描述</th>
            <th>创建时间</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="log in logList">
            <td v-text="log.id">ID</td>
            <td v-text="log.login_name">用户名</td>
            <td v-text="log.uri">URL</td>
            <td v-text="log.description">描述</td>
            <td v-text="log.start_time | toDate">创建时间</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="kpager-wrap">
        <div class="ks-row-auto spacing-20-0">
          <div class="ks-col"></div>
          <div class="ks-col-auto">
            <ks-page :page_current.sync="pager.currentPage" :total="pager.total"
              :page_size="pager.pageSize" @current_change="getLogList"></ks-page>
          </div>
        </div>
      </div>

  </div>
</template>

<script lang="babel">
  import NoSearchResult from '../../components/NoSearchResult.vue'

  import logMan from '../../apis/models/logMan'

  export default{
    data () {
      return {
        logList: [],

        searchForm: {
          loginName: ''
        },

        pager: {
          currentPage: 1,
          pageSize: 10,
          total: 0
        }
      }
    },

    methods: {
      /**
       * @description 获取用户列表
       */
      getLogList () {
        logMan.getLogList(this.$utils.merge(this.pager, this.searchForm)).then(({ data }) => {
          this.logList = data.data
          this.pager.total = data.total
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },

    created () {
      // 获取角色列表
      this.getLogList()
    },

    components: {
      NoSearchResult
    }
  }
</script>
