<template>
    <input type="text" class="calculator__input" :value="modelValue" @input="$emit('inputHandler', $event)" />
</template>

<script>
export default {
    name: 'calc-input',
    props: {
        modelValue: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .calculator__input {
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        border-radius: 5px;
        outline: none;
        padding: 9px 10px;
        font-size: 13px;
        line-height: 15px;
        width: calc(4*35px + 3 * 3px);
    }
</style>
