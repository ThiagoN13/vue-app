<template>
  <div id="home">
    <el-container>
      <el-col :xs="{span: 24}" :md="{span: 18, push:3}" :lg="{span: 17, push:3}">
      <carousel></carousel>

      <h1>Sobre o ToDo List</h1>

      <hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nisl in accumsan suscipit. 
        Duis nec commodo lectus. Nunc id laoreet ipsum. Proin aliquet non nisl ut porttitor. 
        Maecenas feugiat, odio id tincidunt pretium, sapien nisl accumsan felis, ut tristique ligula ipsum nec nunc. 
        Suspendisse aliquet, mauris vel convallis laoreet, justo augue fringilla nisl, id luctus elit odio et orci. 
        Sed dictum, justo consequat sodales tempor, odio felis porttitor purus, vel maximus neque arcu at ex. 
        Nam interdum purus nec ex sagittis tempus. Sed placerat nulla quis libero fringilla, ut porttitor ante placerat.
      </p>
      <p>
        In ut odio ac neque ullamcorper efficitur. Aliquam ultrices velit ac nulla ultrices blandit. 
        Nulla in ligula vel tortor ultrices vehicula dignissim at elit. Nullam ipsum magna, sagittis ut iaculis at, 
        faucibus eget lorem. Phasellus consequat pharetra imperdiet. Integer ac est vitae tellus malesuada mollis ut et tellus. 
        Suspendisse viverra nulla at ex rutrum condimentum.
      </p>
      <p>
        Vivamus quis nibh ut sapien vehicula imperdiet. Phasellus sit amet finibus massa. 
        Maecenas vehicula ex nibh, tincidunt eleifend augue euismod vel. Vestibulum molestie pellentesque urna, 
        at placerat urna rhoncus sit amet. In hendrerit nisl at elit rutrum, sit amet auctor sapien sodales. 
        Donec nec accumsan orci, a facilisis sapien. Donec pharetra dui magna, vel ultrices diam feugiat vitae. 
        Phasellus euismod pharetra massa a congue. Morbi id nunc laoreet, fringilla neque non, rutrum ligula.
      </p>
      </el-col>
    </el-container>
  </div>
</template>

<script>
  import carousel from '../../components/home/carousel'

  export default {
    name: 'home',
    components: {
      carousel
    }
  }
</script>
