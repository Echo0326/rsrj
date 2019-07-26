<template>
  <div>
    <Button @click="gotoparams">测试params</Button>
    <span class="fa fa-address-book"></span>
  </div>
</template>

<script>
  import {Button} from 'element-ui'
  import {reqSign_get} from "../../api"

  export default {
    name: "params",
    components:{
      Button
    },
    mounted(){
      reqSign_get()
      console.log("子组件")
    },
    methods:{
      gotoparams(){
        this.$router.push({name:'element',params:{name:'Echo',age:25}})
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
