import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      background: null,
      tags: [],
      photos: []
  },
  mutations: {
    setBackground (state,background ) {
        state.background=background
    },
    setTags(state,tags) {
        state.tags=tags
    },
    setPhotos(state,photos) {
        state.photos = photos
    },
    setSearchPhotos(state, photos){
        state.photos = photos
    }
  },
  getters: {
  },
  actions: {
    getBackground({commit}) {
      fetch(`https://source.unsplash.com/1600x900`).then((response) => {
          commit('setBackground',response.url) 
      })
      .catch(e => {
          console.log(e)
      })
  },
    getTags ({commit}){
      const clientId = ''
      axios.get(`https://api.unsplash.com/topics?client_id=`+clientId`&order_by=featured`).then((response) => {
      commit('setTags',response.data)
      console.log(this.tags)
      })
    },
    getPhotos({commit},q) {
    const clientId = ''
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=200&query=`+q+`&client_id=`+clientId )
    .then(response => {
        commit('setPhotos',response.data.results)
    })
    .catch(e => {
      console.log(e)
    })
    console.log(this.response)
   },
   searchPhotos({commit},q) {
    const clientId = ''
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=200&query=`+q+`&client_id=`+clientId )
    .then(response => {
        commit('setSearchPhotos',response.data.results) 
    })
    .catch(e => {
      console.log(e)
    })
  }
}
})