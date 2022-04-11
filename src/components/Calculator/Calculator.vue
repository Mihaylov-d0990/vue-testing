<template>
    <div class="calculator block">
        <div class="container">
            <div class="calculator__content content">
                <div class="calculator__title title" @click="seen = !seen">Calculator</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'calculator-component',
    data () {
        return {
            seen: false
        }
    }
}
</script>

<style>

</style>
