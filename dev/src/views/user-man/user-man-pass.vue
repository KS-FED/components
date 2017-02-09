<template>
	<div class="user-main-container">
    <ul class="tab-bor">
      <li class="poi active">修改密码</li>
    </ul>
    <validator name="updatePassword">
      <div class="kframe p20 w400 auto">
        <div class="form-box-center pct100" style="min-width: 0">

          <div class="ks-row-auto">
            <div class="form-group" :class="{'has-error': $updatePassword.vPassword.required}">
              <input type="password" class="input ks-col" placeholder="请输入密码"
                     maxlength="32" v-model="password"
                     v-validate:v-password="{required: {rule: true, initial: 'off'}}"
              >
              <p class="txt red" v-if="$updatePassword.vPassword.required">
                <i class="icon"></i>用密码不能为空！
              </p>
            </div>
          </div>

          <div class="ks-row-auto">
            <div class="form-group" :class="{'has-error': $updatePassword.vRepeatPassword.passwordEqual}">
              <input type="password" class="input ks-col" placeholder="请再次输入密码"
                     maxlength="32" v-model="repeatPassword"
                     v-validate:v-repeat-password="{passwordEqual: {rule: true, initial: 'off'}}"
              >
              <p class="txt red" v-if="$updatePassword.vRepeatPassword.passwordEqual">
                <i class="icon"></i>用密码输入不一致！
              </p>
            </div>
          </div>

        </div>

        <div class="form-control">
          <k-button type="primary" size="xl" @kclick="updatePassword" >确定修改</k-button>
        </div>
      </div>
    </validator>
	</div>
</template>

<script lang="babel">
  import KButton from '../../components/KButton.vue'
  import UserMod from '../../apis/models/userMan'

  export default{
    data () {
      return {
        userId: null,
        password: '',
        repeatPassword: ''
      }
    },

    validators: {
      passwordEqual (val) {
        let vm = this._vm

        return !!val && vm.password === val
      }
    },

    methods: {
    	updatePassword () {
        // 创建一个 dialog 实例
        let dialog = this.$KsDialog.create({ container: '.work-container' })

        // 激活验证器
        this.$validate(true, () => {
          if (this.$updatePassword.valid) {
            //校验成功两次密码一致，调用接口
            UserMod.updatePassword(this.userId, this.password).then(({ data }) => {
              dialog.show('密码修改成功！' , '信息' , 'success')(() => dialog.close())
            }, ({ data }) => this.errHandle(data))
          }
        })
    	},

      /**
       * @description 异常处理
       * @param message 错误信息
       */
      errHandle ({ message }) { this.$dispatch('errHandle', message) }
    },

    created () {
      // 获取路由中 userId 信息
      let { userId = null } = this.$route.params
      this.userId = userId << 0
      if (!(userId << 0)) {
        this.userId = null
      }
    },

    components: { KButton }
  }
</script>

<style lang="scss">
.input-col{
	border: 1px solid #ccc !important;
	border-radius: 3px !important;
}
</style>
