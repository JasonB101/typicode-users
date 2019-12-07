<template>
    <div>
        <AlbumList v-bind:albums="albums" />
    </div>
</template>

<script>
import AlbumList from "../components/album_components/AlbumList"
export default {
    name: 'Albums',
    props: ['albums'],
    components: {
        AlbumList
    }
}
</script>

<style scoped>
    
</style>
