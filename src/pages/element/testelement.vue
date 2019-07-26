<template>
  <div>
    <InputNumber></InputNumber>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {InputNumber,Loading} from 'element-ui'
  export default {
    name: "testelement",
    components:{
      InputNumber
    },
    mounted(){
      console.log(this.$route.params)
      // this.$loading({
      //   lock: false,
      //   text: '努力加载中',
      //   spinner: 'el-icon-loading',
      //   customClass:'loading'
      // });
    }
  }
</script>

<style lang="less" scoped>
  .loading{
    font-size: 18px;
  }
</style>
