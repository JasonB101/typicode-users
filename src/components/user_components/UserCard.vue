<template>
  <div class="user-card-wrapper">
    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt>
    <div class="spacer"></div>
    <h3>{{user.name}}</h3>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user"]
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
