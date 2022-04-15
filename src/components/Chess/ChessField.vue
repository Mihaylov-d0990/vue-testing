<template>
    <div>
        <img v-if="field.figure" :src="field.figure.image" :alt="field.priority">
    </div>
</template>

<script>

export default {
    name: 'chess-field',
    props: {
        field: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .chess__field {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
    }

    .chess__field:nth-child(n + 1):nth-child(-n + 8):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 8):nth-child(-n + 16):nth-child(odd) {
      background-color: #727272; }

    .chess__field:nth-child(n + 17):nth-child(-n + 24):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 24):nth-child(-n + 32):nth-child(odd) {
      background-color: #727272; }

    .chess__field:nth-child(n + 33):nth-child(-n + 40):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 40):nth-child(-n + 48):nth-child(odd) {
      background-color: #727272; }

    .chess__field:nth-child(n + 49):nth-child(-n + 56):nth-child(even) {
      background-color: #727272; }

    .chess__field:nth-child(n + 56):nth-child(-n + 64):nth-child(odd) {
      background-color: #727272; }

    .chess__field img {
        padding: 3px;
        object-fit: cover;
        object-position: 50% 50%;
        height: 100%;
    }

    .chess__figure {
        cursor: pointer;
    }

    .chess__field_allowed {
        background-color: #16b465 !important;
    }

</style>
