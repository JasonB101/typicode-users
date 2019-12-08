<template>
  <div class="album-card-wrapper">
    <router-link :to="{ path: `albums/${this.album.id}/photos/`}" class="card-wrapper">
      <img :src="this.albumPhoto" alt="Users first found photo">
      <div class="spacer"></div>
      <h3>{{`${album.title.substr(0, 20)}...`}}</h3>
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
  width: 140px;
  height: 160px;

}
img {
  width: 90%;
}
h3 {
  font-size: 14px;
  text-align: center;
}
</style>
