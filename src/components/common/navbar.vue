<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
    <el-menu-item index="home" route="/home">
     Inicio
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">Opções</template>
      <el-menu-item index="board" route="/board">Quadros</el-menu-item>
      <el-menu-item index="2-2">Estatistica</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" route="/tasks">
      Tarefas
    </el-menu-item>
  </el-menu>
</template>

<script>

  export default {
    name: 'navbar',
     data() {
      return {
        activeIndex: 'home'
      }
    }
  }
</script>