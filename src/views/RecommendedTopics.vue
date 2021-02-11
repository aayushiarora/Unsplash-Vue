<template>
  <div class='gallery'>
    <div v-for="photo in photos" :key="photo.id">
      <img class="image-list" width='290px' :src="photo.urls.thumb" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendedTopics',
  computed: {
    photos () {
      return this.$store.state.photos
    }
  },
  mounted () {
    const q = this.$route.params.id
    console.log(this.$route.params.id)
    this.$store.dispatch('getPhotos',q)
  }
}
</script>

<style>
.gallery {
  line-height: 10;
  -webkit-column-count: 5;
  -webkit-column-gap:   0px;
  -moz-column-count:    5;
  -moz-column-gap:      0px;
  column-count:         5;
  column-gap:           40px; 
}

.gallery img {
  width: 100% !important;
  height: auto !important;
}
@media (max-width: 800px) {
  #photos {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  #photos {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}
body {
  margin: 0;
  padding: 0;
}
</style>