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
    component: () => import('@/views/layout/BasicLayout.vue'),
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
  {
    path: '/article',
    name: '文章',
    component: UserLayout,
    redirect: '/article/layout/channel',
    children: [
      {
        path: 'layout',
        name: '布局',
        component: () => import('@/views/article/ArticleLayout.vue'),
        children: [
          {
            path: 'channel',
            name: '分类',
            component: () => import('@/views/article/ArticleChannel.vue')
          },
          {
            path: 'manage',
            name: '管理',
            component: () => import('@/views/article/ArticleManage.vue')
          },
          {
            path: 'info',
            name: '用户详情',
            component: () => import('@/views/user/UserInfo.vue')
          },
          {
            path: 'avatar',
            name: '更换头像',
            component: () => import('@/views/user/ChangeAvatar.vue')
          },
          {
            path: 'resetPassword',
            name: '重置密码',
            component: () => import('@/views/user/ResetPassword.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/biliLayout',
    name: 'B站首页',
    component: () => import('@/views/bili-layout/index.vue'),
  },
  {
    path: '/biliDynamic',
    name: 'B站动态',
    component: () => import('@/views/bili-dynamic/index.vue'),
  },
  {
    path: '/github',
    name: 'Github项目页',
    component: () => import('@/views/github/index.vue'),
  },
  {
    path: '/app/detail/:id',
    props: true,
    name: '应用详情页',
    component: () => import('@/views/app/AppDetail.vue'),
    meta: {
      hideInMenu: true
    }
  },
]

export default route
