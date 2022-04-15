<template>
    <div class="chess block">
        <div class="container">
            <div class="chess__content content">
                <div class="chess__title title" @click="seen = !seen">Chess</div>
                <div class="chess__fields" v-if="seen">
                    <div
                        :class="['chess__field']"
                        v-for="field in fields"
                        :key="field.id"
                        @click="displayFigure(field.figure)"
                    >{{field.id}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'chess-component',
    data () {
        return {
            seen: true,
            fields: (() => {
                let arr = []
                for (let i = 0; i < 64; i++) {
                    arr.push({
                        id: i,
                        figure: null
                    })
                }
                return arr
            })()
        }
    },
    methods: {
        displayFigure(figure) {
            console.log(figure)
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
        border: 1px solid black;
        background-color: #ffffff;
    }

    .chess__field:nth-child(n + 1):nth-child(-n + 8):nth-child(even) {
      background-color: #000000; }

    .chess__field:nth-child(n + 8):nth-child(-n + 16):nth-child(odd) {
      background-color: #000000; }

    .chess__field:nth-child(n + 17):nth-child(-n + 24):nth-child(even) {
      background-color: #000000; }

    .chess__field:nth-child(n + 24):nth-child(-n + 32):nth-child(odd) {
      background-color: #000000; }

    .chess__field:nth-child(n + 33):nth-child(-n + 40):nth-child(even) {
      background-color: #000000; }

    .chess__field:nth-child(n + 40):nth-child(-n + 48):nth-child(odd) {
      background-color: #000000; }

    .chess__field:nth-child(n + 49):nth-child(-n + 56):nth-child(even) {
      background-color: #000000; }

    .chess__field:nth-child(n + 56):nth-child(-n + 64):nth-child(odd) {
      background-color: #000000; }

</style>
