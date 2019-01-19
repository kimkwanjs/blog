import Vuex from 'vuex'
import axios from 'axios'

const store = () => new Vuex.Store({
  state: {
    postLists : [],
    currentPost : []
  },
  mutations: {
    postListInit: (state , data) => {
      state.postLists = []
      for(let key in data){
        data[key].id = key
        state.postLists.unshift(data[key])
      }
    },
    addPost: (state , newPost) => {
      axios.post('https://vue-blog-83289.firebaseio.com/posts.json', newPost)
      .then(() => {
        state.postLists.unshift(newPost)
      })
      .then(()=>{
        axios.get('https://vue-blog-83289.firebaseio.com/posts.json').then((response) => {
          state.postLists = []
          for(let key in response.data){
            response.data[key].id = key
            state.postLists.unshift(response.data[key])
          }
        })
      })
    },
    getCurrentPost: (state, id) => {
      state.currentPost = state.postLists.filter(post => post.id === id)
    },
    deletePost: (state, id) => {
      state.postLists = state.postLists.filter(post => post.id !== id)
    }
  },
  actions:{
    postListInit: ({commit}) => {
      axios.get('https://vue-blog-83289.firebaseio.com/posts.json')
      .then((response) => {
        commit('postListInit' , response.data)
      })
    },
    addPost: ( {commit} , newPost ) => {
      commit('addPost' , newPost)
    },
    currentPost: ( {commit} , id ) => {
      commit('getCurrentPost' , id)
    },
    editPost: ( {} , data ) => {
      for(let key in data){
        axios.put('https://vue-blog-83289.firebaseio.com/posts/'+data[key].id+'.json', data[key]).then((response) => {
          console.log(response)
        }).catch((err) =>{
          console.log(err)
        })
      }
    },
    deletePost: ( {commit} , id ) => {
      axios.delete('https://vue-blog-83289.firebaseio.com/posts/'+id+'.json').then(() => {
        commit('deletePost' , id)
      }).catch((err) =>{
        console.log(err)
      })
    }
  },
})

export default store