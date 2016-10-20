export default function (Vue,router){
    router.map({

    '/':{
        router_type:'root',
        name:'root',
        component: function(resolve){
            require(['./views/app.vue'],resolve)
        },
        subRoutes:{

            // 会员主页
            '/home':{
                name:'home',
                title:'主页',
                component: function(resolve){
                    require(['./views/home/index.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 按钮
            '/button':{
                name:'button',
                title:'按钮',
                component: function(resolve){
                    require(['./views/button/button.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 图标按钮
            '/icon-button':{
                name:'icon-button',
                title:'图标按钮',
                component: function(resolve){
                    require(['./views/button/icon-button.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // tab导航（边框）
            '/tab-bor':{
                name:'tab-bor',
                title:'tab导航',
                component: function(resolve){
                    require(['./views/tab/tab-bor.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // tab导航（背景）
            '/tab-bg':{
                name:'tab-bg',
                title:'tab导航',
                component: function(resolve){
                    require(['./views/tab/tab-bg.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // table（隔行添加背景色）
            '/table-striped':{
                name:'table-striped',
                title:'table',
                component: function(resolve){
                    require(['./views/table/table-striped.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 分页
            '/paging':{
                name:'paging',
                title:'paging',
                component: function(resolve){
                    require(['./views/paging/paging.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 提示框
            '/toast':{
                name:'toast',
                title:'提示框',
                component: function(resolve){
                    require(['./views/toast/toast.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 弹框
            // 内容弹框
            '/dialog-content':{
                name:'dialog-content',
                title:'内容弹框',
                component: function(resolve){
                    require(['./views/dialog/dialog-content.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 图标弹框
            '/dialog-icon':{
                name:'dialog-icon',
                title:'内容弹框',
                component: function(resolve){
                    require(['./views/dialog/dialog-icon.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 日期
            '/date':{
                name:'date',
                title:'日期',
                component: function(resolve){
                    require(['./views/date/date.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 单选
            '/radio':{
                name:'radio',
                title:'单选',
                component: function(resolve){
                    require(['./views/radio/radio.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 多选
            '/checkbox':{
                name:'checkbox',
                title:'多选',
                component: function(resolve){
                    require(['./views/checkbox/checkbox.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 开关
            '/switch':{
                name:'switch',
                title:'开关',
                component: function(resolve){
                    require(['./views/switch/switch.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 步骤
            '/step':{
                name:'step',
                title:'步骤',
                component: function(resolve){
                    require(['./views/step/step.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 下拉
            '/select':{
                name:'select',
                title:'下拉',
                component: function(resolve){
                    require(['./views/select/select.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 搜索框
            '/search':{
                name:'search',
                title:'搜索框',
                component: function(resolve){
                    require(['./views/search/search.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 时间
            '/time':{
                name:'time',
                title:'时间',
                component: function(resolve){
                    require(['./views/time/time.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 文字提示
            '/tooltip':{
                name:'tooltip',
                title:'文字提示',
                component: function(resolve){
                    require(['./views/tooltip/tooltip.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 弹出框
            '/popover':{
                name:'popover',
                title:'弹出框',
                component: function(resolve){
                    require(['./views/popover/popover.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 弹出框-输入
            '/popover-enter':{
                name:'popover-enter',
                title:'弹出框-输入',
                component: function(resolve){
                    require(['./views/popover/popover-enter.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 表单排版
            '/form-layout':{
                name:'form-layout',
                title:'表单排版',
                component: function(resolve){
                    require(['./views/form/form-layout.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 加载图标
            '/icon-loading':{
                name:'icon-loading',
                title:'加载图标',
                component: function(resolve){
                    require(['./views/icon/icon-loading.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 编辑图片
            // '/img-edit':{
            //     name:'img-edit',
            //     title:'编辑图片',
            //     component: function(resolve){
            //         require(['./views/img-edit/img-edit.vue'], (res)=> {
            //             resolve(res)
            //         })
            //     }
            // },



        }
    }

    })


    router.beforeEach(transition =>{
        if(transition.to.name == 'root') {
            router.go({ name: 'home'})
        }
        transition.next()
    })
    
    router.afterEach(transition =>{
        setTimeout(()=>{
            
            Array.prototype.slice.call(document.querySelectorAll('pre code')).forEach(val=>{
                if(val.className === 'html'){
                    console.log(val.innerHTML)
                    val.innerHTML = val.innerHTML.replace(/</g,'&lt;').replace(/>/g,'&gt;')
                }
                hljs.highlightBlock(val)
            })
        })
        
    })
}