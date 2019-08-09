<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    mounted () {
      // this.cale()
      // window.addEventListener('resize', this.cale.bind(this))
    },
    methods: {
      cale () {
        // const html = document.getElementsByTagName('html')[0];
        // const width = html.clientWidth;
        // // 规定当页面宽度为1280时，html字体大小为16，以这个规定为标准值，计算出页面宽度为其他值时html字体的大小
        // const fontSize = (12 / 375) * width;
        // // 监听页面的宽度，给html字体大小赋值
        // console.log(fontSize)
        // html.style.setProperty('--font-size', `${fontSize}px`);
      },
    }
  }
</script>

<style lang="scss">

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  a {
    color: #1890ff;
    outline: 0;
    text-decoration: none;
  }
  a:active {
    color: #096dd9;
  }

  #app {
    height: 100%;
  }

</style>
