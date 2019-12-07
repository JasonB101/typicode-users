<template>
  <div class="wrapper">
    <h1>Typicode Users and Info</h1>
    <div class="spacer"></div>
    <div id="nav">
      <router-link to="/users">Users</router-link>|
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background: #666;
  height: 120px;
  text-align: center;
  padding: 15px;
  color: rgb(224, 224, 224);
}

a {
    font-size: 20px;
    text-decoration: none;
    margin: 20px;
    color: rgb(224, 224, 224);
    cursor: pointer;
}
</style>
