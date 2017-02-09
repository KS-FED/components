<template>
  <div class="userEdit-container" >
    <ks-mask-entity :show.sync="show" fill-mode="'part'">
      <div class="userEdit-wrap tc">
        <div class="form-box-center">
          <validator name="userEdit" :groups="['otherGroup', 'passwordGroup']">
          <div class="ks-row-auto mb15">
            <div class="userEdit-title h4 ks-col-auto" v-text="title"></div>
          </div>

          <div class="ks-row-auto">
            <div class="ks-col-auto">
              <div class="form-group" :class="$userEdit.loginName.required && 'has-error'">
                <label class="label"><sup class="sup-red">*</sup>用户名</label>
                <input type="text" class="input ks-col" placeholder="请输入用户名"
                       maxlength="32" v-model="userForm.login_name" group="otherGroup"
                       v-validate:login-name="{required: {rule: true, initial: 'off'}}"
                >
                <p class="txt red" v-if="$userEdit.loginName.required">
                  <i class="icon"></i>用户名不能为空
                </p>
              </div>
            </div>

            <div class="ks-col-auto">
              <div class="form-group" :class="$userEdit.name.required && 'has-error'">
                <label class="label"><sup class="sup-red">*</sup>姓名</label>
                <input type="text" class="input ks-col" placeholder="请输入姓名"
                       maxlength="32" v-model="userForm.name" group="otherGroup"
                       v-validate:name="{required: {rule: true, initial: 'off'}}"
                >
                <p class="txt" v-if="$userEdit.name.required">
                  <i class="icon"></i>姓名不能为空
                </p>
              </div>
            </div>
          </div>

          <div class="ks-row-auto">
            <div class="ks-col-auto">
              <div class="form-group" :class="$userEdit.password.required && 'has-error'">
                <label class="label"><sup class="sup-red">*</sup>密码</label>
                <input type="password" class="input ks-col" placeholder="请输入密码"
                       maxlength="32" v-model="userForm.password" :readonly="mode === 'edit'"
                       group="passwordGroup" :detect-blur="mode === 'add'"
                       v-validate:password="{required: {rule: true, initial: 'off'}}"
                >
                <p class="txt" v-if="$userEdit.password.required">
                  <i class="icon"></i>密码不能为空
                </p>
              </div>
            </div>

            <div class="ks-col-auto">
              <div class="form-group" :class="$userEdit.mobile.phone && 'has-error'">
                <label class="label"><sup class="sup-red">*</sup>手机号</label>
                <input type="text" class="input ks-col" placeholder="请输入手机号"
                       maxlength="11" v-model="userForm.mobile" group="otherGroup"
                       v-validate:mobile="{phone: {rule: true, initial: 'off'}}"
                >
                <p class="txt" v-if="$userEdit.mobile.phone">
                  <i class="icon"></i>手机号错误
                </p>
              </div>
            </div>
          </div>

          <div class="ks-row-auto">
            <div class="ks-col-auto">
              <div class="form-group" :class="$userEdit.repeatPassword.passwordEqual && 'has-error'">
                <label class="label"><sup class="sup-red">*</sup>确认密码</label>
                <input type="password" class="input" placeholder="请输入密码"
                       maxlength="32" v-model="userForm.repeatPassword" :readonly="mode === 'edit'"
                       group="passwordGroup" :detect-blur="mode === 'add'"
                       v-validate:repeat-password="{passwordEqual: {rule: true, initial: 'off'}}"
                >
                <p class="txt" v-if="$userEdit.repeatPassword.passwordEqual">
                  <i class="icon"></i>密码不一致
                </p>
              </div>
            </div>

            <div class="ks-col-auto">
              <div class="form-group" :class="$userEdit.email.email && 'has-error'">
                <label class="label"><sup class="sup-red">*</sup>邮箱</label>
                <input type="text" class="input" placeholder="请输入邮箱"
                       maxlength="32" v-model="userForm.email" group="otherGroup"
                       v-validate:email="{email: {rule: true, initial: 'off'}}"
                >
                <p class="txt" v-if="$userEdit.email.email">
                  <i class="icon"></i>邮箱不正确
                </p>
              </div>
            </div>
          </div>

          <div class="ks-row-auto">
            <div class="ks-col-auto">
              <div class="form-group" :class="$userEdit.level.required && 'has-error'">
                <label class="label"><sup class="sup-red">*</sup>用户类型</label>
                <select class="input pct100" v-model="userForm.level" group="otherGroup"
                        v-validate:level="{required: {rule: true, initial: 'off'}}"
                >
                  <option value="">请选择用户类型</option>
                  <option v-for="level in userLevels" :value="level.value" v-text="level.text">用户类型</option>
                </select>
                <p class="txt" v-if="$userEdit.level.required">
                  <i class="icon"></i>请选择用户类型
                </p>
              </div>
            </div>

            <div class="ks-col-auto">
              <div class="form-group">
                <label class="label">性别</label>
                <select type="text" class="input pct100" v-model="userForm.sex">
                  <option :value="0">保密</option>
                  <option :value="1">男</option>
                  <option :value="2">女</option>
                </select>
              </div>
            </div>
          </div>

          <div class="ks-row-auto">
            <div class="ks-col-auto">
              <div class="form-group has-error">
                <label class="label">备注</label>
                <textarea class="pct100 kadd__content " rows="5"
                          v-model="userForm.remark"
                ></textarea>
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
        userLevels: [],
        userForm: {
          id: '',
          login_name: '',
          name: '',
          email: '',
          sex: 0,
          level: '',
          remark: '',
          password: '',
          mobile: '',
          repeatPassword: ''
        }
      }
    },

    validators: {
      passwordEqual (val) {
        let vm = this._vm

        return !!val && vm.userForm.password === val
      },

      email (val) {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)
      },

      phone (val) {
        return /^1[3|4|5|8|7|6|]\d{9}$/.test(val)
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
       * @param email {String} 邮箱
       * @param level {String} 用户等级
       * @param login_name {String} 登录名
       * @param mobile {String} 手机号
       * @param name {String} 用户姓名
       * @param remark {String} 备注
       * @param sex {Number} 性别 [0: 保密, 1: 男, 2: 女]
       * @returns {Promise} 请求的 Promise
       */
      userEditInit ({
        id = null,
        login_name = '',
        name = '',
        email = '',
        sex = 0,
        level = '',
        remark = '',
        mobile = ''
      }) {
        let userForm = this.userForm

        userForm.id = id
        userForm.login_name = login_name
        userForm.name = name
        userForm.email = email
        userForm.sex = sex
        userForm.level = level
        userForm.remark = remark
        userForm.mobile = mobile
        userForm.password = ''
        userForm.repeatPassword = ''
      }
    },

    methods: {
      /**
       * @description 确定按钮处理函数
       */
      confirm () {
        // 判断编辑器模式
        if (this.mode === 'add') {
          // 激活验证器
          this.$validate(true, () => {
            if (this.$userEdit.otherGroup.valid &&
              this.$userEdit.passwordGroup.valid) {
              this.$emit('confirm', this.userForm)
            }
          })
        } else {
          this.$validate('login_name')
          this.$validate('name')
          this.$validate('email')
          this.$validate('level')
          this.$validate('remark')
          this.$validate('mobile', () => {
            if (this.$userEdit.otherGroup.valid) {
              this.$emit('confirm', this.userForm)
            }
          })
        }
      },

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },

    created () {
      // 获取用户级别列表
      Pub.getUserLevel().then(({ data }) => {
        this.userLevels = data.data
        this.userForm.level = data.data[0].value
      }, ({ data }) => this.errHandle(data))
    }
  }
</script>

<style lang="scss">

  // panel width.
  $width: 700px;

  .userEdit-wrap {
    width: $width; padding: 20px;
    background: white;
  }
</style>
