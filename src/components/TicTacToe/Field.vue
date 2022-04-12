<template>
    <div class="tictactoe__field">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: 'tictactoe-field'
}
</script>

<style scoped>
    .tictactoe__field {
        font-size: 1.5em;
        border: 1px solid #dddddd;
        background-color: #f7f7f7;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>