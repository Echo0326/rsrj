<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/header/Header"
  import Footer from './components/footer/Footer'
  export default {
    name: 'App',
    components:{
      Header,
      Footer
    },
  }
</script>

<style scoped>

</style>
