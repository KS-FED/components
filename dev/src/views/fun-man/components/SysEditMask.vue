<template>
  <div class="sysEdit-container" >
    <ks-mask-entity :show.sync="show" fill-mode="'part'">
      <div class="userEdit-wrap tc">
        <div class="form-box-center">
          <validator name="sysEdit">
            <div class="ks-row-auto mb15">
              <div class="userEdit-title h4 ks-col-auto" v-text="title"></div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$sysEdit.systemId.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="系统ID"
                         maxlength="7" v-model="sysForm.system_id"
                         v-validate:system-id="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$sysEdit.systemId.required">
                    <i class="icon"></i>系统ID不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$sysEdit.systemName.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="系统名称"
                         maxlength="32" v-model="sysForm.name"
                         v-validate:system-name="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$sysEdit.systemName.required">
                    <i class="icon"></i>系统名称不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group" :class="$sysEdit.url.required && 'has-error'">
                  <input type="text" class="input ks-col" placeholder="Url"
                         maxlength="128" v-model="sysForm.url"
                         v-validate:url="{required: {rule: true, initial: 'off'}}"
                  >
                  <p class="txt" v-if="$sysEdit.url.required">
                    <i class="icon"></i>系统 URL 不能为空
                  </p>
                </div>
              </div>
            </div>

            <div class="ks-row-auto">
              <div class="ks-col-auto">
                <div class="form-group has-error">
                  <textarea class="pct100 kadd__content" rows="5" placeholder="备注" maxlength="45"
                            v-model="sysForm.remark"></textarea>
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
        sysForm: {
          id:'',
          system_id:'0',
          name:'',
          url:'',
          remark: '',
        }
      }
    },

    // validators: {

    // },

    props: {
      mode: {type: String, required: true},
      show: {type: Boolean, required: true},
      title: {type: String, required: true}
    },

    watch: {
      show (val) { this.$dispatch('scrollSwitch', val) }
    },

    events: {

      /**
       * @description 初始化编辑角色表单数据
       * @param id {Number} 系统列表ID
       * @param name {String} 角色名称
       * @param url {String} 系统URL
       * @param sys_id {Number} 系统ID [0: 权限系统, 1: 财务系统]
       * @param remark {String} 备注
       * @returns {Promise} 请求的 Promise
       */
      sysEditInit ({
        id = null,
        sys_id = null,
        name = '',
        url = '',
        remark = ''
      }) {
        let sysForm = this.sysForm

        sysForm.id = id
        sysForm.system_id = sys_id
        sysForm.name = name
        sysForm.url = url
        sysForm.remark = remark
      }
    },

    methods: {
      /**
       * @description 确定按钮处理函数
       */
      confirm () {
        // 激活验证器 发送 confirm 事件
        this.$validate(true, () => {
          if (this.$sysEdit.valid) {
            this.$emit('confirm', this.sysForm)
          }
        })
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },


    // created () {
    //   // 获取角色级别列表
    //   Pub.getSysLevel().then(({ data }) => {
    //     this.sysLevels = data.data
    //     this.Form.level = data.data[0].value
    //   }, ({ data }) => this.errHandle(data))
    // }
  }
</script>


