<template>
    <div class="counter">
        <p>{{message}}</p>
        <input type="text" v-model="message">
    </div>
</template>

<script>

export default {
        name: 'App',
        data () {
            return { message: 'Hello Danila!' }
        }
    }
</script>

<style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
</style>
