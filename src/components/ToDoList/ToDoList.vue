<template>
    <div class="to-do-list block">
        <div class="container">
            <div class="to-do-list__content content">
                <div class="to-do-list__title title" @click="seen = !seen">To do list</div>
                <ListControl :addNewIssue="addNewIssue" v-if="seen" />
                <div className="to-do-list__list" v-if="seen">
                    <ListItem v-for="(el, index) in arr" :key="el.id" :item="el.content" @deleteIssue="arr.splice(index, 1)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue'
    import ListControl from './ListControl.vue'
    export default {
        name: 'ToDoList',
        data () {
            return {
                arr: [
                    {
                        id: 0,
                        content: 'Content 0'
                    },
                    {
                        id: 1,
                        content: 'Content 1'
                    },
                    {
                        id: 2,
                        content: 'Content 2'
                    }
                ],
                newItem: 'text',
                seen: false
            }
        },
        methods: {
            addNewIssue (text) {
                const newId = this.arr && this.arr.length !== 0
                ? this.arr.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id + 1
                : 0
                if (text && !isNaN(newId)) {
                    this.arr.push({
                        id: newId,
                        content: text
                    })
                }
            }
        },
        components: {
            ListItem,
            ListControl
        }
    }
</script>

<style>
    .to-do-list__list {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 10px 20px;
        border-radius: 5px;
    }
</style>
