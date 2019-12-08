<template>
  <div class="photo-card-wrapper card-wrapper">
    <img :src="this.photo.url" :alt="this.photo.id">
    <h3>{{`${photo.title.substr(0, 20)}...`}}</h3>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: ["photo"]
};
</script>

<style scoped>
.photo-card-wrapper {
  width: 160px;
  height: 190px;
  cursor: default;
}
img {
  width: 90%;
}
h3 {
  font-size: 14px;
  text-align: center;
}
</style>
