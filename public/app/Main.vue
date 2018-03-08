<template>
  <div id="root">
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

    <el-footer class="footer">
      Footer
    </el-footer>
  </div>
</template>

<script>
  import navbar from '../components/common/navbar.vue'

  export default {
    name: 'Main',
    components: {
      navbar
    }
  }
</script>
