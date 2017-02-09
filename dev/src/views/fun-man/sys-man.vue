<template>
  <div class="sys-container">

    <div class="components-container">
      <sys-edit :show.sync="editForm.show" :title="editForm.title" :mode="editForm.mode" @confirm="sysEditConfirm"></sys-edit>
    </div>

    <ul class="tab-bor">
      <li class="poi active">系统管理</li>
    </ul>
    <div class="kframe">
      <div class="kframe__header">
        <div class="ks-row-auto spacing-20-0">
          <div class="ks-col">
            <ks-button size="normal" data-ksa="system.add" type="success" @click="addSys">新建系统</ks-button>
          </div>
          <div class="ks-col-auto">
            <ks-button size="normal" data-ksa="system.list" type="primary" @click="getSysList">查询</ks-button>
          </div>
        </div>
      </div>

      <div class="table-striped">
        <!--<no-search-result :show="!sysList.length">-->
          <!--很抱歉, 未查询到相关结果!-->
        <!--</no-search-result>-->
        <table class="ktable">
          <thead>
          <tr>
            <th>系统ID</th>
            <th>系统名称</th>
            <th>备注</th>
            <th>更新人</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="sys in sysList">
            <td v-text="sys.sys_id">系统ID</td>
            <td v-text="sys.name">系统名称</td>
            <td v-text="sys.remark">备注</td>
            <td v-text="sys.update_user">更新人</td>
            <td v-text="sys.update_at | toDate">更新时间</td>
            <td :track-by="sys.id">
              <ul class="tools">
                <li class="item" data-ksa="system.update" @click="editSys(sys)"
                ><i class="iconfont icon-shezhiico"></i></li>
                <li class="item" data-ksa="system.moudle" @click="configOperHandle(sys)"
                    v-link="{name: 'mod-man', params: {systemId: sys.id, systemName: sys.name}}"
                ><i class="iconfont icon-quanxiancaozuoico"></i></li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="kpager-wrap">
        <div class="ks-row-auto spacing-20-0">
          <div class="ks-col"></div>
          <div class="ks-col-auto">
            <ks-page :page_current.sync="pager.currentPage" :total="pager.total"
              :page_size="pager.pageSize" @current_change="getSysList"></ks-page>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="babel">
  import NoSearchResult from '../../components/NoSearchResult.vue'
  import SysEdit from './components/SysEditMask.vue'

  import sysMan from '../../apis/models/sysMan'

  export default{
    data () {
      return {
        sysList: [],

        editForm: {
          title: '测试',
          mode: 'add',
          show: false,
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
       * @description 编辑系统
       * @param sys {Object} 系统模型
       */
      editSys (sys) {
        let editForm = this.editForm

        // 修改编辑系统弹出框标题
        editForm.title = '编辑系统'
        // 修改当前系统编辑框模式
        editForm.mode = 'edit'
        // 初始化编辑框中系统数据
        this.$broadcast('sysEditInit', sys)
        // 打开编辑系统弹出框
        editForm.show = true
      },

      /**
       * @description 新建系统
       */
      addSys () {
        let editForm = this.editForm

        // 修改编辑系统弹出框标题
        editForm.title = '新建系统'
        // 修改当前编辑框模式
        editForm.mode = 'add'
        // 初始化编辑框中系统数据
        this.$broadcast('sysEditInit', {})
        // 打开编辑系统弹出框
        editForm.show = true
      },

      /**
       * @description 获取系统列表
       */
      getSysList () {
        sysMan.getSysList(this.pager).then(({ data }) => {
          this.sysList = data.data
          this.pager.total = data.total
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 处理系统编辑确定事件
       * @param sysEditForm {Object} 系统编辑的表单对象
       */
      sysEditConfirm (sysEditForm) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container'})

        // 判断编辑框模式
        if (this.editForm.mode === 'add') {
          // 发起添加系统请求
          sysMan.sysAdd(sysEditForm).then(() => {
            // 关闭系统编辑框
            this.editForm.show = false
            // 显示添加成功呢
            dialog.show('添加成功!', '信息', 'success')(() => {
              // 刷新系统列表
              this.getSysList()
              // 关闭提示框
              dialog.close()
            })
          }, ({ data }) => this.errHandle(data))
        } else {
          sysMan.editSys(sysEditForm.id, sysEditForm).then(() => {
            this.editForm.show = false
            dialog.show('添加成功!', '信息', 'success')(() => {
              this.getSysList()
              dialog.close()
            })
          }, ({ data }) => this.errHandle(data))
        }
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },
    ready () {
      // 获取系统列表
      this.getSysList()
    },
    components: {
      NoSearchResult,
      SysEdit
    }
  }
</script>
