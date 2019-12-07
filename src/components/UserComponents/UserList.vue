<template>
    <div class="user-list-wrapper">
        <div v-bind:key='user.id' v-for='user in users'>
            <UserCard v-bind:user='user' />
        </div>
    </div>
</template>

<script>
import UserCard from "./UserCard"

export default {
    name: 'UserList',
    props: ['users'],
    components: {
        UserCard
    }
}
</script>

<style scoped>
    .user-list-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }
</style>
