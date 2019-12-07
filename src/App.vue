<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
import axios from "axios";
export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      userList: []
    };
  },
  created() {
    console.log("created");
  },
  getUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(result => this.userList = result.data)
    .catch(err => console.log(err))
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

.spacer {
  flex: 1;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
