<template>
  <div class="user-man-container">

    <div class="components-container">
      <user-edit :show.sync="editForm.show" :title="editForm.title"
                 :mode="editForm.mode" @confirm="userEditConfirm"></user-edit>
    </div>

    <ul class="tab-bor">
      <li class="poi active">用户管理</li>
    </ul>
    <div class="kframe">
      <div class="kframe__header">
        <div class="ks-row-auto spacing-20-0">
          <div class="ks-col">
            <ks-button size="normal" data-ksa="user.add" type="success" @click="addUser">新建用户</ks-button>
          </div>
          <div class="ks-col-auto">
            <input class="input" type="text" placeholder="姓名" maxlength="32" v-model="searchForm.userName">
          </div>
          <div class="ks-col-auto">
            <input class="input" type="text" placeholder="手机号" maxlength="11" v-model="searchForm.userMobile">
          </div>
          <div class="ks-col-auto">
            <ks-button size="normal" data-ksa="user.list" type="primary" @click="getUserList">查询</ks-button>
          </div>
        </div>
      </div>
      <div class="table-striped">
        <table>
          <thead>
          <tr>
            <th>姓名</th>
            <th>手机号</th>
            <th>备注</th>
            <th>更新人</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in userList">
            <td v-text="user.name">姓名</td>
            <td v-text="user.mobile">手机号</td>
            <td v-text="user.remark">备注</td>
            <td v-text="user.update_user">更新人</td>
            <td v-text="user.update_at | toDate">更新时间</td>
            <td :track-by="user.id">
              <ul class="tools">
                <li class="item" data-ksa="user.update" @click="editUser(user)"
                ><i class="iconfont icon-shezhiico"></i></li>
                <li class="item" data-ksa="user.data-permission"
                    v-link="{name: 'user-man-config', params: {userId: user.id, userName: user.name, pager: pager.currentPage}}"
                ><i class="iconfont icon-quanxiancaozuoico"></i></li>
                <li class="item" data-ksa="user.role-configuration"
                    v-link="{name: 'user-man-role', params: {userId: user.id, userName: user.name, pager: pager.currentPage}}"
                ><i class="iconfont icon-yonghu"></i></li>
                <li class="item" data-ksa="user.role-configuration" v-if="AuthService.isSuperAdmin()"
                    v-link="{name: 'user-man-pass', params: {userId: user.id}}"
                ><i class="iconfont icon-lock f18"></i></li>
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
                     :page_size="pager.pageSize" @current_change="getUserList"></ks-page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="babel">
  import NoSearchResult from '../../components/NoSearchResult.vue'
  import UserEdit from './components/UserEditMask.vue'

  import AuthService from '../../services/AuthService'
  import UserMan from '../../apis/models/userMan'

  export default{
    data () {
      return {
        AuthService,
        userList: [],

        searchForm: {
          userName: '',
          userMobile: ''
        },

        editForm: {
          title: '测试',
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
       * @description 编辑用户
       * @param user {Object} 用户模型
       */
      editUser (user) {
        let editForm = this.editForm

        // 修改编辑用户弹出框标题
        editForm.title = '编辑用户'
        // 修改当前编辑框模式
        editForm.mode = 'edit'
        // 初始化编辑框中用户数据
        this.$broadcast('userEditInit', user)
        // 打开编辑用户弹出框
        editForm.show = true
      },

      /**
       * @description 新建用户
       */
      addUser () {
        let editForm = this.editForm

        // 修改编辑用户弹出框标题
        editForm.title = '新建用户'
        // 修改当前编辑框模式
        editForm.mode = 'add'
        // 初始化编辑框中用户数据
        this.$broadcast('userEditInit', {})
        // 打开编辑用户弹出框
        editForm.show = true
      },

      /**
       * @description 获取用户列表
       */
      getUserList () {
        let reqPack = {
          currentPage: null,
          pageSize: null,
          userName: null,
          userMobile: ''
        }

        reqPack.currentPage = this.pager.currentPage
        reqPack.pageSize = this.pager.pageSize
        reqPack.userName = this.searchForm.userName
        reqPack.userMobile = this.searchForm.userMobile

        /**
         * @description xuexi xxx
         * @author qianwen
         * sdla
         */

        // 发起获取用户列表请求
        UserMan.getUserList(reqPack).then(({ data }) => {
          // 刷新用户列表
          this.userList = data.data
          // 刷新分页器显示
          this.pager.total = data.total
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 处理用户编辑确定事件
       * @param userEditForm {Object} 用户编辑的表单对象
       */
      userEditConfirm (userEditForm) {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        // 判断编辑框模式
        if (this.editForm.mode === 'add') {
          // 发起添加用户请求
          UserMan.addUser(userEditForm).then(() => {
            // 关闭用户编辑框
            this.editForm.show = false
            // 显示添加成功呢
            dialog.show('添加成功!', '信息', 'success')(() => {
              // 刷新用户列表
              this.getUserList()
              // 关闭提示框
              dialog.close()
            })
          }, ({ data }) => this.errHandle(data))
        } else {
          UserMan.editUser(userEditForm.id, userEditForm).then(() => {
            this.editForm.show = false
            dialog.show('编辑成功!', '信息', 'success')(() => {
              this.getUserList()
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
      // 获取路由中 pager 信息
      let { pager = 1 } = this.$route.params
      this.pager.currentPage = pager << 0
      if (!(pager << 0)) {
        this.pager.currentPage = 1
      }

      // 获取角色列表
      this.getUserList()
    },

    components: {
      NoSearchResult,
      UserEdit
    }
  }
</script>

