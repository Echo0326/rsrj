//定义一些过滤器
export default {
  //将时间差value转化为日期对象
  formatDate: function (value) {
    if (!value) return ''
    value = new Date(value)
    return value
  }
}
