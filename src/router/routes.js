const Login = () => import('@/pages/Login')
const Layout = () => import('@/pages/common/layout/layout')
const TableList = () => import('@/pages/part1/TableList')
const Form = () => import('@/pages/part1/Form')

export default[
  {
    path: '/login',
    name: '登录',
    component: Login
  }, {
    path: '/',
    redirect: '/',
    name: '布局',
    component: Layout,
    children: [
      {
        path: '/part1',
        name: 'part1',
        children: [
          {
            path: '/part1/TableList',
            name: '表格',
            component: TableList
          }, {
            path: '/part1/Form',
            name: '表单',
            component: Form
          }
        ]
      }, {
        path: '/part2',
        name: 'part2',
        children: [

        ]
      }
    ]
  }
]
