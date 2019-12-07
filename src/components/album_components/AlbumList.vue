<template>
  <div class="album-list-wrapper">
    <div v-bind:key="album.id" v-for="album in albums">
        <AlbumCard v-bind:album="album"/>
    </div>
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard"
export default {
  name: "AlbumList",
  props: ["albums"],
  components: {
      AlbumCard
  }
};
</script>
