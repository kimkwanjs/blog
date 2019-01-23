<template>
  <div class="postList">
    <h1 class="pageTitle">목록</h1>
    <div class="postListContainer">
      <div class="postListBox" v-for="postList in postLists" :key="postList.id">
        <div class="postListTop">
          <div class="author">{{postList.author}}</div>
          <div class="likes">
            <span>
             <i class="far fa-heart"></i>
            </span>
            <span>
              {{postList.like}}
            </span>
          </div>
        </div>
        <div>
        <router-link v-bind:to="'/detailPost/' + postList.id">
          <h1 class="title">
            {{postList.title}}
          </h1>
         </router-link>
        </div>
        <hr/>
        <div class="content">
          {{postList.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'index',
  computed:{
    postLists(){
      return this.$store.state.postLists
    }
  }
}
</script>

<style lang="scss" scoped>
  .postList{
    max-width: 1060px;
    min-width: 320px;
    margin:0px auto;

    h1.pageTitle{
      margin-top:20px;
      padding:3% 0 1% 15px;
      color:#111;
    }

    .postListContainer{
      position: relative;
      display:flex;
      flex-wrap:wrap;
      

      .postListBox{
        position: relative;
        width:calc(25% - 10px);
        box-shadow: 0px 1px 3px #000;
        border-radius:10px;
        padding:15px;
        margin:5px;
        transition: all .3s linear;
        background:#fff;

        .postListTop{
          display: flex;
        }
        &:hover{
          transform: translateY(-2px);
          box-shadow: 0px 1px 2px orange;
        }
       
        .author{
          overflow: hidden;
          white-space: nowrap; 
          padding: 5px 0 ;
          flex: 1;
        }
        .likes{
          white-space: nowrap; 
          padding: 5px 0 ;
        }
        .title{
          overflow: hidden;
          white-space: nowrap; 
          width:100%;
        }

        .content{
          margin-top: 1.5rem;
          color: #5e5c15;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          word-wrap:break-word;
          line-height: 1.2em;
          height: 6em; 

        }
      }

      @media (max-width: 760px) {
        .postListBox{
          width:calc(50% - 10px)
        }
        
      }
    }
    @media (max-width: 760px) {
      .postListContainer{
        margin:0px auto;
      }
      h1.pageTitle{
        margin-top:0px;
        padding:1% 0;
        text-align: center;
      }
    }
  }
</style>
