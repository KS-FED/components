    /**
     * [模拟数据 配置]
     */
    export function mock (Vue,ismock){
        console.log('mock ....')
        if(ismock){
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
    export function proxy (Vue,isproxy){
        console.log('proxy ....')
        if(isproxy){

            console.log('proxy ....')
            /**
             * 代理 数据
             */
            Vue.http.options.root = '.'
            // Vue.http.headers.common['DOMAIN'] = 'http://192.168.16.123:8080'
            // Vue.http.headers.common['DOMAIN'] = 'http://zd.kashuo.com'
            // Vue.http.headers.common['DOMAIN'] = 'http://192.168.18.163:8080/zdcrm-ws'

            // Vue.http.headers.common['DOMAIN'] = 'http://192.168.18.106:8080'
            // Vue.http.headers.common['DOMAIN'] = 'http://szqa.kashuo.net:50089/zdcrm-ws-1.0'
            // Vue.http.headers.common['DOMAIN'] = 'http://zd1.kashuo.com/zdcrm-ws-1.0'
             //Vue.http.headers.common['DOMAIN'] = 'http://zd.dev.kashuo.net/zdcrm-ws-1.0'

            Vue.http.headers.common['DOMAIN'] = 'http://zd.qa.kashuo.net/zdcrm-ws-1.0'
            
            // Vue.http.headers.common['DOMAIN'] = 'http://59.53.92.181:50089/zdcrm-ws-1.0'
            // Vue.http.headers.common['DOMAIN'] = 'http://wxhb.kashuo.com/zdcrm-ws-1.0'

            // document.cookie='user=%7B%22mid%22%3A%22p04XzUIx8oA%3D%22%2C%22sid%22%3A%22r8PaNkpNlpJsAuBAxiwYoQ%3D%3D%22%2C%22uid%22%3A%22IvAdzo9oQVQ%3D%22%7D'
            // document.cookie='JSESSIONID=F03D35879028271FE95B3EA4623C57D9'

            // document.cookie='user='+encodeURIComponent(JSON.stringify({"uid":"TmVTP54HnGY=","sid":"1hmipoAnlhg=","mid":"m002","name":"谌云峰","phone":"13166430721","mname":"海底捞","uidm":"E4DA3B7FBBCE2345D7772B0674A318D5"}))
        }else{
            Vue.http.options.root = window.config.origin || 'http://zd.qa.kashuo.net/zdcrm-ws-1.0'
        }

    }