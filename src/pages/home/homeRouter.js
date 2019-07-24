import Home from './Home'
export default [
  {
    path:'/home',
    component:Home,
    name:'Home',
    meta: {
      title:'主页'
    }
  },
  {
    path:'/',
    redirect:'/home'
  }
]
