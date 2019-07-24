<template>
  <div>
    <Button @click="gotoparams">测试params</Button>
  </div>
</template>

<script>
  import {Button} from 'element-ui'
  export default {
    name: "params",
    components:{
      Button
    },
    mounted(){
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
