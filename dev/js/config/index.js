console.log('environment: '+APP_ENV,'version: '+APP_VERSION)
/**
 * [proxy_mock 代理、mock]
 * @param  {[type]} Vue [Vue]
 */
export function proxy_mock(Vue){
    if(APP_ENV == 'dev'){
        require(['./proxy-mock'],function({mock,proxy}){
            mock(Vue)
            proxy(Vue)
        })    
    }     
}



