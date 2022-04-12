<template>
    <div class="calculator block">
        <div class="container">
            <div class="calculator__content content">
                <div class="calculator__title title" @click="seen = !seen">Calculator</div>
                <div class="calculator__form" v-if="seen">
                    <calc-input 
                        @input-handler="inputHandler" 
                        :modelValue="inputValue" 
                    />
                    <div class="calculator__buttons">
                        <calc-button
                            v-for="item in buttons"
                            :key="item"
                            :text="item"
                            @click="addValue(item)"
                        />
                        <calc-button :text="'='" @click="calc" />
                        <calc-button :text="'←'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalcButton from "./CalcButton"
import CalcInput from "./CalcInput"
const calculateString = require('calculate-string')
export default {
    name: 'calculator-component',
    data () {
        return {
            seen: true,
            buttons: ["1", "2", "3", "+", 
                "4", "5", "6", "-", 
                "7", "8", "9", "*",
                "0", "/"],
            inputValue: ""
        }
    },
    methods: {
        inputHandler(event) {
            this.inputValue = event.target.value
        },
        addValue(value) {
            this.inputValue += value
        },
        calc() {
            this.inputValue = calculateString(this.inputValue)
        }
    },
    components: { CalcButton, CalcInput }
}
</script>

        CalcButton
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
