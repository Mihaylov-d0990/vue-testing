<template>
    <div class="tictactoe block">
        <div class="container">
            <div class="tictactoe__content content">
                <div class="tictactoe__title title" @click="seen = !seen">TicTacToe</div>
                <div class="tictactoe__form" v-if="seen">
                    <div class="tictactoe__fields">
                        <tictactoe-field
                            v-for="field in fields"
                            :key="field.id"
                            @click="move(field.id)"
                        >
                            {{field.value}}
                        </tictactoe-field>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TictactoeField from "./Field"

const EMPTY_FIELD = ""
const CROSS_FIELD = "✕"
const ZERO_FIELD = "◯"

export default {
    name: 'tictactoe-component',
    data () {
        return {
            seen: true,
            turn: true,
            fields: (() => {
                const fieldsArray = []
                for (let i = 0; i < 9; i++) {
                    fieldsArray.push({
                        id: i,
                        value: EMPTY_FIELD
                    })
                }
                return fieldsArray
            })()
        }
    },
    methods: {
        move(id) {
            this.fields.forEach(el => {
                if (el.id === id && el.value === EMPTY_FIELD) {
                    el.value = this.turn ? CROSS_FIELD : ZERO_FIELD
                    this.turn = !this.turn
                }
            })
        }
    },
    components: { TictactoeField }
}
</script>

<style scoped>
    .tictactoe__fields {
        display: grid;
        grid-template-columns: repeat(3, 50px);
        grid-template-rows: repeat(3, 50px);
        grid-gap: 3px;        
    }

    .tictactoe__field {
        font-size: 1.5em;
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

</style>
