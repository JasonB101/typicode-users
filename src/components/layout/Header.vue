<template>
  <div class="wrapper">
    <h1>Typicode Users and Photos</h1>
    <div class="spacer"></div>
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
  background: rgb(53, 53, 53);
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

@media (max-width: 450px) {
  h1 {
    font-size: 26px;
  }
}
</style>
