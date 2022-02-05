import uniCrazyRouter, {beforeEach, afterEach, onError, afterNotNext} from "uni-crazy-router";

import {bindInterceptLogin, destroyInterceptLogin} from './interceptLogin'

// 开放给main.js
export function setupRouter (app) {
    // 接收vue3的实例
    app.use(uniCrazyRouter)

    // 启用登录页的拦截
    bindInterceptLogin()

    beforeEach(async (to, from ,next)=>{
        // 逻辑代码

        if (to.url === 'pages/index/page2') {
            afterNotNext(() => {
                uni.navigateTo({
                    url: '/pages/index/page1',
                    passedParams: {
                        info: '因为page2不存在，拦截跳转到此'
                    }
                })
            })
            return
        }

        next()
    })

    afterEach((to, from)=>{
        // 逻辑代码
    })

    // 除了在beforeEach钩子里没有使用next导致的无法跳转的情况外，其他情况导致的跳转失败都会触发onError
    onError((to, from)=>{
        uni.showToast({
            title: `${to.url} 不存在1111`,
            icon: 'none'
        })
    })
}

