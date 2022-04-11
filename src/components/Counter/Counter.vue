<template>
    <div class="counter block">
        <div class="container">
            <div class="counter__content content">
                <div class="counter__title title" @click="seen = !seen">Counter</div>
                <div class="counter__control" v-if="seen">
                    <div class="counter__button" @click="count--">-</div>
                    <div class="counter__count">{{count}}</div>
                    <div class="counter__button" @click="count++">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'counter-component',
        data () {
            return {
                count: 0,
                seen: false
            }
        }
    }
</script>

<style>
    .counter__control {
        display: flex;
        align-items: center;
        column-gap: 20px;
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 10px 20px;
        border-radius: 5px;
    }

    .counter__button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        border: 1px solid #dddddd;
        user-select: none;
    }

    .counter__button:hover {
        background-color: #eeeeee;
    }

    .counter__count {
        user-select: none;
    }
</style>
