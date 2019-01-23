<template>
  <div class="addPost">
    <form @submit="addPost">
      <div class="title">
        <input type="text" v-model="newPost.title" name="title" placeholder="제목을입력하세요" required/> 
      </div>
      <div class="contentBox">
        <textarea class="content" v-model="newPost.content" name="content" placeholder="내용" wrap="physical" required/> 
      </div>
      <div class="author">
        <input type="text" v-model="newPost.author" name="author" placeholder="작성자" required/> 
      </div>
      <button @click="addPost">작성</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addPost',
  data () {
    return {
      newPost: {
        title:'',
        content:'',
        author:'',
        like:0
      }
    }
  },
  methods: {
    addPost(e) {
      e.preventDefault()
      if(this.newPost.title && this.newPost.content && this.newPost.author ){
        this.$store.dispatch('addPost', this.newPost)
        .then(()=>{
          this.$router.push({ path: '/' })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .addPost{
    max-width:1060px;
    min-width: 320px;
    margin:50px auto;

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
  @media (max-width: 760px) {
    .addPost{
      margin:1rem auto;
    }
  }
</style>