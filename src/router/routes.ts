import UserLogin from '@/views/user/UserLogin.vue'
import UserLayout from '@/views/layout/UserLayout.vue'
import UserRegistered from '@/views/user/UserRegistered.vue'

const route = [
  {
    path: '/',
    name: '主页',
    component: UserLayout,
  },
  {
    path: '/user',
    name: '用户',
    component: UserLayout,
    children: [
      {
        path: 'login',
        name: '登录',
        component: UserLogin
      },
      {
        path: 'registered',
        name: '注册',
        component: UserRegistered
      },
    ],
    meta: {
      hideInMenu: true
    }
  },
]

export default route
