<template>
    <div>
       <h3>{{`${album.title.substr(0, 20)}...`}}</h3>
    </div>
</template>

<script>
export default {
    name: 'AlbumCard',
    props: ['album']
}
</script>

<style scoped>

</style>
