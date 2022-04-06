<template>
    <UserList />
    <ToDoList />
</template>

<script>
    import UserList from './components/UserList/UserList.vue'
    import ToDoList from './components/ToDoList/ToDoList.vue'

    export default {
        name: 'App',
        components: {
            UserList,
            ToDoList
        }
    }
</script>
