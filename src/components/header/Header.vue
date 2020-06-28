<template>
  <div class="header">
    <div class="pc">
      <div class="logo"><img src="./images/logo.png" alt=""></div>
      <div class="menu" >
        <ul class="menulist">
          <li :class="$route.name==='Home'?'on':''">
            <router-link to="/home"><span class="text">首页</span>
              <div class="line"></div>
            </router-link>
          </li>
          <li :class="$route.name==='Product'?'on':''">
            <router-link to="/product">
              <span class="text">产品展示</span>
              <div class="line"></div>
            </router-link>
          </li>
          <li :class="$route.name==='Service'?'on':''">
            <router-link to="/service">
              <span class="text">服务流程</span>
              <div class="line"></div>
            </router-link>
          </li>
          <li :class="$route.name==='AboutUs'?'on':''">
            <router-link to="aboutus">
              <span class="text">关于我们</span>
              <div class="line"></div>
            </router-link>
          </li>
          <li :class="$route.name==='ContactUs'?'on':''">
            <router-link to="contactus">
              <span class="text">联系我们</span>
              <div class="line"></div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="menuIcon" ></div>
    </div>
    <div class="leftText">最值得信赖的专业信息化解决方案服务商</div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        mobile:false
      }
    },
    methods:{
    }
  }
</script>

<style lang="less" scoped>
  @import url('./less/header');
</style>
