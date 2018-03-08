<template>
  <div id="root">
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/common/navbar.vue'

  export default {
    components: {
      navbar
    }
  }
</script>
