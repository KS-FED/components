<template>
  <div class="user-man-container">
    <ul class="tab-bor">
      <li class="poi" v-link="{name: 'role-man-index'}">角色管理</li>
      <li class="poi active">{{roleName}} {{roleName && '-'}} 角色权限配置</li>
    </ul>
    <div class="kframe">

      <div class="sys-container tc pt30">
        <ks-radio-group :v-model.sync="currentSys">
          <ks-btn-radio v-for="sys in sysList" name="sysName" :value="sys.id"
                        :def-checked="!$index"
          >
            {{sys.name}}
          </ks-btn-radio>
        </ks-radio-group>
      </div>

      <div class="kgroup-container-shadow">
        <div class="kgroup-select">

          <div class="kgroup-select__list left">
            <h4 class="kgroup-select__header">选择需要配置权限的模块</h4>
            <ul class="kgroup-select__ul">

              <div class="kgroup-select__container" v-for="mod in modList">
                <li class="kgroup-select__item" @click="launchModule($index, mod)">
                  <a class="title" v-text="mod.name">系统名称</a>
                  <i class="iconfont icon-shangjiantou r" v-if="!leftGroup[$index].show"></i>
                  <i class="iconfont icon-xiajiantou r" v-if="leftGroup[$index].show"></i>
                </li>
                <ul class="kgroup-select__child pl20" v-if="leftGroup[$index].show">
                  <li class="pt5 pb5" v-if="!leftGroup[$index].sourceList.length">
                    <i class="iconfont icon-zhuyi mr5" style="color: #FF5722"></i> Sorry, 暂无相关数据
                  </li>
                  <ks-checkbox-group :v-model="leftGroup[$index].checkGroup" @change="dataChange($index)">
                    <li class="kgroup-select__item" v-for="auth in leftGroup[$index].sourceList">
                      <ks-checkbox :name="'auth-' + auth.id">{{auth.name}}</ks-checkbox>
                    </li>
                  </ks-checkbox-group>
                </ul>
              </div>

            </ul>
          </div>

          <div class="kgroup-select__list right">
            <h4 class="kgroup-select__header">选择需要配置权限的操作</h4>
            <ul class="kgroup-select__ul">

              <div class="kgroup-select__container" v-for="mod in modList">
                <li class="kgroup-select__item">
                  <a class="title" v-text="mod.name">系统名称</a>
                  <i class="iconfont icon-xiajiantou r"></i>
                </li>
                <ul class="kgroup-select__child pl20">
                  <li class="kgroup-select__item ks-row-auto" v-for="auth in rightGroup[$index].selectedList"
                      @click="removeSelectedData($parent.$index, auth)"
                  >
                    <div class="ks-col-auto">{{auth.name}}</div>
                    <div class="ks-col-auto tr">
                      <i class="icon icon-jianhao1 dn"></i>
                    </div>
                  </li>
                </ul>
              </div>

            </ul>
          </div>

          <div class="kgroup-select__btn tc">
            <ks-button class="mr10" size="normal" @click="configRoleAuth">确定</ks-button>
            <ks-button class="ml10" :ghost="true" type="other" size="normal"
                       v-link="{name: 'role-man-index', params: {pager: pager}}"
            >取消</ks-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="babel">
  import Pub from '../../apis/models/public'
  import UserMan from '../../apis/models/userMan'
  import SysMan from '../../apis/models/sysMan'
  import ModMan from '../../apis/models/modMan'
  import AuthMan from '../../apis/models/authMan'
  import RoleMan from '../../apis/models/roleMan'

  import { PAGE_COUNT_MAX } from '../../global'

  export default{
    data () {
      return {
        roleId: null,
        roleName: null,
        pager: 1,

        currentSys: '',
        modList: [],
        sysList: [],

        leftGroup: [
          { show: false, sourceList: [], checkGroup: [], selectedList: [] }
        ],
        rightGroup: [
          { show: false, sourceList: [], checkGroup: [], selectedList: [] }
        ]
      }
    },

    watch: {
      /**
       * @description 当前系统发生改变
       * @param systemId {Number} 系统ID
       */
      currentSys (systemId) { this.getModList(systemId) }
    },

    methods: {

      /**
       * @description 获取当前角色配置
       */
      getRoleAuth () {
        RoleMan.getRoleAuth(this.roleId).then(({ data }) => {
          let authList = data.data

          authList.forEach(auth => {
            let mid = auth.module_id

            // 查找相应的模块
            this.rightGroup.forEach((mod, i) => {

              if (mod.id === mid) {
                this.rightGroup[i].selectedList.push(auth)
                this.leftGroup[i].checkGroup.push(`auth-${auth.id}`)
              }
            })
          })
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 获取系统列表
       * @param systemId {Number} 系统ID
       */
      getModList (systemId) {
        ModMan.getModList({currentPage: 1, pageSize: PAGE_COUNT_MAX, systemId: systemId}).then(({ data }) => {
          this.modList = data.data

          // 初始化左右槽系统信息
          let initGroup = this.modList.map(({ id }) => {
            return { id: id, show: false, sourceList: [], checkGroup: [], selectedList: [] }
          })
          this.leftGroup = initGroup
          this.rightGroup = initGroup

          // 获取角色权限
          this.getRoleAuth()
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 展开模块
       * @param i {Number} 索引
       * @param mod {Object} 模块对象
       */
      launchModule (i, mod) {
        // 展开模块的时候判断如果模块下的权限数据请求过了则不再请求
        if (!this.leftGroup[i].sourceList.length) {
          AuthMan.getAuthList({currentPage: 1, pageSize: PAGE_COUNT_MAX, moduleId: mod.id}).then(({ data }) => {
            this.leftGroup[i].sourceList = data.data

            // 刷新当前权限区域视图
            this.leftGroup[i].checkGroup.push('-')
            this.leftGroup[i].checkGroup.pop()
          }, ({ data }) => this.errHandle(data))
        }

        // 展开关闭模块下拉
        this.leftGroup[i].show = !this.leftGroup[i].show
      },

      /**
       * @description 配置角色权限
       */
      configRoleAuth () {
        let reqPack = []
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        // 搜集权限数据
        this.rightGroup.map(({ selectedList }) => {
          return selectedList.map(({ id }) => id)
        }).forEach(arr => arr.forEach(item => reqPack.push(item)))

        RoleMan.configRoleAuth(this.roleId, reqPack).then(() => {
          dialog.show('配置成功!', '信息', 'success')(() => dialog.close())
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 获取系统列表
       */
      getSysList() {
        SysMan.getSysList({currentPage: 1, pageSize: PAGE_COUNT_MAX}).then(({ data }) => {
          this.sysList = data.data
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 处理选择数据改变
       * @param i {Number} 索引
       */
      dataChange(i) {
        this.rightGroup[i].selectedList = this.leftGroup[i].sourceList.filter(({ id }) => {
          return this.leftGroup[i].checkGroup.some((item) => id === item.split('-')[1] << 0)
        })
      },

      /**
       * @description 移除已经选择数据
       * @param i {Number} 索引
       * @param auth {Object} auth 对象
       */
      removeSelectedData(i, auth) {
        this.leftGroup[i].checkGroup = this.leftGroup[i].checkGroup.filter((item) => {
          return auth.id !== item.split('-')[1] << 0
        })

        this.rightGroup[i].selectedList = this.rightGroup[i].selectedList.filter(({ id }) => auth.id !== id)
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },

    ready () {
      // 获取路由中 roleId, roleName 信息
      let { roleId = null, roleName = null, pager = 1  } = this.$route.params
      this.roleId = roleId << 0
      this.pager = pager << 0
      this.roleName = roleName
      if (!(roleId << 0)) {
        this.roleId = null
        this.roleName = null
      }

      // 获取系统列表
      this.getSysList()
    }
  }
</script>
