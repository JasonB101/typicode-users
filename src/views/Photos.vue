<template>
  <div>
    <div id="nav">
      <router-link to="/users">Users</router-link> -
      <router-link to="/albums">Albums</router-link> - 
      <a class="photos-atag">Photos</a>
    </div>
    <PhotoList :photos="filteredPhotos"/>
  </div>
</template>

<script>
import PhotoList from "../components/photo_components/PhotoList";

export default {
  name: "Photos",
  props: ["photos", "albumId"],
  components: {
    PhotoList
  },
  computed: {
    filteredPhotos: function() {
      return this.photos.filter(photo => photo.albumId === +this.albumId);
    }
  }
};
</script>

<style scoped>
.photos-atag {
  color:  #42b983;
}
</style>
