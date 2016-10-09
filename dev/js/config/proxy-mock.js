    var config = {
        // proxy:true,
        // mock:true
    }

    export function proxy_mock_core (Vue) {
        proxy(Vue, config.proxy)
        mock(Vue, config.mock)
    }
    /**
     * [模拟数据 配置]
     */
    function mock (Vue, ismock) {
        if (ismock) {
            console.log('mock ....')
                /**
                 * Mock 数据 必要配置
                 * 添加 mock 标示在请求头中
                 * mock参数解析为json (request payload)
                 */
            Vue.http.headers.common['MOCK'] = '/dev/mock'
        }
    }

    /**
     * [node 代理配置]
     */
    function proxy (Vue, isproxy) {
        if (isproxy) {
            // console.log('proxy ....')
            Vue.http.options.root = '.'
                // 代理端口
                // Vue.http.headers.common['DOMAIN'] = 'http://zd.dev.kashuo.net/zdcrm-ws-1.0'
            Vue.http.headers.common['DOMAIN'] = 'http://zd.qa.kashuo.net/zdcrm-ws-1.0'
                // document.cookie='user=name'
        } else {
            Vue.http.options.root = window.config && (window.config.origin || 'http://zd.qa.kashuo.net/zdcrm-ws-1.0')
        }
    }
