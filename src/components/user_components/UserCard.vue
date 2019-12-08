<template>
  <div @click="setUser" class="user-card-wrapper">
    <router-link to="/albums">
      <img :src="this.userPhoto" alt="Users first found photo">
      <div class="spacer"></div>
      <h3>{{user.name}}</h3>
    </router-link>
  </div>
</template>

<script>
import { EventBus } from "../eventBus";

export default {
  name: "UserCard",
  props: ["user", "userPhoto"],
  methods: {
    setUser() {
      EventBus.$emit("set-user", this.user);
    }
  }
};
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 250px;
  margin: 15px;
  padding: 5px;
  cursor: pointer;
}
img {
  width: 90%;
  border-radius: 50%;
}
h3 {
  word-spacing: 180px;
  text-align: center;
}
</style>
