<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
      console.log("父组件")
    }
  }
</script>

<style scoped>

</style>
