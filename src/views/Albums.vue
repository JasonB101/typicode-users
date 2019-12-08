<template>
  <div>
    
    <div id="nav">
      <router-link to="/users">Users</router-link> >
      <router-link to="/albums">Albums</router-link>
    </div>
    <TitleBar :title="titleBar"/>
    <AlbumList :albums="filteredAlbums" :photos="photos"/>
  </div>
</template>

<script>
import AlbumList from "../components/album_components/AlbumList";
import TitleBar from "../components/layout/TitleBar"

export default {
  name: "Albums",
  props: ["albums", "selectedUser", "photos"],
  components: {
    AlbumList,
    TitleBar
  },
  computed: {
    filteredAlbums: function() {
      const newAlbums = this.albums.filter(album => album.userId === this.selectedUser.id);
      return newAlbums.length === 0 ? this.albums : newAlbums;
    },
    titleBar: function() {
      return this.selectedUser ? `${this.selectedUser.name}'s Albums` : "All User's Albums"
    }
  }
};
</script>

<style scoped>
</style>
