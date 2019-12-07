<template>
  <div>
    <UserList v-bind:users='users'/>
  </div>
</template>

<script>
import UserList from "../components/user_components/UserList";

export default {
  name: "Users",
  props: ['users', 'albums', 'photos'],
  components: {
      UserList
  },
  
  
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
