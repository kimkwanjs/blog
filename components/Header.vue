<template>
  <div class="navBar">
    <div class="navContainer">
      <div class="logo">
        <router-link to="/">BLOG</router-link>
      </div>
      <div class="write">
        <router-link to="/AddPost"><i class="fas fa-edit"></i>글작성</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
}
</script>

<style lang="scss" scoped>
  .navBar{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    text-align:center;
    background:rgba(252, 252, 252, 0.815);
    z-index: 9999;
    border-bottom:1px solid #111;
    
    .navContainer{
      position: relative;
      max-width:1060px;
      height:80px;
      margin:0 auto;
      padding:0 1rem 0;
      display:flex;
      align-items:center;
      justify-content: space-between;

      .logo{
        font-weight:bold;

        a:hover{
          border-bottom:2px solid orange;
        }
      }

      .write{
        transition: .2s linear;

        a:hover{
          border-bottom:2px solid orange;
        }
      }
    }

  @media (max-width: 760px) {
    .navContainer{
      height:50px;
    }
  } 
}
</style>

