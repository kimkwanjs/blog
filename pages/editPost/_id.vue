<template>
  <div class="editPost">
    <div class="editPostContainer" v-for="current in currentPosts" v-bind:key="current.id">
      <form @submit="editPost">
        <div class="title">
          <input type="text" v-model="current.title" name="title" /> 
        </div>
        <div class="contentBox">
          <textarea class="content" v-model="current.content"  name="content" /> 
        </div>
        <div class="author">
          <input type="text" v-model="current.author" name="author" /> 
        </div>
        <button v-on:click="editPost">수정</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addPost',
  data(){
    return{
      currentPosts : []
    }
  },
  created(){
    this.currentPosts = this.$store.state.currentPost;
  },
  methods:{
    editPost(e){
      e.preventDefault()
      this.$store.dispatch('editPost', this.currentPosts)
        .then(()=>{
          this.$router.push({ path: '/' })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .editPost{
    max-width:1060px;
    min-width: 320px;
    margin:50px auto;
    padding:1rem;
    label{
      display: block;
    }
    input{
      outline: none;
      border: none;
      font-size:2rem;
      background: transparent;
      flex:1;
    }
    textarea{
      outline: none;
      border: none;
      font-size:2rem;
      background: transparent;
      flex:1;
    }
    button{
      margin-top:10px;
      padding:3px;
    }
    .editPostContainer{

      .title{
      border-bottom:1px solid #000;
      padding:1rem;
      display:flex;
      }
      .contentBox{
        padding:1rem;
        border-bottom:1px solid #000;
        .content{
          width:100%;
          height:50vh;
        }
      }
      .author{
        width:20%;
        padding:1rem;
        border-bottom:1px solid #000;

        >input{
          font-size:0.8rem;
        }
      }
    }
  }
  @media (max-width: 760px) {
    .editPost{
      margin:1rem auto;
    }
  }
</style>