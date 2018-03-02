<template>
  <div id="title">
    <h1>{{ title }}</h1>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/root/navbar.vue'

  export default {
    components: {
      navbar
    },
    data () {
      return {
        title: 'My first app with vue'
      }
    }
  }
</script>
