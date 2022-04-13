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

const getWinner = (fieldsArray) => {
    let player = EMPTY_FIELD

    for (let i = 0; i < 3; i++) {
        if (player !== EMPTY_FIELD) return player
        for (let j = i * 3; j < (i + 1) * 3; j++) {
            if ((j === i * 3) && (fieldsArray[i * 3].value !== EMPTY_FIELD)) player = fieldsArray[j].value
            if ((j === i * 3) && (fieldsArray[i * 3].value === EMPTY_FIELD)) break
            if ((j !== i * 3) && (fieldsArray[j].value !== player)) {
                player = EMPTY_FIELD
                break
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        if (player !== EMPTY_FIELD) return player
        for (let j = i; j < 7 + i; j += 3){
            if ((j === i) && (fieldsArray[i].value !== EMPTY_FIELD)) player = fieldsArray[j].value
            if ((j === i) && (fieldsArray[i].value === EMPTY_FIELD)) break
            if ((j !== i) && (fieldsArray[j].value !== player)) {
                player = EMPTY_FIELD
                break
            }
        }
    }

    for (let i = 0; i < 9; i += 4) {
        if ((i === 0) && (fieldsArray[0].value !== EMPTY_FIELD)) player = fieldsArray[i].value
        if ((i === 0) && (fieldsArray[0].value === EMPTY_FIELD)) break
        if ((i !== 0) && (fieldsArray[i].value !== player)) {
            player = EMPTY_FIELD
            break
        }
    }

    for (let i = 2; i < 7; i += 2) {
        if ((i === 2) && (fieldsArray[2].value !== EMPTY_FIELD)) player = fieldsArray[i].value
        if ((i === 2) && (fieldsArray[2].value === EMPTY_FIELD)) break
        if ((i !== 2) && (fieldsArray[i].value !== player)) {
            player = EMPTY_FIELD
            break
        }
    }

    return player
}

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
            console.log(getWinner(this.fields))
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
</style>
