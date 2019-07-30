<template>
  <div>
    Home
    <div>
      {{t|formatDate}}
    </div>
    <Button>123</Button>
  </div>
</template>

<script>
  import { Button } from 'iview';
  import 'iview/dist/styles/iview.css'
  export default {
    name: "Home",
    data(){
      return{
        t:1547023368375
      }
    },
    components:{
      Button
    }
  }
</script>

<style lang="less" scoped>

</style>
