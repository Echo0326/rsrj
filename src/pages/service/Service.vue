<template>
  <div>
    <Layout/>
    <div ref="service" class="service">
      <div class="leftText">最值得信赖的专业信息化解决方案服务商</div>
      <ul class="rightIcon">
        <li :class="index===1?'on':''"></li>
        <li :class="index===2?'on':''"></li>
        <li :class="index===3?'on':''"></li>
        <li :class="index===4?'on':''"></li>
        <li :class="index===5?'on':''"></li>
        <li :class="index===6?'on':''"></li>
      </ul>
      <div class="module module1">
        <div class="left">
          <div class="title">需求沟通</div>
          <div class="text">倾听客户需求，了解用户使用环境和操作流程，双方进行项目可行性方案研究，在这个过程中将协助用户进行整个网站定位和策划；积极投入到整个项目的开发过程中去。</div>
          <div class="btn">下一步</div>
        </div>
        <div class="right">
          <img class="img" src="./images/service-img1.png" alt="">
        </div>
      </div>
      <div class="module module2">
        <div class="left">
          <div class="title">定制方案</div>
          <div class="text">荣硕软件经过需求调研，进行需求分析，根据每个企业的实际需求，深入了解和分析需求，根据需求梳理文档系统的功能需求文档。</div>
          <div class="btn">下一步</div>
        </div>
        <div class="right">
          <img class="img" src="./images/service-img1.png" alt="">
        </div>
      </div>
      <div class="module module3">
        <div class="left">
          <div class="title">产品设计</div>
          <div class="text">设计书对界面进行总体设计，客户确定满意设计方案后，交付研发团队，进入下一阶段。</div>
          <div class="btn">下一步</div>
        </div>
        <div class="right">
          <img class="img" src="./images/service-img1.png" alt="">
        </div>
      </div>
      <div class="module module4">
        <div class="left">
          <div class="title">技术研发</div>
          <div class="text">根据系统的需求和设计，组织开发人员进行系统的代码编写，开发过程中根据需求对设计进行细节的调整。</div>
          <div class="btn">下一步</div>
        </div>
        <div class="right">
          <img class="img" src="./images/service-img1.png" alt="">
        </div>
      </div>
      <div class="module module5">
        <div class="left">
          <div class="title">测试反馈</div>
          <div class="text">测试编写好的系统。交给用户使用，用户使用后一个一个的确认每个功能。</div>
          <div class="btn">下一步</div>
        </div>
        <div class="right">
          <img class="img" src="./images/service-img1.png" alt="">
        </div>
      </div>
      <div class="module module6">
        <div class="left">
          <div class="title">交付上线</div>
          <div class="text">在软件测试证明软件达到要求后，对客户进行一对一的培训交付使用。</div>
<!--          <div class="btn">下一步</div>-->
        </div>
        <div class="right">
          <img class="img" src="./images/service-img1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Layout from "../../components/Layout"
  import $ from 'jquery'

  export default {
    name: "Service",
    data(){
      return{
        index:1,
        module2Top:'',
        module3Top:'',
        module4Top:'',
        module5Top:'',
        module6Top:''
      }
    },
    components:{
      Layout
    },
    mounted() {
      this.$nextTick(()=>{
          this.getOffsetTop()
          this.onSroll()
      })
    },
    methods:{
      getOffsetTop(){
        this.module2Top=$('.module2').offset().top-$('.module2').height()
        this.module3Top=$('.module3').offset().top-$('.module3').height()
        this.module4Top=$('.module4').offset().top-$('.module4').height()
        this.module5Top=$('.module5').offset().top-$('.module5').height()
        this.module6Top=$('.module6').offset().top-$('.module6').height()
      },
      onSroll(){
        $(window).scroll(()=> {
          let wtop=$(window).scrollTop()
          if (wtop<this.module2Top){
            this.index=1
          }else if (this.module2Top<wtop && wtop<this.module3Top){
            this.index=2
          }else if (this.module3Top<wtop && wtop<this.module4Top){
            this.index=3
          }else if (this.module4Top<wtop && wtop<this.module5Top){
            this.index=4
          }else if (this.module5Top<wtop && wtop<this.module6Top){
            this.index=5
          }else if(this.module6Top<wtop){
            this.index=6
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('./less/service');
</style>
