<template>
  <div class="layout">
    <div class="logo"><img src="./images/logo.png" alt=""></div>
    <div class="menu">
      <ul class="menulist">
        <li>
          <span class="text">首页</span>
          <div class="line"></div>
        </li>
        <li>
          <span class="text">产品展示</span>
          <div class="line"></div>
        </li>
        <li class="on">
          <span class="text">服务流程</span>
          <div class="line"></div>
        </li>
        <li>
          <span class="text">关于我们</span>
          <div class="line"></div>
        </li>
        <li>
          <span class="text">联系我们</span>
          <div class="line"></div>
        </li>
      </ul>
    </div>
    <div class="menuIcon">
      <i class="fa fa-bars fa-2x  " aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style lang="less" scoped>
  @import url('./less/layout');
</style>
