<template>
  <div class="user-man-container">
    <ul class="tab-bor">
      <li class="poi" v-link="{name: 'user-man-index'}">用户管理</li>
      <li class="poi active">{{userName}} {{userName && '-'}} 用户角色配置</li>
    </ul>
    <div class="kframe">
      <div class="kgroup-container-shadow">
        <div class="kgroup-select">

          <div class="kgroup-select__list left">
            <h4 class="kgroup-select__header">可选择角色</h4>
            <ul class="kgroup-select__ul">
              <ul class="kgroup-select__child">
                <ks-checkbox-group :v-model="roleCheckGroup" @change="dataRangeChange()">
                  <li class="kgroup-select__item" v-for="role in roleList"
                      :title="role.remark"
                  >
                    <ks-checkbox :name="'role-' + role.id">{{role.name}}</ks-checkbox>
                  </li>
                </ks-checkbox-group>
              </ul>
            </ul>
          </div>

          <div class="kgroup-select__list right">
            <h4 class="kgroup-select__header">已选择角色</h4>
            <ul class="kgroup-select__ul">
              <ul class="kgroup-select__child">
                <li class="kgroup-select__item ks-row-auto" @click="removeSelectedData(role)"
                    v-for="role in selectedRole">
                  <div class="ks-col-auto">{{role.name}}</div>
                  <div class="ks-col-auto tr">
                    <i class="icon icon-jianhao1 dn"></i>
                  </div>
                </li>
              </ul>
            </ul>
          </div>

          <div class="kgroup-select__btn tc">
            <ks-button class="mr10" size="normal" @click="configUserRole">确定</ks-button>
            <ks-button class="ml10" :ghost="true" type="other" size="normal"
                       v-link="{name: 'user-man-index', params: {pager: pager}}"
            >取消</ks-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="babel">
  import UserMan from '../../apis/models/userMan'
  import RoleMan from '../../apis/models/roleMan'

  export default{
    data () {
      return {
        userId: null,
        userName: '',
        pager: 1,

        roleList: [],
        roleCheckGroup: [],
        selectedRole: []
      }
    },

    methods: {

      /**
       * @description 可选择角色改变事件处理
       */
      dataRangeChange () {
        let leftSelectedData = this.roleList.filter(({ id }) => {
          return this.roleCheckGroup.some(item => id === item.split('-')[1] << 0)
        })

        this.selectedRole = leftSelectedData.map(o => o)
      },

      /**
       * @description 配置用户角色
       */
      configUserRole () {
        let roleIds = this.selectedRole.map((o) => o.id)
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        UserMan.configUserRole(this.userId, roleIds).then(() => {
          dialog.show('配置成功!', '信息', 'success')(() => dialog.close())
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 获取用户角色
       */
      getUserRole () {
        UserMan.getUserRole(this.userId).then(({ data }) => {
          let roleList = data.data

          roleList.forEach(({ role_id }) => this.roleCheckGroup.push(`role-${role_id}`))
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 已选择角色移除操作
       */
      removeSelectedData ({ id }) {
        this.roleCheckGroup = this.roleCheckGroup.filter(item => id !== item.split('-')[1] << 0)
      },

      /**
       * @description 获取所有角色
       */
      getAllRole () {
        RoleMan.getRoleList({currentPage: 1, pageSize: 9999}).then(({ data }) => {
          this.roleList = data.data

          // 获取用户所有角色
          this.getUserRole()
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },

    ready () {
      // 获取路由中 userId, userName 信息
      let { userId = null, userName = null, pager = 1  } = this.$route.params
      this.userId = userId << 0
      this.pager = pager << 0
      this.userName = userName
      if (!(userId << 0)) {
        this.userId = null
        this.userName = null
      }

      // 获取所有角色
      this.getAllRole()
    }
  }
</script>
