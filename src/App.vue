<template>
    <counter-component />
    <user-list />
    <to-do-list />
    <calculator-component />
    <tictactoe-component />
</template>

<script>
    import UserList from '@/components/UserList/UserList'
    import ToDoList from '@/components/ToDoList/ToDoList'
    import CounterComponent from '@/components/Counter/Counter'
    import CalculatorComponent from '@/components/Calculator/Calculator'
    import TictactoeComponent from '@/components/TicTacToe/TicTacToe'
    import TicTacToe from './components/TicTacToe/TicTacToe.vue'

    export default {
        name: 'App',
        components: {
            UserList,
            ToDoList,
            CounterComponent,
            CalculatorComponent,
            TictactoeComponent
        }
    }
</script>
