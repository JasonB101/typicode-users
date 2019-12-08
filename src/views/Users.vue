<template>
  <div>
    <div id="nav">
      <router-link to="/users">Users</router-link>
    </div>
    <UserList :users="users" :albums="albums" :photos="photos"/>
  </div>
</template>

<script>
import UserList from "../components/user_components/UserList";

export default {
  name: "Users",
  props: ["users", "albums", "photos"],
  components: {
    UserList
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
