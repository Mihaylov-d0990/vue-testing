<template>
    <Counter />
    <UserList />
    <ToDoList />
</template>

<script>
    import UserList from './components/UserList/UserList.vue'
    import ToDoList from './components/ToDoList/ToDoList.vue'
    import Counter from './components/Counter/Counter.vue'

    export default {
        name: 'App',
        components: {
            UserList,
            ToDoList,
            Counter
        }
    }
</script>
