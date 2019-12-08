<template>
  <div class="photo-list-wrapper list">
    <div :key="photo.id" v-for="photo in photos">
        <PhotoCard :photo="photo"/>
    </div>
  </div>
</template>

<script>
import PhotoCard from "./PhotoCard"
export default {
  name: "PhotoList",
  props: ["photos"],
  components: {
      PhotoCard
  }
};
</script>


