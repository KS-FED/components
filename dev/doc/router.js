/**
 * @description application router file.
 * @author pkeros
 * @data 16/6/1
 * @email pkeros@vip.qq.com
 */

export default (router) => {

  // 路由映射
  router.map({

    /* 主页 */
    '/': {
      name: 'index',
      cnName: '主页',
      component: resolve => {
        require(['./views/index.vue'], res => {
          resolve(res)
        })
      },

      subRoutes: {

        /* 欢迎页面 */
        '/': {
          name: 'welcome',
          cnName: '欢迎页面',
          component: (resolve) => {
            require(['./views/other/welcome.vue'], resolve)
          }
        },

        /* 开发指南-安装 */
        '/install': {
          name: 'install',
          cnName: '安装',
          component: (resolve) => {
            require(['./views/guide/install.md'], resolve)
          }
        },

        /* 基础组件 */
        '/base': {
          name: 'base',
          cnName: '基础组件',
          component: (resolve) => {
            require(['./views/base/index.vue'], resolve)
          },

          subRoutes: {

            /* 基础组件-布局 */
            '/layout': {
              name: 'layout',
              cnName: '布局',
              component: (resolve) => {
                require(['./views/base/layout.md'], resolve)
              }
            },

            /* 基础组件-按钮 */
            '/button': {
              name: 'button',
              cnName: '按钮',
              component: (resolve) => {
                require(['./views/base/button.md'], resolve)
              }
            },
          }
        },
        /* form */
        '/form': {
          name: 'form',
          cnName: '表单',
          component: (resolve) => {
            require(['./views/form/index.vue'], resolve)
          },

          subRoutes: {

            /* 基础组件-布局 */
            '/datepicker': {
              name: 'datepicker',
              cnName: '布局',
              component: (resolve) => {
                require(['./views/form/date-picker.md'], resolve)
              }
            }
          }
        },
        /* data */
        // '/data': {
        //   name: 'data',
        //   cnName: '数据展示',
        //   component: (resolve) => {
        //     require(['./views/data/index.vue'], resolve)
        //   },

        //   subRoutes: {

        //     /* 基础组件-布局 */
        //     '/page': {
        //       name: 'page',
        //       cnName: '分页',
        //       component: (resolve) => {
        //         require(['./views/data/page.md'], resolve)
        //       }
        //     }
        //   }
        // },

      }
    }
  })
}
