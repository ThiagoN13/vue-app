<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in photos" :key="item">
      <img :src="item" class="item-carousel"/>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .item-carousel {
    width: 100%;
    height: 100%
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
        photos: [
          './src/assets/img/1.png',
          './src/assets/img/2.jpg',
          './src/assets/img/3.jpg',
          './src/assets/img/4.jpeg',
          './src/assets/img/5.jpg',
          './src/assets/img/6.jpg'
        ]
      }
    }
  }
</script>
