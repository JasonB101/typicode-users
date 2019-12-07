<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header
  },
  
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
