<template>
  <div id="app">
    <Header/>
    <router-view 
    :users="users" 
    :albums="albums" 
    :photos="photos"/>
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
     users: [],
     albums: [],
     photos: [],
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
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(result => (this.photos = result.data))
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getUsers();
    this.getAlbums();
    this.getPhotos();
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
