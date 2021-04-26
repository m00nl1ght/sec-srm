<template>
    <v-btn
        icon
        :color="colorBtn"
        @click="() => this.$emit('onClick')"
    >
        <v-icon>mdi-thumb-up</v-icon>
    </v-btn>
</template>

<script>

export default {
    props: ['color'],

    computed: {
        colorBtn() {
            return this.color ? this.color : 'deep-orange'
        }
    }
}
</script>