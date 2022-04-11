<template>
    <div className="to-do-list__control">
        <div className="to-do-list__new-item">
            <input className="to-do-list__new-item-input" type="text" v-model="this.text" />
            <button className="to-do-list__new-item-add" @click="addNewIssue(text)">Add new issue</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list-control',
        props: {
            addNewIssue: { type: Function }
        },
        data () {
            return {
                text: ''
            }
        }
    }
</script>

<style>
    .to-do-list__new-item {
        display: flex;
        column-gap: 20px;
    }

    .to-do-list__new-item-input {
        box-sizing: border-box;
        outline: none;
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 1em;
        flex-grow: 1;
    }

    .to-do-list__new-item-add {
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 1em;
        cursor: pointer;
        transition: 0.3s;
        user-select: none;
    }

    .to-do-list__new-item-add:hover {
        background-color: darken(#f7f7f7, 3);
    }
</style>
