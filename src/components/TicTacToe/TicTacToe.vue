<template>
    <div class="tictactoe block">
        <div class="container">
            <div class="tictactoe__content content">
                <div class="tictactoe__title title" @click="seen = !seen">TicTacToe</div>
                <div class="tictactoe__form" v-if="seen">
                    <div
                        class="tictactoe__field"
                        v-for="field in fields"
                        :key="field.id"
                    >{{field.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'tictactoe-component',
    data () {
        return {
            seen: true,
            fields: (() => {
                const fieldsArray = []
                for (let i = 0; i < 9; i++) {
                    fieldsArray.push({
                        id: i,
                        name: `field ${i}`
                    })
                }
                return fieldsArray
            })()
        }
    }
}
</script>

<style scoped>
</style>
