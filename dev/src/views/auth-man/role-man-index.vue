<template>
  <div class="rol-container">

    <div class="components-container">
      <role-edit :show.sync="editForm.show" :title="editForm.title" :mode="editForm.mode" @confirm="roleEditConfirm"></role-edit>
    </div>

    <ul class="tab-bor">
      <li class="poi active">角色管理</li>
    </ul>
    <div class="kframe__header">
      <div class="ks-row-auto spacing-20-0">
        <div class="ks-col">
          <ks-button size="normal" data-ksa="role.add" type="success" @click="addRole">新建角色</ks-button>
        </div>
        <div class="ks-col-auto">
          <input class="input" type="text" placeholder="角色名称" maxlength="32" v-model="searchForm.roleName">
        </div>
        <div class="ks-col-auto">
          <ks-button size="normal" data-ksa="role.list" type="primary" @click="getRoleList">查询</ks-button>
        </div>
      </div>
    </div>

    <div class="table-striped">
      <!-- <no-search-result :show="!roleList.length">
        很抱歉, 未查询到相关结果!
      </no-search-result> -->
      <table>
        <thead>
        <tr>
          <th>角色ID</th>
          <th>角色名称</th>
          <th>角色范围</th>
          <th>备注</th>
          <th>更新人</th>
          <th>更新时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="role in roleList">
          <td v-text="role.id">角色ID</td>
          <td v-text="role.name">角色名称</td>
          <td v-text="role.pid">角色范围</td>
          <td v-text="role.remark">备注</td>
          <td v-text="role.update_user">更新人</td>
          <td v-text="role.update_at | toDate">更新时间</td>
          <td :track-by="role.id">
            <ul class="tools">
              <li class="item" data-ksa="role.delete"
                  @click="deleteRole(role)"
              ><i class="iconfont icon-shanchuico"></i></li>
              <li class="item" aria-label="修改" data-ksa="role.update"
                  @click="editRole(role)"
              ><i class="iconfont icon-shezhiico"></i></li>
              <li class="item" data-ksa="role.configuration"
                  v-link="{name: 'role-man-config', params: {roleId: role.id, roleName: role.name, pager: pager.currentPage}}"
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
                   :page_size="pager.pageSize" @current_change="getRoleList"></ks-page>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="babel">
  import NoSearchResult from '../../components/NoSearchResult.vue'
  import RoleEdit from './components/RoleEditMask.vue'

  import roleMan from '../../apis/models/roleMan'

  import { PAGE_COUNT_NORMAL } from '../../global'

  export default{
    data () {
      return {
        roleList: [],

        searchForm: {
          roleName: ''
        },

        editForm: {
          title: '',
          mode: 'add',
          show: false
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
       * @description 获取角色列表
       */
      getRoleList () {
        let reqPack = {
          currentPage: null,
          pageSize: null,
          roleName: ''
        }

        reqPack.currentPage = this.pager.currentPage
        reqPack.pageSize = this.pager.pageSize
        reqPack.roleName = this.searchForm.roleName

        roleMan.getRoleList(reqPack).then(({ data }) => {
          this.roleList = data.data
          this.pager.total = data.total
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 编辑角色
       * @param role {Object} 用户模型
       */
      editRole (role) {
        let editForm = this.editForm

        // 修改编辑用户弹出框标题
        editForm.title = '编辑角色'
        // 修改当前编辑框模式
        editForm.mode = 'edit'
        // 初始化编辑框中用户数据
        this.$broadcast('roleEditInit', role)
        // 打开编辑用户弹出框
        editForm.show = true
      },

      /**
       * @description 新建角色
       */
      addRole () {
        let editForm = this.editForm

        // 修改编辑角色弹出框标题
        editForm.title = '新建角色'
        // 修改当前编辑框模式
        editForm.mode = 'add'
        // 初始化编辑框中角色数据
        this.$broadcast('roleEditInit', {})
        // 打开编辑角色弹出框
        editForm.show = true
      },

      /**
       * @description 处理系统编辑确定事件
       * @param roleEditForm {Object} 系统编辑的表单对象
       */
      roleEditConfirm (roleEditForm) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        // 判断编辑框模式
        if (this.editForm.mode === 'add') {
          // 发起添加用户请求
          roleMan.addRole(roleEditForm).then(() => {

            // 关闭用户编辑框
            this.editForm.show = false
            // 显示添加成功呢
            dialog.show('添加成功!', '信息', 'success')(() => {
              // 刷新用户列表
              this.getRoleList()
              // 关闭提示框
              dialog.close()
            })

          }, ({ data }) => this.errHandle(data))
        } else {
          roleMan.editRole(roleEditForm.id, roleEditForm).then(() => {

            this.editForm.show = false
            dialog.show('编辑成功!', '信息', 'success')(() => {
              this.getRoleList()
              dialog.close()
            })

          }, ({ data }) => this.errHandle(data))
        }
      },

       /**
       * @description 删除角色
       * @param name {String} 角色名
       * @param id {Number} 角色ID
       */
      deleteRole ({ name, id }) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' ,confirmBtnText: '确定'})

        // 弹出是否确认删除对话框
        dialog.show(`是否要删除角色 ${name} !`, '信息', 'warn', { showCancelBtn: true })(() => {

          // 发送删除角色请求
          roleMan.deleteRole(id).then(() => {

            // 关闭是否确认删除对话框
            dialog.close()
            // 显示成功删除对话框
            dialog.show('删除成功!', '信息', 'success')(() => {

              // 关闭确认删除对话框
              dialog.close()
              // 刷新角色列表
              this.getRoleList()
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
      // 获取路由中 pager 信息
      let { pager = 1 } = this.$route.params
      this.pager.currentPage = pager << 0
      if (!(pager << 0)) {
        this.pager.currentPage = 1
      }

      // 获取角色列表
      this.getRoleList()
    },

    components: {
      NoSearchResult,
      RoleEdit
    }
  }
</script>
