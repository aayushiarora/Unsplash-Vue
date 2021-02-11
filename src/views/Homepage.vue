<template>
<div>
  <h2 class='search'>
    Search Images
  </h2>
  <img class="bg-image" :src="background" alt="background image" />
  <input id='search' v-model="search" class='search-bar' placeholder=' Type here to search'> 
  <button id='submit' class='search-button' v-on:click='searchTopic'>Search
  </button>
  <p style="font-size: 50px" class='recommend'>Recommended Topics</p>
  <div id="outer">
    <div class="inner">
      <div v-for="tag in tags" :key="tag.id">
        <button type='submit' class="msgBtn2">
          <router-link :to="tag.title">{{tag.title}}</router-link>
        </button>
       </div>
    </div>
  </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'Homepage',
  data () {
      return {
          search: null
      }
  },
  mounted () {
  this.$store.dispatch('getBackground')
  this.$store.dispatch('getTags')
  },
  computed:{
    background () {
      return this.$store.state.background
    },
    tags () {
      return this.$store.state.tags

    }
  },
  methods: {
    searchTopic () {
      this.$router.push({name: '/search-results',params: {search: this.search}})
    }
}
}
</script>

<style>
#outer
{
    width:100%;
    text-align: center;
    justify-content: space-between;
    height: inherit;
  background: inherit;
  -webkit-background-clip: text;
          background-clip: text;
  color: white;
  filter: invert(1) grayscale(1) contrast(9);
  font: 60 09vmin/00vh cookie, cursive;
  text-align: center;
}
.inner
{
    display: inline-block;  
}
h2 {
  height: inherit;
  background: inherit;
  -webkit-background-clip: text;
          background-clip: text;
  color: white;
  filter: invert(1) grayscale(1) contrast(9);
  font: 90 09vmin/10vh cookie, cursive;
  text-align: center;
}
.recommended{
    height: inherit;
  background: inherit;
  -webkit-background-clip: text;
          background-clip: text;
  color: white;
  filter: invert(1) grayscale(1) contrast(9);
  font: 90 09vmin/10vh cookie, cursive;
  text-align: center;
}
.msgBtn2{
    width:200px;
    height:43px;
    background: white;
    border-radius: 9px;
    font-size: 22px;
}
.bg-image {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100vw;
  height: 100vh;
}
.search-bar{
    width: 750px;
    height: 45px;
    padding-right: 55px;
    font-size: 25px;
}
.search-button{
    height: 37px;
    width: 75px;
    margin-left: -82px;
    background: blue;
    border-radius: 7px;
    color: white
}
body {
  margin: 0;
  padding: 0;
}
</style>