<template>
  <div class="albums-list-wrapper list">
    <div :key="album.id" v-for="album in albums">
        <AlbumCard :album="album" :albumPhoto="findAlbumPhoto(album.id)"/>
    </div>
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard"
export default {
  name: "AlbumList",
  props: ["albums", "photos"],
  components: {
      AlbumCard
  },
  methods: {
    findAlbumPhoto: function(albumId) {
      const photo = this.$props.photos.find(x => x.albumId === albumId);
      return (
        photo ? photo.url :
        "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/3C/52/af8ba3d3-bf7c-424c-93c3-7bcde9c77b29.jpg"
      );
    }
  }
};
</script>

