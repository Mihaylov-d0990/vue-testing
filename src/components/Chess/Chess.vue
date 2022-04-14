<template>
    <div class="chess block">
        <div class="container">
            <div class="chess__content content">
                <div class="chess__title title" @click="seen = !seen">Chess</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'chess-component',
    data () {
        return {
            seen: true
        }
    }
}
</script>

<style scoped>

</style>
