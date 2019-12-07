<template>
  <div class="user-list-wrapper">
    <div :key="user.id" v-for="user in users">
      <UserCard :user="user" 
                :userPhoto="findUserPhoto(user.id)"
                />
    </div>
  </div>
</template>

<script>
import UserCard from "./UserCard";

export default {
  name: "UserList",
  props: ["users", "photos", "albums"],
  components: {
    UserCard
  },
  methods: {
    findUserPhoto: function(userId) {
      const album = this.$props.albums.find(x => x.userId === userId) || {};
      const photo = this.$props.photos.find(x => x.albumId === album.id);
      return (
        photo ? photo.url :
        "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/3C/52/af8ba3d3-bf7c-424c-93c3-7bcde9c77b29.jpg"
      );
    }
  }
};
</script>

<style scoped>
.user-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
</style>
