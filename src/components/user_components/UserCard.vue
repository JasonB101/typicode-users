<template>
  <div @click="setUser" class="user-card-wrapper">
    <router-link to="/albums" class="card-wrapper">
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
  width: 150px;
  height: 230px;
}
img {
  width: 90%;
  border-radius: 50%;
}
h3 {
  font-size: 24px;
  word-spacing: 150px;
  text-align: center;
}

@media (max-width: 1000px) {
  h3 {
    font-size: 20px;
  }
  a {
    height: 220px;
  }
}
</style>
