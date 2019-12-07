<template>
  <div>
    <UserList 
    v-bind:users='users'
    v-bind:albums='albums'
    v-bind:photos='photos'
    />
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
