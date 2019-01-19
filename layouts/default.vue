<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  created(){
    this.$store.dispatch('postListInit')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');
$baseTxtColor : #000;

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  font-family: 'Noto Sans KR', sans-serif;
  padding-top:50px;
  color:$baseTxtColor;
  background:#eee;
}
*,
*:before,
*:after {
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration:none;
  color:$baseTxtColor;
}
</style>
