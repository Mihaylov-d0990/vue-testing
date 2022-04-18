<template>
    <div class="chess block">
        <div class="container">
            <div class="chess__content content">
                <div class="chess__title title" @click="seen = !seen">Chess</div>
                <div class="chess__fields" v-if="seen">
                    <chess-field 
                        :class="[...displayAllowedMoves(field), 'chess__figure', 'chess__field']"
                        v-for="field in fields"
                        :key="field.id"
                        :field="field"
                        @click="displayFigure(field)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ChessField from "./ChessField"
import { createChessBoard, initializeFigures, WHITE, BLACK } from "./initialization"
import { move, getCheck } from "./movements"

export default {
    name: 'chess-component',
    data () {
        return {
            seen: true,
            turn: WHITE,
            check: -1,
            firstClick: null,
            allowedMoves: [],
            lastClick: null,
            fields: createChessBoard()
        }
    },
    mounted () {
        this.fields = initializeFigures(this.fields)
    },
    methods: {
        displayFigure(field) {
            if (!this.firstClick && field.figure) {
                if (this.turn === field.figure.color) {
                    this.allowedMoves = move(field, this.fields)
                    this.firstClick = field
                }
            } 
            else if (this.firstClick && !this.lastClick) this.lastClick = field
            if (this.firstClick && this.lastClick) {
                if (this.allowedMoves.includes(field.id)) {
                    this.fields[this.lastClick.id].figure = this.firstClick.figure
                    this.fields[this.firstClick.id].figure = null
                    this.turn = !this.turn
                    this.check = getCheck(this.fields, this.turn)
                }
                this.allowedMoves = []
                this.firstClick = this.lastClick = null
            }
        },
        displayAllowedMoves(field) {
            let styles = []
            if (this.allowedMoves.includes(field.id)) styles.push('chess__field_allowed')
            if (this.check === field.id) styles.push('chess__field_check')
            return styles
        }
    },
    components: { ChessField }
}
</script>

<style scoped>
    .chess__fields {
        align-self: center;
        display: grid;
        grid-template-columns: repeat(8, 50px);
        grid-template-rows: repeat(8, 50px);
    }

    .chess__field {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
    }

    .chess__field:nth-child(n + 1):nth-child(-n + 8):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 8):nth-child(-n + 16):nth-child(odd) {
      background-color: #727272; }

    .chess__field:nth-child(n + 17):nth-child(-n + 24):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 24):nth-child(-n + 32):nth-child(odd) {
      background-color: #727272; }

    .chess__field:nth-child(n + 33):nth-child(-n + 40):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 40):nth-child(-n + 48):nth-child(odd) {
      background-color: #727272; }

    .chess__field:nth-child(n + 49):nth-child(-n + 56):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 56):nth-child(-n + 64):nth-child(odd) {
      background-color: #727272; }

    .chess__field img {
        padding: 3px;
        object-fit: cover;
        object-position: 50% 50%;
        height: 100%;
    }

    .chess__figure {
        cursor: pointer;
    }

    .chess__field_allowed {
        background-color: #16b465 !important;
    }

    .chess__field_check {
        background-color: #c00d0d !important;
    }

</style>
