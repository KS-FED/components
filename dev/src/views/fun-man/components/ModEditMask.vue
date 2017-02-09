<template>
  <div class="modEdit-container" >
    <ks-mask-entity :show.sync="show" fill-mode="'part'">
      <div class="userEdit-wrap  tc">
        <div class="form-box-center">
          <validator name="modEdit">
            <div class="ks-row-auto mb15">
              <div class="userEdit-title h4 ks-col-auto" v-text="title"></div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$modEdit.systemId.required && 'has-error'">
                  <select class="input pct100" v-model="modForm.system_id"
                          v-validate:system-id="{required: {rule: true, initial: 'off'}}"
                  >
                    <option value="">选择系统</option>
                    <option :value="sys.id" v-for="sys in syslist" v-text="sys.name"></option>
                  </select>
                  <p class="txt" v-if="$modEdit.systemId.required">
                    <i class="icon"></i>系统未选择
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$modEdit.modName.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="模块名称"
                         maxlength="32" v-model="modForm.name"
                         v-validate:mod-name="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$modEdit.modName.required">
                    <i class="icon"></i>模块名称不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$modEdit.alias.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="别名"
                         maxlength="32" v-model="modForm.alias"
                         v-validate:alias="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$modEdit.alias.required">
                    <i class="icon"></i>模块别名不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group has-error">
                  <textarea class="pct100 kadd__content " rows="5" placeholder="备注" maxlength="45"
                            v-model="modForm.remark"></textarea>
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

  export default{
    data () {
      return {
        modForm: {
          id: '',
          alias: '',
          name: '',
          system_id: '',
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
      syslist: { type: Array, required: true},
      title: {type: String, required: true}
    },

    events: {

      /**
       * @description 初始化编辑模块表单数据
       * @param id {Number} 模块列表ID
       * @param name {String} 模块名称
       * @param alias {String} 别名
       * @param system_id {Number} 系统ID [0: 权限系统, 1: 财务系统]
       * @param remark {String} 备注
       * @returns {Promise} 请求的 Promise
       */
      modEditInit ({
        id = null,
        alias = '',
        name = '',
        system_id = null,
        remark = '',
      }) {
        let modForm = this.modForm

        modForm.id = id
        modForm.system_id = system_id
        modForm.name = name
        modForm.alias = alias
        modForm.remark = remark
      }
    },

    methods: {
      /**
       * @description 确定按钮处理函数
       */
      confirm () {
        // 激活验证器 发送 confirm 事件
        this.$validate(true, () => {
          if (this.$modEdit.valid) {
            this.$emit('confirm', this.modForm)
          }
        })
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
