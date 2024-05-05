export default [
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  {
    name: '注册',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/register', component: './User/Register' }],
  },
  // { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/',
    redirect: '/add_chart',
  },
  {
    name: '智能分析',
    path: '/add_chart',
    icon: 'LineChartOutlined',
    component: './AddChart',
  },
  {
    name: '智能分析(异步)',
    path: '/add_chart_async',
    icon: 'barChart',
    component: './AddChartAsync',
  },
  {
    name: '智能分析(异步消息队列)',
    path: '/add_chart_async_mq',
    icon: 'DotChartOutlined',
    component: './AddChartAsyncMq',
  },
  {
    name: "个人中心",
    path: '/person',
    icon: 'DotChartOutlined',
    routes: [
      { path: '/person/user_info', name: '个人信息', component: './User/UserInfo' },
      { path: '/person/order', name: '个人订单', component: './User/UserOrder' },
      // { path: '/person/pay_order', name: '订单付款', component: './User/UserPayOrder' },
      { path: '/person/payInfo', name: '支付信息查询', component: './User/UserPayInfo' },
    ],
  },
  { path: '/my_chart', name: '我的图表', icon: 'pieChart', component: './MyChart' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
