<template>
  <div>
    <UserList v-bind:users='users'/>
  </div>
</template>

<script>
import axios from "axios";
import UserList from "../components/UserComponents/UserList";

export default {
  name: "Users",
  components: {
      UserList
  },
  data() {
    return {
      users: [],
      albums: [],
      photos: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(result => (this.users = result.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
