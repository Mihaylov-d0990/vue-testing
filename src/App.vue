<template>
    <counter-component />
    <user-list />
    <to-do-list />
    <calculator-component />
    <tictactoe-component />
    <chess-component />
</template>

<script>
    import UserList from '@/components/UserList/UserList'
    import ToDoList from '@/components/ToDoList/ToDoList'
    import CounterComponent from '@/components/Counter/Counter'
    import CalculatorComponent from '@/components/Calculator/Calculator'
    import TictactoeComponent from '@/components/TicTacToe/TicTacToe'
    import ChessComponent from '@/components/Chess/Chess'

    export default {
        name: 'App',
        components: {
            UserList,
            ToDoList,
            CounterComponent,
            CalculatorComponent,
            TictactoeComponent,
            ChessComponent
        }
    }
</script>
