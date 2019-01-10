//路由前后需要处理的事情
import router from '../index'
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
/*路由变化之后处理百度统计*/
router.afterEach(( to, from, next ) => {
  setTimeout(()=>{
    let _hmt = _hmt || [];
    (function() {
      //每次执行前，先移除上次插入的代码
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').parentNode.removeChild(document.getElementById('baidu_tj'))
      let hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b605ba9e714c71c29ee3842b8e865694"
      hm.id = "baidu_tj"
      let s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(hm, s)
    })();
  },50);
} );
