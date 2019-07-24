import TestElement from './testelement'
import Params from './params'
export default [
  {
    path:'/element',
    component:TestElement,
    name:'element',
    meta: {
      title:'测试Element'
    }
  },
  {
    path:'/params',
    component:Params,
    name:'params',
    meta:{
      title:'测试Params'
    }
  }
]
