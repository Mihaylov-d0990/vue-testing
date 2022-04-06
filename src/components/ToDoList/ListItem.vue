<template>
    <div className="to-do-list__item">
        <div className="to-do-list__data">{{item}}</div>
        <div className="to-do-list__delete" @click="$emit('deleteIssue')">X</div>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: ['item'],
        emits: ['deleteIssue']
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
        user-select: none;
    }
</style>
