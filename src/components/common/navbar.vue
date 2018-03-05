<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
    <el-menu-item index="1" route="/home">
     Inicio
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" route="/tasks">
      Tarefas
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'navbar',
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    }
  }
</script>