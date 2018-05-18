export default [
  {
    path: '/login',
    name: '登录',
    component: resolve => {
      require(['@/pages/Login'], resolve)
    }
  }, {
    path: '/',
    name: 'layout',
    component: resolve => {
      require(['@/pages/common/layout/layout'], resolve)
    },
    children: [
      {
        path: '/part1/table',
        name: '表格',
        component: resolve => {
          require(['@/pages/part1/Table'], resolve)
        }
      }, {
        path: '/part1/Form',
        name: '表单',
        component: resolve => {
          require(['@/pages/part1/Form'], resolve)
        }
      }
    ]
  }
]
