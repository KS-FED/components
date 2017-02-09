<template>
  <div class="user-man-container">
    <ul class="tab-bor">
      <li class="poi" v-link="{name: 'user-man-index'}">用户管理</li>
      <li class="poi active">{{userName}} {{userName && '-'}} 用户数据权限配置</li>
    </ul>
    <div class="kframe">
      <div class="kgroup-container-shadow">
        <div class="kgroup-select">

          <div class="kgroup-select__list left">
            <h4 class="kgroup-select__header">可选择数据范围</h4>
            <ul class="kgroup-select__ul">
              <li class="kgroup-select__item">
                <a class="title">总部</a>
                <i class="iconfont icon-shangjiantou r" v-if="!headquartersUnfold"></i>
                <i class="iconfont icon-xiajiantou r" v-if="headquartersUnfold"></i>
              </li>
              <ul class="kgroup-select__child pl20" v-if="headquartersUnfold">
                <ks-checkbox-group :v-model="headquartersCheckGroup" @change="dataRangeChange('zb')">
                  <li class="kgroup-select__item pt5 pb5" v-for="headquarters in headquartersList">
                    <ks-checkbox :name="'headquarters-' + headquarters.id"
                    >{{headquarters.name}}</ks-checkbox>
                  </li>
                </ks-checkbox-group>
              </ul>

              <li class="kgroup-select__item" @click="areaUnfold = !areaUnfold">
                <a class="title">大区</a>
                <i class="iconfont icon-shangjiantou r" v-if="!areaUnfold"></i>
                <i class="iconfont icon-xiajiantou r" v-if="areaUnfold"></i>
              </li>
              <ul class="kgroup-select__child pl20" v-if="areaUnfold">
                <li class="pt5 pb5" v-if="!areaList.length">
                  <i class="iconfont icon-zhuyi mr5" style="color: #FF5722"></i> Sorry, 暂无相关数据
                </li>
                <ks-checkbox-group :v-model="areaCheckGroup" @change="dataRangeChange('dq')">
                  <li class="kgroup-select__item" v-for="area in areaList">
                    <ks-checkbox :name="'area-' + area.id"
                                 @label-click="refreshBranchCompany(area.id)"
                    >{{area.name}}</ks-checkbox>
                  </li>
                </ks-checkbox-group>
              </ul>

              <li class="kgroup-select__item" @click="branchCompanyUnfold = !branchCompanyUnfold">
                <a class="title">分公司</a>
                <i class="iconfont icon-shangjiantou r" v-if="!branchCompanyUnfold"></i>
                <i class="iconfont icon-xiajiantou r" v-if="branchCompanyUnfold"></i>
              </li>
              <ul class="kgroup-select__child pl20" v-if="branchCompanyUnfold">
                <li class="pt5 pb5" v-if="!branchCompanyList.length">
                  <i class="iconfont icon-zhuyi mr5" style="color: #FF5722"></i> Sorry, 暂无相关数据
                </li>
                <ks-checkbox-group :v-model="branchCompanyCheckGroup" @change="dataRangeChange('fgs')">
                  <li class="kgroup-select__item pt5 pb5" v-for="company in branchCompanyList">
                    <ks-checkbox :name="'company-' + company.id"
                                 @label-click="refreshCityList(company.id)"
                    >{{company.name}}</ks-checkbox>
                  </li>
                </ks-checkbox-group>
              </ul>

              <li class="kgroup-select__item" @click="cityUnfold = !cityUnfold">
                <a class="title">城市</a>
                <i class="iconfont icon-shangjiantou r" v-if="!cityUnfold"></i>
                <i class="iconfont icon-xiajiantou r" v-if="cityUnfold"></i>
              </li>
              <ul class="kgroup-select__child pl20" v-if="cityUnfold">
                <li class="pt5 pb5" v-if="!cityList.length">
                  <i class="iconfont icon-zhuyi mr5" style="color: #FF5722"></i> Sorry, 暂无相关数据
                </li>
                <ks-checkbox-group :v-model="cityCheckGroup" @change="dataRangeChange('cs')">
                  <li class="kgroup-select__item pt5 pb5" v-for="city in cityList">
                    <ks-checkbox :name="'city-' + city.id"
                                 @label-click="refreshBranchCompany(area.id)"
                    >{{city.name}}</ks-checkbox>
                  </li>
                </ks-checkbox-group>
              </ul>
            </ul>
          </div>

          <div class="kgroup-select__list right">
            <h4 class="kgroup-select__header">已选择数据</h4>
            <ul class="kgroup-select__ul">
              <li class="kgroup-select__item">
                <a class="title">总部</a>
                <i class="iconfont icon-xiajiantou r"></i>
              </li>
              <ul class="kgroup-select__child pl20">
                <li class="kgroup-select__item ks-row-auto" @click="removeSelectedData('zb', headquarters)"
                    v-for="headquarters in selectedHeadquartersList">
                  <div class="ks-col-auto">{{headquarters.name}}</div>
                  <div class="ks-col-auto tr">
                    <i class="icon icon-jianhao1 dn"></i>
                  </div>
                </li>
              </ul>

              <li class="kgroup-select__item">
                <a class="title">大区</a>
                <i class="iconfont icon-xiajiantou r"></i>
              </li>
              <ul class="kgroup-select__child pl20">
                <li class="kgroup-select__item ks-row-auto" @click="removeSelectedData('dq', area)"
                    v-for="area in selectedAreaList">
                  <div class="ks-col-auto">{{area.name}}</div>
                  <div class="ks-col-auto tr">
                    <i class="icon icon-jianhao1 dn"></i>
                  </div>
                </li>
              </ul>

              <li class="kgroup-select__item">
                <a class="title">分公司</a>
                <i class="iconfont icon-xiajiantou r"></i>
              </li>
              <ul class="kgroup-select__child pl20">
                <li class="kgroup-select__item ks-row-auto" @click="removeSelectedData('fgs', company)"
                    v-for="company in selectedBranchCompanyList">
                  <div class="ks-col-auto">{{company.name}}</div>
                  <div class="ks-col-auto tr">
                    <i class="icon icon-jianhao1 dn"></i>
                  </div>
                </li>
              </ul>

              <li class="kgroup-select__item">
                <a class="title">城市</a>
                <i class="iconfont icon-xiajiantou r"></i>
              </li>
              <ul class="kgroup-select__child pl20">
                <li class="kgroup-select__item ks-row-auto" @click="removeSelectedData('cs', city)"
                    v-for="city in selectedCityList">
                  <div class="ks-col-auto">{{city.name}}</div>
                  <div class="ks-col-auto tr">
                    <i class="icon icon-jianhao1 dn"></i>
                  </div>
                </li>
              </ul>
            </ul>
          </div>

          <div class="kgroup-select__btn tc">
            <ks-button class="mr10" size="normal" @click="configUserAuth">确定</ks-button>
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
  import Pub from '../../apis/models/public'
  import UserMan from '../../apis/models/userMan'

  let typeMapper = {
    zb: {
      checkGroup: 'headquartersCheckGroup',
      selectedList: 'selectedHeadquartersList',
      sourceList: 'headquartersList'
    },
    dq: {
      checkGroup: 'areaCheckGroup',
      selectedList: 'selectedAreaList',
      sourceList: 'areaList'
    },
    fgs: {
      checkGroup: 'branchCompanyCheckGroup',
      selectedList: 'selectedBranchCompanyList',
      sourceList: 'branchCompanyList'
    },
    cs: {
      checkGroup: 'cityCheckGroup',
      selectedList: 'selectedCityList',
      sourceList: 'cityList'
    }
  }

  export default{
    data () {
      return {
        userId: null,
        userName: '',
        pager: 1,

        headquartersCheckGroup: [],
        areaCheckGroup: [],
        branchCompanyCheckGroup: [],
        cityCheckGroup: [],

        headquartersList: [{id: 1, name: '总部'}],
        areaList: [],
        cityList: [],
        branchCompanyList: [],

        selectedHeadquartersList: [],
        selectedAreaList: [],
        selectedCityList: [],
        selectedBranchCompanyList: [],

        headquartersUnfold: true,
        areaUnfold: true,
        cityUnfold: false,
        branchCompanyUnfold: false
      }
    },

    methods: {

      /**
       * @description 获取用户权限
       */
      getUserAuth () {
        UserMan.getUserAuth(this.userId).then(({ data }) => {
          let {
            all = false,
            data_permission_areas = [],
            data_permission_branch_companies = [],
            data_permission_cities = []
          } = data.data

          if (all) {
            this.selectedHeadquartersList.push({id: 1, name: '总部'})
            this.headquartersCheckGroup.push('headquarters-1')
          } else {
            // 初始化大区信息
            data_permission_areas.forEach(({ area_id, area_name }) => {
              this.selectedAreaList.push({ id: area_id, name: area_name })
              this.areaCheckGroup.push(`area-${area_id}`)
            })

            // 初始化分公司信息
            data_permission_branch_companies.forEach(({ branch_company_id, branch_company_name }) => {
              this.selectedBranchCompanyList.push({ id: branch_company_id, name: branch_company_name })
              this.branchCompanyCheckGroup.push(`company-${branch_company_id}`)
            })

            // 初始化城市信息
            data_permission_cities.forEach(({ city_id, city_name }) => {
              this.selectedCityList.push({ id: city_id, name: city_name })
              this.cityCheckGroup.push(`area-${city_id}`)
            })
          }
        }, ({ data }) =>  this.errHandle(data))
      },

      /**
       * @description 配置用户用户权限
       */
      configUserAuth () {
        let reqPack = {
          all: false,
          areas: [],
          branch_companies: [],
          cities: []
        }
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        // 处理视图数据
        reqPack.all = !!this.selectedHeadquartersList.length
        reqPack.areas = this.selectedAreaList.map(({ id }) => id)
        reqPack.branchCompanies = this.selectedBranchCompanyList.map(({ id }) => id)
        reqPack.cities = this.selectedCityList.map(({ id }) => id)

        UserMan.configUserAuth(this.userId, reqPack).then(() => {
          dialog.show('配置成功!', '信息', 'success')(() => dialog.close())
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 获取大区列表
       */
      getAreaList () {
        Pub.getAreaList().then(({ data }) => {
          this.areaList = data.data
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 获取分公司列表
       * @param areaId {Number} 大区 ID
       */
      getBranchCompanyList (areaId) {
        Pub.getBranchCompanyList(areaId).then(({ data }) => {
          this.branchCompanyList = data.data

          // 刷新分公司区域视图
          this.branchCompanyCheckGroup.push('-')
          this.branchCompanyCheckGroup.pop()
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 刷新分公司
       * @param areaId {Number} 大区 ID
       */
      refreshBranchCompany (areaId) {
        // 获取分公司数据
        this.getBranchCompanyList(areaId)

        // 展开分公司
        this.branchCompanyUnfold = true
      },

      /**
       * @description 获取城市列表
       * @param branchCompanyId {Number} 分公司 ID
       */
      getCityList (branchCompanyId) {
        Pub.getCityList(branchCompanyId).then(({ data }) => {
          this.cityList = data.data

          // 刷新城市区域视图
          this.cityCheckGroup.push('-')
          this.cityCheckGroup.pop()
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 刷新城市列表
       * @param branchCompanyId {Number} 分公司 ID
       */
      refreshCityList (branchCompanyId) {
        // 获取分公司数据
        this.getCityList(branchCompanyId)

        // 展开城市
        this.cityUnfold = true
      },

      /**
       * @description 移除已经选择数据
       * @param type {String} [zb, dq, fgs, cs]
       * @param id {Number} 当前点击数据的 ID
       */
      removeSelectedData (type, { id }) {
        let checkGroup = typeMapper[type].checkGroup

        // 过滤可选择数据范围数据 清除被移除的选择项
        this[checkGroup] = this[checkGroup].filter(item => id !== item.split('-')[1] << 0)
      },

      /**
       * @description 数据范围改变事件处理
       * @param type {String} [zb, dq, fgs, cs]
       */
      dataRangeChange (type) {
        let checkGroup = typeMapper[type].checkGroup
        let selectedList = typeMapper[type].selectedList
        let sourceList = typeMapper[type].sourceList

        // 获取可选择数据范围中已经选择的数据 将 checkGroup 数据转换为 sourceList 真实数据
        let leftSelectedData = this[sourceList].filter(({ id }) => {
          return this[checkGroup].some(item => id === item.split('-')[1] << 0)
        })

        // 获取已选择数据中去除可选择数据的部分
        let otherSelectedDate = this[selectedList].filter(({ id }) => !this[sourceList].some(o => o.id === id))

        this[selectedList] = leftSelectedData.concat(otherSelectedDate)
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },

    ready () {
      // 获取路由中 userId, userName 信息
      let { userId = null, userName = null, pager = 1 } = this.$route.params
      this.userId = userId << 0
      this.pager = pager << 0
      this.userName = userName
      if (!(userId << 0)) {
        this.userId = null
        this.userName = null
      }

      // 获取大区列表
      this.getAreaList()
      // 初始化当前用户拥有的权限数据
      this.getUserAuth()
    }
  }
</script>
