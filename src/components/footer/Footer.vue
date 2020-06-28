<template>
  <div class="footer">
    <div class="center">
      <div class="lianjie">
        <a href="">高端网站建站</a><span>|</span>
        <a href="">高端网站建站</a><span>|</span>
        <a href="">高端网站建站</a><span>|</span>
        <a href="">高端网站建站</a><span>|</span>
        <a href="">高端网站建站</a><span>|</span>
        <a href="">高端网站建站</a>
      </div>
      <div class="beian">江西容硕软件有限责任公司版权所有 <a href="">赣ICP备20008300号</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="less" scoped>
  .footer{
    width: 100%;
    min-width: 1200px;
    background: #1f1745;
    padding: 50px;
    .center{
      width: 1200px;
      margin: 0 auto;
      color: #818181;
      .lianjie{
        border-bottom: 1px solid #818181;
        padding-bottom: 30px;
        margin-bottom: 30px;
        >span{
          margin: 0 20px;
        }
      }

    }
  }
</style>
