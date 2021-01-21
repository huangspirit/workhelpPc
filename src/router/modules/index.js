export default [
  {
    path: "",
    redirect: "index"
  },
  {
    path: "index",
    name: "index",
    component: r => require.ensure([], () => r(require('@/pages/index/index')), 'index'),
    meta: { title: '作业帮商品', details: '作业帮商品' },

  },
  {
    path: "orderlist",
    name: "orderlist",
    component: r => require.ensure([], () => r(require('@/pages/orderlist/index')), 'orderlist/index'),
    meta: { title: '作业帮订单', details: '作业帮订单' },

  },
  {
    path: "feedback",
    name: "feedback",
    component: r => require.ensure([], () => r(require('@/pages/feedback')), 'feedback'),
    meta: { title: '作业帮意见反馈', details: '作业帮意见反馈' },

  },
  {
    path: "userInfo",
    name: "userInfo",
    component: r => require.ensure([], () => r(require('@/pages/userInfo')), 'userInfo'),
    meta: { title: '作业帮个人信息', details: '作业帮个人信息' },

  },
  {
    path: "cart",
    name: "cart",
    component: r => require.ensure([], () => r(require('@/pages/cart')), 'cart'),
    meta: { title: '作业帮领用篮', details: '作业帮领用篮' },

  }
]