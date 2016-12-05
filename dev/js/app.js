
/* eslint-disable no-unused-vars */
// import scss from 'scss'
/* eslint-enable no-unused-vars */
import VueRouter from 'vue-router'
import { proxy_mock } from './config/index'
import components from './components/'
import { KsComponents } from './components'
import routers from './routers'
import Validator from 'vue-validator'

// window._ = {
//     curry : require('lodash.curry'),
//     flowright : require('lodash.flowright')
// }
// console.log(_)

// Object.keys(components).forEach(k => {
//     var a = Vue.component(k, components[k])
//     // console.log(a)
// })
// regeister cmoponents.
Vue.use(components)
console.log(KsComponents)

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Validator)
proxy_mock(Vue)

// *** 实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})
routers(Vue, router)

let app = Vue.extend({})
router.start(app,'#app')




var mount = Vue.prototype.$mount



// Vue.http.get('./aaa', {})
//     .then(res => {
//         console.log('')
//     })


require('./lib/index')


