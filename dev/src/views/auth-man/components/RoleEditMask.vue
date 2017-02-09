<template>
  <div class="roleEdit-container" >
    <ks-mask-entity :show.sync="show" fill-mode="'part'">
      <div class="userEdit-wrap  tc">
        <div class="form-box-center">
          <validator name="roleEdit">
            <div class="ks-row-auto mb15">
              <div class="userEdit-title h4 ks-col-auto" v-text="title"></div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group">
                <select type="text" class="input pct100" v-model="roleForm.pid"
                >
                    <option :value="0">请选择父级角色</option>
                    <option :value="role.id" v-for="role in roleList" v-text="role.name"></option>
                  </select>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$roleEdit.name.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="角色名称"
                         maxlength="32" v-model="roleForm.name"
                         v-validate:name="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$roleEdit.name.required">
                    <i class="icon"></i>角色名称不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group has-error">
                  <textarea class="pct100 kadd__content " rows="5" placeholder="注释" maxlength="45"
                            v-model="roleForm.comment"></textarea>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col tc">
                <ks-button class="mr10" size="normal" type="primary" @click="confirm">确定</ks-button>
                <ks-button size="normal" type="gray" @click="show = false">取消</ks-button>
              </div>
            </div>
         </validator>
        </div>
      </div>
    </ks-mask-entity>
  </div>
</template>

<script lang="babel">
import RoleMan from '../../../apis/models/roleMan'

import { PAGE_COUNT_MAX } from '../../../global'

  export default{
    data () {
      return {
        roleList: [],

        roleForm: {
          id: '',
          name: '',
          comment: '',
          pid: ''
        }
      }
    },

    watch: {
      show (val) { this.$dispatch('scrollSwitch', val) }
    },

    props: {
      mode: {type: String, required: true},
      show: {type: Boolean, required: true},
      title: {type: String, required: true}
    },

    events: {

      /**
       * @description 初始化编辑用户表单数据
       * @param id {Number} 用户 ID
       * @param remark {String} 注释
       * @param name {String} 角色姓名
       * @param pid {Number} 父级ID
       */
      roleEditInit ({
        id = null,
        remark = '',
        name = '',
        pid = 0
      }) {
        let roleForm = this.roleForm

        roleForm.id = id
        roleForm.comment = remark
        roleForm.name = name
        roleForm.pid = pid

        // 获取所有角色列表
        this.getAllRole()
      }
    },

    methods: {

      /**
       * @description 确定按钮处理函数
       */
      confirm () {
        //激活验证器 发送 confirm 事件
        this.$validate(true, () => {
          if (this.$roleEdit.valid) {
            this.$emit('confirm', this.roleForm)
          }
        })
      },

      /**
       * @description 获取所有的角色列表
       */
      getAllRole () {
        RoleMan.getRoleList({currentPage: 1, pageSize: PAGE_COUNT_MAX}).then(({ data }) => {
          this.roleList = data.data
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    }
  }
</script>

<style lang="scss">

</style>
