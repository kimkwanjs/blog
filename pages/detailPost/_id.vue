<template>
  <div class="detailPost">
    <div class="detailContainer" v-for="currentPost in currentPosts" :key="currentPost.id">
      <div class="author">
        작성자 - {{currentPost.author}}
      </div>
      <div class="title">
        <h1>
          {{currentPost.title}}
        </h1>
      </div>
      <div class="content"> 
        {{currentPost.content}}
      </div>

      <div class="detailToolBox">
        <router-link v-bind:to="'/editPost/' + currentPost.id">
          <span class="detailEdit">
            <i class="far fa-edit"></i> 수정
          </span>
        </router-link>
        <span @click="deletePost" class="detailRemove">
          <i class="far fa-trash-alt"></i> 삭제
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'detailPost',
  data(){
    return{
      id:this.$route.params.id,
    }
  },
  computed:{
    currentPosts(){
      return this.$store.state.currentPost;
    }
  },
  methods:{
    deletePost(){
      this.$store.dispatch('deletePost', this.id)
      .then(()=>{
          this.$router.push({ path: '/' })
        })
    }
  },
  created(){
    this.$store.dispatch('currentPost', this.id)
  },
  mounted(){
    if(this.currentPosts.length === 0){
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .detailPost{
    max-width: 1060px;
    min-width: 320px;
    margin:0px auto;
    
    .detailContainer{
      margin-top:50px; 

      .author{
        padding-left:1rem;
      }
      .title{
        border-bottom:1px solid #ccc;
        padding:1rem;
      }

      .content{
        padding:0rem 1rem;
        white-space:pre-line;
      }

      .detailToolBox{
        text-align:right;
        padding:5% 1%;
      }

      .detailRemove{
        cursor: pointer;
      }
    }
  }
</style>
