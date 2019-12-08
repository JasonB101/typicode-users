<template>
  <div class="photo-card-wrapper">
    <!-- <router-link :to="{ path: `albums/${this.album.id}/photos/`}"> -->
      <img :src="this.photo.url" :alt="this.photo.id">
      <div class="spacer"></div>
      <h3>{{`${photo.title.substr(0, 20)}...`}}</h3>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: ['photo'],
  
};
</script>

<style scoped>
.photo-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 220px;
  margin: 15px;
  padding: 5px;
  cursor: pointer;
  color: #666;
}
img {
  width: 90%;
}
h3 {
  text-align: center;
}
</style>
