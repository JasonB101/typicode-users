<template>
  <div class="album-card-wrapper">
    <router-link :to="{ path: `albums/${this.album.id}/photos/`}">
      <img :src="this.albumPhoto" alt="Users first found photo">
      <div class="spacer"></div>
      <h5>{{`${album.title.substr(0, 20)}...`}}</h5>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AlbumCard',
  props: ['album', 'albumPhoto'],
  
};
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  height: 200px;
  margin: 15px;
  padding: 5px;
  cursor: pointer;
}
img {
  width: 90%;
}
h5 {
  text-align: center;
}
</style>
