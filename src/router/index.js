import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Hello from '@/components/Hello'
import about from '@/components/about'
import main from '@/components/main'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'
import login from '@/components/login'
import pay from '@/components/pay'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/about',
			name: 'about',
			component: about
		},
		{
			path: '/main',
			component: main,
			children: [{
					path: '',
					redirect: '/main/page1'
				},
				{
					path: 'page1',
					name: 'page1',
					component: page1,
		  			meta:{requireAuth:true}
				},
				{
					path: 'page2',
					name: 'page2',
					component: page2,
		  			meta:{requireAuth:true}
				},
				{
					path: 'page3',
					name: 'page3',
					component: page3,
		  			meta:{requireAuth:true}
				}

			]
		},
		{
		  path: '/login', //登录路径
		  name: 'login',
		  component: login
		},
		{
		  path: '/pay', //登录路径
		  name: 'pay',
		  component: pay
		}
	]
})
router.beforeEach((to, from, next) => {
	console.log("["+new Date().toDateString()+"]  "+store.state.token);
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
export default router; 
