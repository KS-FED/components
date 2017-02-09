<template>
  <div class="authEdit-container" >
    <ks-mask-entity :show.sync="show" fill-mode="'part'">
      <div class="userEdit-wrap  tc">
        <div class="form-box-center">
          <validator name="authEdit">
            <div class="ks-row-auto mb15">
              <div class="userEdit-title h4 ks-col-auto" v-text="title"></div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$authEdit.systemId.required && 'has-error'">
                <select type="text" class="input pct100" v-model="authForm.system_id"
                        v-validate:system-id="{required: {rule: true, initial: 'off'}}"
                        @change="getModList"
                >
                    <option value="">请选择系统</option>
                    <option :value="sys.id" v-for="sys in syslist" v-text="sys.name"></option>
                  </select>
                  <p class="txt" v-if="$authEdit.systemId.required">
                    <i class="icon"></i>系统未选择
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$authEdit.authedId.required && 'has-error'">
                <select type="text" class="input pct100" v-model="authForm.module_id"
                        v-validate:authed-id="{required: {rule: true, initial: 'off'}}"
                >
                    <option value="">请选择模块</option>
                    <option :value="mod.id" v-for="mod in modlist" v-text="mod.name"></option>
                  </select>
                  <p class="txt" v-if="$authEdit.authedId.required">
                    <i class="icon"></i>模块未选择
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$authEdit.name.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="权限名称"
                         maxlength="32" v-model="authForm.name"
                         v-validate:name="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$authEdit.name.required">
                    <i class="icon"></i>权限名称不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$authEdit.type.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="权限类型"
                         maxlength="32" v-model="authForm.type"
                         v-validate:type="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$authEdit.type.required">
                    <i class="icon"></i>权限类型不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$authEdit.alias.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="权限别名"
                         maxlength="32" v-model="authForm.alias"
                         v-validate:alias="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$authEdit.alias.required">
                    <i class="icon"></i>权限别名不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group has-error">
                  <textarea class="pct100 kadd__content " rows="5" placeholder="备注" maxlength="45"
                            v-model="authForm.remark"></textarea>
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
  import Pub from '../../../apis/models/public'
  import modMan from '../../../apis/models/modMan'

  import { PAGE_COUNT_MAX } from '../../../global'

  export default{
    data () {
      return {
        authForm: {
          id: null,
          module_id: '',
          system_id: '',
          name: '',
          alias: '',
          type: '',
          remark: ''
        }
      }
    },

    watch: {
      show (val) { this.$dispatch('scrollSwitch', val) }
    },

    props: {
      mode: {type: String, required: true},
      show: {type: Boolean, required: true},
      modlist: { type: Array, required: true},
      syslist: { type: Array, required: true},
      title: {type: String, required: true}
    },

    events: {

      /**
       * @description 初始化编辑角色表单数据
       * @param id {Number} 权限 ID
       * @param module_id {String} 模块 ID
       * @param system_id {String} 系统 ID
       * @param name {String} 权限名称
       * @param alias {String} 权限别名
       * @param type {String} 权限类型
       * @param remark {String} 备注
       */
      authEditInit ({
        id = null,
        module_id = '',
        system_id = '',
        name = '',
        alias = '',
        type = '',
        remark = '',

      }) {
        let authForm = this.authForm

        authForm.id = id
        authForm.module_id = module_id
        authForm.system_id = system_id
        authForm.name = name
        authForm.alias = alias
        authForm.type = type
        authForm.remark = remark
      }
    },

    methods: {
      /**
       * @description 获取模块列表
       */
      getModList () {
        modMan.getModList({
          currentPage: 1,
          pageSize: PAGE_COUNT_MAX,
          systemId: this.authForm.system_id
        }).then(({ data }) => {
          //初使化赋值
          this.modlist = data.data
          this.authForm.module_id = ''
        }, ({ data }) => this.errHandle(data))
      },

      /**
       * @description 确定按钮处理函数
       */
      confirm () {
        //激活验证器 发送 confirm 事件
        this.$validate(true, () => {
          if (this.$authEdit.valid) {
            this.$emit('confirm', this.authForm)
          }
        })
      },

    },
    ready(){
      this.getModList();
    }
  }
</script>
