<template>
  <div id="app">
    <Header/>
    <router-view
      :users="users"
      :albums="albums"
      :photos="photos"
      :selectedUser="selectedUser"
      v-on:set-user="setUser"
    />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import axios from "axios";
import { EventBus } from "./components/eventBus";

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      users: [],
      albums: [],
      photos: [],
      selectedUser: ""
    };
  },
  methods: {
    getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(result => (this.users = result.data))
        .catch(err => console.log(err));
    },

    getAlbums() {
      axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then(result => (this.albums = result.data))
        .catch(err => console.log(err));
    },

    getPhotos() {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then(result => (this.photos = result.data))
        .catch(err => console.log(err));
    },

    setUser(userId) {
      this.selectedUser = userId;
    }
  },
  created() {
    this.getUsers();
    this.getAlbums();
    this.getPhotos();
    
    EventBus.$on("set-user", userId => {
        this.selectedUser = userId;
      })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  font-size: 24px;
}

.spacer {
  flex: 1;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
