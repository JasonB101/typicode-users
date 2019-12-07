<template>
  <div class="user-card-wrapper">
    <img :src="this.userPhoto" alt="Users first found photo">
    <div class="spacer"></div>
    <h3>{{user.name}}</h3>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user", "userPhoto"],
};
</script>

<style scoped>
.user-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 250px;
  border: 1px dashed black;
  margin: 15px;
  padding: 5px;
}
img {
  width: 90%;
}
h3 {
  word-spacing: 180px;
  text-align: center;
}
</style>
