<template>
    <div className="to-do-list__item">
        <div className="to-do-list__data">{{item.content}}</div>
        <div className="to-do-list__delete" v-on:click="deleteIssue(item.id)">X</div>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: {
            item: { type: Object },
            deleteIssue: { type: Function }
        },
        methods: {
            showId (id) {
                console.log(id)
            }
        }
    }
</script>

<style>
    .to-do-list__item {
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 10px 20px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
    }

    .to-do-list__delete {
        color: #c90606;
        cursor: pointer;
        font-weight: 600;
    }
</style>
