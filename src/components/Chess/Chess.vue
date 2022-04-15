<template>
    <div class="chess block">
        <div class="container">
            <div class="chess__content content">
                <div class="chess__title title" @click="seen = !seen">Chess</div>
                <div class="chess__fields" v-if="seen">
                    <div
                        :class="['chess__figure', 'chess__field']"
                        v-for="field in fields"
                        :key="field.id"
                        @click="displayFigure(field)"
                    >
                        <img v-if="field.figure" :src="field.figure.image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createChessBoard, initializeFigures, WHITE, BLACK } from "./initialization"



export default {
    name: 'chess-component',
    data () {
        return {
            seen: true,
            turn: WHITE,
            firstClick: null,
            lastClick: null,
            fields: createChessBoard()
        }
    },
    mounted () {
        this.fields = initializeFigures(this.fields)
    },
    methods: {
        displayFigure(field) {
            if (!this.firstClick && field.figure) this.firstClick = field
            else if (this.firstClick && !this.lastClick) this.lastClick = field
            if (this.firstClick && this.lastClick) {
                this.fields[this.lastClick.id].figure = this.firstClick.figure
                this.fields[this.firstClick.id].figure = null
                this.firstClick = this.lastClick = null
            }
        }
    }
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

</style>
