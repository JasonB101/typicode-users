<template>
    <div class="title-wrapper">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    name: "TitleBar",
    props: ["title"]
}
</script>

<style scoped>
.title-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    color: rgb(58, 58, 58);
    padding-bottom: 20px;
}
</style>
