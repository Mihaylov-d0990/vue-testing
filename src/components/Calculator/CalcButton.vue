<template>
    <button class="calculator__button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'calc-button'
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

    .calculator__button:hover {
        background-color: #ebe9e9;
    }
</style>