<template>
    <button class="calculator__button">
        {{text}}
    </button>
</template>

<script>
export default {
    name: 'calc-button',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .calculator__button {
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
    }

    .calculator__button:nth-child(18) {
        grid-row-start: 4;
        grid-row-end: 5;
        grid-column-start: 3;
        grid-column-end: 4;
    }

    .calculator__button:nth-child(4),
    .calculator__button:nth-child(8),
    .calculator__button:nth-child(19),
    .calculator__button:nth-child(12),
    .calculator__button:nth-child(15),
    .calculator__button:nth-child(16),
    .calculator__button:nth-child(17),
    .calculator__button:nth-child(19),
    .calculator__button:nth-child(20) {
        background-color: #eeeeee;
    }

    .calculator__button:hover {
        background-color: #ebe9e9;
    }
</style>