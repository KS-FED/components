<template>
  <nav class="k-crumbs-container f14">
    <ul class="k-crumbs m0 p0 ell">
      <!-- 面包屑 Home 部分图标 -->
      <!--<img class="k-crumbs__home" src="../../../static/images/icons/home.png" alt="home icon">-->
      <li class="k-crumbs__item" v-for="path in routePath" track-by="$index"
      >
        <!-- 面包屑导航链接  @click="$router.go({name: path.route})" -->
        <a class="k-crumbs__point tdn" :class="routePath.length - 1 === $index && 'k-crumbs__active'"
           v-text="path.cn"
        ></a>
        <span v-if="routePath.length - 1 !== $index"
              class="k-crumbs__split">/&nbsp;</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="babel">
  export default{
    data () {
      return {
        routePath: []
      }
    },
    methods: {
      /**
       * @description 路由变换处理函数
       * @summary 负责监控路由变换更新 面包屑信息
       */
      hashChangeHandle () {
        setTimeout(() => {
          let matched = this.$route.matched
          let matchedLength = matched.length
          let arr = []

          for (let i = 0; i < matchedLength; i++) {
            arr.push({ cn: matched[i].handler.cnName, route: matched[i].handler.name })
          }
          this.$set('routePath', arr)
        }, 77)
      }
    },
    created () {
      // 初始化面包屑
      this.hashChangeHandle()

      window.addEventListener('hashchange', this.hashChangeHandle.bind(this))
    },
    destroy () {
      window.removeEventListener('hashchange', this.hashChangeHandle)
    }
  }
</script>
