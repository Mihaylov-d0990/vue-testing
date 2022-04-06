<template>
    <div className="user-list block">
        <div className="container">
            <div className="user-list__content content">
                <div className="user-list__title title" v-on:click="seen = !seen" >User list</div>
                <div v-if="seen" className="user-list__list">
                   <ListItem v-for="el in arr" v-bind:key="el" v-bind:item="el"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue'
    export default {
        name: 'App',
        data () {
            return {
                arr: [],
                seen: false
            }
        },
        mounted () {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => { this.arr = data })
        },
        components: {
            ListItem
        }
    }
</script>

<style>
    .user-list__list {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 10px 20px;
        border-radius: 5px;
    }
</style>
