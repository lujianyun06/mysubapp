import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import '../public-path' // 重点3： 引入public-path文件
const router = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/', // 重点4：qiankun进入子应用时，返回true
    history: createWebHashHistory(), // 重点5
    routes: [{
            path: '/',
            redirect: '/child'
        },
        {
            path: '/child',
            component: () => import('@/components/Child')
        }
    ]
})
export default router