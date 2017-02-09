<template>
  <div class="sys-container">

    <div class="components-container">
      <mod-edit :show.sync="editForm.show" :title="editForm.title" :syslist="sysList" :mode="editForm.mode" @confirm="modEditConfirm"></mod-edit>
    </div>

    <ul class="tab-bor">
        <li class="poi active">{{systemName}} {{systemName && '-'}} 模块管理</li>
      </ul>
      <div class="kframe__header">
        <div class="ks-row-auto spacing-20-0">
          <div class="ks-col">
            <ks-button size="normal" data-ksa="module.add" type="success" @click="addMod">新建模块</ks-button>
          </div>
          <div class="ks-col-auto">
            <select class="input w180" v-model="searchForm.systemId">
              <option value="">选择系统</option>
              <option :value="sys.id" v-for="sys in sysList" v-text="sys.name"></option>
            </select>
          </div>
          <div class="ks-col-auto">
            <input class="input" type="text" placeholder="模块名称" maxlength="32" v-model="searchForm.moduleName">
          </div>
          <div class="ks-col-auto">
            <ks-button size="normal" data-ksa="module.list" type="primary" @click="getModList">查询</ks-button>
          </div>
        </div>
      </div>

      <div class="table-striped">
        <!--<no-search-result :show="!modList.length">-->
          <!--很抱歉, 未查询到相关结果!-->
        <!--</no-search-result>-->
        <table class="ktable">
          <thead>
          <tr>
            <th>模块ID</th>
            <th>模块名称</th>
            <th>模块URL</th>
            <th>系统名称</th>
            <th>备注</th>
            <th>更新人</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="mod in modList">
            <td v-text="mod.id">模块ID</td>
            <td v-text="mod.name">模块名称</td>
            <td v-text="mod.alias">模块URL</td>
            <td v-text="mod.system_name">系统名称</td>
            <td v-text="mod.remark">注备</td>
            <td v-text="mod.update_user">更新人</td>
            <td v-text="mod.update_at | toDate">更新时间</td>
            <td :track-by="mod.id">
              <ul class="tools">
                <li class="item" data-ksa="module.delete" @click="deleteMod(mod)"
                ><i class="iconfont icon-shanchuico"></i></li>
                <li class="item" data-ksa="module.update" @click="editMod(mod)"
                ><i class="iconfont icon-shezhiico"></i></li>
                <li class="item" data-ksa="module.permission"
                    v-link="{name: 'auth-man', params: {moduleId: mod.id, moduleName: mod.name}}"
                ><i class="iconfont icon-quanxiancaozuoico"></i>
                </li>
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
              :page_size="pager.pageSize" @current_change="getModList"></ks-page>
          </div>
        </div>
      </div>

  </div>
</template>

<script lang="babel">
  import NoSearchResult from '../../components/NoSearchResult.vue'
  import ModEdit from './components/ModEditMask.vue'

  import modMan from '../../apis/models/modMan'
  import sysMan from '../../apis/models/sysMan'

  export default{
    data () {
      return {
        systemName: '',

        sysList: [],
        modList: [],

        searchForm: {
          systemId: '',
          moduleName: ''
        },

        editForm: {
          title: '',
          mode: 'add',
          show: false
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
       * @description 编辑模块
       * @param mod {Object} 模块模型
       */
      editMod (mod) {
        let editForm = this.editForm

        // 修改编辑用户弹出框标题
        editForm.title = '编辑模块'
        // 修改当前编辑框模式
        editForm.mode = 'edit'
        // 初始化编辑框中用户数据
        this.$broadcast('modEditInit', mod)
        // 打开编辑用户弹出框
        editForm.show = true
      },

      /**
       * @description 新建模块
       */
      addMod () {
        let editForm = this.editForm

        // 修改编辑角色弹出框标题
        editForm.title = '添加模块'
        // 修改当前编辑框模式
        editForm.mode = 'add'
        // 初始化编辑框中角色数据
        this.$broadcast('modEditInit', {system_id: this.searchForm.systemId})
        // 打开编辑角色弹出框
        editForm.show = true
      },

      /**
       * @description 获取模块列表
       */
      getModList () {
        let reqPack = {
          currentPage: null,
          pageSize: null,
          systemId: null,
          moduleName: ''
        }

        reqPack.currentPage = this.pager.currentPage
        reqPack.pageSize = this.pager.pageSize
        reqPack.systemId = this.searchForm.systemId
        reqPack.moduleName = this.searchForm.moduleName

        modMan.getModList(reqPack).then(({ data }) => {
          this.modList = data.data
          this.pager.total = data.total
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 获取系统列表
       */
      getSysList () {
        sysMan.getSysList({currentPage: 1, pageSize: 999}).then(({ data }) => {
          this.sysList = data.data
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 处理系统编辑确定事件
       * @param modEditForm {Object} 系统编辑的表单对象
       */
      modEditConfirm (modEditForm) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        // 判断编辑框模式
        if (this.editForm.mode === 'add') {
          // 发起添加用户请求
          modMan.addMod(modEditForm).then(() => {
            // 关闭用户编辑框
            this.editForm.show = false
            // 显示添加成功呢
            dialog.show('添加成功!', '信息', 'success')(() => {
              // 刷新用户列表
              this.getModList()
              // 关闭提示框
              dialog.close()
            })
          }, ({ data }) => this.errHandle(data))
        } else {
          modMan.editMod(modEditForm.id, modEditForm).then(() => {
            this.editForm.show = false
            dialog.show('编辑成功!', '信息', 'success')(() => {
              this.getModList()
              dialog.close()
            })
          }, ({ data }) => this.errHandle(data))
        }

      },

       /**
       * @description 删除模块
       * @param name {String} 模块名称
       * @param id {Number} 模块ID
       */
      deleteMod ({ name, id }) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' ,confirmBtnText: '确定'})

        // 弹出是否确认删除对话框
        dialog.show(`是否要删除模块 ${name} !`, '信息', 'warn', { showCancelBtn: true })(() => {

          // 发送删除权限请求
          modMan.deleteMod(id).then(() => {

            // 关闭是否确认删除对话框
            dialog.close()
            // 显示成功删除对话框
            dialog.show('删除成功!', '信息', 'success')(() => {

              // 关闭确认删除对话框
              dialog.close()
              // 刷新角色列表
              this.getModList()
            })
          }, ({ data }) => this.errHandle(data))
        }, () => dialog.close())
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },
    ready () {
      // 获取路由中 systemId, systemName 信息
      let { systemId = null, systemName = null } = this.$route.params
      this.searchForm.systemId = systemId << 0
      this.systemName = systemName
      if (!(systemId << 0)) {
        this.searchForm.systemId = ''
        this.systemName = ''
      }

      // 获取模块列表
      this.getModList()
      // 获取系统列表
      this.getSysList()
    },
    components: {
      NoSearchResult,
      ModEdit
    }
  }
</script>
