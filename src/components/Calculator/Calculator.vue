<template>
    <div class="calculator block">
        <div class="container">
            <div class="calculator__content content">
                <div class="calculator__title title" @click="seen = !seen">Calculator</div>
                <div class="calculator__form" v-if="seen">
                    <calc-input />
                    <div class="calculator__buttons">
                        <calc-button v-for="value in buttons" >{{value}}</calc-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalcButton from "./CalcButton"
import CalcInput from "./CalcInput"
export default {
    name: 'calculator-component',
    data () {
        return {
            seen: true,
            buttons: ["1", "2", "3", "+", 
                "4", "5", "6", "-", 
                "7", "8", "9", "*",
                "←", "0", "=", "/"]
        }
    },
    components: { CalcButton, CalcInput }
}
</script>

<style scoped>
    .calculator__form {
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: flex-start;
        row-gap: 3px;
    }

    .calculator__buttons {
        display: grid;
        grid-template-columns: repeat(4, 35px);
        grid-template-rows: repeat(4, 35px);
        grid-gap: 3px;
    }
</style>
