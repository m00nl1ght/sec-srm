<template>
    <div
        :id="col"
        @click="onClick($event)"
        :class="{active: isActive}">
    </div>
</template>

<script>
export default {
    props: ['col', 'row', 'checkedItems'],

    data: () => ({
        isActive: false,
    }),

    methods: {
        onClick(event) {
            this.isActive = !this.isActive
            this.$emit('onChange', this.row + '_' + this.col)
        }
    },

    mounted() {
        if(this.checkedItems && this.checkedItems.indexOf(this.col + '_' + this.row) != -1) {
            this.isActive = true
        }
    }
}
</script>
