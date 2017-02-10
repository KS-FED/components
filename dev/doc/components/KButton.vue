<template>
  <div class="kbutton kbutton-container">
    <button class="kbutton-entity" type="button"
            :class="classes"
            @click.stop="buttonHandle"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    props: {
      ghost: {type: Boolean, default: false},
      size: {type: String, default: 'normal'},
      type: {type: String, default: 'primary'},
      disable: {type: Boolean, default: false}
    },
    computed: {
      classes () {
        return (this.ghost ? this.type + '-ghost' : this.type) + ' input-size-' + this.size + (this.disable ? ' disabled' : '')
      }
    },
    methods: {
      /**
       * @description 按钮单击事件处理
       */
      buttonHandle () {
        const _this = this

        // *** 按钮是否被禁用
        if (_this.disable) {
          return
        }
        // *** 发射事件
        _this.$emit('kclick')
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/mixins/index";

  $buttonSize: "ssl" "sl" "normal" "xl" "xxl";
  $buttonSizeExt: 30px 12px, 32xp 13px, 34px 13px, 38px 16px, 40px 18px;

  @mixin buttonFactory ($order) {
    @each $type, $colors in $order {
      .#{$type} {
        width: 100%; border-radius: 3px;
        text-align: center;
        background: nth($colors, 2);

        &:hover {background: nth($colors, 3)}
        &:active {background: nth($colors, 1)}
      }
      .#{$type}-ghost {
        width: 100%;border-radius: 3px;
        text-align: center;color: nth($colors, 2);
        border: 1px solid nth($colors, 2);
        background: transparent!important;

        &:hover {color: nth($colors, 3);border: 1px solid nth($colors, 3)}
        &:active {color: nth($colors, 1);border: 1px solid nth($colors, 1)}
      }
    }
  }

  @include b(kbutton) {
    margin: auto;padding: 3px;
    text-align: center;

    .disabled {
      outline:0 none; opacity:.4; filer:alpha(opacity=40);
      -ms-pointer-events:none; pointer-events:none;
    }
    .kbutton-entity {
      font-family: $base-font-family;

      display: inline-block;zoom: 1;
      width: 100%;user-select: none;outline: none;
      line-height: normal;white-space: nowrap;
      text-align: center;cursor: pointer;
      -webkit-user-drag: none;box-sizing: border-box;
      touch-action: manipulation;color: #FFF;
      border: 1px solid transparent;
    }

    // 创建 不同颜色的样式
    @include buttonFactory($global-colors);
    // 生成 不同的 size
    @each $size in $buttonSize {
      .input-size-#{$size} {
        height: nth(nth($buttonSizeExt, index($buttonSize, $size)), 1);
        font-size: nth(nth($buttonSizeExt, index($buttonSize, $size)), 2);
      }
    }
  }
</style>
