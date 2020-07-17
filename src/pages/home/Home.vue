<template>
  <div>
    <div class="banner">
      <img class="img" src="./images/home-banner.png" alt="">
      <div class="text animated bounceInUp">
        <div class="h1">以客户体验为核心 开拓知识创新之路</div>
        <div class="sogn">打造行业品牌，树立企业形象 <br>
          为客户提供更好的一站式互联网解决方案。</div>
        <div class="gaoxiao">高效的开发团队 ，一对一定制服务</div>
        <div class="btn">
          <div class="btn1">了解下公司</div>
        </div>
      </div>
    </div>
    <div class="programme">
      <div class="title">解决方案<br><span>专业的智慧+解决方案服务商</span></div>
      <div class="lunbo">
        <div class="slide">
          <div class="item">
            <img class="img" src="./images/home-fangan-img1.jpg" alt="">
            <div class="h1">
              人脸识别解决方案
            </div>
            <div class="txt">
              基于目前最先进的人脸识别技术为核心，实现道闸人脸识别、智慧考勤、会议室预定、校园安全识别等多场景应用的技术。
            </div>
            <div class="bgon"></div>
          </div>
        </div>
        <div class="slide">
          <div class="item">
            <img class="img" src="./images/home-fangan-img2.jpg" alt="">
            <div class="h1">
              办公自动化解决方案
            </div>
            <div class="txt">
              利用先进的技术，使人的各种办公业务活动逐步由各种设备、各种人机信息系统协助完成，提供一个协同、集成的办公环境，提高工作工作效率和工作质量。
            </div>
            <div class="bgon"></div>
          </div>
        </div>
        <div class="slide">
          <div class="item">
            <img class="img" src="./images/home-fangan-img3.jpg" alt="">
            <div class="h1">
              智慧消防云平台解决方案
            </div>
            <div class="txt">
              基于若干智能硬件而开发的，集成设备监测、报警、巡检、大屏展示、故障推送、隐患曝光等功能于一体的消防监控平台。
            </div>
            <div class="bgon"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="wecan">
      <img class="bg" src="./images/home-bg-blue1.png" alt="">
      <div class="main">
        <div class="title">我们能做什么？<br>让您的需求快速变成现实</div>
        <ul class="wecanlist">
          <li>
            <img class="icon" src="./images/home-wecan-img1.png" alt="">
            <div class="biaoti">ERP管理系统定制</div>
            <div class="txt">基于iOS/Android应用开发,掌控智能终端时代。</div>
          </li>
          <li>
            <img class="icon" src="./images/home-wecan-img2.png" alt="">
            <div class="biaoti">微信二次开发</div>
            <div class="txt">酷炫模板,全新体验,轻松走入微信。</div>
          </li>
          <li>
            <img class="icon" src="./images/home-wecan-img3.png" alt="">
            <div class="biaoti">高端网站建设</div>
            <div class="txt">企业高端定制网站设计,彰显品牌形象。</div>
          </li>
          <li>
            <img class="icon" src="./images/home-wecan-img4.png" alt="">
            <div class="biaoti">移动WEB开发</div>
            <div class="txt">定制手机网站和微网站制作,布局移动互联网。</div>
          </li>
          <li>
            <img class="icon" src="./images/home-wecan-img5.png" alt="">
            <div class="biaoti">界面品牌建设</div>
            <div class="txt">以专业的视角为企业提供有创意和视觉冲击力的设计,致力于树立良好的企业品牌形象。</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="process">
      <div class="title">优秀的项目是这样做出来的 <br><span>以客户体验为核心, 开拓知识创新之路</span> </div>
      <img src="./images/home-liucheng.png" alt="">
    </div>
    <ul class="contact">
      <li>
        <div class="title">联系方式</div>
        <div class="txt">
          联系电话：158 0795 6569 <br>
          老板邮箱：rsrj2020@163.com <br>
          公司地址：江西省宜春市袁州区平安路531号三楼
        </div>
      </li>
      <li>
        <div class="title">关注我们</div>
        <div class="txt">
          <img class="erweima" src="./images/home-erweima.png" alt="">
        </div>
      </li>
      <li>
        <div class="title">我们的服务</div>
        <div class="txt">
          <ul class="weserver">
            <li>微信二次开发</li>
            <li>ERP管理系统定制</li>
            <li>高端网站建设</li>
            <li>移动WEB开发</li>
            <li>界面品牌建设</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        activeIndex:4
      }
    },

    mounted(){

    },
    methods:{

    }
  }
</script>

<style lang="less" scoped>
  @import url('./less/home');
</style>
