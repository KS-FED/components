<template>
  <div class="auth-container">

    <div class="components-container">
      <auth-edit :show.sync="editForm.show" :title="editForm.title" :modlist="modList"
                 :syslist="sysList" :mode="editForm.mode" @confirm="authEditConfirm"
      >
      </auth-edit>
    </div>

    <ul class="tab-bor">
      <li class="poi active">{{moduleName}} {{moduleName && '-'}} 权限管理</li>
    </ul>

    <div class="kframe">
      <div class="kframe__header">
        <div class="ks-row-auto spacing-20-0">
          <div class="ks-col">
            <ks-button size="normal" data-ksa="permission.add" type="success" @click="addAuth">新建权限</ks-button>
          </div>
          <div class="ks-col-auto">
            <select class="input w180" v-model="searchForm.systemId"
                    @change="getModList"
            >
              <option value="">请选择系统</option>
              <option :value="sys.id" v-for="sys in sysList" v-text="sys.name"></option>
            </select>
          </div>
          <div class="ks-col-auto">
            <select class="input w180" v-model="searchForm.moduleId">
              <option value="">请选择模块</option>
              <option :value="mod.id" v-for="mod in modList" v-text="mod.name"></option>
            </select>
          </div>
          <div class="ks-col-auto">
            <input class="input" type="text" placeholder="权限名称" maxlength="32" v-model="searchForm.authName">
          </div>
          <div class="ks-col-auto">
            <ks-button size="normal" data-ksa="permission.list" type="primary"  @click="getAuthList">查询</ks-button>
          </div>
        </div>
      </div>
      <div class="table-striped">
        <table>
          <thead>
          <tr>
            <th>权限ID</th>
            <th>权限名称</th>
            <th>模块名称</th>
            <th>备注</th>
            <th>更新人</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="auth in authList">
            <td v-text="auth.id">权限ID</td>
            <td v-text="auth.name">权限名称</td>
            <td v-text="auth.module_name">模块名称</td>
            <td v-text="auth.remark">备注</td>
            <td v-text="auth.update_user">更新人</td>
            <td v-text="auth.update_at | toDate">更新时间</td>
            <td :track-by="auth.id">
              <ul class="tools">
                <li class="item" data-ksa="permission.delete"
                    @click="deleteAuth(auth)"
                ><i class="iconfont icon-shanchuico"></i></li>
                <li class="item" data-ksa="permission.update"
                    @click="editAuth(auth)"
                ><i class="iconfont icon-shezhiico"></i></li>
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
                     :page_size="pager.pageSize" @current_change="getAuthList"
            >
            </ks-page>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="babel">
  import NoSearchResult from '../../components/NoSearchResult.vue'
  import AuthEdit from './components/AuthEditMask.vue'

  import authMan from '../../apis/models/authMan'
  import modMan from '../../apis/models/modMan'
  import sysMan from '../../apis/models/sysMan'

  import { PAGE_COUNT_NORMAL, PAGE_COUNT_MAX } from '../../global'

  export default{
    data () {
      return {
        moduleName: '',

        authList: [],
        modList: [],
        sysList: [],

        searchForm: {
          systemId: '',
          moduleId: '',
          authName: ''
        },

        editForm: {
          title: '权限列表',
          mode: 'add',
          show: false,
        },

        pager: {
          currentPage: 1,
          pageSize: PAGE_COUNT_NORMAL,
          total: 0
        }
      }
    },

    methods: {

      /**
       * @description 编辑权限
       * @param auth {Object} 权限模型
       */
      editAuth (auth) {
        let editForm = this.editForm

        // 修改编辑权限弹出框标题
        editForm.title = '编辑权限'
        // 修改当前权限编辑框模式
        editForm.mode = 'edit'
        // 初始化编辑框中权限数据
        this.$broadcast('authEditInit', auth)
        // 打开编辑权限弹出框
        editForm.show = true
      },

      /**
       * @description 新建权限
       */
      addAuth () {
        let editForm = this.editForm

        // 修改编辑权限弹出框标题
        editForm.title = '添加权限'
        // 修改当前编辑框模式
        editForm.mode = 'add'
        // 初始化编辑框中权限数据
        this.$broadcast('authEditInit', {
          module_id: this.searchForm.module_id
        })
        // 打开编辑权限弹出框
        editForm.show = true
      },

      /**
       * @description 获取模块列表
       */
      getAuthList () {
        // 包含了要发送给后台的值，reqPack表示
        let reqPack = {
          currentPage: null,
          pageSize: null,
          moduleId: '',
          authName: '',
        }

        reqPack.currentPage = this.pager.currentPage
        reqPack.pageSize = this.pager.pageSize
        reqPack.moduleId = this.searchForm.moduleId
        reqPack.authName = this.searchForm.authName

        // authMan.getAuthList(reqPack) 请求Promise（？） 有个then 方法
        // function (){ } 这是一个回调函数，就是没有名字，一般情况下，我们是function as(){ }
        // () => () es6的写法
        // ({ data }) 可以理解为因定写法，解构
        authMan.getAuthList(reqPack).then(({ data }) => {
          this.authList = data.data
          this.pager.total = data.total
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 删除权限
       * @param name {String} 权限名
       * @param id {Number} 权限ID
       */
      deleteAuth ({ name, id }) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' ,confirmBtnText: '确定'})

        // 弹出是否确认删除对话框
        dialog.show(`是否要删除权限 ${name} !`, '信息', 'warn', { showCancelBtn: true })(() => {

          // 发送删除权限请求
          authMan.deleteAuth(id).then(() => {

            // 关闭是否确认删除对话框
            dialog.close()
            // 显示成功删除对话框
            dialog.show('删除成功!', '信息', 'success')(() => {

              // 关闭确认删除对话框
              dialog.close()
              // 刷新权限列表
              this.getAuthList()
            })
          }, ({ data }) => this.errHandle(data))
        }, () => dialog.close())
      },

      /**
       * @description 获取系统列表
       */
      getSysList () {
        sysMan.getSysList({
          currentPage: 1,
          pageSize: PAGE_COUNT_MAX
        }).then(({ data }) => {
          this.sysList = data.data
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 获取模块列表
       */
      getModList () {
        modMan.getModList({
          currentPage: 1,
          pageSize: PAGE_COUNT_MAX,
          systemId: this.searchForm.systemId
        }).then(({ data }) => {

          // 初使化赋值
          this.modList = data.data
          this.searchForm.moduleId = ''
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 处理用户编辑确定事件
       * @param authEditForm {Object} 用户编辑的表单对象
       */
      authEditConfirm (authEditForm) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        // 判断编辑框模式
        if (this.editForm.mode === 'add') {
          // 发起添加系统请求
          authMan.addAuth(authEditForm).then(() => {
            // 关闭系统编辑框
            this.editForm.show = false
            // 显示添加成功呢
            dialog.show('添加成功!', '信息', 'success')(() => {
              // 刷新系统列表
              this.getAuthList()
              // 关闭提示框
              dialog.close()
            })
          }, ({ data }) => this.errHandle(data))
        } else {
          authMan.editAuth(authEditForm.id, authEditForm).then(() => {
            this.editForm.show = false
            dialog.show('编辑成功!', '信息', 'success')(() => {
              this.getAuthList()
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
      // 获取路由中 moduleId, moduleName 信息
      let { moduleId = null, moduleName = null } = this.$route.params
      this.searchForm.moduleId = moduleId << 0
      this.moduleName = moduleName
      if (!(moduleId << 0)) {
        this.searchForm.moduleId = ''
        this.moduleName = ''
      }

      // 获取权限列表
      this.getAuthList()
      // 获取模块列表
      this.getModList()
      // 获取系统列表
      this.getSysList()
    },

    //当前页面注册，es6的语法
    components: {
      NoSearchResult,
      AuthEdit
    }
  }
</script>
