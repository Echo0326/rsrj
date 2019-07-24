import Empty from './Empty'
export default [
  {
    path:'/empty',
    component:Empty,
    name:'empty',
    meta: {
      title:'抱歉，出错了，找不到页面'
    }
  },
  {
    path:'*',
    redirect:'/empty'
  }
]
