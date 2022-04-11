<template>
    <counter-component />
    <user-list />
    <to-do-list />
    <calculator-component />
</template>

<script>
    import UserList from '@/components/UserList/UserList'
    import ToDoList from '@/components/ToDoList/ToDoList'
    import CounterComponent from '@/components/Counter/Counter'
    import CalculatorComponent from '@/components/Calculator/Calculator'

    export default {
        name: 'App',
        components: {
            UserList,
            ToDoList,
            CounterComponent,
            CalculatorComponent
        }
    }
</script>
