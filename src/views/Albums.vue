<template>
  <div>
    <div id="nav">
      <router-link to="/users">Users</router-link> -
      <router-link to="/albums">Albums</router-link>
    </div>
    <AlbumList :albums="filteredAlbums" :photos="photos"/>
  </div>
</template>

<script>
import AlbumList from "../components/album_components/AlbumList";

export default {
  name: "Albums",
  props: ["albums", "selectedUser", "photos"],
  components: {
    AlbumList
  },
  computed: {
    filteredAlbums: function() {
      return this.albums.filter(album => album.userId === this.selectedUser);
    }
  }
};
</script>

<style scoped>
</style>
