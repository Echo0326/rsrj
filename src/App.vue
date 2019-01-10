<template>
  <router-view></router-view>
</template>

<script>
  import {reqSign_get} from './api/index'
  import moment from 'moment'
export default {
  name: 'App',
  mounted(){
    reqSign_get()
  }
}
</script>

<style scoped>

</style>
