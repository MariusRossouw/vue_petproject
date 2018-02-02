<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue'
  import Footer from './components/footer/Footer.vue'

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
    }
  }
</script>

<style>

</style>
