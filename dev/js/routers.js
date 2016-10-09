export default function (Vue,router){
    router.map({

    '/':{
        router_type:'root',
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
            }

        }
    }

    })


    router.beforeEach(transition =>{
        console.log(transition)
        transition.next()
    })
}